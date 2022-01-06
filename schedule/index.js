let scheduleType = 'A';
let select = '';
let linkType = 'Zoom';
const lightBlue = '#95d7f5';
const darkBlue = '#76aac2';
const lightPink = '#ffbdf2';
const darkPink = '#c981bb';
const d = new Date();
// determine week
let date = d.getDate()+100*(d.getMonth()-1);
if(date>=8 && date<=14 || date>=22 && date<=28 || date>=105 && date<=111 || date>=119 && date<=125){
  scheduleType = 'B';
}
// links library
const links = {
  sciTue: 'https://chula.zoom.us/j/94192343050?pwd=WEFCMmdPUkVsb3pNOS9EQzhkZjY5UT09',
  sciWed: 'https://chula.zoom.us/j/96369962032?pwd=MGJyVWtSVzZzZDROM0I5dXk0Z2dWQT09',
  sciThu: 'https://chula.zoom.us/j/94108470684?pwd=aGQ1NWZRV0I3T3Y4RkZjRjdSVjRKdz09',
  sciFri: '',
  engCor: 'https://cudplus.onsmart.school/lms/courseonlinemeetings/5384/index',
  engSki: 'https://cudplus.onsmart.school/lms/courseonlinemeetings/5463/index',
  artA: 'https://cudplus.onsmart.school/lms/courseonlinemeetings/5393/index',
  artB: 'https://cudplus.onsmart.school/lms/courseonlinemeetings/5394/index',
  musA: 'https://cudplus.onsmart.school/lms/courseonlinemeetings/5395/index',
  musB: 'https://cudplus.onsmart.school/lms/courseonlinemeetings/5396/index',
  hecA: 'https://cudplus.onsmart.school/lms/courseonlinemeetings/5370/index',
  hecB: 'https://cudplus.onsmart.school/lms/courseonlinemeetings/5371/index',
  peB: 'https://cudplus.onsmart.school/lms/courseonlinemeetings/5356/index',
  peG: 'https://cudplus.onsmart.school/lms/courseonlinemeetings/5357/index',
  mat: 'https://cudplus.onsmart.school/lms/courseonlinemeetings/5283/index',
  his: 'https://cudplus.onsmart.school/lms/courseonlinemeetings/5321/index',
  soc: 'https://cudplus.onsmart.school/lms/courseonlinemeetings/5314/index',
  hea: 'https://cudplus.onsmart.school/lms/courseonlinemeetings/5349/index',
  tha: 'https://cudplus.onsmart.school/lms/courseonlinemeetings/5292/index',
  tec: 'https://cudplus.onsmart.school/lms/courseonlinemeetings/5307/index',
  gui: 'https://cudplus.onsmart.school/lms/courseonlinemeetings/5328/index',
  sco: 'https://cudplus.onsmart.school/lms/courseonlinemeetings/5335/index',
  hmr: 'https://chula.zoom.us/j/99878743857?pwd=Z0pKait2cmYrUVhGcFdnbVFqcDNlQT09'
};
const cpl = {
  sciCor: 'https://cudplus.onsmart.school/lms/courseHome?course=5299',
  sciAdd: 'https://cudplus.onsmart.school/lms/courseHome?course=5300',
  engCor: 'https://cudplus.onsmart.school/lms/courseHome?course=5384',
  engSki: 'https://cudplus.onsmart.school/lms/courseHome?course=5463',
  matCor: 'https://cudplus.onsmart.school/lms/courseHome?course=5283',
  matAdd: 'https://cudplus.onsmart.school/lms/courseHome?course=5284',
  artA: 'https://cudplus.onsmart.school/lms/courseHome?course=5393',
  artB: 'https://cudplus.onsmart.school/lms/courseHome?course=5394',
  musA: 'https://cudplus.onsmart.school/lms/courseHome?course=5395',
  musB: 'https://cudplus.onsmart.school/lms/courseHome?course=5396',
  hecA: 'https://cudplus.onsmart.school/lms/courseHome?course=5370',
  hecB: 'https://cudplus.onsmart.school/lms/courseHome?course=5371',
  peB: 'https://cudplus.onsmart.school/lms/courseHome?course=5356',
  peG: 'https://cudplus.onsmart.school/lms/courseHome?course=5357',
  his: 'https://cudplus.onsmart.school/lms/courseHome?course=5321',
  soc: 'https://cudplus.onsmart.school/lms/courseHome?course=5314',
  hea: 'https://cudplus.onsmart.school/lms/courseHome?course=5349',
  tha: 'https://cudplus.onsmart.school/lms/courseHome?course=5292',
  tec: 'https://cudplus.onsmart.school/lms/courseHome?course=5307',
  gui: 'https://cudplus.onsmart.school/lms/courseHome?course=5328',
  sco: 'https://cudplus.onsmart.school/lms/courseHome?course=5335',
  hmr: 'https://cudplus.onsmart.school/lms/courseHome?course=5342'
};
// update
function update(){
  if(linkType == 'Zoom'){
    h1.innerHTML = 'Schedule '+scheduleType;
    h2.innerHTML = 'Zoom Links';
    if(scheduleType=='A'){
      mon2.innerHTML = 'English';
      mon3.innerHTML = '';
      mon6.innerHTML = 'Math';
      mon7.innerHTML = 'History';
      tue1.innerHTML = 'Social Studies';
      tue2.innerHTML = 'Math';
      tue3.innerHTML = 'Home Ec';
      tue5.innerHTML = 'English';
      tue6.innerHTML = '';
      tue7.innerHTML = 'Science';
      wed1.innerHTML = 'Art';
      wed2.innerHTML = 'Science';
      wed3.innerHTML = 'English';
      wed6.innerHTML = 'Thai';
      wed7.innerHTML = 'Technology';
      thu0.innerHTML = 'Homeroom + Math';
      thu2.innerHTML = 'Thai';
      thu3.innerHTML = 'Social Studies';
      thu5.innerHTML = '';
      thu6.innerHTML = 'Science';
      fri3.innerHTML = 'English';
      fri5.innerHTML = 'Thai';
      fri6.innerHTML = 'Math';
      fri7.innerHTML = 'Scouts';
      fri8.innerHTML = 'Science';
    }
    else{
      mon2.innerHTML = 'English';
      mon3.innerHTML = 'PE';
      mon6.innerHTML = '';
      mon7.innerHTML = 'History';
      tue1.innerHTML = 'Social Studies';
      tue2.innerHTML = 'Math';
      tue3.innerHTML = '';
      tue5.innerHTML = 'English';
      tue6.innerHTML = 'Health Education';
      tue7.innerHTML = 'Science';
      wed1.innerHTML = 'Art';
      wed2.innerHTML = 'Science';
      wed3.innerHTML = 'English';
      wed6.innerHTML = 'Thai';
      wed7.innerHTML = 'Technology';
      thu0.innerHTML = 'Homeroom + Math';
      thu2.innerHTML = 'Thai';
      thu3.innerHTML = 'Social Studies';
      thu5.innerHTML = 'Guidance';
      thu6.innerHTML = 'Science';
      fri3.innerHTML = 'English';
      fri5.innerHTML = 'Thai';
      fri6.innerHTML = 'Math';
      fri7.innerHTML = '';
      fri8.innerHTML = 'Science';
    }
    mon1.onclick = function(){select = (select == 'Music') ? '' : 'Music'; update();};
    mon2.onclick = function(){window.location.href = links.engCor;};
    mon3.onclick = function(){select = (select == 'PE') ? '' : 'PE'; update();};
    mon6.onclick = function(){window.location.href = links.mat;};
    mon7.onclick = function(){window.location.href = links.his;};
    tue1.onclick = function(){window.location.href = links.soc;};
    tue2.onclick = function(){window.location.href = links.mat;};
    tue3.onclick = function(){select = (select == 'Home Ec') ? '' : 'Home Ec'; update();};
    tue5.onclick = function(){window.location.href = links.engCor;};
    tue6.onclick = function(){window.location.href = links.hea;};
    tue7.onclick = function(){window.location.href = links.sciTue;};
    wed1.onclick = function(){select = (select == 'Art') ? '' : 'Art'; update();};
    wed2.onclick = function(){window.location.href = links.sciWed;};
    wed3.onclick = function(){window.location.href = links.engCor;};
    wed6.onclick = function(){window.location.href = links.tha;};
    wed7.onclick = function(){window.location.href = links.tec;};
    thu0.onclick = function(){window.location.href = links.hmr;};
    thu2.onclick = function(){window.location.href = links.tha;};
    thu3.onclick = function(){window.location.href = links.soc;};
    thu5.onclick = function(){window.location.href = links.gui;};
    thu6.onclick = function(){window.location.href = links.sciThu;};
    fri3.onclick = function(){window.location.href = links.engSki;};
    fri5.onclick = function(){window.location.href = links.tha;};
    fri6.onclick = function(){window.location.href = links.mat;};
    fri7.onclick = function(){window.location.href = links.sco;};
    fri8.onclick = function(){window.location.href = links.sciFri;};
    for(let i of schedule.children[0].children){
      for(let j of i.children){
        for(let k of j.children){
          k.disabled = k.innerHTML == '';
          k.style.backgroundColor = (k.disabled)?'#ffffff':lightBlue;
        }
      }
    }
    if(select == 'Music'){mon1.style.backgroundColor = darkBlue;}
    else if(select == 'PE'){mon3.style.backgroundColor = darkBlue;}
    else if(select == 'Home Ec'){tue3.style.backgroundColor = darkBlue;}
    else if(select == 'Art'){wed1.style.backgroundColor = darkBlue;}
    thu7.style.color = '#b0b0b0';
    fri1.style.color = '#b0b0b0';
    if(select == ''){selbox.style.visibility = 'hidden';}
    else{selbox.style.visibility = 'visible';}
    selboxg1.style.backgroundColor = lightBlue;
    selboxg2.style.backgroundColor = lightBlue;
    selboxsubjecttext.innerHTML = select;
    selboxg1.innerHTML = (select == 'PE') ? 'Boys' : 'First Half';
    selboxg2.innerHTML = (select == 'PE') ? 'Girls' : 'Second Half';
    if(select == 'PE'){
      selboxg1.onclick = function(){window.location.href = links.peB;};
      selboxg2.onclick = function(){window.location.href = links.peG;};
    }
    else if(select == 'Home Ec'){
      selboxg1.onclick = function(){window.location.href = links.hecA;};
      selboxg2.onclick = function(){window.location.href = links.hecB;};
    }
    else if(select == 'Art'){
      selboxg1.onclick = function(){window.location.href = links.artA;};
      selboxg2.onclick = function(){window.location.href = links.artB;};
    }
    else if(select == 'Music'){
      selboxg1.onclick = function(){window.location.href = links.musA;};
      selboxg2.onclick = function(){window.location.href = links.musB;};
    }
    schedule.style.display = '';
    cpschedule.style.display = 'none';
  }
  else{
    h1.innerHTML = 'Schedule';
    h2.innerHTML = 'Cudplus Links';
    cpmon1.innerHTML = 'Music';
    cpmon2.innerHTML = 'English';
    cpmon3.innerHTML = 'PE';
    cpmon5.innerHTML = 'Math';
    cpmon7.innerHTML = 'History';
    cpmon8.innerHTML = 'English';
    cptue1.innerHTML = 'Social Studies';
    cptue2.innerHTML = 'Math';
    cptue3.innerHTML = 'Home Ec';
    cptue5.innerHTML = 'English';
    cptue6.innerHTML = 'Health Ed';
    cptue7.innerHTML = 'Science';
    cpwed1.innerHTML = 'Art';
    cpwed2.innerHTML = 'Science';
    cpwed3.innerHTML = 'English';
    cpwed5.innerHTML = 'Social Studies';
    cpwed6.innerHTML = 'Thai';
    cpwed7.innerHTML = 'Technology';
    cpthu0.innerHTML = 'Homeroom';
    cpthu1.innerHTML = 'Math';
    cpthu2.innerHTML = 'Thai';
    cpthu3.innerHTML = 'Social Studies';
    cpthu5.innerHTML = 'Guidance';
    cpthu6.innerHTML = 'Science';
    cpfri3.innerHTML = 'English';
    cpfri5.innerHTML = 'Thai';
    cpfri6.innerHTML = 'Math';
    cpfri7.innerHTML = 'Scouts';
    cpfri8.innerHTML = 'Science';
    cpmon1.onclick = function(){select = (select == 'Musice') ? '' : 'Musice'; update();};
    cpmon2.onclick = function(){select = (select == 'English1') ? '' : 'English1'; update();};
    cpmon3.onclick = function(){select = (select == 'PEe') ? '' : 'PEe'; update();};
    cpmon5.onclick = function(){select = (select == 'Math1') ? '' : 'Math1'; update();};
    cpmon7.onclick = function(){window.location.href = cpl.his;};
    cpmon8.onclick = function(){select = (select == 'English2') ? '' : 'English2'; update();};
    cptue1.onclick = function(){window.location.href = cpl.soc;};
    cptue2.onclick = function(){select = (select == 'Math2') ? '' : 'Math2'; update();};
    cptue3.onclick = function(){select = (select == 'Home Ece') ? '' : 'Home Ece'; update();};
    cptue5.onclick = function(){select = (select == 'English3') ? '' : 'English3'; update();};
    cptue6.onclick = function(){window.location.href = cpl.hea;};
    cptue7.onclick = function(){select = (select == 'Science1') ? '' : 'Science1'; update();};
    cpwed1.onclick = function(){select = (select == 'Arte') ? '' : 'Arte'; update();};
    cpwed2.onclick = function(){select = (select == 'Science2') ? '' : 'Science2'; update();};
    cpwed3.onclick = function(){select = (select == 'English4') ? '' : 'English4'; update();};
    cpwed5.onclick = function(){window.location.href = cpl.soc;};
    cpwed6.onclick = function(){window.location.href = cpl.tha;};
    cpwed7.onclick = function(){window.location.href = cpl.tec;};
    cpthu0.onclick = function(){window.location.href = cpl.hmr;};
    cpthu1.onclick = function(){select = (select == 'Math3') ? '' : 'Math3'; update();};
    cpthu2.onclick = function(){window.location.href = cpl.tha;};
    cpthu3.onclick = function(){window.location.href = cpl.soc;};
    cpthu5.onclick = function(){window.location.href = cpl.gui;};
    cpthu6.onclick = function(){select = (select == 'Science3') ? '' : 'Science3'; update();};
    cpfri3.onclick = function(){select = (select == 'English5') ? '' : 'English5'; update();};
    cpfri5.onclick = function(){window.location.href = cpl.tha;};
    cpfri6.onclick = function(){select = (select == 'Math4') ? '' : 'Math4'; update();};
    cpfri7.onclick = function(){window.location.href = cpl.sco;};
    cpfri8.onclick = function(){select = (select == 'Science4') ? '' : 'Science4'; update();};
    for(let i of cpschedule.children[0].children){
      for(let j of i.children){
        for(let k of j.children){
          k.disabled = k.innerHTML == '';
          k.style.backgroundColor = (k.disabled)?'#ffffff':lightPink;
        }
      }
    }
    if(select == 'Musice'){cpmon1.style.backgroundColor = darkPink;}
    else if(select == 'PEe'){cpmon3.style.backgroundColor = darkPink;}
    else if(select == 'Home Ece'){cptue3.style.backgroundColor = darkPink;}
    else if(select == 'Arte'){cpwed1.style.backgroundColor = darkPink;}
    else if(select == 'English1'){cpmon2.style.backgroundColor = darkPink;}
    else if(select == 'English2'){cpmon8.style.backgroundColor = darkPink;}
    else if(select == 'English3'){cptue5.style.backgroundColor = darkPink;}
    else if(select == 'English4'){cpwed3.style.backgroundColor = darkPink;}
    else if(select == 'English5'){cpfri3.style.backgroundColor = darkPink;}
    else if(select == 'Math1'){cpmon5.style.backgroundColor = darkPink;}
    else if(select == 'Math2'){cptue2.style.backgroundColor = darkPink;}
    else if(select == 'Math3'){cpthu1.style.backgroundColor = darkPink;}
    else if(select == 'Math4'){cpfri6.style.backgroundColor = darkPink;}
    else if(select == 'Science1'){cpthu7.style.backgroundColor = darkPink;}
    else if(select == 'Science2'){cpwed2.style.backgroundColor = darkPink;}
    else if(select == 'Science3'){cpthu6.style.backgroundColor = darkPink;}
    else if(select == 'Science4'){cpfri8.style.backgroundColor = darkPink;}
    cpthu7.style.color = '#b0b0b0';
    cpfri1.style.color = '#b0b0b0';
    cpthu7.style.backgroundColor = '#ffffff';
    cpfri1.style.backgroundColor = '#ffffff';
    if(select == ''){selbox.style.visibility = 'hidden';}
    else{selbox.style.visibility = 'visible';}
    selboxg1.style.backgroundColor = lightPink;
    selboxg2.style.backgroundColor = lightPink;
    selboxsubjecttext.innerHTML = select.slice(0,-1);
    switch(select.slice(0,-1)){
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
    if(select == 'PEe'){
      selboxg1.onclick = function(){window.location.href = cpl.peB;};
      selboxg2.onclick = function(){window.location.href = cpl.peG;};
    }
    else if(select == 'Home Ece'){
      selboxg1.onclick = function(){window.location.href = cpl.hecA;};
      selboxg2.onclick = function(){window.location.href = cpl.hecB;};
    }
    else if(select == 'Arte'){
      selboxg1.onclick = function(){window.location.href = cpl.artA;};
      selboxg2.onclick = function(){window.location.href = cpl.artB;};
    }
    else if(select == 'Musice'){
      selboxg1.onclick = function(){window.location.href = cpl.musA;};
      selboxg2.onclick = function(){window.location.href = cpl.musB;};
    }
    else if(select.slice(0,-1) == 'English'){
      selboxg1.onclick = function(){window.location.href = cpl.engCor;};
      selboxg2.onclick = function(){window.location.href = cpl.engSki;};
    }
    else if(select.slice(0,-1) == 'Math'){
      selboxg1.onclick = function(){window.location.href = cpl.matCor;};
      selboxg2.onclick = function(){window.location.href = cpl.matAdd;};
    }
    else if(select.slice(0,-1) == 'Science'){
      selboxg1.onclick = function(){window.location.href = cpl.sciCor;};
      selboxg2.onclick = function(){window.location.href = cpl.sciAdd;};
    }
    schedule.style.display = 'none';
    cpschedule.style.display = '';
  }
}
update();
// eventlisteners
h1.onclick = function(){
  scheduleType = (scheduleType=='A')?'B':'A';
  select = '';
  update();
};
h2.onclick = function(){
  linkType = (linkType=='Zoom')?'Cudplus':"Zoom";
  select = '';
  update();
}
