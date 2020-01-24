import '@polymer/polymer/polymer-legacy.js';
window.D2L = window.D2L || {};
window.D2L.PolymerBehaviors = window.D2L.PolymerBehaviors || {};
window.D2L.PolymerBehaviors.OutcomesUserProgress = window.D2L.PolymerBehaviors.OutcomesUserProgress || {};
window.D2L.PolymerBehaviors.OutcomesUserProgress.LocalizeBehavior = window.D2L.PolymerBehaviors.OutcomesUserProgress.LocalizeBehavior || {};

/*
 * Pt lang terms
 * @polymerBehavior D2L.PolymerBehaviors.OutcomesUserProgress.LocalizeBehavior.LangPtBehavior
 */
D2L.PolymerBehaviors.OutcomesUserProgress.LocalizeBehavior.LangPtBehavior = {
	pt: {
		'bigTrendAttemptsScreenReaderString': '{numAttempts, plural, one {Tentativa {attemptNames}} other {Tentativas {attemptNames} e {lastAttemptName}}}',
		'bigTrendAttemptsTooltipString': '{numAttempts, plural, one {Tentativa} other {Tentativas}} {attemptNames}',
		'close': 'Fechar',
		'evidence': 'Evidência',
		'headingDate': 'Data',
		'headingEvidence': 'Nome da evidência',
		'headingLoa': 'Nível de Realização',
		'miniTrendAttemptsTooltipString': '{numAttempts, plural, one {Tentativa} other {Tentativas}} {attemptNames}',
		'miniTrendScreenReaderText': 'Avaliado {numAssessed} {numAssessed, plural, one {vez} other {vezes}}: {levelNames}',
		'noEvidence': 'Este(a) {outcome, select, competencies {competência} expectations {expectativa} objectives {objetivo} outcomes {resultado} standards {padrão} other {padrão}} ainda não foi avaliado(a)',
		'noOutcomesInstructor': 'Para começar a acompanhar a realização dos(as) {outcome, select, competencies {competências} expectations {expectativas} objectives {objetivos} outcomes {resultados} standards {padrões} other {padrões}}, alinhe os(as) {outcome, select, competencies {competências} expectations {expectativas} objectives {objetivos} outcomes {resultados} standards {padrões} other {padrões}} do curso para as atividades avaliadas.',
		'noOutcomesStudent': 'Nenhum(a) {outcome, select, competencies {competência} expectations {expectativa} objectives {objetivo} outcomes {resultado} standards {padrão} other {padrão}} foi avaliado(a).',
		'noScaleInstructor': 'Para ver o progresso do aluno em relação à realização deste(a) {outcome, select, competencies {competência} expectations {expectativa} objectives {objetivo} outcomes {resultado} standards {padrão} other {padrão}}, crie e selecione uma escala de realização.',
		'noScaleStudent': 'Nenhuma escala foi definida para medir a realização de {outcome, select, competencies {competências} expectations {expectativas} objectives {objetivos} outcomes {resultados} standards {padrões} other {padrões}}.',
		'notAssessed': 'Não avaliado',
		'trend': 'Tendência',
		'untitled': 'Sem Título'
	}
};
