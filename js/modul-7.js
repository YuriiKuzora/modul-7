'use strict';

const liElement = document.querySelectorAll('#categories .item');

// console.log('Number li All:', liElement.length);

const list = document.querySelector('#categories');
console.log(list);

const li = document.createElement('li');

const h2 = document.createElement('h2');
h2.textContent = 'Hello world';

console.dir(h2);

// console.log(ul);
// console.log(ul2);
// console.log(h2);

li.appendChild(h2);
console.log(li);

list.append(li); // кінець
list.prepend(li); // початок

// const liContent = document.textContent(
//   '<li class="item"><h2>Авто</h2><ul><li>BMW</li><li>Honda</li><li>Toyota</li><li>Ford</li></ul>'
// );
