import '@polymer/polymer/polymer-legacy.js';
window.D2L = window.D2L || {};
window.D2L.PolymerBehaviors = window.D2L.PolymerBehaviors || {};
window.D2L.PolymerBehaviors.OutcomesUserProgress = window.D2L.PolymerBehaviors.OutcomesUserProgress || {};
window.D2L.PolymerBehaviors.OutcomesUserProgress.LocalizeBehavior = window.D2L.PolymerBehaviors.OutcomesUserProgress.LocalizeBehavior || {};
window.D2L.OutcomesUserProgress = window.D2L.OutcomesUserProgress || {};
window.D2L.OutcomesUserProgress.Language = window.D2L.OutcomesUserProgress.Language || {};
window.D2L.OutcomesUserProgress.Language.Da = {
	'a11yCollapsed': 'skjult',
	'a11yExpanded': 'udvidet',
	'bigTrendAttemptsScreenReaderString': '{numAttempts, plural, =1 {Forsøg {attemptNames}} other {Forsøg {attemptNames} og {lastAttemptName}}}',
	'bigTrendAttemptsTooltipString': '{numAttempts, plural, =1 {Forsøg} other {Forsøg}} {attemptNames}',
	'close': 'Luk',
	'evidence': 'Dokumentation',
	'headingDate': 'Dato',
	'headingEvidence': 'Dokumentationsnavn',
	'headingLoa': 'Gennemførelsesniveau',
	'miniTrendAttemptsTooltipString': '{numAttempts, plural, =1 {Forsøg} other {Forsøg}} {attemptNames}',
	'miniTrendScreenReaderText': 'Vurderet {numAssessed} {numAssessed, plural, =1 {gang} other {gange}}: {levelNames}',
	'nodeAriaTextGroup': 'Gruppe {state}',
	'nodeAriaTextLevel': 'Niveau {level}',
	'nodeAriaTextPosition': '{position} ud af {count}',
	'noEvidence': 'Dette {outcome, select, competencies {kompetence} expectations {forventning} objectives {mål} outcomes {resultat} standards {standard} other {standard}} er ikke blevet vurderet endnu',
	'noOutcomesInstructor': 'For at begynde at registrere gennemførelse for {outcome, select, competencies {kompetencer} expectations {forventninger} objectives {mål} outcomes {resultater} standards {standarder} other {standarder}}, skal du justere kursers {outcome, select, competencies {kompetencer} expectations {forventninger} objectives {mål} outcomes {resultater} standards {standarder} other {standarder}} efter vurderede aktiviteter.',
	'noOutcomesStudent': 'Ingen {outcome, select, competencies {kompetencer} expectations {forventninger} objectives {mål} outcomes {resultater} standards {standarder} other {standarder}} er blevet evalueret.',
	'noScaleInstructor': 'For at se elevens fremskridt mod gennemførelsen af {outcome, select, competencies {kompetence} expectations {forventning} objectives {mål} outcomes {resultater} standards {standard} other {standard}}, skal du oprette og vælge en gennemførelsesskala.',
	'noScaleStudent': 'Ingen skala er blevet indstillet til at måle gennemførelsen af {outcome, select, competencies {kompetencer} expectations {forventninger} objectives {mål} outcomes {resultater} standards {standarder} other {standarder}}.',
	'noSearchResults': 'Ingen resultater fundet for "{searchTerm}"',
	'notAssessed': 'Ikke vurderet',
	'numSearchResults': '{numResults} søg {numResults, plural, =1 {resultat} other {resultater}} for "{searchTerm}"',
	'outcomesListDescription': '{outcome, select, competencies {Kompetencer} expectations {Forventninger} objectives {Mål} outcomes {Resultater} standards {Standarder} other {Standarder}} liste',
	'outcomesListLoading': 'Indlæser',
	'outcomesListLoadingComplete': 'Indlæsning fuldført',
	'searchCleared': 'Søgeresultater ryddet',
	'searchHint': 'Søg ...',
	'searchLabel': 'Søg',
	'trend': 'Tendens',
	'untitled': 'Unavngivet'
};

/*
 * Da lang terms
 * @polymerBehavior D2L.PolymerBehaviors.OutcomesUserProgress.LocalizeBehavior.LangDaBehavior
 */
D2L.PolymerBehaviors.OutcomesUserProgress.LocalizeBehavior.LangDaBehavior = {
	da: window.D2L.OutcomesUserProgress.Language.Da
};
