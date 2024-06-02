// let name = "Nando"
// let age = 10

// console.log("Halo nama saya " + name + " dan umur saya adalah " + age)
// console.log('Halo')
// console.log(`Halo nama saya ${name} dan umur saya adalah ${age}`)

// window.alert("Halo")
// window.prompt("Apakahh kamu yakin?")
// window.confirm("Apakahh kamu yakin?")

// const h1 = document.getElementsByClassName('h1')[0]
// const h2 = document.getElementsByClassName('h1')[1]
const h3 = document.getElementById('h1')

// h1.style.color = 'red'
// h2.style.color = 'green'
// h3.style.color = 'blue'

// h3.innerHTML = "<b>Text nya berubah</b>"

const input = document.getElementById('input-text')
console.log(input.value)

const btn = document.getElementById('sbmt-btn')
const inputText = document.getElementById('input-text')
const inputUmur = document.getElementById('input-umur')

btn.addEventListener('click',validasiSubmit)

function validasiSubmit(){
  const valueX = inputText.value
  const valueY = inputUmur.value
  if(valueX != '' && valueY != ''){
  if(!valueX.startsWith("a")){
    console.log("Nama harus dimulai dari huruf a")
  }else if(!valueX.includes("@")){
    console.log("nama harus memiliki @")
  }else if(valueX.length<5){
    console.log("nama harus lebih dari 5")
  }
  else{
    console.log(`nama: ${valueX}, umur: ${valueY}`)
  }
}else{
  console.log("Input tidak boleh null")
}
}

// function change(){
//   inputText.style.backgroundColor = 'red'
// }
// inputText.addEventListener('focus', focus)
// inputText.addEventListener('blur', blur)
// inputText.addEventListener('change', change)

// function focus(){
//   inputText.style.backgroundColor = 'yellow'
// }
// function blur(){
//   inputText.style.backgroundColor = 'green'
// }