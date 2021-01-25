import '@polymer/polymer/polymer-legacy.js';
window.D2L = window.D2L || {};
window.D2L.PolymerBehaviors = window.D2L.PolymerBehaviors || {};
window.D2L.PolymerBehaviors.OutcomesUserProgress = window.D2L.PolymerBehaviors.OutcomesUserProgress || {};
window.D2L.PolymerBehaviors.OutcomesUserProgress.LocalizeBehavior = window.D2L.PolymerBehaviors.OutcomesUserProgress.LocalizeBehavior || {};
window.D2L.OutcomesUserProgress = window.D2L.OutcomesUserProgress || {};
window.D2L.OutcomesUserProgress.Language = window.D2L.OutcomesUserProgress.Language || {};
window.D2L.OutcomesUserProgress.Language.EsEs = {
	'a11yCollapsed': 'contraída',
	'a11yExpanded': 'expandida',
	'bigTrendAttemptsScreenReaderString': '{numAttempts, plural, =1 {Intento {attemptNames}} other {Intentos {attemptNames} y {lastAttemptName}}}',
	'bigTrendAttemptsTooltipString': '{numAttempts, plural, =1 {Intento} other {Intentos}} {attemptNames}',
	'close': 'Cerrar',
	'evidence': 'Pruebas',
	'headingDate': 'Fecha',
	'headingEvidence': 'Nombre de la prueba',
	'headingLoa': 'Nivel de logro',
	'miniTrendAttemptsTooltipString': '{numAttempts, plural, =1 {Intento} other {Intentos}} {attemptNames}',
	'miniTrendScreenReaderText': '{numAssessed} {numAssessed, plural, =1 {hora} other {horas}} evaluados: {levelNames}',
	'nodeAriaTextGroup': 'Grupo {state}',
	'nodeAriaTextLevel': 'Nivel {level}',
	'nodeAriaTextPosition': '{position} de {count}',
	'noEvidence': 'Este/a {outcome, select, competencies {competencia} expectations {expectativa} objectives {objetivo} outcomes {resultado} standards {estándar} other {estándar}} aún no se ha evaluado',
	'noOutcomesInstructor': 'Para comenzar a realizar el seguimiento del logro de {outcome, select, competencies {competencias} expectations {expectativas} objectives {objetivos} outcomes {resultados} standards {estándares} other {estándares}}, debe alinear los/las {outcome, select, competencies {competencias} expectations {expectativas} objectives {objetivos} outcomes {resultados} standards {estándares} other {estándares}} del curso con las actividades evaluadas.',
	'noOutcomesStudent': 'No se han evaluado {outcome, select, competencies {competencias} expectations {expectativas} objectives {objetivos} outcomes {resultados} standards {estándares} other {estándares}}.',
	'noScaleInstructor': 'Con el fin de ver el progreso del estudiante para lograr este/a {outcome, select, competencies {competencia} expectations {expectativa} objectives {objetivo} outcomes {resultado} standards {estándar} other {estándar}}, cree y seleccione una escala de logros.',
	'noScaleStudent': 'No se ha establecido ninguna escala para medir el logro de {outcome, select, competencies {competencias} expectations {expectativas} objectives {objetivos} outcomes {resultados} standards {estándares} other {estándares}}.',
	'noSearchResults': 'No se han encontrado resultados para "{searchTerm}"',
	'notAssessed': 'Sin evaluación',
	'numSearchResults': '{numResults} search {numResults, plural, =1 {resultado} other {resultados}} para "{searchTerm}"',
	'outcomesListDescription': 'Lista de {outcome, select, competencies {competencias} expectations {expectativas} objectives {objetivos} outcomes {resultados} standards {estándares} other {estándares}}',
	'outcomesListLoading': 'Cargando',
	'outcomesListLoadingComplete': 'Carga completa',
	'searchCleared': 'Resultados de búsqueda borrados',
	'searchHint': 'Buscar…',
	'searchLabel': 'Buscar',
	'trend': 'Tendencia',
	'untitled': 'Sin título'
};

/*
 * EsEs lang terms
 * @polymerBehavior D2L.PolymerBehaviors.OutcomesUserProgress.LocalizeBehavior.LangEsEsBehavior
 */
D2L.PolymerBehaviors.OutcomesUserProgress.LocalizeBehavior.LangEsEsBehavior = {
	esEs: window.D2L.OutcomesUserProgress.Language.EsEs
};
