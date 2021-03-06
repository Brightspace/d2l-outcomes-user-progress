import '@polymer/polymer/polymer-legacy.js';
window.D2L = window.D2L || {};
window.D2L.PolymerBehaviors = window.D2L.PolymerBehaviors || {};
window.D2L.PolymerBehaviors.OutcomesUserProgress = window.D2L.PolymerBehaviors.OutcomesUserProgress || {};
window.D2L.PolymerBehaviors.OutcomesUserProgress.LocalizeBehavior = window.D2L.PolymerBehaviors.OutcomesUserProgress.LocalizeBehavior || {};
window.D2L.OutcomesUserProgress = window.D2L.OutcomesUserProgress || {};
window.D2L.OutcomesUserProgress.Language = window.D2L.OutcomesUserProgress.Language || {};
window.D2L.OutcomesUserProgress.Language.Ko = {
	'a11yCollapsed': '축소됨',
	'a11yExpanded': '확장됨',
	'bigTrendAttemptsScreenReaderString': '{numAttempts, plural, =1 {Attempt {attemptNames}} other {Attempts {attemptNames} 및 {lastAttemptName}}}',
	'bigTrendAttemptsTooltipString': '{numAttempts, plural, =1 {Attempt} other {Attempts}} {attemptNames}',
	'close': '닫기',
	'evidence': '근거',
	'headingDate': '날짜',
	'headingEvidence': '근거 이름',
	'headingLoa': '성취 수준',
	'miniTrendAttemptsTooltipString': '{numAttempts, plural, =1 {Attempt} other {Attempts}} {attemptNames}',
	'miniTrendScreenReaderText': '평가됨 {numAssessed} {numAssessed, plural, =1 {time} other {times}}: {levelNames}',
	'nodeAriaTextGroup': '{state} 그룹',
	'nodeAriaTextLevel': '{level} 레벨',
	'nodeAriaTextPosition': '{count}의 {position}',
	'noEvidence': '이 {outcome, select, competencies {역량} expectations {기대} objectives {목표} outcomes {결과} standards {표준} other {표준}} 은(는) 아직 평가되지 않았습니다.',
	'noOutcomesInstructor': '{outcome, select, competencies {역량} expectations {기대} objectives {목표} outcomes {결과} standards {표준} other {표준}}의 추적 도전과제를 시작하려면, 과정 {outcome, select, competencies {역량} expectations {기대} objectives {목표} outcomes {결과} standards {표준} other {표준}}을(를) 평가된 활동에 정렬합니다.',
	'noOutcomesStudent': '어떤 {outcome, select, competencies {역량} expectations {기대} objectives {목표} outcomes {결과} standards {표준} other {표준}}도 평가되지 않았습니다.',
	'noScaleInstructor': '이{outcome, select, competencies {역량} expectations {기대} objectives {목표} outcomes {결과} standards {표준} other {표준}}을(를) 성취하기 위해 학습자 진행 상황을 보려면, 성취 척도를 생성하고 선택합니다.',
	'noScaleStudent': '{outcome, select, competencies {역량} expectations {기대} objectives {목표} outcomes {결과} standards {표준} other {표준}}에 대한 성취를 측정하기 위해 어떠한 척도도 설정되지 않았습니다.',
	'noSearchResults': '“{searchTerm}”에 대한 검색 결과가 없습니다.',
	'notAssessed': '평가되지 않음',
	'numSearchResults': '"{searchTerm}"에 대한 {numResults} 검색 {numResults, plural, =1 {result} other {results}}',
	'outcomesListDescription': '{outcome, select, competencies {역량} expectations {기대} objectives {목표} outcomes {결과} standards {표준} other {표준}} 목록',
	'outcomesListLoading': '로드 중...',
	'outcomesListLoadingComplete': '로드 완료',
	'searchCleared': '검색 결과가 삭제되었습니다.',
	'searchHint': '검색...',
	'searchLabel': '검색',
	'trend': '추세',
	'untitled': '제목 없음'
};

/*
 * Ko lang terms
 * @polymerBehavior D2L.PolymerBehaviors.OutcomesUserProgress.LocalizeBehavior.LangKoBehavior
 */
D2L.PolymerBehaviors.OutcomesUserProgress.LocalizeBehavior.LangKoBehavior = {
	ko: window.D2L.OutcomesUserProgress.Language.Ko
};
