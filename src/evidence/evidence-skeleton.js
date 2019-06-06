import '@polymer/polymer/polymer-legacy.js';
import { PolymerElement, html } from '@polymer/polymer';
import 'd2l-colors/d2l-colors.js';

export class EvidenceSkeleton extends PolymerElement {

	static get is() {
		return 'd2l-evidence-skeleton';
	}

	static get template() {
		const template = html`
			<style>
				@keyframes body-pulse {
					from { background-color: var(--d2l-color-sylvite); }
					to { background-color: var(--d2l-color-regolith); }
				}
				
				@keyframes border-pulse {
					from { border-color: var(--d2l-color-gypsum); }
					to { border-color: var(--d2l-color-sylvite); }
				}
				
				.icon, .card-right, .card-top, .mini-icon, .line {
					animation-name: body-pulse;
					animation-duration: 0.9s;
					animation-direction: alternate;
					animation-iteration-count: infinite;
				}
				
				.skeleton {
					display: flex;
					height: 124px;
				}
				
				.timeline {
					flex-grow: 0;
					flex-shrink: 0;
				}
				
				.card {
					display: flex;
					flex-grow: 1;
					flex-shrink: 1;
					height: 100%;
					border-radius: 4px;
					padding: 17px 23px 20px 23px;
					box-sizing: border-box;
					border: 1px solid;
					animation-name: border-pulse;
					animation-duration: 0.9s;
					animation-direction: alternate;
					animation-iteration-count: infinite;
				}
				
				.icon {
					margin: 18px;
					width: 24px;
					height: 24px;
					border-radius: 4px;
				}
				
				.card-right {
					flex-grow: 0;
					flex-shrink: 0;
					border-radius: 50%;
					width: 24px;
					height: 24px;
				}
				
				.card-left {
					margin-top: 7px;
					margin-right: 37px;
					flex-grow: 1;
					flex-shrink: 1;
				}
				
				.card-top {
					margin-bottom: 26px;
					width: 38%;
					height: 14px;
					border-radius: 4px;
				}
				
				.card-bottom {
					display: flex;
				}
				
				.mini-icon {
					width: 15px;
					height: 15px;
					flex-grow: 0;
					flex-shrink: 0;
					border-radius: 4px;
				}
				
				.lines {
					margin-left: 15px;
					flex-grow: 1;
					flex-shrink: 1;
				}
				
				.line {
					width: 100%;
					height: 10px;
					margin-top: 4px;
					margin-bottom: 9px;
					border-radius: 4px;
				}
			</style>
			<div class="skeleton">
				<div class="timeline">
					<div class="icon"></div>
				</div>
				<div class="card">
					<div class="card-left">
						<div class="card-top"></div>
						<div class="card-bottom">
							<div class="mini-icon"></div>
							<div class="lines">
								<div class="line"></div>
								<div class="line"></div>
							</div>
						</div>
					</div>
					<div class="card-right"></div>
				</div>
			</div>
		`;
		template.setAttribute('strip-whitespace', true);
		return template;
	}

	static get properties() {
		return {};
	}

}

customElements.define(EvidenceSkeleton.is, EvidenceSkeleton);
