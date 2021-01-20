import '@polymer/polymer/polymer-legacy.js';
window.D2L = window.D2L || {};
window.D2L.PolymerBehaviors = window.D2L.PolymerBehaviors || {};
window.D2L.PolymerBehaviors.OutcomesUserProgress = window.D2L.PolymerBehaviors.OutcomesUserProgress || {};
window.D2L.PolymerBehaviors.OutcomesUserProgress.LocalizeBehavior = window.D2L.PolymerBehaviors.OutcomesUserProgress.LocalizeBehavior || {};
window.D2L.OutcomesUserProgress = window.D2L.OutcomesUserProgress || {};
window.D2L.OutcomesUserProgress.Language = window.D2L.OutcomesUserProgress.Language || {};
window.D2L.OutcomesUserProgress.Language.Ar = {
	'a11yCollapsed': 'مطوي',
	'a11yExpanded': 'موسّع',
	'bigTrendAttemptsScreenReaderString': '{numAttempts, plural, =1 {محاولة واحدة {attemptNames}} other {من المحاولات {attemptNames} و{lastAttemptName}}}',
	'bigTrendAttemptsTooltipString': '{numAttempts, plural, =1 {محاولة واحدة} other {من المحاولات}} {attemptNames}',
	'close': 'إغلاق',
	'evidence': 'الدليل',
	'headingDate': 'التاريخ',
	'headingEvidence': 'اسم الدليل',
	'headingLoa': 'مستوى التحصيل',
	'miniTrendAttemptsTooltipString': '{numAttempts, plural, =1 {محاولة واحدة} other {من المحاولات}} {attemptNames}',
	'miniTrendScreenReaderText': 'تم التقييم {numAssessed} {numAssessed, plural, =1 {مرة واحدة} other {من المرات}}: {levelNames}',
	'nodeAriaTextGroup': 'المجموعة {state}',
	'nodeAriaTextLevel': 'المستوى {level}',
	'nodeAriaTextPosition': '{position} من أصل {count}',
	'noEvidence': 'لم يتم تقييم {outcome, select, competencies {الكفاءة} expectations {التوقع} objectives {الهدف} outcomes {النتيجة} standards {المعيار} other {المعيار}} هذا بعد',
	'noOutcomesInstructor': 'لبدء تعقّب تحصيل {outcome, select, competencies {الكفاءات} expectations {التوقعات} objectives {الأهداف} outcomes {النتائج} standards {المعايير} other {المعايير}}، يجب محاذاة {outcome, select, competencies {الكفاءات} expectations {التوقعات} objectives {الأهداف} outcomes {النتائج} standards {المعايير} other {المعايير}} الخاصة بالمقرر التعليمي مع الأنشطة التي تم تقييمها.',
	'noOutcomesStudent': 'لم يتم تقييم أي {outcome, select, competencies {كفاءات} expectations {توقعات} objectives {أهداف} outcomes {نتائج} standards {معايير} other {معايير}}.',
	'noScaleInstructor': 'لعرض تقدم المتعلّم لتحقيق {outcome, select, competencies {الكفاءة} expectations {التوقع} objectives {الهدف} outcomes {النتيجة} standards {المعيار} other {المعيار}} هذا، يجب إنشاء مقياس تحصيل وتحديده.',
	'noScaleStudent': 'لم يتم تعيين أي مقياس لقياس تحقيق {outcome, select, competencies {الكفاءات} expectations {التوقعات} objectives {الأهداف} outcomes {النتائج} standards {المعايير} other {المعايير}}.',
	'noSearchResults': 'لم يتم العثور على أي نتائج للمصطلح "{searchTerm}"',
	'notAssessed': 'لم يتم التقييم',
	'numSearchResults': '{numResults} من عمليات البحث {numResults, plural, =1 {نتيجة} other {نتائج}} للمصطلح "{searchTerm}"',
	'outcomesListDescription': 'قائمة {outcome, select, competencies {الكفاءات} expectations {التوقعات} objectives {الأهداف} outcomes {النتائج} standards {المعايير} other {المعايير}}',
	'outcomesListLoading': 'يتم الآن التحميل',
	'outcomesListLoadingComplete': 'اكتمل التحميل',
	'searchCleared': 'تم مسح نتائج البحث',
	'searchHint': 'البحث...',
	'searchLabel': 'بحث',
	'trend': 'الاتجاه',
	'untitled': 'بلا عنوان'
};

/*
 * Ar lang terms
 * @polymerBehavior D2L.PolymerBehaviors.OutcomesUserProgress.LocalizeBehavior.LangArBehavior
 */
D2L.PolymerBehaviors.OutcomesUserProgress.LocalizeBehavior.LangArBehavior = {
	ar: window.D2L.OutcomesUserProgress.Language.Ar
};
