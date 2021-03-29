function add_shape() {
  let count = 0;
  const colors = ['yellow', 'blue', 'black', 'pink', 'red', 'gray'];
  function createDiv(){
    const color = colors[Math.floor(Math.random() * 6)];
    let elt = document.createElement('div');
    elt.setAttribute('id','div' + count);
    elt.style.backgroundColor = color;
    if(count % 2 == 1) {
      elt.setAttribute('class', 'large');
    }
    else{
      elt.setAttribute('class', 'small');
    }
    document.body.appendChild(elt);
    count++;
  }
  return createDiv;
}