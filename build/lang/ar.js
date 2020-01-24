import '@polymer/polymer/polymer-legacy.js';
window.D2L = window.D2L || {};
window.D2L.PolymerBehaviors = window.D2L.PolymerBehaviors || {};
window.D2L.PolymerBehaviors.OutcomesUserProgress = window.D2L.PolymerBehaviors.OutcomesUserProgress || {};
window.D2L.PolymerBehaviors.OutcomesUserProgress.LocalizeBehavior = window.D2L.PolymerBehaviors.OutcomesUserProgress.LocalizeBehavior || {};

/*
 * Ar lang terms
 * @polymerBehavior D2L.PolymerBehaviors.OutcomesUserProgress.LocalizeBehavior.LangArBehavior
 */
D2L.PolymerBehaviors.OutcomesUserProgress.LocalizeBehavior.LangArBehavior = {
	ar: {
		'bigTrendAttemptsScreenReaderString': '{numAttempts, plural, one {Attempt {أسماء المحاولات}} other {Attempts {أسماء المحاولات} و{اسم المحاولة الأخيرة}}}',
		'bigTrendAttemptsTooltipString': '{numAttempts, plural, one {محاولة} other { من المحاولات}} {attemptNames}',
		'close': 'إغلاق',
		'evidence': 'دليل',
		'headingDate': 'التاريخ',
		'headingEvidence': 'اسم الدليل',
		'headingLoa': 'مستوى التحصيل',
		'miniTrendAttemptsTooltipString': '{numAttempts, plural, one {محاولة} other { من المحاولات}} {attemptNames}',
		'miniTrendScreenReaderText': 'Assessed {numAssessed} {numAssessed, plural, one {مرة} other {من المرات}}: {levelNames}',
		'noEvidence': 'لم يتم تقييم {outcome،‏ select،‏ competencies {الكفاءة} expectations {التوقع} objectives {الهدف} outcomes {النتيجة} standards {المعيار} other {المعيار}} هذا بعد',
		'noOutcomesInstructor': 'لبدء تعقّب تحصيل {outcome،‏ select،‏ competencies {الكفاءات} expectations {التوقعات} objectives {الأهداف} outcomes {النتائج} standards {المعايير} other {المعايير}}، يجب محاذاة {outcome،‏ select،‏ competencies {الكفاءات} expectations {التوقعات} objectives {الأهداف} outcomes {النتائج} standards {المعايير} other {المعايير}} الخاصة بالمقرر التعليمي مع الأنشطة التي تم تقييمها.',
		'noOutcomesStudent': 'لم يتم تقييم أي {outcome, select, competencies {كفاءات} expectations {توقعات} objectives {أهداف} outcomes {نتائج} standards {معايير} other {معايير}}.',
		'noScaleInstructor': 'لعرض تقدم المتعلّم لتحقيق {outcome, select, competencies {الكفاءة} expectations {التوقع} objectives {الهدف} outcomes {النتيجة} standards {المعيار} other {المعيار}} هذا، يجب إنشاء مقياس تحصيل وتحديده.',
		'noScaleStudent': 'لم يتم تعيين أي مقياس لقياس تحقيق {outcome, select, competencies {الكفاءات} expectations {التوقعات} objectives {الأهداف} outcomes {النتائج} standards {المعايير} other {المعايير}}.',
		'notAssessed': 'لم يتم التقييم',
		'trend': 'الاتجاه',
		'untitled': 'بلا عنوان'
	}
};
