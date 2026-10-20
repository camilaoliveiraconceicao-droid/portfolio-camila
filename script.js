const CV_PATH='assets/documentos/Curriculo_Camila_Oliveira_Conceicao.pdf';
const expertise=[
{icon:'F',title:'FP&A',items:['Budget','Forecast','Análise de P&L','Análise de variações','Controle de custos','Análise de cenários','Modelagem financeira','Relatórios financeiros','Apoio à tomada de decisão']},
{icon:'R',title:'Reconciliação e fechamento',items:['Reconciliação financeira','Reconciliação contábil','Reconciliação bancária','Reconciliação intercompany','Fechamento mensal','Controles','Consistência das informações','Integridade das informações','Rastreabilidade']},
{icon:'A',title:'Automação financeira',items:['Python','VBA','Macros','Langflow','Power Query','Inteligência Artificial','Automação de relatórios','Automação de análises','Melhoria contínua de processos']},
{icon:'D',title:'Business Intelligence e dados',items:['Power BI','Excel Avançado','SQL','Consolidação de dados','Dashboards','Indicadores financeiros','Tratamento de bases','Análise de dados']}];
const projects=[
{id:'reconciliacoes',name:'Automação de Reconciliações Financeiras',categories:['Accounting','Reconciliação'],description:'Automação aplicada à análise e reconciliação de informações financeiras e contábeis.',tools:['Inteligência Artificial','Python','Excel'],result:'80% de redução no tempo de reconciliações.',before:['Etapas de comparação executadas manualmente','Dependência de conferência manual','Maior exposição a divergências durante a análise'],after:['Tratamento automatizado das informações','Validações e identificação de divergências','Maior consistência, integridade e rastreabilidade'],problem:'O processo de reconciliação exigia análise manual de informações e conferências repetitivas. A solução foi estruturada para apoiar a comparação, a validação e a identificação de divergências.',flow:['Entrada dos dados','Tratamento da base','Aplicação das regras','Validação','Divergências','Relatório'],tests:['Comparação com o processo manual','Testes com bases menores','Validação das divergências identificadas','Revisão da consistência das saídas']},
{id:'despesas',name:'Análise Inteligente de Despesas Corporativas',categories:['FP&A'],description:'Análise automatizada de despesas de cartão corporativo para indicar divergências e não conformidades.',tools:['Python','Inteligência Artificial','Excel'],result:'100% de eliminação do esforço manual na análise.',before:['Leitura e conferência manual das despesas','Análise individual de possíveis divergências','Dependência de revisão operacional'],after:['Análise automatizada das despesas','Sinalização de divergências e não conformidades','Saída organizada para revisão e acompanhamento'],problem:'A análise de despesas corporativas dependia de verificações manuais. A automação foi criada para estruturar a leitura dos dados e apoiar a identificação de exceções.',flow:['Importação da base','Padronização','Aplicação de critérios','Identificação de exceções','Organização dos resultados','Relatório'],tests:['Comparação com amostras revisadas manualmente','Teste de campos vazios e formatos diferentes','Validação de exceções sinalizadas','Revisão da saída consolidada']},
{id:'latam',name:'Consolidação Financeira LATAM',categories:['FP&A'],description:'Estrutura para consolidar bases financeiras de diferentes países e apoiar análises integradas.',tools:['VBA','Excel','Power Query','Langflow'],result:'Consolidação e análise de dados em uma estrutura padronizada.',before:['Bases separadas e formatos diferentes','Ajustes e consolidação manual','Conferências recorrentes antes da análise'],after:['Tratamento e padronização das bases','Consolidação estruturada','Informações organizadas para análise financeira'],problem:'A consolidação financeira precisava reunir informações de diferentes origens e estruturas. A solução organiza o tratamento e a combinação dos dados para apoiar uma leitura integrada.',flow:['Entrada por país','Padronização','Validação de campos','Consolidação','Conferência','Base final'],tests:['Teste por base de origem','Validação de campos obrigatórios','Conferência de totais antes e depois','Teste de atualização da consolidação']},
{id:'tributos',name:'Automação de Provisões Tributárias',categories:['Accounting'],description:'Automação do ciclo de provisão de PIS, COFINS e CIDE e de reclassificações contábeis.',tools:['VBA','Excel','Power Query'],result:'Processo reduzido de dois dias para duas horas.',before:['Preparação manual das informações','Cálculos e reclassificações com várias etapas','Processo com duração de dois dias'],after:['Processamento automatizado das informações','Padronização dos cálculos e saídas','Conclusão do processo em duas horas'],problem:'O ciclo de provisões tributárias e reclassificações contábeis demandava diversas etapas operacionais. A automação reorganizou o fluxo para reduzir o tempo e padronizar o processamento.',flow:['Entrada dos dados','Tratamento','Aplicação das regras','Validação','Reclassificações','Saída final'],tests:['Comparação com o cálculo manual','Teste de valores positivos e negativos','Conferência de totais','Validação das reclassificações']},
{id:'forecast',name:'Forecast Automatizado de Spending',categories:['FP&A','Forecast'],description:'Automação do forecast de spending para acelerar projeções e apoiar a análise financeira.',tools:['Python','Excel','Power Query'],result:'Execução reduzida de um dia para três horas, com 97% de acuracidade.',before:['Preparação manual da base de spending','Atualização das projeções em várias etapas','Processo com duração de um dia'],after:['Tratamento automatizado dos dados','Organização das premissas e projeções','Execução em três horas e saída estruturada'],problem:'O forecast de spending exigia preparação e atualização manual das informações. A solução automatiza etapas do processamento para acelerar a projeção e apoiar a análise das variações.',flow:['Base histórica','Tratamento','Premissas','Projeção','Validação','Forecast final'],tests:['Comparação do forecast com resultados realizados','Teste das premissas aplicadas','Validação de totais e períodos','Revisão da acuracidade das projeções']}];
const filters=['Todos','FP&A','Accounting','Reconciliação','Forecast'];
const hardSkills=['Financial Planning & Analysis (FP&A)','Financial Forecasting','Budgeting & Financial Planning','Budget vs. Actuals Analysis','Cost & Expense Analysis','Financial Reporting','Advanced Excel','Financial Process Automation','Data Analysis & Consolidation','AI Applications in Finance'];
const softSkills=['Analytical Thinking','Critical Thinking','Problem-Solving','Communication','Adaptability','Resilience','Independent Working','Time Management','Strategic Thinking','Cross-Functional Collaboration'];
document.addEventListener('DOMContentLoaded',()=>{renderFilters();renderProjects();renderSkills();setupMenu();setupTheme();setupObservers();setupModal();setupImageFallback();setupCv();document.getElementById('year').textContent=new Date().getFullYear()});
function renderExpertise(){document.getElementById('expertiseGrid').innerHTML=expertise.map(x=>`<article class="expertise-card reveal"><header><span class="icon-box">${x.icon}</span><h3>${x.title}</h3></header><div class="tag-list">${x.items.map(i=>`<span class="tag">${i}</span>`).join('')}</div></article>`).join('')}
function renderFilters(){const el=document.getElementById('filters');el.innerHTML=filters.map((f,i)=>`<button class="filter-btn${i===0?' active':''}" type="button" data-filter="${f}">${f}</button>`).join('');el.addEventListener('click',e=>{if(!e.target.matches('.filter-btn'))return;document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));e.target.classList.add('active');renderProjects(e.target.dataset.filter)})}
function renderProjects(filter='Todos'){const list=filter==='Todos'?projects:projects.filter(p=>p.categories.includes(filter));document.getElementById('projectsGrid').innerHTML=list.map(p=>`<article class="project-card"><div class="project-visual"><span class="visual-mark">0${projects.indexOf(p)+1}</span></div><div class="project-body"><span class="project-meta">${p.categories.join(' • ')}</span><h3>${p.name}</h3><p>${p.description}</p><div class="tag-list">${p.tools.map(t=>`<span class="tag">${t}</span>`).join('')}</div><button class="btn secondary open-project" type="button" data-id="${p.id}">Ver projeto completo</button></div></article>`).join('')}
function renderSkills(){document.getElementById('hardSkillCloud').innerHTML=hardSkills.map(s=>`<span class="tag">${s}</span>`).join('');document.getElementById('softSkillCloud').innerHTML=softSkills.map(s=>`<span class="tag">${s}</span>`).join('')}
function setupMenu(){const btn=document.querySelector('.menu-toggle'),menu=document.querySelector('.menu');btn.addEventListener('click',()=>{const open=menu.classList.toggle('open');btn.setAttribute('aria-expanded',open);btn.setAttribute('aria-label',open?'Fechar menu':'Abrir menu')});menu.addEventListener('click',e=>{if(e.target.matches('a')){menu.classList.remove('open');btn.setAttribute('aria-expanded','false')}});const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)document.querySelectorAll('.menu a').forEach(a=>a.classList.toggle('active',a.hash===`#${entry.target.id}`))}),{rootMargin:'-30% 0px -60%'});document.querySelectorAll('main section[id]').forEach(s=>observer.observe(s))}
function setupTheme(){const b=document.querySelector('.theme-toggle'),saved=localStorage.getItem('portfolio-theme');if(saved)document.documentElement.dataset.theme=saved;b.addEventListener('click',()=>{const next=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=next;localStorage.setItem('portfolio-theme',next)})}
function setupObservers(){const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;const reveal=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');reveal.unobserve(e.target)}}),{threshold:.1});document.querySelectorAll('.reveal').forEach(el=>reveal.observe(el));const counterObs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){animateCounter(e.target,reduce);counterObs.unobserve(e.target)}}),{threshold:.65});document.querySelectorAll('.counter').forEach(el=>counterObs.observe(el))}
function animateCounter(el,reduce){const final=Number(el.dataset.value),suffix=el.dataset.suffix;if(reduce){el.textContent=final+suffix;return}const duration=1200,start=performance.now();function frame(now){const progress=Math.min((now-start)/duration,1),value=Math.round(final*(1-Math.pow(1-progress,3)));el.textContent=Math.min(value,final)+suffix;if(progress<1)requestAnimationFrame(frame);else el.textContent=final+suffix}requestAnimationFrame(frame)}
function setupImageFallback(){const img=document.getElementById('profilePhoto'),ph=document.getElementById('photoPlaceholder');const fallback=()=>{img.style.display='none';ph.style.display='grid'};img.addEventListener('error',fallback);if(img.complete&&img.naturalWidth===0)fallback()}
function setupModal(){document.getElementById('projectsGrid').addEventListener('click',e=>{const b=e.target.closest('.open-project');if(b)openProject(b.dataset.id)});document.querySelectorAll('[data-close-modal]').forEach(x=>x.addEventListener('click',closeModal));document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()})}
function openProject(id){const p=projects.find(x=>x.id===id);if(!p)return;document.getElementById('modalContent').innerHTML=`<header class="case-hero"><p class="eyebrow">${p.categories.join(' • ')}</p><h2 id="modalTitle">${p.name}</h2><p>${p.description}</p></header><div class="case-content"><section class="case-section"><h3>Visão geral</h3><div class="case-summary"><div class="case-box"><strong>Status</strong><p>Demonstração em preparação</p></div><div class="case-box"><strong>Ferramentas</strong><p>${p.tools.join(', ')}</p></div><div class="case-box"><strong>Resultado alcançado</strong><p>${p.result}</p></div><div class="case-box"><strong>Categoria</strong><p>${p.categories.join(', ')}</p></div></div></section><section class="case-section"><h3>Demonstração na prática</h3><div class="demo-placeholder"><div><span class="visual-mark">⚙</span><strong>Demonstração em preparação</strong><p>${p.name}</p><button class="btn ghost" disabled>Vídeo disponível em breve</button></div></div></section><section class="case-section"><h3>Antes e depois</h3><div class="compare-grid"><div class="compare-card"><h4>Antes da automação</h4><ul>${p.before.map(x=>`<li>${x}</li>`).join('')}</ul></div><div class="compare-card"><h4>Depois da automação</h4><ul>${p.after.map(x=>`<li>${x}</li>`).join('')}</ul></div></div></section><section class="case-section"><h3>Problema identificado</h3><p>${p.problem}</p></section><section class="case-section"><h3>Mapeamento do processo</h3><div class="flow">${p.flow.map((x,i)=>`<span>${x}</span>${i<p.flow.length-1?'<b>→</b>':''}`).join('')}</div></section><section class="case-section"><h3>Como a solução foi construída</h3><div class="detail-grid"><div class="case-box"><h4>Estrutura</h4><p>Entradas, regras, processamento, validações e saídas são organizados em etapas separadas para facilitar testes, rastreabilidade e manutenção.</p></div><div class="case-box"><h4>Confidencialidade</h4><p>A apresentação utiliza dados fictícios e não publica código corporativo, credenciais, caminhos internos, dados pessoais ou informações financeiras confidenciais.</p></div></div></section><section class="case-section"><h3>Testes e validações</h3><ul class="checklist">${p.tests.map(x=>`<li>${x}</li>`).join('')}</ul></section></div>`;const modal=document.getElementById('projectModal');modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.classList.add('no-scroll');document.querySelector('.modal-close').focus()}
function closeModal(){const modal=document.getElementById('projectModal');if(!modal.classList.contains('open'))return;modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('no-scroll')}
function setupCv(){document.querySelectorAll('.cv-view,.cv-download').forEach(a=>a.href=CV_PATH)}
/* ==========================================
   AJUSTES CAMILA - FOTO E COMUNIDADES
========================================== */

/* Remove os elementos em volta da foto */

.data-orbit,
.orbit-one,
.orbit-two,
.metric-chip,
.chip-a,
.chip-b{
    display:none !important;
}

/* Hero mais limpo */

.hero-visual{
    min-height:520px;
    display:flex;
    justify-content:center;
    align-items:center;
}

/* Foto mais elegante */

.photo-wrap{
    width:min(360px,73vw);
    border-radius:28px;
    overflow:hidden;
}

.photo-wrap img{
    width:100%;
    height:100%;
    object-fit:cover;
    display:block;
}

/* Comunidades */

.community-grid{
    display:flex !important;
    justify-content:center;
    align-items:stretch;
    gap:24px;
    flex-wrap:wrap;
}

.community-card{
    min-width:260px;
    display:flex;
    align-items:center;
    gap:18px;
}

/* Logos alinhados */

.community-logo{
    width:80px;
    height:80px;
    flex-shrink:0;
    background:white;
}

.community-logo img{
    width:100%;
    height:100%;
    object-fit:contain;
    padding:10px;
}

/* Mobile */

@media(max-width:760px){

    .community-grid{
        flex-direction:column;
        align-items:center;
    }

    .community-card{
        width:100%;
        max-width:350px;
    }

}
