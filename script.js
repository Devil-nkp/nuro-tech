const journeyData = [
  ["01","DIAGNOSE","Understand the learner's current capability, goals, confidence, schedule, language preference and existing evidence before teaching starts."],
  ["02","MAP","Convert the diagnostic into a role-aware Skill Graph and learning plan instead of placing every learner into the same sequence."],
  ["03","LEARN","Use live 1:1 instruction for concept building, demonstration, questioning and guided practice."],
  ["04","PRACTICE","Assign deliberate practice between sessions, with difficulty calibrated to the learner's current mastery."],
  ["05","VERIFY","Use supervised tasks, explain-back and applied assessment to confirm that progress represents real capability."],
  ["06","BUILD","Create portfolio projects that integrate multiple skills around realistic problems and datasets."],
  ["07","DEFEND","Ask the learner to explain, modify and reason about project decisions live—including how AI tools were used."],
  ["08","PREPARE","Develop aptitude, communication, resume, GitHub, portfolio and interview capability alongside technical skills."],
  ["09","APPLY","Support a structured, evidence-based job application process without promising guaranteed outcomes."],
  ["10","IMPROVE","Feed assessment, interview and application signals back into the learner's next practice and mentoring priorities."]
];

const journey = document.getElementById('journeySteps');
journeyData.forEach((step,i)=>{
  const el=document.createElement('div');el.className='journey-step'+(i===0?' active':'');
  el.innerHTML=`<span>${step[0]}</span><strong>${step[1]}</strong>`;el.dataset.i=i;journey.appendChild(el);
});
const detail=document.createElement('div');detail.className='journey-detail';journey.appendChild(detail);
function setJourney(i){
  document.querySelectorAll('.journey-step').forEach((el,idx)=>el.classList.toggle('active',idx===i));
  const s=journeyData[i];detail.innerHTML=`<b>${s[0]} • ${s[1]}</b><p>${s[2]}</p>`;
  document.getElementById('journeyProgress').style.width=`${(i/(journeyData.length-1))*100}%`;
}
setJourney(0);
journey.addEventListener('click',e=>{const step=e.target.closest('.journey-step');if(step)setJourney(+step.dataset.i)});

