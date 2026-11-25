const slides = [...document.querySelectorAll(".slide")];
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const counter = document.getElementById("counter");
const progressFill = document.getElementById("progressFill");
const notesPanel = document.getElementById("notesPanel");
const notesContent = document.getElementById("notesContent");
const notesMeta = document.getElementById("notesMeta");
let current = 0;

const notes = [
  "<p><strong>افتتاح وترحيب:</strong> رحّب بالأعضاء وعرّفهم إن دي أول سيشن في Phase 02: Web Development Essentials.</p><p>قولهم إننا النهارده هننقل طريقة تفكيرنا من مجرد كتابة HTML وCSS إلى إننا نعرف ندير شغلنا باحتراف ونضيف تفاعل للمواقع.</p><p><strong>مثال:</strong> عندنا portfolio عملناه قبل كده؛ هنتعلم نحفظ تاريخ التعديلات بتاعه، وبعدها نخلي الموقع يطبع رسالة من JavaScript.</p><p><strong>اسأل:</strong> مين استخدم Git قبل كده؟ ومين جرّب JavaScript؟ بعد الترحيب انتقل للـ roadmap.</p>",
  "<p><strong>اشرح الرحلة:</strong> السيشن متقسمة لأربع مراحل: نفهم يعني إيه Version Control، وبعدها نستخدم Git وGitHub، ثم نبدأ أساسيات JavaScript، وفي الآخر نطبّق الاتنين على مشروع قديم.</p><p>وضّح إن أول جزئين مرتبطين بإدارة المشروع، والجزء التاني بيضيف سلوك للموقع.</p><p><strong>اسأل:</strong> إيه أكتر حاجة متحمسين تتعلموها؟ خُد إجابتين وبعدين ادخل على المشكلة اللي Git بيحلها.</p>",
  "<p><strong>ابدأ بموقف واقعي:</strong> تخيل إنك عدّلت الـ portfolio ومسحت section مهمة بالغلط، أو عملت تغيير بوّظ شكل الصفحة.</p><p>اسأل الأسئلة اللي على الشمال وسيب الأعضاء يفكروا في حلول. وضّح إن الاحتفاظ بنسخ كتير باسم final وfinal2 مش حل عملي.</p><p><strong>بسّط VCS:</strong> هو نظام بيسجل التغييرات مع الوقت، فممكن نراجع التاريخ ونرجع لنسخة أقدم ونعرف مين غيّر إيه. Git أداة Version Control مشهورة جدًا.</p><p>لما الفكرة توصل، انتقل للفرق بين Git وGitHub.</p>",
  "<p><strong>النقطة الأساسية:</strong> Git هو الأداة اللي بتتابع تاريخ التعديلات على جهازك، أما GitHub فهو منصة على الإنترنت بنستضيف عليها Git repositories ونتعاون من خلالها.</p><p>أكد إن Git يقدر يشتغل من غير GitHub. GitHub مش هو Git نفسه؛ هو خدمة بتستضيف المستودع وبتضيف أدوات تعاون زي Pull Requests وIssues.</p><p><strong>اسأل:</strong> هل أقدر أعمل commit وأنا offline؟ أيوه، لأن الـ commit بيتسجل محليًا. بعد كده وضّح المصطلحات الأساسية.</p>",
  "<p><strong>استخدم مثال واحد طول الشرح:</strong> فولدر portfolio بتاع العضو هو الـ Repository لما Git يتابعه. الملفات اللي بيعدلها دلوقتي موجودة في Working Directory.</p><p>لما يختار تغييرات معينة بـ git add بتروح للـ Staging Area. ولما يعمل git commit بيحفظ Snapshot في تاريخ المشروع المحلي. والـ Remote Repository نسخة مستضافة في مكان تاني زي GitHub.</p><p><strong>اسأل:</strong> هل مجرد تعديل الملف معناه إنه اتحفظ في commit؟ لأ. لازم staging وبعدها commit. انتقل للرسم.</p>",
  "<p><strong>دي من أهم سلايدات السيشن:</strong> امشي على الأسهم واحدة واحدة. أولًا بنعدّل الملفات في Working Directory. بعد كده git status يساعدنا نشوف حالة التغييرات.</p><p>بـ git add بنختار التغييرات اللي عايزين ندخلها في الـ commit. بـ git commit بنحفظها في التاريخ المحلي. وأخيرًا git push بيبعت الـ commits للـ Remote Repository.</p><p><strong>اسأل:</strong> لو عملت git add بس، هل التغييرات ظهرت على GitHub؟ لأ. لازم commit وبعده push. خليك متأكد إنهم فاهمين الفرق بين التلات أوامر.</p>",
  "<p><strong>اعمل demo لو متاح:</strong> افتح Terminal جوه فولدر مشروع تجريبي. ابدأ بـ git --version عشان نتأكد إن Git متثبت.</p><p>نفّذ git init واشرح إنه بيبدأ تتبع المشروع كمستودع Git، وغالبًا بنستخدمه مرة واحدة عند بداية المشروع. بعد كده git status عشان نشوف الحالة.</p><p>قارن git add index.html اللي بيجهز ملف محدد، مع git add . اللي بيجهز التغييرات في الفولدر الحالي والـ subfolders. نبّههم يراجعوا git status قبل ما يعملوا commit.</p><p><strong>اسأل:</strong> لو عايز تضيف ملف واحد بس، تستخدم أنهي أمر؟</p>",
  "<p><strong>اشرح commit كعلامة حفظ مفهومة:</strong> مش كل تعديل صغير لازم يبقى commit منفصل، لكن كل commit يفضّل يمثل تغيير واضح ومفيد.</p><p>نفّذ التسلسل: git add . ثم git commit -m برسالة واضحة، وبعدها git log لمراجعة التاريخ.</p><p>قارن update أو final برسائل زي Add homepage layout وFix navigation links. الرسالة الجيدة بتقول إيه اللي اتغير، وده بيسهّل علينا وعلى أي حد معانا نفهم تاريخ المشروع.</p><p><strong>اسأل:</strong> ليه final2 مش وصف مفيد؟ خُد إجابة أو اتنين.</p>",
  "<p><strong>اربط المحلي بالإنترنت:</strong> الأول بننشئ repository على GitHub، وبعدها بناخد رابط المستودع ونضيفه عندنا كـ remote اسمه origin.</p><p>اشرح branch -M main: إعادة تسمية الفرع الحالي إلى main. ثم remote add origin لإضافة عنوان المستودع البعيد. ثم push -u origin main لإرسال الفرع وضبط upstream tracking.</p><p>نبّه إن لازم يستبدلوا YOUR_REPOSITORY_URL بالرابط الحقيقي، وممكن يحتاجوا authentication. لو مستودع GitHub فيه commits من قبل، خطوات أول push ممكن تختلف.</p><p>بعد الإعداد الأول، غالبًا الدورة المعتادة: add ثم commit ثم push.</p>",
  "<p><strong>ما تكشفش الإجابة فورًا.</strong> اديهم دقيقة يفكروا أو يكتبوا الترتيب في الشات.</p><p>خليهم يلاحظوا إن مفيش معنى نعمل staging قبل ما نعدّل الملفات، ومفيش معنى نعمل push قبل ما يبقى عندنا commit.</p><p>بعد مشاركة الإجابات اضغط Reveal the correct order. امشِ على الأربع خطوات: Modify → Stage → Commit → Push.</p><p><strong>اسأل:</strong> أنهي خطوة بتوصل الشغل من جهازنا لـ GitHub؟ الإجابة push.</p>",
  "<p><strong>اعمل bridge من اللي يعرفوه:</strong> HTML مسؤول عن الهيكل والمحتوى، CSS مسؤول عن الشكل والتنسيق، وJavaScript مسؤولة عن السلوك والمنطق والتفاعل.</p><p>استخدم مثال الزر: HTML بيعمل الزر، CSS بيخليه شكله مناسب، وJavaScript بتحدد إيه اللي يحصل لما المستخدم يضغط عليه.</p><p>اذكر أمثلة قريبة: التعامل مع click، التحقق من مدخلات form، تحديث محتوى الصفحة، وإظهار menu تفاعلية. من غير ما تدخل في تفاصيل DOM أو functions في السيشن دي.</p><p><strong>اسأل:</strong> لو الزر شكله حلو لكن مفيش حاجة بتحصل عند الضغط، ناقصنا إيه؟</p>",
  "<p><strong>اشرح تنظيم الملفات:</strong> بدل ما نكتب JavaScript جوه HTML، هنخليها في ملف مستقل اسمه script.js عشان المشروع يبقى منظم وأسهل في الصيانة.</p><p>ورّيهم إن script src بيربط ملف JavaScript بالصفحة، وإن src لازم يحتوي المسار الصحيح. وضع script قبل قفلة body طريقة بسيطة للمبتدئين لأن عناصر الصفحة بتكون اتقرأت قبل تنفيذ السكريبت.</p><p>اشرح إن defer اختيار شائع تاني مع script داخل head، وبيأجل التنفيذ لحد ما HTML يتعمله parsing.</p><p><strong>اسأل:</strong> لو اسم الملف script.js لكن كتبنا scrpt.js في المسار، إيه المتوقع؟ الملف مش هيتحمّل بشكل صحيح.</p>",
  "<p><strong>ابدأ بتشبيه:</strong> المتغير اسم بنستخدمه عشان نوصل لقيمة مخزنة. let مناسب لما نتوقع نغيّر القيمة، وconst لما مش هنسمح بإعادة إسناد المتغير.</p><p>ورّيهم مثال username اللي اتغير من Mahmoud إلى Ahmed، وقارنه بـ community اللي فضل SCCI.</p><p>عدّي على الأنواع: String نص، Number رقم، Boolean true/false، Undefined متغير اتعرّف من غير قيمة، وNull قيمة مقصودة معناها مفيش قيمة.</p><p>وضّح بدقة إن const بيمنع إعادة إسناد الـ binding، لكنه مش معناه إن object أو array مستحيل يتغيروا.</p><p><strong>اسأل:</strong> اسم المجتمع الثابت نختار له let ولا const؟ وليه؟</p>",
  "<p><strong>اعرض الفكرة عمليًا:</strong> الـ Browser Console جزء من Developer Tools بنشوف فيه رسائل JavaScript والأخطاء والقيم اللي بنطبعها.</p><p>افتح صفحة بسيطة، واكتب console.log(\"Hello SCCI!\") في ملف script.js، وبعدها افتح Inspect ثم Console وورّيهم النتيجة.</p><p>اشرح إن console.log أداة للتجربة وفحص القيم أثناء debugging، مش عنصر بيظهر للمستخدم على الصفحة.</p><p>اذكر اختصار Chrome على Windows: Ctrl + Shift + J، وعلى Mac: Command + Option + J.</p><p><strong>اطلب منهم:</strong> يطبعوا اسمهم ورقم أو قيمة بسيطة من عندهم ويتأكدوا إنها ظهرت.</p>",
  "<p><strong>المهمة التطبيقية (Assignment):</strong> دي الخطوة العملية اللي الأعضاء هيطبقوها بنفسهم بعد السيشن لنقل شغلهم من مجرد كود محلي إلى مشروع حي ومنشور.</p><p>أكّد على المتطلبات: حساب GitHub، رفع المشروع وتنظيمه، كتابة README.md محترف وواضح، وتفعيل GitHub Pages للتأكد من إن الموقع شغال أونلاين.</p><p>وضّح أهمية ربط المشروع في الـ Portfolio الخاص بيهم برابط الريبو والموقع والـ screenshot.</p><p><strong>التسليمات:</strong> رابط GitHub، رابط الموقع الحي، رابط الـ Portfolio، واسكرين شوت.</p>",
  "<p><strong>اقفل بمراجعة سريعة:</strong> اسأل عضو يشرح الفرق بين Git وGitHub، وعضو تاني يرتب add وcommit وpush من غير ما يبص على السلايد.</p><p>راجع نواتج التعلم: فهم workflow، ربط JavaScript بـ HTML، المتغيرات والـ data types، واستخدام console.log.</p><p>وضّح إن branching وPull Requests و.gitignore وmerge conflicts موضوعات self-study وليست متطلبات التطبيق الأساسي النهارده.</p><p><strong>رسالة الختام:</strong> شجعهم إنهم ما يكتفوش بكتابة الكود؛ يتعلموا يديروه ويفهموه ويحسنوه. اشكرهم وذكّرهم بالتاسك العملي.</p>"
];

