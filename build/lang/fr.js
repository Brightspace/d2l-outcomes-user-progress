import '@polymer/polymer/polymer-legacy.js';
window.D2L = window.D2L || {};
window.D2L.PolymerBehaviors = window.D2L.PolymerBehaviors || {};
window.D2L.PolymerBehaviors.OutcomesUserProgress = window.D2L.PolymerBehaviors.OutcomesUserProgress || {};
window.D2L.PolymerBehaviors.OutcomesUserProgress.LocalizeBehavior = window.D2L.PolymerBehaviors.OutcomesUserProgress.LocalizeBehavior || {};
window.D2L.OutcomesUserProgress = window.D2L.OutcomesUserProgress || {};
window.D2L.OutcomesUserProgress.Language = window.D2L.OutcomesUserProgress.Language || {};
window.D2L.OutcomesUserProgress.Language.Fr = {
	'a11yCollapsed': 'réduit(e)',
	'a11yExpanded': 'développé(e)',
	'bigTrendAttemptsScreenReaderString': '{numAttempts, plural, =1 {Tentative {attemptNames}} other {Tentatives {attemptNames} et {lastAttemptName}}}',
	'bigTrendAttemptsTooltipString': '{numAttempts, plural, =1 {Tentative} other {Tentatives}} {attemptNames}',
	'close': 'Fermer',
	'evidence': 'Preuve',
	'headingDate': 'Date',
	'headingEvidence': 'Nom de la preuve',
	'headingLoa': 'Niveau de réalisation',
	'miniTrendAttemptsTooltipString': '{numAttempts, plural, =1 {Tentative} other {Tentatives}} {attemptNames}',
	'miniTrendScreenReaderText': 'Évalué {numAssessed} {numAssessed, plural, =1 {time} other {times}}: {levelNames}',
	'nodeAriaTextGroup': 'Groupe {state}',
	'nodeAriaTextLevel': 'Niveau {level}',
	'nodeAriaTextPosition': '{position} de {count}',
	'noEvidence': 'Ce/Cette {outcome, select, competencies {compétence} expectations {attente} objectives {objectif} outcomes {résultat} standards {norme} other {norme}} n’a pas encore été évalué(e)',
	'noOutcomesInstructor': 'Pour commencer le suivi de la réalisation de {outcome, select, competencies {compétences} expectations {attentes} objectives {objectifs} outcomes {résultats} standards {normes} other {normes}}, aligner les {outcome, select, competencies {compétences} expectations {attentes} objectives {objectifs} outcomes {résultats} standards {normes} other {normes}} du cours sur les activités évaluées.',
	'noOutcomesStudent': 'Aucun(e) de ces {outcome, select, competencies {compétences} expectations {attentes} objectives {objectifs} outcomes {résultats} standards {normes} other {normes}} n’a été évalué(e).',
	'noScaleInstructor': 'Pour afficher le progrès de l’apprenant vers l’atteinte de ce/cette {outcome, select, competencies {compétence} expectations {attete} objectives {objectif} outcomes {résultat} standards {norme} other {norme}}, créer et sélectionner une échelle de réalisations.',
	'noScaleStudent': 'Aucune échelle n’a été établie pour mesurer l’atteinte des {outcome, select, competencies {compétences} expectations {attentes} objectives {objectifs} outcomes {résultats} standards {normes} other {normes}}.',
	'noSearchResults': 'Aucun résultat n’a été trouvé pour "{searchTerm}".',
	'notAssessed': 'Non évalué',
	'numSearchResults': '{numResults} recherché(s) {numResults, plural, =1 {résultat} other {résultats}} pour "{searchTerm}"',
	'outcomesListDescription': 'Liste de {outcome, select, competencies {compétences} expectations {attentes} objectives {objectifs} outcomes {résultats} standards {normes} other {normes}}',
	'outcomesListLoading': 'Chargement en cours',
	'outcomesListLoadingComplete': 'Chargement terminé',
	'searchCleared': 'Résultats de la recherche effacés',
	'searchHint': 'Recherche…',
	'searchLabel': 'Rechercher',
	'trend': 'Tendance',
	'untitled': 'Sans titre'
};

/*
 * Fr lang terms
 * @polymerBehavior D2L.PolymerBehaviors.OutcomesUserProgress.LocalizeBehavior.LangFrBehavior
 */
D2L.PolymerBehaviors.OutcomesUserProgress.LocalizeBehavior.LangFrBehavior = {
	fr: window.D2L.OutcomesUserProgress.Language.Fr
};
