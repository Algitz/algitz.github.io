let selct = '';
const lightBlue = '#95d7f5';
const darkBlue = '#76aac2';
//const lightPink = '#ffbdf2';
//const darkPink = '#c981bb';
const d = new Date();
//let date = d.getDate()+100*d.getMonth();

// links library
linkPref = 'https://cudplus.onsmart.school/lms/courseHome?course=';
const cpl = {
  mathC: linkPref + '9087',
  mathA: linkPref + '9088',
  bio: linkPref + '9199',
  phys: linkPref + '9197',
  chem: linkPref + '9198',
  engC: linkPref + '8654',
  engA: linkPref + '8658',
  astr: linkPref + '9200',
  elec: linkPref + '9439',
  sket: linkPref + '9440',
  gui: linkPref + '9379',
  hist: linkPref + '9281',
  thai: linkPref + '9039',
  geo: linkPref + '9274',
  tech: linkPref + '9189',
  art: linkPref + '9588',
  pe: linkPref + '9620'
};

// update
function update(){
  cpmon1.onclick = function(){window.location.href = cpl.engC;};
  cpmon2a.onclick = function(){window.location.href = cpl.elec;};
  cpmon2b.onclick = function(){window.location.href = cpl.sket;};
  cpmon3.onclick = function(){window.location.href = cpl.bio;};
  cpmon6.onclick = function(){window.location.href = cpl.chem;};
  cpmon8.onclick = function(){window.location.href = cpl.mathA;};
  
  cptue1.onclick = function(){window.location.href = cpl.mathC;};
  cptue2.onclick = function(){window.location.href = cpl.engA;};
  cptue3.onclick = function(){window.location.href = cpl.geo;};
  cptue4.onclick = function(){window.lotion.href = cpl.gui;};
  cptue6.onclick = function(){window.location.href = cpl.pe;};
  cptue7.onclick = function(){window.location.href = cpl.thai;};
  cptue8.onclick = function(){window.location.href = cpl.engC;};
  
  cpwed1.onclick = function(){window.location.href = cpl.chem;};
  cpwed3.onclick = function(){wincpcation.href = cpl.hist;};
  cpwed4.onclick = function(){window.location.href = cpl.engC;};
  cpwed6.onclick = function(){window.location.href = cpl.mathA;};
  cpwed7.onclick = function(){window.location.href = cpl.phys;};
  
  cpthu1.onclick = function(){window.location.href = cpl.tech;};
  cpthu3.onclick = function(){window.location.href = cpl.mathA;};
  cpthu4.onclick = function(){window.location.href = cpl.phys;};
  cpthu6.onclick = function(){window.location.href = cpl.bio;};
  
  cpfri1.onclick = function(){window.location.href = cpl.astr;};
  cpfri3.onclick = function(){window.location.href = cpl.art;};
  cpfri4.onclick = function(){window.location.href = cpl.thai;};
  cpfri6.onclick = function(){window.location.href = cpl.mathC;};
  cpfri7.onclick = function(){window.location.href = cpl.geo;};
  cpfri8.onclick = function(){window.location.href = cpl.engA;};
  
  for(let i of schedule.children[0].children){
    for(let j of i.children){
      for(let k of j.children){
        k.disabled = k.innerHTML == '';
        k.style.backgroundColor = (k.disabled)?'#ffffff':lightBlue;
      }
    }
  }
  cpthu7.style.color = '#b0b0b0';
  cpthu7.style.backgroundColor = '#ffffff';
}
update();

function setup(){
  noCanvas();
}
function draw(){}
