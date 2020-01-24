import '@polymer/polymer/polymer-legacy.js';
window.D2L = window.D2L || {};
window.D2L.PolymerBehaviors = window.D2L.PolymerBehaviors || {};
window.D2L.PolymerBehaviors.OutcomesUserProgress = window.D2L.PolymerBehaviors.OutcomesUserProgress || {};
window.D2L.PolymerBehaviors.OutcomesUserProgress.LocalizeBehavior = window.D2L.PolymerBehaviors.OutcomesUserProgress.LocalizeBehavior || {};

/*
 * Sv lang terms
 * @polymerBehavior D2L.PolymerBehaviors.OutcomesUserProgress.LocalizeBehavior.LangSvBehavior
 */
D2L.PolymerBehaviors.OutcomesUserProgress.LocalizeBehavior.LangSvBehavior = {
	sv: {
		'bigTrendAttemptsScreenReaderString': '{numAttempts, plural, one {försök {attemptNames}} other {försök {attemptNames} and {lastAttemptName}}}',
		'bigTrendAttemptsTooltipString': '{numAttempts, plural, one {försök} other {försök}} {attemptNames}',
		'close': 'Stäng',
		'evidence': 'Spåra',
		'headingDate': 'Datum',
		'headingEvidence': 'Bevisnamn',
		'headingLoa': 'Uppnådd nivå',
		'miniTrendAttemptsTooltipString': '{numAttempts, plural, one {försök} other {försök}} {attemptNames}',
		'miniTrendScreenReaderText': 'Utvärderade {numAssessed} {numAssessed, plural, one {gång} other {gånger}}: {levelNames}',
		'noEvidence': 'De här {outcome, select, competencies {kompetenserna} expectations {förväntningarna} objectives {målen} outcomes {resultaten} standards {standarderna} other {standarderna}} har inte utvärderats än',
		'noOutcomesInstructor': 'För att börja spåra uppnådda {outcome, select, competencies {kompetenser} expectations {förväntningar} objectives {mål} outcomes {resultat} standards {standarder} other {standarder}} justerar du kursens {outcome, select, competencies {kompetenser} expectations {förväntningar} objectives {mål} outcomes {resultat} standards {standarder} other {standarder}} mot utvärderade aktiviteter.',
		'noOutcomesStudent': 'Inga {outcomes, select, competencies {kompetenser} expectations {förväntningar} objectives {mål} outcomes {resultat} standards {standarder} other {standarder}} har utvärderats.',
		'noScaleInstructor': 'För att se elevens framsteg mot dessa {outcome, select, competencies {kompetenser} expectations {förväntningar} objectives {mål} outcomes {resultat} standards {standarder} other {standarder}} skapar du och väljer en nivåskala.',
		'noScaleStudent': 'Ingen skala har angetts för mätning av uppnådda {outcome, select, competencies {kompetenser} expectations {förväntningar} objectives {mål} outcomes {resultat} standards {standarder} other {standarder}}.',
		'notAssessed': 'Ej bedömt',
		'trend': 'Trend',
		'untitled': 'Namnlös'
	}
};
