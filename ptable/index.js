let g = [];
let score = 0;
for(let i = 1; i < 55; i++){
  g.push(i);
  eval('s'+i+'.onclick = function(){btnclick('+i+');}');
}

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


function btnclick(s){
  let buttony = eval('s'+g[0]+'.children[0]');
  if(s == g[0]){
    buttony.innerHTML = elementSymbol[g[0]-1];
    buttony.style.backgroundColor = "#5fcc49";
    buttony.style.border = "solid 1px #888888";
    buttony.disabled = true;
    score++;
  }
  else{
    buttony.innerHTML = elementSymbol[g[0]-1];
    buttony.style.backgroundColor = "#e85151";
    buttony.style.border = "solid 1px #888888";
    buttony.disabled = true;
  }
  //
  g.shift();
  txt2.innerHTML = (g.length > 0) ? elementName[g[0]-1] : 'You scored '+score+'/54 ('+(Math.floor(score/54*100))+'%)';
}
