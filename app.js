const EX=[
["Press de banca","Pecho","gym","Barra y banco","Intermedio","4×8","Baja la barra al pecho con control y empuja sin despegar la espalda del banco.","img/press-de-banca.gif"],
["Press inclinado con mancuernas","Pecho","gym","Mancuernas y banco","Intermedio","3×10","Banco a 30°. Evita abrir demasiado los codos.","img/press-inclinado-mancuernas.gif"],
["Press de pecho en polea sentado","Pecho","gym","Polea y banco","Principiante","3×12","Espalda apoyada, empuja al frente sin encoger los hombros.","img/press-pecho-polea-sentado.gif"],
["Fondos en paralelas","Pecho","gym","Barras paralelas","Avanzado","3×8","Inclina el torso hacia delante y baja hasta sentir estiramiento en el pecho.","img/fondos-paralelas-pecho.gif"],
["Press de pecho en máquina","Pecho","gym","Máquina de press","Principiante","3×12","Ajusta el asiento para que las asas queden a la altura del pecho.","img/press-pecho-maquina.gif"],
["Flexiones declinadas","Pecho","casa","Silla o sofá","Intermedio","3×10","Pies elevados en una silla; cuerpo recto y codos a 45°.","img/flexiones-declinadas.gif"],
["Flexiones con agarre ancho","Pecho","casa","Sin equipo","Intermedio","3×12","Manos más abiertas que los hombros; baja el pecho al suelo.","img/flexiones-agarre-ancho.gif"],
["Flexiones con manos elevadas","Pecho","casa","Caja, banco o silla firme","Principiante","3×12","Manos sobre una superficie estable; cuerpo en línea recta.","img/flexiones-manos-elevadas.jpg"],
["Flexiones diamante","Brazos","casa","Sin equipo","Avanzado","3×10","Manos juntas bajo el pecho; trabaja tríceps.","img/flexiones-diamante.gif"],
["Dominadas","Espalda","gym","Barra de dominadas","Avanzado","4×6","Inicia el tirón con la espalda, no con los brazos.","img/dominadas.gif"],
["Remo con barra","Espalda","gym","Barra","Intermedio","4×8","Torso a 45°, espalda neutra, lleva la barra al abdomen.","img/remo-con-barra.gif"],
["Remo con mancuernas","Espalda","gym","Mancuernas","Intermedio","4×10","Torso inclinado, espalda neutra; lleva la mancuerna hacia la cadera.","img/remo-con-mancuernas.gif"],
["Remo en polea inclinado","Espalda","gym","Polea","Intermedio","3×12","Cadera atrás, espalda recta; tira hacia el abdomen juntando escápulas.","img/remo-polea-inclinado.gif"],
["Jalón en máquina agarre inverso","Espalda","gym","Máquina de jalón","Principiante","3×12","Agarre supino; baja hasta el pecho sin balancear el torso.","img/jalon-maquina-agarre-inverso.gif"],
["Postura de cuatro apoyos","Espalda","casa","Sin equipo","Principiante","3×12","Manos bajo los hombros, rodillas bajo la cadera, espalda neutra.","img/cuatro-apoyos-espalda.jpg"],
["Remo invertido bajo mesa","Espalda","casa","Mesa resistente","Intermedio","3×8","Agarra el borde de la mesa y tira del pecho hacia arriba con el cuerpo recto.","img/remo-invertido-mesa.jpg"],
["Remo con mochila","Espalda","casa","Mochila con peso","Principiante","4×12","Inclínate y tira de la mochila hacia la cadera.","img/remo-mochila.jpg"],
["Superman","Espalda","casa","Sin equipo","Principiante","3×15","Eleva brazos y piernas del suelo y sostén 2 segundos.","img/superman.jpg"],
["Sentadilla con barra","Piernas","gym","Rack y barra","Intermedio","4×8","Rodillas siguen la línea de los pies; baja hasta paralelo.","img/sentadilla-con-barra.gif"],
["Prensa de piernas","Piernas","gym","Máquina de prensa","Principiante","4×12","No bloquees las rodillas al extender.","img/prensa-piernas.gif"],
["Peso muerto rumano","Piernas","gym","Barra o mancuernas","Intermedio","3×10","Cadera atrás, espalda recta, barra pegada a las piernas.","img/peso-muerto-rumano-barra.gif"],
["Peso muerto rumano con mancuernas","Piernas","gym","Mancuernas","Principiante","3×10","Cadera atrás, espalda recta, mancuernas pegadas a las piernas.","img/peso-muerto-rumano-mancuernas.gif"],
["Zancadas con mancuernas","Piernas","gym","Mancuernas","Intermedio","3×10 por pierna","Torso erguido; la rodilla trasera baja casi al suelo.","img/zancadas-mancuernas.gif"],
["Extensión de piernas en máquina","Piernas","gym","Máquina de extensión","Principiante","3×15","Extiende sin golpear arriba y baja de forma controlada.","img/extension-piernas-maquina.gif"],
["Curl femoral tumbado","Piernas","gym","Máquina de curl femoral","Principiante","3×12","Caderas pegadas al banco; lleva los talones hacia los glúteos.","img/curl-femoral-tumbado.gif"],
["Hip thrust con barra","Piernas","gym","Barra y banco","Intermedio","4×10","Espalda alta en el banco; sube la cadera y aprieta glúteos arriba.","img/hip-thrust-barra.gif"],
["Elevación de talones con mancuerna","Piernas","gym","Mancuerna","Principiante","4×15","Sube lo más alto posible y baja con control.","img/elevacion-talones-mancuerna.jpg"],
["Sentadilla con banda elástica","Piernas","casa","Banda elástica","Principiante","4×15","Banda bajo los pies; mantén las rodillas alineadas con los pies.","img/sentadilla-banda.gif"],
["Peso muerto a una pierna","Piernas","casa","Mancuerna o mochila","Intermedio","3×10 por pierna","Cadera atrás, pierna libre extendida, espalda recta.","img/peso-muerto-una-pierna.gif"],
["Sentadilla búlgara con mancuerna","Piernas","casa","Mancuerna y silla o banco","Intermedio","3×10 por pierna","Pie trasero sobre la silla; baja con el torso erguido.","img/sentadilla-bulgara.jpg"],
["Sentadilla isométrica en pared","Piernas","casa","Pared","Principiante","3×40 s","Espalda pegada a la pared y rodillas a 90°.","img/sentadilla-pared.jpg"],
["Elevación de talones de pie","Piernas","casa","Mancuerna o mochila y escalón","Principiante","4×15","Sube lo más alto posible y baja con control.","img/elevacion-talones-mancuerna.jpg"],
["Zancadas","Piernas","casa","Sin equipo","Principiante","3×12 por pierna","Rodilla delantera sobre el tobillo.","img/zancadas.gif"],
["Puente de glúteos","Piernas","casa","Sin equipo","Principiante","4×15","Aprieta glúteos arriba y pausa un segundo.","img/puente-gluteos.jpg"],
["Press militar","Hombros","gym","Barra o mancuernas","Intermedio","4×8","Abdomen firme; empuja en línea recta sobre la cabeza.","img/press-militar-mancuernas.gif"],
["Elevaciones laterales","Hombros","gym","Mancuernas","Principiante","3×15","Sube hasta la altura del hombro sin balancear.","img/elevaciones-laterales.gif"],
["Encogimientos con mancuernas","Hombros","gym","Mancuernas","Principiante","4×15","Sube los hombros hacia las orejas sin rotarlos y baja lento.","img/encogimientos-mancuernas.gif"],
["Pájaros con mancuernas","Hombros","gym","Mancuernas","Intermedio","3×12","Torso inclinado; abre los brazos hasta la altura de la espalda.","img/pajaros-mancuernas.jpg"],
["Pájaros en máquina","Hombros","gym","Máquina de pájaros","Principiante","3×15","Pecho contra el respaldo; abre los brazos sin encoger los hombros.","img/pajaros-maquina.jpg"],
["Círculos de brazos","Hombros","casa","Sin equipo","Principiante","3×20 por sentido","Brazos extendidos a los lados; círculos pequeños y controlados.","img/circulos-brazos.jpg"],
["Pájaros con botellas de agua","Hombros","casa","Dos botellas de agua","Principiante","3×15","Torso inclinado; abre los brazos hasta la altura de la espalda.","img/pajaros-botellas.jpg"],
["Pike push-up","Hombros","casa","Sin equipo","Intermedio","3×10","Cadera alta en V invertida; baja la cabeza al suelo.","img/pike-push-up.jpg"],
["Press francés con barra","Brazos","gym","Barra y banco","Intermedio","3×10","Codos fijos apuntando al techo; baja la barra hacia la frente.","img/press-frances-barra.gif"],
["Curl predicador en máquina","Brazos","gym","Máquina predicador","Principiante","3×12","Brazos apoyados en el cojín; evita estirar del todo abajo.","img/curl-predicador-maquina.gif"],
["Curl martillo cruzado","Brazos","gym","Mancuernas","Principiante","3×12","Lleva la mancuerna hacia el hombro contrario sin mover el codo.","img/curl-martillo-cruzado.gif"],
["Curl de bíceps","Brazos","gym","Mancuernas o barra","Principiante","3×12","Codos fijos a los costados.","img/curl-biceps-barra.gif"],
["Extensión de tríceps en polea","Brazos","gym","Polea","Principiante","3×12","Extiende por completo sin mover los hombros.","img/triceps-polea.gif"],
["Curl de bíceps con mochila","Brazos","casa","Mochila con peso","Principiante","3×12","Codos pegados al cuerpo; sube la mochila sin balancearte.","img/curl-biceps-mochila.jpg"],
["Fondos en silla","Brazos","casa","Silla","Principiante","3×12","Baja hasta 90° en los codos.","img/fondos-silla.gif"],
["Elevación de cadera con rodillas flexionadas","Core","casa","Sin equipo","Intermedio","3×15","Lleva las rodillas al pecho y despega la cadera con control.","img/elevacion-cadera-rodillas.gif"],
["Mountain climber","Core","casa","Sin equipo","Intermedio","3×30 s","Posición de plancha alta; lleva las rodillas al pecho de forma alterna.","img/mountain-climber.gif"],
["Plancha lateral","Core","casa","Sin equipo","Intermedio","3×30 s por lado","Cuerpo en línea recta, cadera arriba.","img/plancha-lateral.gif"],
["Crunch bicicleta","Core","casa","Sin equipo","Intermedio","3×20","Lleva el codo hacia la rodilla contraria sin tirar del cuello.","img/crunch-bicicleta.jpg"],
["Dead bug","Core","casa","Sin equipo","Principiante","3×10 por lado","Espalda baja pegada al suelo; extiende brazo y pierna contrarios.","img/dead-bug.jpg"],
["Plancha","Core","casa","Sin equipo","Principiante","3×40 s","Cuerpo recto, glúteos y abdomen apretados.","img/plancha.gif"],
["Burpee","Cardio","casa","Sin equipo","Avanzado","4×10","Baja a plancha, flexión opcional, y salta con los brazos arriba.","img/burpee.gif"],
["Sentadilla con salto y mancuernas","Cardio","casa","Mancuernas","Avanzado","3×12","Baja en sentadilla y salta; amortigua la caída con las rodillas flexionadas.","img/sentadilla-salto-mancuernas.gif"],
["Jumping jacks","Cardio","casa","Sin equipo","Principiante","4×30 s","Abre piernas y brazos al saltar; ritmo constante.","img/jumping-jacks.gif"],
["Salto de cuerda","Cardio","casa","Cuerda","Principiante","5×1 min","Saltos pequeños sobre la punta de los pies, muñecas relajadas.","img/salto-cuerda.gif"],
["Rodillas altas","Cardio","casa","Sin equipo","Principiante","4×30 s","Corre en el sitio subiendo las rodillas a la altura de la cadera.","img/rodillas-altas.gif"],
["Crunch en polea de rodillas","Core","gym","Polea alta","Intermedio","3×15","Flexiona la columna llevando los codos hacia las rodillas.","img/crunch-polea-rodillas.gif"],
["Elevación de piernas con giro","Core","gym","Colchoneta o banco","Intermedio","3×12","Gira la cadera a cada lado sin despegar los hombros.","img/elevacion-piernas-giro.gif"],
["Giro ruso con disco","Core","gym","Disco","Intermedio","3×20","Torso inclinado atrás; gira el disco de lado a lado con control.","img/giro-ruso-disco.jpg"],
["Rueda abdominal","Core","gym","Rueda abdominal","Avanzado","3×10","Avanza solo hasta donde controles la espalda.","img/rueda-abdominal.jpg"]
].map((e,i)=>({id:i,n:e[0],c:e[1],p:e[2],q:e[3],l:e[4],s:e[5],t:e[6],i:e[7]||""}));
const CATS=[...new Set(EX.map(e=>e.c))];
const PAGES=[["index.html","Inicio"],["ejercicios.html","Ejercicios"],["gym.html","Gym"],["casa.html","En casa"],["buscar.html","Buscar"],["entrenador-ia.html","Entrenador IA"]];
const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const cur=location.pathname.split("/").pop()||"index.html";
document.body.insertAdjacentHTML("afterbegin",`<nav class="nav"><b>FitZone</b>${PAGES.map(p=>`<a href="${p[0]}" ${p[0]===cur?'class="on"':""}>${p[1]}</a>`).join("")}</nav>`);
const IG_USER="df_lf503._",FRASE="Cada repetición te acerca a la mejor versión de ti.";
document.body.insertAdjacentHTML("beforeend",`<footer><p class="quote">${FRASE}</p><p><a href="https://www.instagram.com/${IG_USER}" target="_blank" rel="noopener noreferrer"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" style="vertical-align:-2px;margin-right:6px"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>Síguenos en Instagram @${IG_USER}</a></p><p>FitZone · Consulta a un profesional de la salud antes de iniciar una rutina nueva.</p></footer>`);
const card=e=>`<article class="tile b ex" data-id="${e.id}" tabindex="0" role="button" aria-label="Ver detalles de ${esc(e.n)}">${e.i?`<img src="${e.i}" alt="${esc(e.n)}" loading="lazy" width="720" height="720">`:`<div class="ph">Imagen próximamente</div>`}<div class="in"><h4>${esc(e.n)}</h4><p>${esc(e.t)}</p><div class="meta"><span class="pill">${e.c}</span><span class="pill">${e.p==="gym"?"Gym":"Casa"}</span><span class="pill">${e.l}</span><span class="pill">${esc(e.q)}</span><span class="pill hl">${e.s}</span></div></div></article>`;
function list(base){
  let cat="Todos";const g=$("#grid"),ch=$("#chips");
  const draw=()=>{const r=EX.filter(e=>(!base||e.p===base)&&(cat==="Todos"||e.c===cat));g.innerHTML=r.map(card).join("")||'<p class="empty">No hay ejercicios en esta categoría.</p>'};
  ch.innerHTML=["Todos",...CATS].map(c=>`<button class="chip ${c===cat?"on":""}">${c}</button>`).join("");
  ch.onclick=ev=>{if(ev.target.matches(".chip")){cat=ev.target.textContent;[...ch.children].forEach(b=>b.classList.toggle("on",b===ev.target));draw()}};
  draw();
}
function search(){
  const q=$("#q"),g=$("#grid"),ch=$("#chips");let cat="Todos";
  const norm=s=>s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");
  const draw=()=>{const t=norm(q.value.trim());
    const r=EX.filter(e=>(cat==="Todos"||e.c===cat)&&norm([e.n,e.c,e.q,e.l,e.p==="gym"?"gym":"casa"].join(" ")).includes(t));
    $("#count").textContent=`${r.length} resultado${r.length===1?"":"s"}`;
    g.innerHTML=r.map(card).join("")||'<p class="empty">Sin resultados. Prueba con una categoría como "piernas" o un equipo como "mancuernas".</p>'};
  ch.innerHTML=["Todos",...CATS].map(c=>`<button class="chip ${c===cat?"on":""}">${c}</button>`).join("");
  ch.onclick=ev=>{if(ev.target.matches(".chip")){cat=ev.target.textContent;[...ch.children].forEach(b=>b.classList.toggle("on",b===ev.target));draw()}};
  q.oninput=draw;draw();
}