const curriculum = {
  placement:{label:'Placement',summary:'Quantitative aptitude + logical reasoning + verbal ability + company-pattern practice + interview readiness.',cols:{
    'Quantitative Aptitude':['Number Systems','HCF & LCM','Percentages','Profit, Loss & Discount','Ratio & Proportion','Averages','Time & Work','Pipes & Cisterns','Time, Speed & Distance','Problems on Trains','Boats & Streams','Simple & Compound Interest','Mixtures & Alligation','Partnership','Permutations & Combinations','Probability','Data Interpretation','Data Sufficiency','Ages','Algebra basics','Geometry & Mensuration'],
    'Logical Reasoning':['Number & Alphabet Series','Coding & Decoding','Blood Relations','Direction Sense','Seating Arrangement','Puzzles','Syllogisms','Statements & Conclusions','Assumptions','Analogies','Odd One Out','Venn Diagrams','Clocks & Calendars','Ranking & Ordering','Analytical reasoning'],
    'Verbal & Communication':['Grammar','Vocabulary','Synonyms & Antonyms','Sentence Correction','Error Detection','Fill in the Blanks','Para Jumbles','Reading Comprehension','Sentence Completion','Professional writing','Spoken communication','Group discussion readiness'],
    'Placement Preparation':['Company-pattern aptitude practice','Timed mock tests','Time-management strategies','Interview aptitude','Coding foundations','SQL fundamentals','OOP / DBMS / OS / Networks overview','Resume','LinkedIn','GitHub','Technical interviews','Project interviews','Behavioral interviews','HR interviews','Job-search strategy']
  }},
  python:{label:'Python',summary:'From beginner syntax to problem solving, software foundations, APIs, data tools and interview-oriented coding.',cols:{
    'Python Fundamentals':['Introduction to Python','Variables & Data Types','Input & Output','Operators','Conditional Statements','Loops','Functions','Recursion','Strings'],
    'Data Structures':['Lists','Tuples','Sets','Dictionaries','Comprehensions','Stacks & Queues','Arrays & Strings','Complexity intuition'],
    'Advanced Python':['*args & **kwargs','Lambda','map / filter / reduce','Exception Handling','File Handling','Modules & Packages','OOP','Classes & Objects','Inheritance','Polymorphism','Encapsulation','Abstraction','Testing basics','Debugging'],
    'Practical & Career':['Searching','Sorting','Pattern programming','Coding challenges','Interview coding','Git & GitHub','NumPy','Pandas','Matplotlib','Data files: CSV / Excel / JSON','REST APIs','FastAPI basics','SQL/database integration','Mini projects','Portfolio project']
  }},
  analytics:{label:'Data Analytics',summary:'An integrated analyst pathway: spreadsheets, SQL, Python, statistics, BI, business analysis and portfolio projects.',cols:{
    'Excel':['Excel Fundamentals','Data Cleaning','Formulas & Functions','VLOOKUP / XLOOKUP','INDEX & MATCH','Conditional Formatting','Pivot Tables','Charts','Dashboards','Business spreadsheet modeling'],
    'SQL':['Database Fundamentals','SELECT','WHERE & ORDER BY','GROUP BY & HAVING','Aggregates','Joins','Subqueries','CTEs','Window Functions','CASE Statements','Views','Data Manipulation','SQL interview practice'],
    'Python & Statistics':['NumPy','Pandas','Data Cleaning','Transformation','EDA','Visualization','Matplotlib','Seaborn','Descriptive Statistics','Probability','Distributions','Correlation','Regression basics','Hypothesis Testing','A/B Testing basics'],
    'Power BI & Business':['Data Import','Power Query','Data Cleaning','Data Modeling','Relationships','DAX Basics','Calculated Columns','Measures','Interactive Dashboards','Business Reports','KPI Analysis','Sales Analysis','Customer Analysis','Financial Analysis','HR Analytics','Marketing Analytics','Business problem solving','End-to-end analytics project']
  }},
  aiml:{label:'AI & ML',summary:'Machine learning foundations through deep learning, GenAI application engineering, RAG, agents and deployment.',cols:{
    'Foundations & Math':['Introduction to AI','AI vs ML vs Deep Learning','AI applications','ML workflow','Types of ML','Descriptive Statistics','Probability','Mean / Median / Mode','Variance / Std Dev','Correlation / Covariance','Linear Algebra basics','Data distributions'],
    'Data & Classical ML':['Data Cleaning','Missing Values','Outlier Detection','Encoding','Feature Scaling','Feature Engineering','Train/Test Split','Linear Regression','Multiple Regression','Logistic Regression','KNN','Decision Trees','Random Forest','SVM','Naive Bayes','K-Means','Hierarchical Clustering','PCA'],
    'Evaluation & Deep Learning':['Accuracy','Precision','Recall','F1','Confusion Matrix','ROC-AUC','MAE / MSE / RMSE','Cross Validation','Hyperparameter Tuning','Neural Networks','Perceptron','Activation Functions','Forward / Backpropagation','CNN','RNN','LSTM','TensorFlow / PyTorch basics'],
    'Generative AI Engineering':['LLM Fundamentals','Prompt Engineering','Embeddings','Vector Databases','RAG','RAG evaluation','AI Agents','Tool use / function calling','LLM APIs','Building AI Applications','Model deployment','Responsible AI','AI observability basics','End-to-end ML project','GenAI portfolio project','GitHub development']
  }},
  fullstack:{label:'Full-Stack AI',summary:'Build-next pathway connecting software engineering, APIs, web interfaces, databases and GenAI systems.',cols:{
    'Software Core':['Python depth','DSA foundations','Git / GitHub','Testing','Debugging','System design basics','Clean code'],
    'Backend':['REST APIs','FastAPI','Authentication','SQL databases','ORM basics','Caching concepts','Async concepts'],
    'Frontend':['HTML / CSS / JavaScript','React fundamentals','State / API integration','Responsive interfaces','Accessible UI'],
    'AI Application Layer':['LLM APIs','RAG','Agents','Evaluation','Prompt / context design','Observability','Deployment','Full-stack AI capstone']
  }}
};
const tabs=document.getElementById('curriculumTabs'),panel=document.getElementById('curriculumPanel');
Object.entries(curriculum).forEach(([key,v],i)=>{const b=document.createElement('button');b.textContent=v.label;b.dataset.key=key;b.className=i===0?'active':'';tabs.appendChild(b)});
function renderCurriculum(key){
  [...tabs.children].forEach(b=>b.classList.toggle('active',b.dataset.key===key));
  const c=curriculum[key];panel.innerHTML='';
  Object.entries(c.cols).forEach(([title,items])=>{const col=document.createElement('article');col.className='curriculum-column';col.innerHTML=`<h3>${title}</h3><ul>${items.map(x=>`<li>${x}</li>`).join('')}</ul>`;panel.appendChild(col)});
  const summary=document.createElement('div');summary.className='curriculum-summary';summary.innerHTML=`<span><strong>${c.label}:</strong> ${c.summary}</span><a class="text-cta" href="#diagnostic">Build a personalized version →</a>`;panel.appendChild(summary);
}
renderCurriculum('placement');tabs.addEventListener('click',e=>{if(e.target.dataset.key)renderCurriculum(e.target.dataset.key)});
document.querySelectorAll('.orbit-card[data-program]').forEach(b=>b.addEventListener('click',()=>{const key=b.dataset.program;if(curriculum[key]){renderCurriculum(key);document.getElementById('curriculum').scrollIntoView({behavior:'smooth'})}}));

