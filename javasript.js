const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const btn = document.querySelector('#btn')
const passHtml = document.querySelector('#pass-html')
const usuarioPassLongitud = document.querySelector('#usuario-pass-longitud')

let passLongitud = 5

btn.addEventListener('click', generarPass)
function generarPass() {
  passLongitud = usuarioPassLongitud.value
  const numRandom = () => Math.floor(Math.random() * characters.length)
  
  let passUno = ''
  let passDos = ''
  for(let i = 0; i < passLongitud; i++) {
    passUno += characters[numRandom()]
    passDos += characters[numRandom()]
  }

  setTimeout( getHtml, 500 )

  function getHtml() {
    passHtml.innerHTML = `
      <p>${passUno}</p>
      <p>${passDos}</p>
    `
  }
}