/* ===== Detalle de ejercicio ===== */
const CD={Pecho:["Trabaja el pecho, con apoyo de hombros y tríceps.","separar los codos demasiado del cuerpo o rebotar abajo"],
Espalda:["Fortalece dorsales y zona media de la espalda, con ayuda de los bíceps.","redondear la espalda baja o tirar con los brazos en lugar de la espalda"],
Piernas:["Trabaja cuádriceps, femorales, glúteos y pantorrillas.","dejar que las rodillas se vayan hacia dentro o arquear la espalda baja"],
Hombros:["Trabaja los deltoides y estabiliza la parte alta de la espalda.","subir los hombros hacia las orejas o balancear el cuerpo para mover el peso"],
Brazos:["Trabaja bíceps y tríceps.","mover los codos de su sitio o usar impulso del torso"],
Core:["Fortalece abdomen, oblicuos y zona lumbar para estabilizar el tronco.","tirar del cuello con las manos o arquear la espalda baja"],
Cardio:["Eleva la frecuencia cardiaca y mejora la resistencia.","bloquear las rodillas al caer o aguantar la respiración"]};
const REST={Principiante:"45–60 s",Intermedio:"60–90 s",Avanzado:"90–120 s"};
const SYN={Pecho:["Espalda","Brazos"],Espalda:["Pecho","Brazos"],Piernas:["Core","Cardio"],Hombros:["Brazos","Pecho"],Brazos:["Pecho","Espalda"],Core:["Piernas","Cardio"],Cardio:["Core","Piernas"]};
function pairs(e){const pool=EX.filter(x=>x.p===e.p&&x.id!==e.id),out=[],same=pool.filter(x=>x.c===e.c);
  if(same.length)out.push(same[e.id%same.length]);
  SYN[e.c].forEach((c,k)=>{const l=pool.filter(x=>x.c===c);if(l.length)out.push(l[(e.id+k)%l.length])});return out}
