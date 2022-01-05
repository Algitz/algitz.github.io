let scheduleType = 'A';
const d = new Date();
// determine week
let date = d.getDate()+100*(d.getMonth()-1);
if(date>=8 && date<=14 || date>=22 && date<=28 || date>=105 && date<=111 || date>=119 && date<=125){
  scheduleType = 'B';
}
// links library
let links = {
  sciTue: 'https://chula.zoom.us/j/94192343050?pwd=WEFCMmdPUkVsb3pNOS9EQzhkZjY5UT09',
  sciWed: 'https://chula.zoom.us/j/96369962032?pwd=MGJyVWtSVzZzZDROM0I5dXk0Z2dWQT09',
  sciThu: 'https://chula.zoom.us/j/94108470684?pwd=aGQ1NWZRV0I3T3Y4RkZjRjdSVjRKdz09',
  sciFri: '',
  engCor: 'https://cudplus.onsmart.school/lms/courseonlinemeetings/5384/index',
  engSki: 'https://cudplus.onsmart.school/lms/courseonlinemeetings/5463/index',
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
// update
function update(){
  h1.innerHTML = 'Schedule '+scheduleType;
  if(scheduleType=='A'){
    mon1.innerHTML = '';
    mon2.innerHTML = 'English';
    mon3.innerHTML = '';
    mon5.innerHTML = '';
    mon6.innerHTML = 'Math';
    mon7.innerHTML = 'History';
    mon8.innerHTML = '';
    tue1.innerHTML = 'Social Studies';
    tue2.innerHTML = 'Math';
    tue3.innerHTML = 'Home Ec';
    tue5.innerHTML = 'English';
    tue6.innerHTML = '';
    tue7.innerHTML = 'Science';
    wed1.innerHTML = 'Art';
    wed2.innerHTML = 'Science';
    wed3.innerHTML = 'English';
    wed5.innerHTML = '';
    wed6.innerHTML = 'Thai';
    wed7.innerHTML = 'Technology';
    thu0.innerHTML = 'Homeroom';
    thu1.innerHTML = 'Math';
    thu2.innerHTML = 'Thai';
    thu3.innerHTML = 'Social Studies';
    thu5.innerHTML = '';
    thu6.innerHTML = 'Science';
    thu7.innerHTML = '';
    fri1.innerHTML = '';
    fri3.innerHTML = 'English';
    fri5.innerHTML = 'Thai';
    fri6.innerHTML = 'Math';
    fri7.innerHTML = 'Scouts';
    fri8.innerHTML = 'Science';
  }
  else{
    mon1.innerHTML = '';
    mon2.innerHTML = 'English';
    mon3.innerHTML = 'PE';
    mon5.innerHTML = '';
    mon6.innerHTML = '';
    mon7.innerHTML = 'History';
    mon8.innerHTML = '';
    tue1.innerHTML = 'Social Studies';
    tue2.innerHTML = 'Math';
    tue3.innerHTML = '';
    tue5.innerHTML = 'English';
    tue6.innerHTML = 'Health Education';
    tue7.innerHTML = 'Science';
    wed1.innerHTML = 'Art';
    wed2.innerHTML = 'Science';
    wed3.innerHTML = 'English';
    wed5.innerHTML = '';
    wed6.innerHTML = 'Thai';
    wed7.innerHTML = 'Technology';
    thu0.innerHTML = 'Homeroom';
    thu1.innerHTML = 'Math';
    thu2.innerHTML = 'Thai';
    thu3.innerHTML = 'Social Studies';
    thu5.innerHTML = 'Guidance';
    thu6.innerHTML = 'Science';
    thu7.innerHTML = '';
    fri1.innerHTML = '';
    fri3.innerHTML = 'English';
    fri5.innerHTML = 'Thai';
    fri6.innerHTML = 'Math';
    fri7.innerHTML = '';
    fri8.innerHTML = 'Science';
  }
  mon2.onclick = function(){window.location.href = links.engCor;};
  mon6.onclick = function(){window.location.href = links.mat;};
  mon7.onclick = function(){window.location.href = links.his;};
  tue1.onclick = function(){window.location.href = links.soc;};
  tue2.onclick = function(){window.location.href = links.mat;};
  tue5.onclick = function(){window.location.href = links.engCor;};
  tue6.onclick = function(){window.location.href = links.hea;};
  tue7.onclick = function(){window.location.href = links.sciTue;};
  wed2.onclick = function(){window.location.href = links.sciWed;};
  wed3.onclick = function(){window.location.href = links.engCor;};
  wed6.onclick = function(){window.location.href = links.tha;};
  wed7.onclick = function(){window.location.href = links.tec;};
  thu0.onclick = function(){window.location.href = links.hmr;};
  thu1.onclick = function(){window.location.href = links.mat;};
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
        k.style.backgroundColor = (k.disabled)?'#ffffff':'#95d7f5';
      }
    }
  }
  thu7.innerHTML = 'Elective';
  thu7.style.color = '#b0b0b0';
  fri1.innerHTML = 'Elective';
  fri1.style.color = '#b0b0b0';
}
update();
// eventlisteners
// #83c7e6 dark #b5e1f5 light
h1.onclick = function(){
  scheduleType = (scheduleType=='A')?'B':'A';
  update();
};
