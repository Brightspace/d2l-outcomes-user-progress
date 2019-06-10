import '@polymer/polymer/polymer-legacy.js';
import { PolymerElement, html } from '@polymer/polymer';
import { mixinBehaviors } from '@polymer/polymer/lib/legacy/class.js';
import 'd2l-polymer-siren-behaviors/store/entity-behavior.js';
import 'd2l-colors/d2l-colors.js';
import 'd2l-typography/d2l-typography.js';
import * as hmConsts from 'd2l-hypermedia-constants';
import '../localize-behavior';
import './evidence-skeleton.js';
import './evidence-entry.js';

export class EvidenceList extends mixinBehaviors(
	[
		D2L.PolymerBehaviors.Siren.EntityBehavior,
		D2L.PolymerBehaviors.OutcomesUserProgress.LocalizeBehavior
	],
	PolymerElement
) {

	static get is() {
		return 'd2l-evidence-list';
	}

	static get template() {
		const template = html`
			<style include="d2l-typography">
				.no-evidence {
					border: 1px solid var(--d2l-color-gypsum);
					border-radius: 8px;
					background-color: var(--d2l-color-regolith);
					color: var(--d2l-color-ferrite);
					padding: 40px;
					box-sizing: border-box;
					width: 100%;
				}
			</style>
			<div aria-busy="[[!entity]]">
				<template is="dom-if" if="[[entity]]">
					<template is="dom-repeat" items="[[_evidence]]" as="info">
						<d2l-evidence-entry
							type="[[info.type]]"
							name="[[info.name]]"
							date="[[info.date]]"
							level-href="[[info.levelHref]]"
							token="[[token]]"
							last="[[info.isLast]]"
						></d2l-evidence-entry>
					</template>
					<div class="no-evidence" hidden="[[!_isEmpty(_evidence)]]">
						[[localize('noItemsFound')]]
					</div>
				</template>
				<template is="dom-if" if="[[!entity]]">
					<d2l-evidence-skeleton></d2l-evidence-skeleton>
				</template>
			</div>
		`;
		template.setAttribute('strip-whitespace', true);
		return template;
	}

	static get properties() {
		return {
			_evidence: {
				type: Array,
				computed: '_getEvidence(entity)'
			}
		};
	}

	_isEmpty(array) {
		return !array || !array.length;
	}

	_getEvidence(entity) {
		if (!entity) {
			return [];
		}

		let evidenceList = [];
		const activities = entity.getSubEntitiesByClass(hmConsts.Classes.userProgress.outcomes.activities);
		activities.forEach(activity => {
			const demonstrations = activity.getSubEntitiesByClasses([
				hmConsts.Classes.outcomes.demonstration,
				hmConsts.Classes.outcomes.assessed
			]);
			demonstrations.forEach(demonstration => {
				const level = demonstration.getSubEntityByClasses([
					hmConsts.Classes.outcomes.demonstratableLevel,
					hmConsts.Classes.outcomes.selected
				]);
				if (!level) {
					return;
				}
				const levelLink = level.getLink(hmConsts.Rels.Achievements.level);
				if (!levelLink || !levelLink.href) {
					return;
				}
				evidenceList.push({
					type: activity.properties.type,
					name: activity.properties.name,
					date: demonstration.properties.dateAssessed,
					levelHref: levelLink.href
				});
			});
		});

		evidenceList = evidenceList.sort((a, b) => {
			return new Date(a.assessmentDate).getTime() - new Date(b.assessmentDate).getTime();
		});

		if (evidenceList.length) {
			evidenceList[evidenceList.length - 1].isLast = true;
		}

		return evidenceList;
	}

}

customElements.define(EvidenceList.is, EvidenceList);
