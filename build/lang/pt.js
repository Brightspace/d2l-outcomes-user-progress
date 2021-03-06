import '@polymer/polymer/polymer-legacy.js';
window.D2L = window.D2L || {};
window.D2L.PolymerBehaviors = window.D2L.PolymerBehaviors || {};
window.D2L.PolymerBehaviors.OutcomesUserProgress = window.D2L.PolymerBehaviors.OutcomesUserProgress || {};
window.D2L.PolymerBehaviors.OutcomesUserProgress.LocalizeBehavior = window.D2L.PolymerBehaviors.OutcomesUserProgress.LocalizeBehavior || {};
window.D2L.OutcomesUserProgress = window.D2L.OutcomesUserProgress || {};
window.D2L.OutcomesUserProgress.Language = window.D2L.OutcomesUserProgress.Language || {};
window.D2L.OutcomesUserProgress.Language.Pt = {
	'a11yCollapsed': 'recolhido',
	'a11yExpanded': 'expandido',
	'bigTrendAttemptsScreenReaderString': '{numAttempts, plural, =1 {Tentativa {attemptNames}} other {Tentativas {attemptNames} e {lastAttemptName}}}',
	'bigTrendAttemptsTooltipString': '{numAttempts, plural, =1 {Tentativa} other {Tentativas}} {attemptNames}',
	'close': 'Fechar',
	'evidence': 'Evidência',
	'headingDate': 'Data',
	'headingEvidence': 'Nome da Evidência',
	'headingLoa': 'Nível de Realização',
	'miniTrendAttemptsTooltipString': '{numAttempts, plural, =1 {Tentativa} other {Tentativas}} {attemptNames}',
	'miniTrendScreenReaderText': 'Usuário avaliado {numAssessed} {numAssessed, plural, =1 {vez} other {vezes}}: {levelNames}',
	'nodeAriaTextGroup': 'Grupo {state}',
	'nodeAriaTextLevel': 'Nível {level}',
	'nodeAriaTextPosition': '{position} de {count}',
	'noEvidence': 'Este(a) {outcome, select, competencies {competência} expectations {expectativa} objectives {objetivo} outcomes {resultado} standards {padrão} other {padrão}} ainda não foi avaliado(a)',
	'noOutcomesInstructor': 'Para começar a acompanhar a realização dos(as) {outcome, select, competencies {competências} expectations {expectativas} objectives {objetivos} outcomes {resultados} standards {padrões} other {padrões}}, alinhe os(as) {outcome, select, competencies {competências} expectations {expectativas} objectives {objetivos} outcomes {resultados} standards {padrões} other {padrões}} do curso para as atividades avaliadas.',
	'noOutcomesStudent': 'Nenhum(a) {outcome, select, competencies {competência} expectations {expectativa} objectives {objetivo} outcomes {resultado} standards {padrão} other {padrão}} foi avaliado(a).',
	'noScaleInstructor': 'Para ver o progresso do aluno em relação à realização deste(a) {outcome, select, competencies {competência} expectations {expectativa} objectives {objetivo} outcomes {resultado} standards {padrão} other {padrão}}, crie e selecione uma escala de realização.',
	'noScaleStudent': 'Nenhuma escala foi definida para medir a realização de {outcome, select, competencies {competências} expectations {expectativas} objectives {objetivos} outcomes {resultados} standards {padrões} other {padrões}}.',
	'noSearchResults': 'Nenhum resultado encontrado para "{searchTerm}"',
	'notAssessed': 'Não avaliado',
	'numSearchResults': '{numResults} {numResults, plural, =1 {resultado} other {resultados}} de pesquisa para "{searchTerm}"',
	'outcomesListDescription': 'Lista de {outcome, select, competencies {Competências} expectations {Expectativas} objectives {Objetivos} outcomes {Resultados} standards {Padrões} other {Padrões}}',
	'outcomesListLoading': 'Em carregamento',
	'outcomesListLoadingComplete': 'Carregamento concluído',
	'searchCleared': 'Resultados de pesquisa apagados',
	'searchHint': 'Pesquisar…',
	'searchLabel': 'Pesquisar',
	'trend': 'Tendência',
	'untitled': 'Sem título'
};

/*
 * Pt lang terms
 * @polymerBehavior D2L.PolymerBehaviors.OutcomesUserProgress.LocalizeBehavior.LangPtBehavior
 */
D2L.PolymerBehaviors.OutcomesUserProgress.LocalizeBehavior.LangPtBehavior = {
	pt: window.D2L.OutcomesUserProgress.Language.Pt
};
