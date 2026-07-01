let current = "loading";

setTimeout(()=>{
  show("login");
},1500);

// LOGIN
function check(){
  let p = document.getElementById("pass").value;
  if(p === "15012026"){
    show("gift");
  } else {
    alert("Pogrešna šifra ❤️");
  }
}

// FLOW
function goReasons(){ show("reasons"); }
function goPhotos(){ show("photos"); }
function goFinal(){ show("final"); }

// REASONS
let reasons = [
  let reasons = [
"Zato što si moj mir",
"Zato što si moj osmeh",
"Zato što me razumeš i kad ne pričam",
"Zato što si moj dom",
"Zato što si moj svet",
"Zato što me voliš iskreno",
"Zato što si uvek tu za mene",
"Zato što me činiš srećnom bez truda",
"Zato što me smiruješ kad sam nervozna",
"Zato što veruješ u mene",
"Zato što si moj najbolji prijatelj",
"Zato što sa tobom sve ima smisla",
"Zato što me grliš baš kako mi treba",
"Zato što me slušaš",
"Zato što si pažljiv",
"Zato što si nežan",
"Zato što si iskren",
"Zato što me poštuješ",
"Zato što si moj oslonac",
"Zato što me motivišeš",
"Zato što si moj osmeh svaki dan",
"Zato što si moja sigurnost",
"Zato što si jedini koji me razume",
"Zato što si moj izbor",
"Zato što si moj mir posle haosa",
"Zato što si poseban",
"Zato što si TI",
"Zato što ne mogu bez tebe",
"Zato što te volim više nego što reči mogu da opišu"
];
];

let i = 0;

function nextReason(){
  document.getElementById("reasonText").innerText = reasons[i];
  i++;
  if(i >= reasons.length) i = 0;
}

// PAGE SWITCH
function show(id){
  document.getElementById(current).classList.remove("active");
  document.getElementById(id).classList.add("active");
  current = id;
}
