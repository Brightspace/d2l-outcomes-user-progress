import '@polymer/polymer/polymer-legacy.js';
window.D2L = window.D2L || {};
window.D2L.PolymerBehaviors = window.D2L.PolymerBehaviors || {};
window.D2L.PolymerBehaviors.OutcomesUserProgress = window.D2L.PolymerBehaviors.OutcomesUserProgress || {};
window.D2L.PolymerBehaviors.OutcomesUserProgress.LocalizeBehavior = window.D2L.PolymerBehaviors.OutcomesUserProgress.LocalizeBehavior || {};
window.D2L.OutcomesUserProgress = window.D2L.OutcomesUserProgress || {};
window.D2L.OutcomesUserProgress.Language = window.D2L.OutcomesUserProgress.Language || {};
window.D2L.OutcomesUserProgress.Language.De = {
	'a11yCollapsed': 'Reduziert',
	'a11yExpanded': 'Erweitert',
	'bigTrendAttemptsScreenReaderString': '{numAttempts, plural, =1 {Versuch {attemptNames}} other {Versuche {attemptNames} und {lastAttemptName}}}',
	'bigTrendAttemptsTooltipString': '{numAttempts, plural, =1 {Versuch} other {Versuche}} {attemptNames}',
	'close': 'Schließen',
	'evidence': 'Nachweis',
	'headingDate': 'Datum',
	'headingEvidence': 'Nachweisname',
	'headingLoa': 'Erreichte Stufe',
	'miniTrendAttemptsTooltipString': '{numAttempts, plural, =1 {Versuch} other {Versuche}} {attemptNames}',
	'miniTrendScreenReaderText': '{numAssessed} {numAssessed, plural, =1 {Mal} other {Mal}} bewertet: {levelNames}',
	'nodeAriaTextGroup': 'Gruppe {state}',
	'nodeAriaTextLevel': 'Ebene {level}',
	'nodeAriaTextPosition': '{position} von {count}',
	'noEvidence': '{outcome, select, competencies {Diese Kompetenz} expectations {Diese Erwartung} objectives {Dieses Ziel} outcomes {Dieses Ergebnis} standards {Dieser Standard} other {Dieser Standard}} wurde noch nicht bewertet',
	'noOutcomesInstructor': 'Um mit dem Nachverfolgen des Erreichens von {outcome, select, competencies {Kompetenzen} expectations {Erwartungen} objectives {Zielen} outcomes {Ergebnissen} standards {Standards} other {Standards}} zu beginnen, müssen Sie {outcome, select, competencies {die Kompetenzen} expectations {die Erwartungen} objectives {die Ziele} outcomes {die Ergebnisse} standards {die Standards} other {die Standards}} des Kurses bewerteten Aktivitäten zuweisen.',
	'noOutcomesStudent': 'Es wurden keine {outcome, select, competencies {Kompetenzen} expectations {Erwartungen} objectives {Ziele} outcomes {Ergebnisse} standards {Standards} other {Standards}} bewertet.',
	'noScaleInstructor': 'Um den Lernfortschritt beim Erreichen dieser {outcome, select, competencies {Kompetenzen} expectations {Erwartungen} objectives {Ziele} outcomes {Ergebnisse} standards {Standards} other {Standards}} anzuzeigen, erstellen Sie eine Erfolgsskala und wählen Sie sie aus.',
	'noScaleStudent': 'Es wurde keine Skala festgelegt, um das Erreichen von {outcome, select, competencies {Kompetenzen} expectations {Erwartungen} objectives {Zielen} outcomes {Ergebnissen} standards {Standards} other {Standards}} zu messen.',
	'noSearchResults': 'Keine Suchergebnisse für „{searchTerm}“',
	'notAssessed': 'Nicht bewertet',
	'numSearchResults': '{numResults} Such{numResults, plural, =1 {ergebnis} other {ergebnisse}} für „{searchTerm}“',
	'outcomesListDescription': 'Liste von {outcome, select, competencies {Kompetenzen} expectations {Erwartungen} objectives {Ziele} outcomes {Ergebnisse} standards {Standards} other {Standards}}',
	'outcomesListLoading': 'Wird geladen',
	'outcomesListLoadingComplete': 'Ladevorgang abgeschlossen',
	'searchCleared': 'Suchergebnisse gelöscht',
	'searchHint': 'Suchen...',
	'searchLabel': 'Suchen',
	'trend': 'Trend',
	'untitled': 'ohne Titel'
};

/*
 * De lang terms
 * @polymerBehavior D2L.PolymerBehaviors.OutcomesUserProgress.LocalizeBehavior.LangDeBehavior
 */
D2L.PolymerBehaviors.OutcomesUserProgress.LocalizeBehavior.LangDeBehavior = {
	de: window.D2L.OutcomesUserProgress.Language.De
};
