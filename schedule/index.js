let scheduleType = 'A';
const d = new Date();
// determine week
let date = d.getDate()+100*(d.getMonth()-10);
if(date>=6 && date<=12 || date>=20 && date<=26 || date>=104 && date<=110 || date>=118 && date<=124){
  scheduleType = 'B';
}
// links library
let links = {
  sciTue: 'https://chula.zoom.us/j/94192343050?pwd=WEFCMmdPUkVsb3pNOS9EQzhkZjY5UT09',
  sciWed: 'https://chula.zoom.us/j/96369962032?pwd=MGJyVWtSVzZzZDROM0I5dXk0Z2dWQT09',
  sciThu: 'https://chula.zoom.us/j/94108470684?pwd=aGQ1NWZRV0I3T3Y4RkZjRjdSVjRKdz09',
  engMon: 'https://chula.zoom.us/j/98026971354?pwd=cGxMdThXNHhJbE1PM3JJZ3RoRVFYZz09',
  engTue: 'https://chula.zoom.us/j/96851945088?pwd=cFNXdmZUcHNnNW1kMWQvRW1TdWZBQT09',
  engFri: 'https://chula.zoom.us/j/97530180394?pwd=MVYwZHJBbStOOVJZanp0OHBCdFRmUT09',
  mat: 'https://cudplus.onsmart.school/lms/courseonlinemeetings/5283/index',
  his: 'https://cudplus.onsmart.school/lms/courseonlinemeetings/5321/index',
  soc: 'https://cudplus.onsmart.school/lms/courseonlinemeetings/5314/index',
  hea: 'https://cudplus.onsmart.school/lms/courseonlinemeetings/5349/index',
  tha: 'https://cudplus.onsmart.school/lms/courseonlinemeetings/5292/index',
  tec: 'https://cudplus.onsmart.school/lms/courseonlinemeetings/5307/index',
  gui: 'https://cudplus.onsmart.school/lms/courseonlinemeetings/5328/index',
  sco: 'https://cudplus.onsmart.school/lms/courseonlinemeetings/5335/index'
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
    tue8.innerHTML = '';
    wed1.innerHTML = 'Art';
    wed2.innerHTML = 'Science';
    wed3.innerHTML = '';
    wed5.innerHTML = '';
    wed6.innerHTML = 'Thai';
    wed7.innerHTML = 'Technology';
    thu1.innerHTML = 'Math';
    thu2.innerHTML = 'Thai';
    thu3.innerHTML = 'Social Studies';
    thu5.innerHTML = '';
    thu6.innerHTML = 'Science';
    thu7.innerHTML = '';
    fri1.innerHTML = '';
    fri3.innerHTML = 'English';
    fri5.innerHTML = '';
    fri6.innerHTML = 'Math';
    fri7.innerHTML = 'Scouts';
    fri8.innerHTML = 'Science';
  }
  else{
    mon1.innerHTML = 'Music';
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
    tue8.innerHTML = '';
    wed1.innerHTML = '';
    wed2.innerHTML = 'Science';
    wed3.innerHTML = '';
    wed5.innerHTML = '';
    wed6.innerHTML = 'Thai';
    wed7.innerHTML = 'Technology';
    thu1.innerHTML = 'Math';
    thu2.innerHTML = 'Thai';
    thu3.innerHTML = 'Social Studies';
    thu5.innerHTML = 'Guidance';
    thu6.innerHTML = 'Science';
    thu7.innerHTML = '';
    fri1.innerHTML = '';
    fri3.innerHTML = 'English';
    fri5.innerHTML = '';
    fri6.innerHTML = 'Math';
    fri7.innerHTML = '';
    fri8.innerHTML = 'Science';
  }
  mon2.onclick = function(){window.location.href = links.engMon;};
  mon6.onclick = function(){window.location.href = links.mat;};
  mon7.onclick = function(){window.location.href = links.his;};
  tue1.onclick = function(){window.location.href = links.soc;};
  tue2.onclick = function(){window.location.href = links.mat;};
  tue5.onclick = function(){window.location.href = links.engTue;};
  tue6.onclick = function(){window.location.href = links.hea;};
  tue7.onclick = function(){window.location.href = links.sciTue;};
  wed2.onclick = function(){window.location.href = links.sciWed;};
  wed6.onclick = function(){window.location.href = links.tha;};
  wed7.onclick = function(){window.location.href = links.tec;};
  thu1.onclick = function(){window.location.href = links.mat;};
  thu2.onclick = function(){window.location.href = links.tha;};
  thu3.onclick = function(){window.location.href = links.soc;};
  thu5.onclick = function(){window.location.href = links.gui;};
  thu6.onclick = function(){window.location.href = links.sciThu;};
  fri3.onclick = function(){window.location.href = links.engFri;};
  fri6.onclick = function(){window.location.href = links.mat;};
  fri7.onclick = function(){window.location.href = links.sco;};
  for(let i of schedule.children[0].children){
    for(let j of i.children){
      for(let k of j.children){
        k.disabled = k.innerHTML == '';
        k.style.backgroundColor = (k.disabled)?'#ffffff':'#95d7f5';
      }
    }
  }
}
update();
// eventlisteners
h1.onclick = function(){
  scheduleType = (scheduleType=='A')?'B':'A';
  update();
};