document.body.insertAdjacentHTML("beforeend",`<div class="modal" id="modal" aria-hidden="true"><div class="mbox" role="dialog" aria-modal="true" aria-labelledby="mt"><button class="mx" aria-label="Cerrar">×</button><div class="mimg"><img id="mi" alt=""></div><div class="mtxt" id="mtx"></div></div></div>`);
let lastFocus=null;
function openEx(id){
  const e=EX[id];if(!e)return;const m=$("#modal"),img=$("#mi");
  img.src=e.i;img.alt=e.n;
  const eq=e.q.toLowerCase()==="sin equipo"?"tu peso corporal":e.q.toLowerCase();
  const rest=e.c==="Cardio"?"30–45 s":REST[e.l];
  $("#mtx").innerHTML=`<h2 id="mt">${esc(e.n)}</h2><div class="meta" style="margin:0 0 4px"><span class="pill">${e.c}</span><span class="pill">${e.p==="gym"?"Gym":"Casa"}</span><span class="pill">${e.l}</span><span class="pill hl">${e.s}</span></div>
  <h4>Descripción</h4><p>${CD[e.c][0]} ${e.p==="gym"?"Se hace en el gym":"Se puede hacer en casa"} con ${esc(eq)}. Nivel ${e.l.toLowerCase()}.</p>
  <h4>Cómo hacerla</h4><ul><li>${esc(e.t)}</li><li>Haz ${e.s}.</li><li>Descansa ${rest} entre series.</li><li>Evita ${CD[e.c][1]}.</li></ul>
  <h4>Combínala con</h4><div class="chips" style="margin:0">${pairs(e).map(x=>`<button class="chip" data-go="${x.id}">${esc(x.n)}</button>`).join("")}</div>`;
  if(!m.classList.contains("on")){lastFocus=document.activeElement;document.body.style.overflow="hidden"}
  m.classList.add("on");m.setAttribute("aria-hidden","false");$("#mtx").scrollTop=0;$(".mx").focus();
}
function closeEx(){const m=$("#modal");m.classList.remove("on");m.setAttribute("aria-hidden","true");document.body.style.overflow="";lastFocus&&lastFocus.focus()}
document.addEventListener("click",ev=>{
  const g=ev.target.closest("[data-go]");if(g)return openEx(+g.dataset.go);
  if(ev.target.closest(".mx")||ev.target.id==="modal")return closeEx();
  const c=ev.target.closest(".tile.ex[data-id]");if(c)openEx(+c.dataset.id);
});
document.addEventListener("keydown",ev=>{
  if(ev.key==="Escape"&&$("#modal").classList.contains("on"))closeEx();
  if((ev.key==="Enter"||ev.key===" ")&&ev.target.matches&&ev.target.matches(".tile.ex[data-id]")){ev.preventDefault();openEx(+ev.target.dataset.id)}
});
/* ===== Entrenador IA (Gemini) ===== */
const GEMINI_KEY="AQ.Ab8RN6JpYcKwmsjmhZBNYNmuESgBPsQq6sj6aGXbUi3X7ygkTg"; // Si la dejas vacía, la página pedirá la clave al usuario
const MODEL="gemini-3.1-flash-lite"; // Cambia aquí el ID si Google lo publica con otro nombre
function md(t){
  let h=esc(t).replace(/^### (.*)$/gm,"<h4>$1</h4>").replace(/^#{1,2} (.*)$/gm,"<h3>$1</h3>").replace(/\*\*(.+?)\*\*/g,"<b>$1</b>");
  h=h.replace(/(^[-*] .*(\n|$))+/gm,m=>"<ul>"+m.trim().split("\n").map(l=>"<li>"+l.replace(/^[-*] /,"")+"</li>").join("")+"</ul>");
  return h.split(/\n{2,}/).map(b=>/^<(h3|h4|ul)/.test(b.trim())?b:"<p>"+b.replace(/\n/g,"<br>")+"</p>").join("");
}
function ai(){
  const d={};let i=0;
  const S=[
   {k:"edad",t:"¿Cuántos años tienes?",f:"num",ph:"Ej. 28",min:14,max:90,u:"años"},
   {k:"peso",t:"¿Cuánto pesas?",f:"num",ph:"Ej. 70",min:30,max:250,u:"kg"},
   {k:"altura",t:"¿Cuánto mides?",f:"num",ph:"Ej. 170",min:120,max:230,u:"cm"},
   {k:"lugar",t:"¿Dónde vas a entrenar?",f:"opt",o:[["Gym con equipo","Gym con equipo (máquinas, barras, mancuernas, poleas)"],["En casa, sin equipo","Casa, sin equipo de gym (peso corporal y objetos del hogar)"]]},
   {k:"zona",t:"¿Qué parte del cuerpo quieres entrenar?",f:"opt",o:["Pecho","Espalda","Piernas y glúteos","Hombros","Brazos","Core","Cardio","Cuerpo completo"].map(x=>[x,x])}
  ];
  const box=$("#wiz");
  const key=()=>localStorage.getItem("gk")||"";
  function step(){
    const s=S[i];
    let h=`<div class="bar"><i style="width:${i/S.length*100}%"></i></div><h2>${s.t}</h2>`;
    h+= s.f==="num"?`<div style="margin-top:20px"><input id="in" type="number" inputmode="numeric" min="${s.min}" max="${s.max}" placeholder="${s.ph} ${s.u}" value="${d[s.k]||""}" aria-label="${s.t}"></div>`
      :`<div class="opts">${s.o.map(o=>`<button class="opt ${d[s.k]===o[1]?"on":""}" data-v="${esc(o[1])}">${o[0]}</button>`).join("")}</div>`;
    h+=`<p class="err" id="err" role="alert"></p><div class="row"><button class="btn o" id="back" ${i?"":"disabled"}>Atrás</button>${s.f==="num"?'<button class="btn" id="next">Continuar</button>':""}</div>`;
    box.innerHTML=h;
    $("#back").onclick=()=>{i--;step()};
    if(s.f==="num"){const inp=$("#in");inp.focus();
      const go=()=>{const v=+inp.value;if(!v||v<s.min||v>s.max){$("#err").textContent=`Ingresa un valor entre ${s.min} y ${s.max} ${s.u}.`;return}d[s.k]=v;next()};
      $("#next").onclick=go;inp.onkeydown=e=>e.key==="Enter"&&go();
    }else box.querySelectorAll(".opt").forEach(b=>b.onclick=()=>{d[s.k]=b.dataset.v;next()});
  }
  const next=()=>{i++;i<S.length?step():keyStep()};
  function keyStep(){
    box.innerHTML=`<div class="bar"><i style="width:100%"></i></div><h2>Todo listo</h2><p class="muted" style="margin:8px 0 20px">${d.edad} años · ${d.peso} kg · ${d.altura} cm · ${esc(d.lugar)} · ${esc(d.zona)}</p>
    ${GEMINI_KEY?"":`<input id="key" type="password" placeholder="Tu API key de Gemini" value="${esc(key())}" aria-label="API key de Gemini" autocomplete="off">
    <p class="note">Consigue una gratis en <a href="https://aistudio.google.com/apikey" target="_blank" rel="noopener">Google AI Studio</a>. Se guarda solo en este navegador.</p>`}
    <p class="err" id="err" role="alert"></p><div class="row"><button class="btn o" id="back">Atrás</button><button class="btn" id="go">Crear mi rutina</button></div>`;
    $("#back").onclick=()=>{i=S.length-1;step()};$("#go").onclick=run;
  }
  async function run(){
    const k=GEMINI_KEY||$("#key").value.trim();if(!k){$("#err").textContent="Pega tu API key para continuar.";return}
    if(!GEMINI_KEY)localStorage.setItem("gk",k);const b=$("#go");b.disabled=true;b.textContent="Creando rutina…";$("#err").textContent="";
    const imc=(d.peso/((d.altura/100)**2)).toFixed(1);
    const prompt=`Eres un entrenador personal certificado. Crea una rutina en español para esta persona:
- Edad: ${d.edad} años
- Peso: ${d.peso} kg
- Altura: ${d.altura} cm (IMC aprox. ${imc})
- Lugar y equipo: ${d.lugar}
- Zona a entrenar: ${d.zona}
Incluye: 1) un resumen breve de enfoque, 2) calentamiento, 3) entre 5 y 7 ejercicios con series, repeticiones, descanso y un consejo de técnica cada uno, 4) enfriamiento, 5) frecuencia semanal sugerida. Usa solo ejercicios posibles con el equipo indicado. Usa títulos con ## y listas con -. Cierra con una advertencia corta de consultar a un profesional si hay lesiones o condiciones médicas.`;
    try{
      const r=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`,{method:"POST",headers:{"Content-Type":"application/json","x-goog-api-key":k},body:JSON.stringify({contents:[{parts:[{text:prompt}]}]})});
      const j=await r.json();if(!r.ok)throw new Error(j.error?.message||"Error "+r.status);
      const txt=j.candidates?.[0]?.content?.parts?.map(p=>p.text).join("")||"";if(!txt)throw new Error("La respuesta llegó vacía. Intenta de nuevo.");
      box.innerHTML=`<h2>Tu rutina</h2><div class="out">${md(txt)}</div><div class="row"><button class="btn o" id="again">Nueva rutina</button><button class="btn" id="print">Imprimir</button></div>`;
      $("#again").onclick=()=>{i=0;step()};$("#print").onclick=()=>print();
    }catch(e){b.disabled=false;b.textContent="Crear mi rutina";$("#err").textContent="No se pudo generar la rutina: "+e.message}
  }
  step();
}
const pg=document.body.dataset.page;
if(pg==="all")list();if(pg==="gym")list("gym");if(pg==="home")list("casa");if(pg==="search")search();if(pg==="ai")ai();
