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
  physC: linkPref + '9149',
  physA: linkPref + '9197',
  chemC: linkPref + '9192',
  chemA: linkPref + '9198',
  engC: linkPref + '8654',
  engA: linkPref + '8658',
  astr: linkPref + '9200',
  elec: linkPref + '9439',
  gui: linkPref + '9379',
  hist: linkPref + '9281',
  thai: linkPref + '9039',
  geo: linkPref + '9274',
  tech: linkPref + '9189',
  artA: linkPref + '9588',
  pe: linkPref + '9620'
};

// update
function update(){
  cpmon1.onclick = function(){window.location.href = cpl.engC;};
  cpmon2.onclick = function(){selct = (selct == 'homec') ? '' : 'homec'; update();};
  cpmon3.onclick = function(){window.location.href = cpl.bio;};
  cpmon6.onclick = function(){selct = (selct == 'chem1') ? '' : 'chem1'; update();};
  cpmon8.onclick = function(){selct = (selct == 'math1') ? '' : 'math1'; update();};
  
  cptue1.onclick = function(){selct = (selct == 'math2') ? '' : 'math2'; update();};
  cptue2.onclick = function(){window.location.href = cpl.engA;};
  cptue3.onclick = function(){window.location.href = cpl.geo;};
  cptue4.onclick = function(){window.location.href = cpl.gui;};
  cptue6.onclick = function(){window.location.href = cpl.pe;};
  cptue7.onclick = function(){window.location.href = cpl.thai;};
  cptue8.onclick = function(){window.location.href = cpl.engC;};
  
  cpwed1.onclick = function(){selct = (selct == 'chem2') ? '' : 'chem2'; update();};
  cpwed3.onclick = function(){window.location.href = cpl.hist;};
  cpwed4.onclick = function(){window.location.href = cpl.engC;};
  cpwed6.onclick = function(){selct = (selct == 'math3') ? '' : 'math3'; update();};
  cpwed7.onclick = function(){selct = (selct == 'phys1') ? '' : 'phys1'; update();};
  
  cpthu1.onclick = function(){window.location.href = cpl.tech;};
  cpthu3.onclick = function(){selct = (selct == 'math4') ? '' : 'math4'; update();};
  cpthu4.onclick = function(){selct = (selct == 'phys2') ? '' : 'phys2'; update();};
  cpthu6.onclick = function(){window.location.href = cpl.bio;};
  
  cpfri1.onclick = function(){window.location.href = cpl.astr;};
  cpfri3.onclick = function(){selct = (selct == 'art') ? '' : 'art'; update();};
  cpfri4.onclick = function(){window.location.href = cpl.thai;};
  cpfri6.onclick = function(){selct = (selct == 'math5') ? '' : 'math5'; update();};
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
  if(selct == 'homec'){cpmon2.style.backgroundColor = darkBlue;}
  else if(selct == 'art'){cpfri3.style.backgroundColor = darkBlue;}
  else if(selct == 'math1'){cpmon8.style.backgroundColor = darkBlue;}
  else if(selct == 'math2'){cptue1.style.backgroundColor = darkBlue;}
  else if(selct == 'math3'){cpwed6.style.backgroundColor = darkBlue;}
  else if(selct == 'math4'){cpthu3.style.backgroundColor = darkBlue;}
  else if(selct == 'math5'){cpfri6.style.backgroundColor = darkBlue;}
  else if(selct == 'chem1'){cpmon6.style.backgroundColor = darkBlue;}
  else if(selct == 'chem2'){cpwed1.style.backgroundColor = darkBlue;}
  else if(selct == 'phys1'){cpwed7.style.backgroundColor = darkBlue;}
  else if(selct == 'phys2'){cpthu4.style.backgroundColor = darkBlue;}
  cpthu7.style.color = '#b0b0b0';
  cpthu7.style.backgroundColor = '#ffffff';
  if(selct == ''){selbox.style.visibility = 'hidden';}
  else{selbox.style.visibility = 'visible';}
  selboxg1.style.backgroundColor = lightBlue;
  selboxg2.style.backgroundColor = lightBlue;
  selboxsubjecttext.innerHTML = selct.slice(0,-1);
  switch(selct.slice(0,-1)){
    case 'PE':
      selboxg1.innerHTML = 'Boys';
      selboxg2.innerHTML = 'Girls';
      break;
    case 'English':
      selboxg1.innerHTML = 'Core';
      selboxg2.innerHTML = 'Skills';
      break;
    case 'Math':
      selboxg1.innerHTML = 'Core';
      selboxg2.innerHTML = 'Additional';
      break;
    case 'Science':
      selboxg1.innerHTML = 'Core';
      selboxg2.innerHTML = 'Additional';
      break;
    default:
      selboxg1.innerHTML = 'First Half';
      selboxg2.innerHTML = 'Second Half';
  }
  if(selct == 'PEe'){
    selboxg1.onclick = function(){window.location.href = cpl.peB;};
    selboxg2.onclick = function(){window.location.href = cpl.peG;};
  }
  else if(selct == 'Home Ece'){
    selboxg1.onclick = function(){window.location.href = cpl.hecA;};
    selboxg2.onclick = function(){window.location.href = cpl.hecB;};
  }
  else if(selct == 'Arte'){
    selboxg1.onclick = function(){window.location.href = cpl.artA;};
    selboxg2.onclick = function(){window.location.href = cpl.artB;};
  }
  else if(selct == 'Musice'){
    selboxg1.onclick = function(){window.location.href = cpl.musA;};
    selboxg2.onclick = function(){window.location.href = cpl.musB;};
  }
  else if(selct.slice(0,-1) == 'English'){
    selboxg1.onclick = function(){window.location.href = cpl.engCor;};
    selboxg2.onclick = function(){window.location.href = cpl.engSki;};
  }
  else if(selct.slice(0,-1) == 'Math'){
    selboxg1.onclick = function(){window.location.href = cpl.matCor;};
    selboxg2.onclick = function(){window.location.href = cpl.matAdd;};
  }
  else if(selct.slice(0,-1) == 'Science'){
    selboxg1.onclick = function(){window.location.href = cpl.sciCor;};
    selboxg2.onclick = function(){window.location.href = cpl.sciAdd;};
  }
}
update();

function setup(){
  noCanvas();
}
function draw(){}
