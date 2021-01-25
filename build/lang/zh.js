import '@polymer/polymer/polymer-legacy.js';
window.D2L = window.D2L || {};
window.D2L.PolymerBehaviors = window.D2L.PolymerBehaviors || {};
window.D2L.PolymerBehaviors.OutcomesUserProgress = window.D2L.PolymerBehaviors.OutcomesUserProgress || {};
window.D2L.PolymerBehaviors.OutcomesUserProgress.LocalizeBehavior = window.D2L.PolymerBehaviors.OutcomesUserProgress.LocalizeBehavior || {};
window.D2L.OutcomesUserProgress = window.D2L.OutcomesUserProgress || {};
window.D2L.OutcomesUserProgress.Language = window.D2L.OutcomesUserProgress.Language || {};
window.D2L.OutcomesUserProgress.Language.Zh = {
	'a11yCollapsed': '折叠',
	'a11yExpanded': '展开',
	'bigTrendAttemptsScreenReaderString': '{numAttempts, plural, =1 {次尝试 {attemptNames}} other {次尝试 {attemptNames} and {lastAttemptName}}}',
	'bigTrendAttemptsTooltipString': '{numAttempts, plural, =1 {次尝试} other {次尝试}} {attemptNames}',
	'close': '关闭',
	'evidence': '证明',
	'headingDate': '日期',
	'headingEvidence': '证明名称',
	'headingLoa': '已达到的级别',
	'miniTrendAttemptsTooltipString': '{numAttempts, plural, =1 {次尝试} other {次尝试}} {attemptNames}',
	'miniTrendScreenReaderText': '已评估 {numAssessed} {numAssessed, plural, =1 {次} other {次}}：{levelNames}',
	'nodeAriaTextGroup': '组 {state}',
	'nodeAriaTextLevel': '级别 {level}',
	'nodeAriaTextPosition': '{position}（共 {count} 个）',
	'noEvidence': '该 {outcome, select, competencies {能力} expectations {预期} objectives {目标} outcomes {成果} standards {标准} other {标准}} 仍未被评估',
	'noOutcomesInstructor': '要开始追踪 {outcome, select, competencies {能力} expectations {预期} objectives {目标} outcomes {成果} standards {标准} other {标准}} 的成绩，请将课程 {outcome, select, competencies {能力} expectations {预期} objectives {目标} outcomes {成果} standards {标准} other {标准}} 与评估活动对齐。',
	'noOutcomesStudent': '没有 {outcome, select, competencies {能力} expectations {预期} objectives {目标} outcomes {成果} standards {标准} other {标准}} 得到评估。',
	'noScaleInstructor': '要查看学员在实现此 {outcome, select, competencies {能力} expectations {预期} objectives {目标} outcomes {成果} standards {标准} other {标准}} 方面的进展，请创建和选择成绩等级。',
	'noScaleStudent': '没有设置衡量 {outcome, select, competencies {能力} expectations {预期} objectives {目标} outcomes {成果} standards {标准} other {标准}} 的成绩的等级。',
	'noSearchResults': '未找到“{searchTerm}”的结果',
	'notAssessed': '未评估',
	'numSearchResults': '搜索“{searchTerm}”找到 {numResults} 个 {numResults, plural, =1 {结果} other {结果}}',
	'outcomesListDescription': '{outcome, select, competencies {能力} expectations {预期} objectives {目标} outcomes {成果} standards {标准} other {标准}} 列表',
	'outcomesListLoading': '正在加载',
	'outcomesListLoadingComplete': '加载完成',
	'searchCleared': '搜索结果已清除',
	'searchHint': '搜索...',
	'searchLabel': '搜索',
	'trend': '趋势',
	'untitled': '无标题'
};

/*
 * Zh lang terms
 * @polymerBehavior D2L.PolymerBehaviors.OutcomesUserProgress.LocalizeBehavior.LangZhBehavior
 */
D2L.PolymerBehaviors.OutcomesUserProgress.LocalizeBehavior.LangZhBehavior = {
	zh: window.D2L.OutcomesUserProgress.Language.Zh
};
