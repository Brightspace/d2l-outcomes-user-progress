import '@polymer/polymer/polymer-legacy.js';
window.D2L = window.D2L || {};
window.D2L.PolymerBehaviors = window.D2L.PolymerBehaviors || {};
window.D2L.PolymerBehaviors.OutcomesUserProgress = window.D2L.PolymerBehaviors.OutcomesUserProgress || {};
window.D2L.PolymerBehaviors.OutcomesUserProgress.LocalizeBehavior = window.D2L.PolymerBehaviors.OutcomesUserProgress.LocalizeBehavior || {};
window.D2L.OutcomesUserProgress = window.D2L.OutcomesUserProgress || {};
window.D2L.OutcomesUserProgress.Language = window.D2L.OutcomesUserProgress.Language || {};
window.D2L.OutcomesUserProgress.Language.Es = {
	'a11yCollapsed': 'contraído',
	'a11yExpanded': 'expandido',
	'bigTrendAttemptsScreenReaderString': '{numAttempts, plural, =1 {Intento {attemptNames}} other {Intentos {attemptNames} y {lastAttemptName}}}',
	'bigTrendAttemptsTooltipString': '{numAttempts, plural, =1 {Intento} other {Intentos}} {attemptNames}',
	'close': 'Cerrar',
	'evidence': 'Evidencia',
	'headingDate': 'Fecha',
	'headingEvidence': 'Nombre de la prueba',
	'headingLoa': 'Nivel de logro',
	'miniTrendAttemptsTooltipString': '{numAttempts, plural, =1 {Intento} other {Intentos}} {attemptNames}',
	'miniTrendScreenReaderText': 'Se evaluó {numAssessed} {numAssessed, plural, =1 {hora} other {horas}}: {levelNames}',
	'nodeAriaTextGroup': 'Grupo {state}',
	'nodeAriaTextLevel': 'Nivel {level}',
	'nodeAriaTextPosition': '{position} de {count}',
	'noEvidence': 'Este {outcome, select, competencies {competencia} expectations {expectativa} objectives {objetivo} outcomes {resultado} standards {estándar} other {estándar}} aún no se ha evaluado',
	'noOutcomesInstructor': 'Para comenzar a realizar el seguimiento del logro de {outcome, select, competencies {competencias} expectations {expectativas} objectives {objetivos} outcomes {resultados} standards {estándares} other {estándares}}, debe alinear el curso {outcome, select, competencies {competencias} expectations {expectativas} objectives {objetivos} outcomes {resultados} standards {estándares} other {estándares}} con las actividades evaluadas.',
	'noOutcomesStudent': '{outcome, select, competencies {competencias} expectations {expectativas} objectives {objetivos} outcomes {resultados} standards {estándares} other {estándares}} no se han evaluado.',
	'noScaleInstructor': 'Con el fin de ver el progreso del estudiante para lograr este {outcome, select, competencies {competencia} expectations {expectativa} objectives {objetivo} outcomes {resultado} standards {estándar} other {estándar}}, cree y seleccione una escala de logros.',
	'noScaleStudent': 'No se ha establecido ninguna escala para medir el logro de {outcome, select, competencies {competencias} expectations {expectativas} objectives {objetivos} outcomes {resultados} standards {estándares} other {estándares}}.',
	'noSearchResults': 'No se encontraron resultados para “{searchTerm}”',
	'notAssessed': 'Sin evaluación',
	'numSearchResults': '{numResults} búsqueda {numResults, plural, =1 {resultado} other {resultados}} para “{searchTerm}”',
	'outcomesListDescription': 'Lista de {outcome, select, competencies {Competencias} expectations {Expectativas} objectives {Objetivos} outcomes {Resultados} standards {Estándares} other {Estándares}}',
	'outcomesListLoading': 'Cargando',
	'outcomesListLoadingComplete': 'Carga completa',
	'searchCleared': 'Se borraron los resultados de búsqueda',
	'searchHint': 'Buscar…',
	'searchLabel': 'Buscar',
	'trend': 'Tendencia',
	'untitled': 'Sin título'
};

/*
 * Es lang terms
 * @polymerBehavior D2L.PolymerBehaviors.OutcomesUserProgress.LocalizeBehavior.LangEsBehavior
 */
D2L.PolymerBehaviors.OutcomesUserProgress.LocalizeBehavior.LangEsBehavior = {
	es: window.D2L.OutcomesUserProgress.Language.Es
};