const roleData={
 student:[
  ['DATA PATH','Become Data-Analyst Ready','For students who want a structured route from fundamentals to portfolio evidence.',['Career Core','Excel','SQL','Python','Statistics','Power BI','Business Cases','Portfolio','SQL Interview'], 'Outcome: analyst-ready evidence pathway'],
  ['SOFTWARE PATH','Build Software Foundations','For students who need strong programming and interview fundamentals.',['Python','Problem Solving','DSA','Git','Testing','Databases','APIs','Projects','Coding Interview'], 'Outcome: software foundation + portfolio'],
  ['AI PATH','Build Toward Applied AI Roles','For students ready to combine programming, ML and modern GenAI engineering.',['Python','Math','ML','Deep Learning','LLMs','RAG','Agents','Deployment','AI Portfolio'], 'Outcome: applied AI portfolio pathway']
 ],
 graduate:[
  ['FAST-TRACK DATA','Graduate → Data Analyst','Compress foundations where evidence already exists, spend more time on projects and interviews.',['Diagnostic','SQL','Python','Power BI','Case Work','Portfolio','Mocks','Applications'],'Outcome: faster evidence-to-interview transition'],
  ['PLACEMENT CORE','Graduate Placement Accelerator','Fix aptitude, coding, SQL, communication and interview gaps in one integrated plan.',['Aptitude','Coding','SQL','CS Basics','Resume','Projects','Mocks','Applications'],'Outcome: placement-readiness plan'],
  ['APPLIED AI','Graduate → AI Developer','Build practical AI application capability around existing technical foundations.',['Python Audit','ML','LLMs','RAG','Agents','APIs','Deployment','Defense'],'Outcome: AI application portfolio']
 ],
 switcher:[
  ['CAREER RESET','Career Switcher → Data','Begin with fundamentals but use work experience as business-context leverage.',['Role Map','Excel','SQL','Python','Statistics','Power BI','Domain Case','Portfolio'],'Outcome: evidence-backed transition story'],
  ['AUTOMATION PATH','Career Switcher → Python','Focus on useful automation, APIs and backend foundations before deeper CS topics.',['Python','Automation','Git','SQL','APIs','Testing','Project','Interview'],'Outcome: practical developer transition'],
  ['AI APPLICATIONS','Career Switcher → GenAI','Prioritize application building, evaluation and deployment instead of research-depth ML first.',['Python','LLM APIs','RAG','Agents','Evaluation','Backend','Deployment','Portfolio'],'Outcome: GenAI application pathway']
 ],
 professional:[
  ['UPSKILL','Working Professional → Analytics','Use work datasets and business problems where permitted.',['Diagnostic','Advanced Excel','SQL','Python','BI','Statistics','Work Case','Presentation'],'Outcome: applied workplace capability'],
  ['AI AT WORK','Working Professional → Applied AI','Use GenAI responsibly for domain workflows, automation and internal tools.',['AI Foundations','Prompting','LLM APIs','RAG','Agents','Evaluation','Automation','Capstone'],'Outcome: job-relevant AI application skill'],
  ['LEADERSHIP DATA','Business / Tech Professional','Build enough technical depth to reason about data and AI decisions.',['Data Literacy','SQL','Metrics','Experimentation','AI Systems','Risk','Product Thinking','Case Defense'],'Outcome: technical decision fluency']
 ]
};
const roleGrid=document.getElementById('roleGrid');function renderRoles(p){roleGrid.innerHTML=roleData[p].map(r=>`<article class="role-card"><div class="role-kicker">${r[0]}</div><h3>${r[1]}</h3><p>${r[2]}</p><div class="role-path">${r[3].map(x=>`<span>${x}</span>`).join('')}</div><div class="role-outcome"><strong>${r[4]}</strong></div></article>`).join('')}
renderRoles('student');document.querySelector('.persona-switch').addEventListener('click',e=>{if(e.target.dataset.persona){document.querySelectorAll('.persona-switch button').forEach(b=>b.classList.remove('active'));e.target.classList.add('active');renderRoles(e.target.dataset.persona)}});

