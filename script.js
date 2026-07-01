let reasons = [
"Zato što si moj mir",
"Zato što si moj osmeh",
"Zato što me razumeš",
"Zato što si moj dom",
"Zato što si moj svet",
"Zato što me voliš iskreno",
"Zato što si uvek tu za mene",
"Zato što me činiš srećnom",
"Zato što si moj najbolji prijatelj",
"Zato što si ti – ti ❤️"
];

let i = 0;

// LOADING → LOGIN
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
function nextReason(){
  document.getElementById("reasonText").innerText = reasons[i];
  i++;
  if(i >= reasons.length) i = 0;
}

// PAGE SWITCH
let current = "loading";

function show(id){
  document.getElementById(current).classList.remove("active");
  document.getElementById(id).classList.add("active");
  current = id;
}
