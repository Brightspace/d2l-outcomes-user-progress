import '@polymer/polymer/polymer-legacy.js';
window.D2L = window.D2L || {};
window.D2L.PolymerBehaviors = window.D2L.PolymerBehaviors || {};
window.D2L.PolymerBehaviors.OutcomesUserProgress = window.D2L.PolymerBehaviors.OutcomesUserProgress || {};
window.D2L.PolymerBehaviors.OutcomesUserProgress.LocalizeBehavior = window.D2L.PolymerBehaviors.OutcomesUserProgress.LocalizeBehavior || {};

/*
 * Es lang terms
 * @polymerBehavior D2L.PolymerBehaviors.OutcomesUserProgress.LocalizeBehavior.LangEsBehavior
 */
D2L.PolymerBehaviors.OutcomesUserProgress.LocalizeBehavior.LangEsBehavior = {
	es: {
		'bigTrendAttemptsScreenReaderString': '{numAttempts, plural, one {Intento {attemptNames}} other {Intentos {attemptNames} and {lastAttemptName}}}',
		'bigTrendAttemptsTooltipString': '{numAttempts, plural, one {Intento} other {Intentos}} {attemptNames}',
		'close': 'Cerrar',
		'evidence': 'Prueba',
		'headingDate': 'Fecha',
		'headingEvidence': 'Nombre de la prueba',
		'headingLoa': 'Nivel de logro',
		'miniTrendAttemptsTooltipString': '{numAttempts, plural, one {Intento} other {Intentos}} {attemptNames}',
		'miniTrendScreenReaderText': '{numAssessed} {numAssessed, plural, one {hora} other {horas}} evaluados: {levelNames}',
		'noEvidence': 'Este {outcome, select, competencies {competencia} expectations {expectativa} objectives {objetivo} outcomes {resultado} standards {estándar} other {estándar}} aún no se ha evaluado',
		'noOutcomesInstructor': 'Para comenzar a realizar el seguimiento del logro de {outcome, select, competencies {competencias} expectations {expectativas} objectives {objetivos} outcomes {resultados} standards {estándares} other {estándares}}, debe alinear el curso {outcome, select, competencies {competencias} expectations {expectativas} objectives {objetivos} outcomes {resultados} standards {estándares} other {estándares}} con las actividades evaluadas.',
		'noOutcomesStudent': '{outcome, select, competencies {competencias} expectations {expectativas} objectives {objetivos} outcomes {resultados} standards {estándares} other {estándares}} no se han evaluado.',
		'noScaleInstructor': 'Con el fin de ver el progreso del estudiante para lograr este {outcome, select, competencies {competencia} expectations {expectativa} objectives {objetivo} outcomes {resultado} standards {estándar} other {estándar}}, cree y seleccione una escala de logros.',
		'noScaleStudent': 'No se ha establecido ninguna escala para medir el logro de {outcome, select, competencies {competencias} expectations {expectativas} objectives {objetivos} outcomes {resultados} standards {estándares} other {estándares}}.',
		'notAssessed': 'Sin evaluación',
		'trend': 'Tendencia',
		'untitled': 'Sin título'
	}
};
