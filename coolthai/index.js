txt.style.width = '100%';
txt.style.height = '50%';
txt.style.fontSize = '20px';

let baseC = ['๊','1','2','3','4','5','6','7','8','9','0','-','=','พ','ล','ม','ส','ะ','ใ','ุ','้','่','ฟ','แ','ฆ','ฯ','จ','ด','น','ง','ว','ี','า','ก','ร','อ','เ','ห','ต','ท','ย','ไ','ิ','ั',',','.','ฤ'];
let shiftC = ['๋','!','@','#','$','%','^','&','*','(',')','_','+','ฉ','ฏ','ผ','ญ','ฎ','ฝ','ณ','ข','ื','ฌ','ซ','ฮ','ฬ','ฐ','ู','ป','็','โ','ภ','ช','ค','บ','ษ','"','์','ึ','ถ','ำ','ๆ','ศ','ธ','ฒ','ฑ','?'];
let pos = 0;
let shift = false;
let g = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191];

window.onkeydown = function(e){
  let cod = e.keyCode;
  if(cod == 32){txt.innerHTML += ' ';}
  else if(cod == 8){txt.innerHTML = txt.innerHTML.substring(0, txt.innerHTML.length-1);}
  else if(cod == 13){txt.innerHTML += '\n';}
  else if(g.includes(cod)){
    let key;
    for(let i in g){
      if(cod == g[i]){key = i;}
    }
    txt.innerHTML += (!e.shiftKey) ? baseC[key] : shiftC[key];
  }
};
