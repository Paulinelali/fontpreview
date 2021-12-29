let fontArray = [
  "fRedmil",
  "fSpicyRice",
  "fMouse",
  "fReachlong",
  "fJuicyOrange",
  "fKingPalace",
  "fCreamySunday",
  "fDancingUnicorn",
  "fLuckiestGuy",
  "fHighman",
  "fMissy",
  "fMilky",
  "fBroken",
  "fLavanderia",
  "fChicken",
  "fMiltonKey",
  "fDopestyle",
  "fHousemate",
];

let fontcolorArray = [
  "fngoldchrome",
  "fnredchrome",
  "fnrosegoldchrome",
  "fnbluechrome",
  "fnsilverchrome",
  "fngreenholo",
  "fnpinktoblueholo",
  "fnpeachyellowholo",
  "fnyellowholo",
  "fnredtopurpleholo",
  "fnneonorangeholo",
  "fnyelloworageholo",
  "fngoldholo",
  "fnsilversparkle",
  "fngoldsparkle",
  "fnredsparckle",
  "fngreensparckle",
  "fnpurplesparkle",
  "fnbluesparkle",

  "fncsilvermetallic",
  "fncgoldmetallic",
  "fnccoppermetallic",
  "fncgoldenYellow",
  "fncsignalYellow",
  "fnclightyellow",
  "fncbrimstoneyellow",
  "fncpurplered",
  "fncburgundy",
  "fncdarkred",
  "fncred",
  "fnclightred",
  "fncorangered",
  "fncorange",
  "fnclightorange",
  "fncpastelorange",
  "fnccoral",
  "fncpurple",
  "fncviolet",
  "fnclavendar",
  "fnclilac",
  "fncpink",
  "fncsoftpink",
  "fncdeepseablue",
  "fncsteelblue",
  "fncdarkblue",
  "fnccobaltblue",
  "fnckingblue",
  "fncbrilliantblue",
  "fncblue",
  "fnctrafficblue",
  "fncgentianblue",
  "fncgentian",
  "fncazureblue",
  "fncskyblue",
  "fnclightblue",
  "fnciceblue",
  "fncturquoiseblue",
  "fncturquoise",
  "fncmint",
  "fncdarkgreen",
  "fncforestgreen",
  "fncgreen",
  "fncgrassgreen",
  "fnclightgreen",
  "fncyellowgreen",
  "fnclimegreen",
  "fncbrown",
  "fncnutbrown",
  "fnclightbrown",
  "fncbeige",
  "fnccream",
  "fncwhite",
  "fncblack",
  "fncdarkgrey",
  "fncgrey",
  "fnctelegrey",
  "fncmiddlegrey",
  "fnclightgrey",
  "fncimitationgold",
];

let shadowArray = [
  "shgoldchrome",
  "shredchrome",
  "shrosegoldchrome",
  "shbluechrome",
  "shsilverchrome",
  "shgreenholo",
  "shpinktoblueholo",
  "shpeachyellowholo",
  "shyellowholo",
  "shredtopurpleholo",
  "shneonorangeholo",
  "shyelloworageholo",
  "shgoldholo",
  "shsilversparkle",
  "shgoldsparkle",
  "shredsparckle",
  "shgreensparckle",
  "shpurplesparkle",
  "shbluesparkle",
  "shdsilvermetallic",
  "shdgoldmetallic",
  "shdcoppermetallic",
  "shdgoldenYellow",
  "shdsignalYellow",
  "shdlightyellow",
  "shdbrimstoneyellow",
  "shdpurplered",
  "shdburgundy",
  "shddarkred",
  "shdred",
  "shdlightred",
  "shdorangered",
  "shdorange",
  "shdlightorange",
  "shdpastelorange",
  "shdcoral",
  "shdpurple",
  "shdviolet",
  "shdlavendar",
  "shdlilac",
  "shdpink",
  "shdsoftpink",
  "shddeepseablue",
  "shdsteelblue",
  "shddarkblue",
  "shdcobaltblue",
  "shdkingblue",
  "shdbrilliantblue",
  "shdblue",
  "shdtrafficblue",
  "shdgentianblue",
  "shdgentian",
  "shdazureblue",
  "shdskyblue",
  "shdlightblue",
  "shdiceblue",
  "shdturquoiseblue",
  "shdturquoise",
  "shdmint",
  "shddarkgreen",
  "shdforestgreen",
  "shdgreen",
  "shdgrassgreen",
  "shdlightgreen",
  "shdyellowgreen",
  "shdlimegreen",
  "shdbrown",
  "shdnutbrown",
  "shdlightbrown",
  "shdbeige",
  "shdcream",
  "shdwhite",
  "shdblack",
  "shddarkgrey",
  "shdgrey",
  "shdtelegrey",
  "shdmiddlegrey",
  "shdlightgrey",
  "shdimitationgold",
];
let log = document.getElementById("text_field");
log.addEventListener("click", logKey);
function logKey() {
  log.addEventListener("keyup", getTerm);
  function getTerm() {
    let term = document.getElementById("text_field").value;
    console.log(term);
    let display = document.getElementById("result_field");
    display.innerHTML = term;
  }
}
//FONT////////////////////////////////////////////////////////////////////////////////////////
let font_ = document.querySelector("#font_selection"); // Using a class instead, see note below.
let ls = localStorage;
function getfont() {
  setTimeout(() => {
    let rcl = document.querySelector("#result_field").classList;
    rcl = Array.from(rcl);
    rcl.forEach((element) => {
      if (fontArray.includes(element)) {
        document.querySelector("#result_field").classList.remove(element);
      }
    });
  }, 100);

  setTimeout(() => {
    let el = document.forms[0].font_selection.value;
    let rcl = document.querySelector("#result_field");
    rcl.classList.add(el);
  }, 1000);
}
font_.onchange = getfont;

//SHADOW////////////////////////////////////////////////////////////////////////////////////////
let shd_ = document.querySelector("#shadow_selection"); // Using a class instead, see note below.
function getshadow() {
  setTimeout(() => {
    let rcl = document.querySelector("#result_field").classList;
    rcl = Array.from(rcl);
    rcl.forEach((element) => {
      if (shadowArray.includes(element)) {
        document.querySelector("#result_field").classList.remove(element);
      }
    });
  }, 100);

  setTimeout(() => {
    let el = document.forms[1].shadow_selection.value;
    let rcl = document.querySelector("#result_field");
    rcl.classList.add(el);
  }, 500);
}
shd_.onchange = getshadow;
//FONT COLOR////////////////////////////////////////////////////////////////////////////////////////
let fnc_ = document.querySelector("#fontcolor_selection"); // Using a class instead, see note below.
function getfontcolor() {
  setTimeout(() => {
    let rcl = document.querySelector("#result_field").classList;
    rcl = Array.from(rcl);
    rcl.forEach((element) => {
      if (fontcolorArray.includes(element)) {
        document.querySelector("#result_field").classList.remove(element);
      }
    });
  }, 100);

  setTimeout(() => {
    let el = document.forms[2].fontcolor_selection.value;
    let rcl = document.querySelector("#result_field");
    rcl.classList.add(el);
  }, 500);
}
fnc_.onchange = getfontcolor;

// RESET ALL STYLES
function restFunction() {
  document.getElementById("fontcolor_selection").selectedIndex = 0;
  document.getElementById("shadow_selection").selectedIndex = 0;
  document.getElementById("font_selection").selectedIndex = 0;
  document.getElementById("result_field").className = "form-control";
  fn_.selectedIndex = 0;
  styleSelect.selectedIndex = 0;
  fontColor.selectedIndex = 0;
}