function renderNotes() {
  notesMeta.textContent = `SLIDE ${String(current + 1).padStart(2, "0")} / ${slides.length}`;
  notesContent.innerHTML = notes[current];
}
function goTo(index, force = false) {
  const next = Math.max(0, Math.min(slides.length - 1, index));
  if (next === current && !force) return;
  slides[current].classList.remove("active");
  current = next;
  slides[current].classList.add("active");
  counter.innerHTML = `${String(current + 1).padStart(2, "0")} <i>/</i> ${String(slides.length).padStart(2, "0")}`;
  progressFill.style.width = `${((current + 1) / slides.length) * 100}%`;
  prevBtn.disabled = current === 0;
  nextBtn.disabled = current === slides.length - 1;
  renderNotes();
  if (notesPanel.classList.contains("open")) notesPanel.setAttribute("aria-hidden", "false");
}
function toggleNotes(force) {
  const open = typeof force === "boolean" ? force : !notesPanel.classList.contains("open");
  notesPanel.classList.toggle("open", open);
  notesPanel.setAttribute("aria-hidden", String(!open));
  document.getElementById("notesBtn").setAttribute("aria-pressed", String(open));
}
prevBtn.addEventListener("click", () => goTo(current - 1));
nextBtn.addEventListener("click", () => goTo(current + 1));
document.getElementById("notesBtn").addEventListener("click", () => toggleNotes());
document.getElementById("closeNotes").addEventListener("click", () => toggleNotes(false));
document.getElementById("fullBtn").addEventListener("click", async () => {
  try {
    if (!document.fullscreenElement) await document.documentElement.requestFullscreen();
    else await document.exitFullscreen();
  } catch (error) { console.warn("Fullscreen is unavailable in this browser.", error); }
});
document.getElementById("revealAnswer").addEventListener("click", (event) => {
  const answer = document.getElementById("challengeAnswer");
  answer.hidden = false;
  event.currentTarget.textContent = "Answer revealed";
  event.currentTarget.disabled = true;
});
document.addEventListener("keydown", (event) => {
  const target = event.target;
  if (target && (target.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName))) return;
  if (event.altKey || event.ctrlKey || event.metaKey) return;
  if (event.key === "ArrowRight" || event.key === " ") { event.preventDefault(); goTo(current + 1); }
  else if (event.key === "ArrowLeft") { event.preventDefault(); goTo(current - 1); }
  else if (event.key === "Home") { event.preventDefault(); goTo(0); }
  else if (event.key === "End") { event.preventDefault(); goTo(slides.length - 1); }
  else if (event.key.toLowerCase() === "n") { event.preventDefault(); toggleNotes(); }
  else if (event.key.toLowerCase() === "f") { event.preventDefault(); document.getElementById("fullBtn").click(); }
});
document.addEventListener("fullscreenchange", () => {
  document.getElementById("fullBtn").textContent = document.fullscreenElement ? "⤢" : "⛶";
});
// Initialize all controls and the progress indicator on first load.
renderNotes();
goTo(0, true);
