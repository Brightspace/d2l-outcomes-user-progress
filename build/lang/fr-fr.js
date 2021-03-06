import '@polymer/polymer/polymer-legacy.js';
window.D2L = window.D2L || {};
window.D2L.PolymerBehaviors = window.D2L.PolymerBehaviors || {};
window.D2L.PolymerBehaviors.OutcomesUserProgress = window.D2L.PolymerBehaviors.OutcomesUserProgress || {};
window.D2L.PolymerBehaviors.OutcomesUserProgress.LocalizeBehavior = window.D2L.PolymerBehaviors.OutcomesUserProgress.LocalizeBehavior || {};
window.D2L.OutcomesUserProgress = window.D2L.OutcomesUserProgress || {};
window.D2L.OutcomesUserProgress.Language = window.D2L.OutcomesUserProgress.Language || {};
window.D2L.OutcomesUserProgress.Language.FrFr = {
	'a11yCollapsed': 'réduit',
	'a11yExpanded': 'développé',
	'bigTrendAttemptsScreenReaderString': '{numAttempts, plural, =1 {tentative {attemptNames}} other {tentatives {attemptNames} et {lastAttemptName}}}',
	'bigTrendAttemptsTooltipString': '{numAttempts, plural, =1 {tentative} other {tentatives}} {attemptNames}',
	'close': 'Fermer',
	'evidence': 'Preuve',
	'headingDate': 'Date',
	'headingEvidence': 'Nom de la preuve',
	'headingLoa': 'Niveau de réalisation',
	'miniTrendAttemptsTooltipString': '{numAttempts, plural, =1 {tentative} other {tentatives}} {attemptNames}',
	'miniTrendScreenReaderText': 'Évalué {numAssessed} {numAssessed, plural, =1 {fois} other {fois}} : {levelNames}',
	'nodeAriaTextGroup': 'Groupe {state}',
	'nodeAriaTextLevel': 'Niveau {level}',
	'nodeAriaTextPosition': '{position} sur {count}',
	'noEvidence': '{outcome, select, competencies {Compétence} expectations {Attente} objectives {Objectif} outcomes {Résultat} standards {Norme} other {Norme}} non évalué(e)',
	'noOutcomesInstructor': 'Pour commencer le suivi de réalisation des {outcome, select, competencies {compétences} expectations {attentes} objectives {objectifs} outcomes {résultats} standards {normes} other {normes}}, alignez les {outcome, select, competencies {compétences} expectations {attentes} objectives {objectifs} outcomes {résultats} standards {normes} other {normes}} du cours aux activités évaluées.',
	'noOutcomesStudent': 'Aucun(e) {outcome, select, competencies {compétence} expectations {attente} objectives {objectif} outcomes {résultat} standards {norme} other {norme}} évalué(e).',
	'noScaleInstructor': 'Pour afficher les progrès de l’apprenant par rapport à ce(tte) {outcome, select, competencies {compétence} expectations {attente} objectives {objectif} outcomes {résultat} standards {norme} other {norme}}, créez et sélectionnez une échelle de réalisation.',
	'noScaleStudent': 'Aucune échelle n’a été définie pour mesurer les réalisations par rapport aux {outcome, select, competencies {compétences} expectations {attentes} objectives {objectifs} outcomes {résultats} standards {normes} other {normes}}.',
	'noSearchResults': 'Aucun résultat trouvé pour "{searchTerm}"',
	'notAssessed': 'Non évalué',
	'numSearchResults': '{numResults} {numResults, plural, =1 {résultat} other {résultats}} de recherche pour "{searchTerm}"',
	'outcomesListDescription': 'Liste des {outcome, select, competencies {compétences} expectations {attentes} objectives {objectifs} outcomes {résultats} standards {normes} other {normes}}',
	'outcomesListLoading': 'Chargement en cours',
	'outcomesListLoadingComplete': 'Chargement terminé',
	'searchCleared': 'Résultats de recherche effacés',
	'searchHint': 'Rechercher...',
	'searchLabel': 'Rechercher',
	'trend': 'Tendance',
	'untitled': 'sans titre'
};

/*
 * FrFr lang terms
 * @polymerBehavior D2L.PolymerBehaviors.OutcomesUserProgress.LocalizeBehavior.LangFrFrBehavior
 */
D2L.PolymerBehaviors.OutcomesUserProgress.LocalizeBehavior.LangFrFrBehavior = {
	frFr: window.D2L.OutcomesUserProgress.Language.FrFr
};
