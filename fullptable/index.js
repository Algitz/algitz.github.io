let g = [];
let wrong = [];
let score = 0;
for(let i = 1; i < 119; i++){
  g.push(i);
  eval('s'+i+'.children[0].onclick = function(){btnclick('+i+');}');
}
txt5.style.display = 'none';
//
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}
shuffle(g);
txt2.innerHTML = elementName[g[0]-1];
//
function btnclick(s){
  let buttony = eval('s'+g[0]+'.children[0]');
  buttony.innerHTML = elementSymbol[g[0]-1];
  buttony.style.border = "solid 1px #888888";
  buttony.style.backgroundColor = (s == g[0]) ? "#5fcc49" : "#e85151";
  buttony.disabled = true;
  score += (s == g[0]);
  if(s != g[0]){wrong.push(g[0]);}
  //
  g.shift();
  txt2.innerHTML = (g.length > 0) ? elementName[g[0]-1] : 'You scored '+score+'/118 ('+(Math.round(score/118*100))+'%)';
  txt4.style.display = (g.length > 0) ? '' : 'none';
  txt5.style.display = (g.length > 0) ? 'none' : '';
    if(g.length == 0){
      for(let i = 1; i < 119; i++){
        eval('s'+i+'.children[0].disabled = true;');
        eval('s'+i+'.children[0].innerHTML = elementSymbol[i-1];');
      }
    }
}
skip.onclick = function(){
  g.push(g.shift());
  txt2.innerHTML = elementName[g[0]-1];
};
restart.onclick = function(){
  for(let i = 1; i < 119; i++){
    let buttony = eval('s'+i+'.children[0]');
    buttony.innerHTML = '';
    buttony.style.border = '';
    buttony.style.backgroundColor = '';
    buttony.disabled = false;
  }
  score = 0;
  wrong = [];
  for(let i = 1; i < 119; i++){g.push(i);}
  shuffle(g);
  txt2.innerHTML = elementName[g[0]-1];
  txt4.style.display = '';
  txt5.style.display = 'none';
}
practice.onclick = function(){
  for(let i = 1; i < 119; i++){
    let buttony = eval('s'+i+'.children[0]');
    buttony.innerHTML = '';
    buttony.style.border = '';
    buttony.style.backgroundColor = '';
    buttony.disabled = false;
  }
  //
  score = 0;
  g = [];
  for(let i of wrong){g.push(i);}
  shuffle(g);
  wrong = [];
  txt2.innerHTML = elementName[g[0]-1];
  txt4.style.display = '';
  txt5.style.display = 'none';
}
