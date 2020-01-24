import '@polymer/polymer/polymer-legacy.js';
window.D2L = window.D2L || {};
window.D2L.PolymerBehaviors = window.D2L.PolymerBehaviors || {};
window.D2L.PolymerBehaviors.OutcomesUserProgress = window.D2L.PolymerBehaviors.OutcomesUserProgress || {};
window.D2L.PolymerBehaviors.OutcomesUserProgress.LocalizeBehavior = window.D2L.PolymerBehaviors.OutcomesUserProgress.LocalizeBehavior || {};

/*
 * De lang terms
 * @polymerBehavior D2L.PolymerBehaviors.OutcomesUserProgress.LocalizeBehavior.LangDeBehavior
 */
D2L.PolymerBehaviors.OutcomesUserProgress.LocalizeBehavior.LangDeBehavior = {
	de: {
		'bigTrendAttemptsScreenReaderString': '{numAttempts, plural, one {Versuch {attemptNames}} other {Versuche {attemptNames} und {lastAttemptName}}}',
		'bigTrendAttemptsTooltipString': '{numAttempts, plural, one {Versuch} other {Versuche}} {attemptNames}',
		'close': 'Schließen',
		'evidence': 'Nachweis',
		'headingDate': 'Datum',
		'headingEvidence': 'Nachweisname',
		'headingLoa': 'Erreichte Stufe',
		'miniTrendAttemptsTooltipString': '{numAttempts, plural, one {Versuch} other {Versuche}} {attemptNames}',
		'miniTrendScreenReaderText': 'Bewertet {numAssessed} {numAssessed, plural, one {Mal} other {Male}}: {levelNames}',
		'noEvidence': '{outcome, select, competencies {Diese Kompetenz} expectations {Diese Erwartung} objectives {Dieses Ziel} outcomes {Dieses Ergebnis} standards {Dieser Standard} other {Dieser Standard}} wurde noch nicht bewertet',
		'noOutcomesInstructor': 'Um mit dem Nachverfolgen des Erreichens von {outcome, select, competencies {Kompetenzen} expectations {Erwartungen} objectives {Zielen} outcomes {Ergebnissen} standards {Standards} other {Standards}} zu beginnen, müssen Sie {outcome, select, competencies {die Kompetenzen} expectations {die Erwartungen} objectives {die Ziele} outcomes {die Ergebnisse} standards {die Standards} other {die Standards}} des Kurses bewerteten Aktivitäten zuweisen.',
		'noOutcomesStudent': 'Es wurden keine {outcome, select, competencies {Kompetenzen} expectations {Erwartungen} objectives {Ziele} outcomes {Ergebnisse} standards {Standards} other {Standards}} bewertet.',
		'noScaleInstructor': 'Um den Lernfortschritt beim Erreichen dieser {result, select, competencies {Kompetenzen} expectations {Erwartungen} objectives {Ziele} outcomes {Ergebnisse} standards {Standards} other {Standards}} anzuzeigen, erstellen Sie eine Erfolgsskala und wählen Sie sie aus.',
		'noScaleStudent': 'Es wurde keine Skala festgelegt, um das Erreichen von {outcome, select, competencies {Kompetenzen} expectations {Erwartungen} objectives {Zielen} outcomes {Ergebnissen} standards {Standards} other {Standards}} zu messen.',
		'notAssessed': 'Nicht bewertet',
		'trend': 'Trend',
		'untitled': 'Ohne Titel'
	}
};