const sessionData=[
  ['00–10','Recall + previous assignment','Recover key concepts, inspect previous errors and set today\'s learning target.'],
  ['10–30','Concept building','Explain only what is necessary, connect it to prior knowledge and question for understanding.'],
  ['30–65','Guided implementation','Learner codes, solves or analyzes while the mentor gives progressively lighter support.'],
  ['65–80','Independent challenge','Remove scaffolding and test whether the learner can perform without step-by-step prompting.'],
  ['80–90','Explain-back + next action','Learner explains the solution, mentor updates progress evidence and assigns focused practice.']
];
const tl=document.getElementById('sessionTimeline');sessionData.forEach((s,i)=>{const d=document.createElement('div');d.className='time-step'+(i===0?' active':'');d.innerHTML=`<span>${s[0]}</span><strong>${s[1]}</strong><p>${s[2]}</p>`;d.dataset.i=i;tl.appendChild(d)});
tl.addEventListener('click',e=>{const d=e.target.closest('.time-step');if(!d)return;document.querySelectorAll('.time-step').forEach(x=>x.classList.remove('active'));d.classList.add('active');const s=sessionData[+d.dataset.i];document.getElementById('sessionFocusTitle').textContent=s[1];document.getElementById('sessionFocusCopy').textContent=s[2]});

const graphTooltip=document.getElementById('graphTooltip');document.querySelectorAll('.node').forEach(n=>{n.addEventListener('mouseenter',()=>{graphTooltip.innerHTML=`<span>${n.dataset.level}</span><strong>${n.dataset.title}</strong><small>Evidence: ${n.dataset.evidence}</small>`})});

document.getElementById('simulateMastery').addEventListener('click',()=>{document.getElementById('heroSkillMeter').style.width='74%';document.getElementById('heroSkillLevel').textContent='Level 3';const p=document.getElementById('evidencePill');p.style.opacity='1';p.textContent='Evidence +1 • independent correction';document.querySelector('.chip-one').textContent='Level 2 → Level 3';document.querySelector('.chip-two').textContent='Independent ✓'});

const languageCopy={
 tamil:{label:'MENTOR • TAMIL-BRIDGED EXPLANATION',html:'“<code>List</code> என்பது Python-ல் <code>ordered</code> மற்றும் <code>mutable</code> collection. முதலில் concept-ஐ தமிழில் தெளிவாகப் புரிந்துகொள்வோம்; code, variable names, documentation எல்லாம் technical English-ல் வைத்துக்கொள்வோம்.”'},
 telugu:{label:'MENTOR • TELUGU-BRIDGED EXPLANATION',html:'“Python లో <code>List</code> అనేది <code>ordered</code>, <code>mutable</code> collection. Concept ని తెలుగు సహాయంతో స్పష్టంగా అర్థం చేసుకుని, code మరియు technical vocabulary ని English లోనే ఉపయోగిద్దాం.”'},
 english:{label:'MENTOR • ENGLISH',html:'“A Python <code>List</code> is an <code>ordered</code>, <code>mutable</code> collection. We will make the concept clear first, then practice using the same technical language you will need in documentation and interviews.”'}
};
function setLang(k){const l=languageCopy[k];document.getElementById('languageDialogue').innerHTML=`<span>${l.label}</span><p>${l.html}</p>`;document.querySelectorAll('.language-tabs button').forEach(b=>b.classList.toggle('active',b.dataset.lang===k))}setLang('tamil');document.querySelector('.language-tabs').addEventListener('click',e=>{if(e.target.dataset.lang)setLang(e.target.dataset.lang)});

