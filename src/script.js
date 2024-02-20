var teste1 = document.getElementById('teste1').innerHTML = 'Hello World!'

var teste2 = document.getElementById('teste2').textContent = 'Hello World!'

var teste3 = document.getElementById('teste3').insertAdjacentHTML("beforeend", ' Hello World')

var teste4 = document.getElementById('teste4').textContent = 'Hello World';

var teste5 = document.createTextNode("Hello World");
document.getElementById('teste5').appendChild(teste5) 

var teste6 = document.getElementById('teste6').insertAdjacentText("afterbegin", 'Hello World <<')

var teste7 = document.createElement('li')
teste7.textContent = 'Hello World';
document.getElementById('teste7').appendChild(teste7);