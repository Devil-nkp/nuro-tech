const slides=[...document.querySelectorAll('.hero-slide')];
const dots=[...document.querySelectorAll('#heroDots button')];
let current=0, timer;
function showSlide(i){current=(i+slides.length)%slides.length;slides.forEach((s,n)=>s.classList.toggle('active',n===current));dots.forEach((d,n)=>d.classList.toggle('active',n===current));}
function autoplay(){clearInterval(timer);timer=setInterval(()=>showSlide(current+1),6500)}
dots.forEach((d,i)=>d.addEventListener('click',()=>{showSlide(i);autoplay()}));autoplay();

const menuToggle=document.getElementById('menuToggle');const navLinks=document.getElementById('navLinks');
menuToggle?.addEventListener('click',()=>{const open=navLinks.classList.toggle('open');menuToggle.setAttribute('aria-expanded',open)});
navLinks?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));

const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

const programData={
 placement:{title:'Aptitude & Placement Preparation',groups:[['Quantitative Aptitude','Number Systems · HCF & LCM · Percentages · Profit, Loss & Discount · Ratio & Proportion · Averages · Time & Work · Pipes & Cisterns · Time, Speed & Distance · Trains · Boats & Streams · Simple & Compound Interest · Mixtures & Alligation · Partnership · Permutations & Combinations · Probability · Data Interpretation · Data Sufficiency'],['Logical Reasoning','Series · Coding & Decoding · Blood Relations · Direction Sense · Seating Arrangement · Puzzles · Syllogisms · Statements & Conclusions · Analogies · Odd One Out · Venn Diagrams · Clocks & Calendars · Ranking & Ordering'],['Verbal Ability','Grammar · Vocabulary · Synonyms & Antonyms · Sentence Correction · Error Detection · Fill in the Blanks · Para Jumbles · Reading Comprehension · Sentence Completion'],['Placement Preparation','Company-style aptitude practice · Mock tests · Time-management strategy · Interview aptitude · Resume / interview readiness']]},
 python:{title:'Python & Software Foundations',groups:[['Foundations','Python introduction · Variables & Data Types · Input / Output · Operators · Conditionals · Loops · Functions · Recursion'],['Data Structures','Strings · Lists · Tuples · Sets · Dictionaries · Comprehensions · Stack & Queue concepts'],['Advanced Python','*args / **kwargs · Lambda · map/filter/reduce · Exceptions · Files · Modules & Packages · OOP · Inheritance · Polymorphism · Encapsulation · Abstraction'],['Problem Solving & Practical Work','Patterns · Searching · Sorting · Arrays & Strings · Mathematical problems · Coding challenges · Interview questions · NumPy · Pandas · APIs · Git/GitHub · Mini projects']]},
 analytics:{title:'Data Analytics & Business Intelligence',groups:[['Excel','Fundamentals · Cleaning · Formulas · XLOOKUP · INDEX/MATCH · Conditional Formatting · Pivot Tables · Charts · Dashboards'],['SQL','SELECT · WHERE · GROUP BY · HAVING · Joins · Subqueries · CTEs · Window Functions · CASE · Views · Data Manipulation · Interview questions'],['Python & Statistics','NumPy · Pandas · Cleaning · Transformation · EDA · Visualization · Descriptive statistics · Probability · Distributions · Correlation · Regression basics · Hypothesis testing · A/B testing basics'],['Power BI & Business Analytics','Power Query · Data Modeling · Relationships · DAX · Measures · Interactive dashboards · KPI analysis · Sales · Customer · Financial · HR · Marketing analytics · End-to-end project']]},
 ai:{title:'AI / ML & Generative AI Engineering',groups:[['AI & ML Foundations','AI vs ML vs Deep Learning · ML workflow · Learning types · Descriptive statistics · Probability · Linear algebra basics · Data distributions'],['Machine Learning','Data preprocessing · Feature engineering · Linear / Logistic Regression · KNN · Decision Trees · Random Forest · SVM · Naive Bayes · Clustering · PCA'],['Evaluation & Deep Learning','Accuracy · Precision · Recall · F1 · ROC-AUC · MAE/MSE/RMSE · Cross-validation · Hyperparameter tuning · Neural Networks · CNN · RNN · LSTM · TensorFlow/PyTorch basics'],['Generative AI','LLM fundamentals · Prompt Engineering · Embeddings · Vector Databases · RAG · AI Agents · LLM APIs · AI applications · Deployment · Portfolio projects']]}
};
const modal=document.getElementById('programModal'),modalTitle=document.getElementById('modalTitle'),modalContent=document.getElementById('modalContent');
document.querySelectorAll('.program-expand').forEach(btn=>btn.addEventListener('click',()=>{const p=programData[btn.dataset.program];modalTitle.textContent=p.title;modalContent.innerHTML=p.groups.map(g=>`<section class="curriculum-group"><h3>${g[0]}</h3><p>${g[1]}</p></section>`).join('');modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}));
document.querySelectorAll('[data-close-modal]').forEach(x=>x.addEventListener('click',()=>{modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow=''}));

document.querySelectorAll('.faq-item').forEach(item=>item.addEventListener('click',()=>{document.querySelectorAll('.faq-item').forEach(x=>{if(x!==item)x.classList.remove('open')});item.classList.toggle('open')}));

const diagnosticForm=document.getElementById('diagnosticForm');const result=document.getElementById('diagnosticResult');
const paths={
 'Data Analyst':['Diagnostic Core','Excel + Data Foundations','SQL','Python / Pandas','Statistics','Power BI','Business Project','Portfolio + Analytics Interview'],
 'Python Developer':['Diagnostic Core','Python Foundations','OOP + Problem Solving','Git / GitHub','SQL + APIs','Software Project','Coding Interview Foundations','Portfolio + Interview'],
 'AI / ML Engineer':['Python + Math Diagnostic','Python for AI','Statistics + ML','Model Evaluation','Deep Learning Foundations','LLMs + Embeddings','RAG + Agents','AI Project Defense + Interview'],
 'Placement Preparation':['Aptitude Diagnostic','Quant + Reasoning','Verbal Ability','Company-style Mocks','Coding / Technical Basics','Resume + Project Story','Technical + HR Mocks','Application Readiness']
};
diagnosticForm?.addEventListener('submit',e=>{e.preventDefault();const goal=document.getElementById('goal').value;const level=document.getElementById('level').value;const time=document.getElementById('time').value;result.hidden=false;result.innerHTML=`<b>Sample ${goal} path</b><br>${paths[goal].join(' → ')}<br><br><span style="color:#64748b">Starting level: ${level} · Available time: ${time}. A real roadmap would be adjusted after a live diagnostic.</span>`});