const faqData=[
 ['Is all teaching really 1:1?','The intended launch model is live one-to-one core instruction. Nuro may use self-practice, assessments and supporting resources between sessions, but the primary teaching experience is designed around an individual learner and mentor.'],
 ['Do you provide recorded classes?','Recorded material can support revision, but Nuro should not position prerecorded lessons as the core product. The differentiated value is live personal instruction, feedback and measurable progress.'],
 ['How is progress measured?','Through a Skill Graph combining live-session evidence, assignments, assessments, projects, explain-back, remediation and—where relevant—mock interview performance.'],
 ['Can I learn in Tamil or Telugu?','The model supports English, Tamil and Telugu live instruction. Regional languages can be used for deeper conceptual understanding while technical vocabulary, code, documentation and job-facing outputs progressively move toward professional English.'],
 ['How are projects verified?','Important projects can include code review, explain-back, live modification, decision questioning and an AI-use declaration. The goal is to verify understanding rather than only accept a submitted repository.'],
 ['Can I use AI while learning?','Yes, when used responsibly. Nuro should teach learners to use AI, verify its output and still prove their own understanding.'],
 ['Does Nuro guarantee placement?','No. Placement outcomes depend on learner capability, market conditions, eligibility and employer decisions. Nuro can provide structured placement assistance, readiness tracking, project evidence and interview preparation without guaranteeing employment.'],
 ['Can I change mentors?','The operating model should support mentor changes when there is a genuine fit, quality or scheduling issue while preserving continuity through shared notes, the Skill Graph and learner history.'],
 ['What happens if I am struggling?','The system should detect weak areas early, assign targeted practice and use re-teaching or remediation before allowing important gaps to compound.'],
 ['Do I receive a certificate?','Completion certificates may be offered, but Nuro should emphasize stronger evidence such as verified skills, projects, assessments and a future Skill Passport.'],
 ['Which program should I choose?','Start from your target role, current skill level, time available and evidence—not from the longest course list. The diagnostic is intended to build that starting map.']
];
const faqList=document.getElementById('faqList');faqData.forEach((f,i)=>{const x=document.createElement('div');x.className='faq-item';x.innerHTML=`<button class="faq-q">${f[0]}<span>+</span></button><div class="faq-a"><p>${f[1]}</p></div>`;faqList.appendChild(x)});faqList.addEventListener('click',e=>{const q=e.target.closest('.faq-q');if(!q)return;const item=q.parentElement;item.classList.toggle('open');const a=item.querySelector('.faq-a');a.style.maxHeight=item.classList.contains('open')?a.scrollHeight+'px':'0'});

const goal=document.getElementById('goal'),exp=document.getElementById('experience'),py=document.getElementById('pythonLevel'),sql=document.getElementById('sqlLevel'),hours=document.getElementById('hours'),hoursValue=document.getElementById('hoursValue'),sample=document.getElementById('samplePath');hours.addEventListener('input',()=>hoursValue.textContent=hours.value+' hours');
function buildPath(){let steps=[];const g=goal.value;if(g==='Data Analyst'){steps=['Career Core'];if(exp.value==='Beginner')steps.push('Excel Foundations');if(sql.value==='None')steps.push('SQL Foundations');if(py.value==='None')steps.push('Python Foundations');steps.push('Statistics','Power BI','Business Project','SQL Interview','Career OS')}else if(g==='Python Developer'){steps=['Career Core'];if(py.value==='None')steps.push('Python Foundations');steps.push('Problem Solving','Git','SQL','APIs','Testing','Software Project','Coding Interview','Career OS')}else if(g==='AI / ML Engineer'){steps=['Career Core'];if(py.value!=='Comfortable')steps.push('Python Depth');steps.push('Math & Statistics','Machine Learning','Deep Learning','LLMs','RAG','Agents','AI Project Defense','Career OS')}else{steps=['Aptitude Diagnostic','Quantitative','Reasoning','Verbal','Coding / SQL Foundation','Company-Pattern Mocks','Interview Preparation','Career OS']}sample.innerHTML=steps.map((s,i)=>`${i?'<i>→</i>':''}<span>${s}</span>`).join('')}
document.getElementById('buildPath').addEventListener('click',buildPath);buildPath();

const revealObs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.08});document.querySelectorAll('.reveal').forEach(x=>revealObs.observe(x));

const sections=['how','projects','passport','career','diagnostic'];const railLinks=[...document.querySelectorAll('.scroll-rail a')];const railObs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){const idx=sections.indexOf(e.target.id);railLinks.forEach((l,i)=>l.classList.toggle('active',i===idx))}})},{rootMargin:'-40% 0px -50% 0px'});sections.forEach(id=>{const el=document.getElementById(id);if(el)railObs.observe(el)});

const menuBtn=document.getElementById('menuBtn'),navLinks=document.getElementById('navLinks');menuBtn.addEventListener('click',()=>{const open=navLinks.classList.toggle('mobile-open');menuBtn.setAttribute('aria-expanded',String(open))});navLinks.addEventListener('click',()=>{navLinks.classList.remove('mobile-open');menuBtn.setAttribute('aria-expanded','false')});

window.addEventListener('scroll',()=>{const y=window.scrollY;document.querySelector('.nav-shell').style.boxShadow=y>30?'0 12px 34px rgba(0,0,0,.18)':'none'});
