import '@polymer/polymer/polymer-legacy.js';
import { PolymerElement, html } from '@polymer/polymer';
import { mixinBehaviors } from '@polymer/polymer/lib/legacy/class.js';
import 'd2l-typography/d2l-typography.js';
import 'd2l-typography/d2l-typography-shared-styles.js';
import '../localize-behavior';
import '../trend-behavior';

const BLOCK_SPACING = 2;        // Also defined in CSS
const COMPONENT_HEIGHT = 36;    // Also defined in CSS
const MAX_TREND_ITEMS = 6;

export class MiniTrend extends mixinBehaviors(
	[
		D2L.PolymerBehaviors.OutcomesUserProgress.LocalizeBehavior,
		D2L.PolymerBehaviors.OutcomesUserProgress.TrendBehavior
	],
	PolymerElement
) {
	static get is() { return 'd2l-mini-trend'; }

	static get template() {
		const template = html`
            <style include="d2l-typography">
                :host {
                    --block-spacing: 2px;
                    --border-radius: 2px;
					--container-height: 36px;
					--trend-group-width: 12px;

                    align-items: center;
                    display: inline-flex;
                    flex-direction: row;
					height: var(--container-height);
                }

                .trend-group {
                    display: flex;
                    flex-direction: column;
                    height: var(--container-height);
                    justify-content: flex-end;
                    padding-right: var(--block-spacing);
                    width: var(--trend-group-width);
                }

                .trend-group:last-of-type {
                    padding-right: 0px;
                }

                .trend-block {
                    margin-top: var(--block-spacing);
                }

                .trend-group .trend-block:first-of-type {
                    border-top-left-radius: var(--border-radius);
                    border-top-right-radius: var(--border-radius);
                    margin-top: 0px;
                }

                .trend-group .trend-block:last-of-type {
                    border-bottom-left-radius: var(--border-radius);
                    border-bottom-right-radius: var(--border-radius);
                }

                .empty-text {
                    @apply --d2l-body-small-text;
                }

                .screen-reader {
                    height: 1px;
                    left: -99999px;
                    overflow: hidden;
                    position: absolute;
                    width: 1px;
                }
            </style>
            <template is="dom-if" if="[[!_hasTrendData(trendDataTruncated)]]">
                <div class="empty-text">[[_getNotAssessedText()]]</div>
            </template>
            <template is="dom-if" if="[[_hasTrendData(trendDataTruncated)]]">
                <template is="dom-repeat" items="[[_getTrendItems(trendDataTruncated)]]" as="trendGroup">
                    <div class="trend-group">
                        <template is="dom-repeat" items="[[trendGroup.blocks]]" as="trendBlock">
                            <div class="trend-block" style$="height: [[trendBlock.height]]px; background-color: [[trendBlock.color]];"></div>
                        </template>
                    </div>
                </template>
                <p class="screen-reader">[[_getScreenReaderText(trendDataTruncated)]]</p>
            </template>
        `;
		template.setAttribute('strip-whitespace', true);
		return template;
	}

	static get properties() {
		return {
			trendDataTruncated: {
				type: Object,
				computed: '_truncTrendData(trendData)'
			}
		};
	}

	_getMaxLevelScore(levels) {
		return Math.max.apply(null, Object.keys(levels).map(levelId => levels[levelId].score));
	}

	_getNotAssessedText() {
		return this.localize('notAssessed');
	}

	_getScreenReaderText(trendData) {
		if (!trendData || !trendData.levels || !trendData.groups) {
			return null;
		}

		const levels = trendData.levels;
		const trendGroups = trendData.groups;

		const numAssessed = trendGroups.reduce((acc, group) => acc + group.attempts.length, 0);
		const levelNames = trendGroups.reduce((acc, group) => acc.concat(group.attempts.map(levelId => levels[levelId].name)), []).join(', ');

		return this.localize('miniTrendScreenReaderText', 'numAssessed', numAssessed, 'levelNames', levelNames);
	}

	_getTrendItems(trendData) {
		if (!trendData || !trendData.levels || !trendData.groups) {
			return [];
		}

		const levels = trendData.levels;
		const trendGroups = trendData.groups;
		const trendItems = [];
		const maxLevel = this._getMaxLevelScore(levels);

		trendGroups.forEach(group => {
			const blocks = [];
			const groupAttempts = group.attempts;
			const groupItem = {};

			// Compute levels achieved
			const groupLevels = groupAttempts
				.filter((val, index, self) => self.indexOf(val) === index)
				.sort((left, right) => levels[left].score - levels[right].score);
			const groupSize = groupLevels.length;

			// Add trend blocks to group
			let prevScore = 0;

			groupLevels.forEach(levelId => {
				const color = levels[levelId].color;
				const height = COMPONENT_HEIGHT / maxLevel * (levels[levelId].score - prevScore) - BLOCK_SPACING * (groupSize - 1) / groupSize;
				prevScore = levels[levelId].score;

				blocks.push({
					color,
					height
				});
			}, this);

			groupItem.blocks = blocks.reverse();

			trendItems.push(groupItem);
		}, this);

		return trendItems;
	}

	_hasTrendData(trendData) {
		const blockGroups = this._getTrendItems(trendData);
		const numBlocks = blockGroups.reduce((acc, group) => acc + group.blocks.length, 0);
		return numBlocks > 0;
	}

	_truncTrendData(trendData) {
		if (!trendData || !trendData.levels || !trendData.groups) {
			return null;
		}

		return {
			levels: trendData.levels,
			groups: trendData.groups.slice(-MAX_TREND_ITEMS)
		};
	}
}

customElements.define(MiniTrend.is, MiniTrend);