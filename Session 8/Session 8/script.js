

// Integer
// let a = 10.5121312724
// console.log(typeof a)

// String
// let nama = "Susi"
// console.log(typeof nama)

// Boolean
// let benar = true;
// true = 1 
// false =0
// console.log(typeof benar)

// Date
// let date1 = new Date()
// console.log(date1.getDay())

// Array
// let arrays = [1,2,3,4]
// let names = ["Budi", "Tono", "Kusno"]

// Object
// let Mahasiswa = {
//   name:"Susi",
//   nim: 27012341
// }

// ArrayOfObject
// let ArrayOfObject = [
//   {
//     name:"Susi",
//   nim: 27012341
//   },
//   {
//     name:"Tono",
//     nim: 28012813
//   }
// ]

// Perbedaan antara for dan juga loop

// for(let i =0;i<5;i++){
//   let j=0
// }
// for(let i =0;i<5;i++){
//   var k=0
// }

// let j =100
// var k =1000
// j = 1000
// k = 10000
// console.log(j)
// console.log(k)

// const x = 3.1415
// console.log(x)


// Penjumlahan
// console.log(4+5)
// Pengurangan
// console.log(4-5)
// Pembagian
// console.log(4/5)
// Perkalian
// console.log(4*5)
// Pangkat
// console.log(4**3)
// Modulo
// console.log(6%5)

let umur = 51

// if(umur>18 && umur <50){
// console.log("Kamu sudah cukup umur")
// }else if(umur>=50){
// console.log("Kamu sudah terlalu tua")
// }
// else{
//   console.log("Kamu belum cukup umur")
// }
let nama = "Mochi"
let age = 20

let punyaSIM = true
// if(nama != "Ahmad"){
//   console.log("Kamu sudah cukup umur")
// }else{
//   console.log("Kamu belum cukup umur")
// }

// let x = 10 

// === juga membandingkan tipe data, tidak hanya value nya
// if(x!=="10"){
//   console.log("Angkanya 10")
// }else{
//   console.log("Angkanya bukan 10")
// }

// if(nama == "Mochi" || age ==18){
//   console.log("Nama kamu adalah Mochi dan kamu berumur 18 tahun")
// }else{
//   console.log("nama kamu bukan ahmad dan mochi")
// }

// Nullish coalescing operator dia akan return value sendiri kalau misal tidak null/undefined

// let y = "Kimchi" ?? "Tidak ada data"
// console.log(y)

// if(age>18){
//   if(punyaSIM==true){
//     console.log("Kamu sudah boleh mengemudi")
//   }else{
//     console.log("kamu belum boleh mengemudi")
//   }
// }else{
//   console.log("Kamu belum cukup umur")
// }

// ternary
// let apakahNamanyaMochi = nama=="Mochi" ? "namanya mochi" : "namanya bukan mochi"
// console.log(apakahNamanyaMochi)

// if(nama=="Mochi"){
//   return "namanya mochi"
// }else{
//   return "namanya bukan mochi"
// }


// console.log("1. Create data")
// console.log("2. Remove data")
// console.log("3. Update data")
// console.log("4. Delete data")
// let input = 5

// switch(input){
//   case 1:
//     add()
//     break
//   case 2:
//     remove()
//     break
//   case 3:
//     break
//   case 4:
//     break
//   default:
//     break;
// }


let x =5
// while(x<5){
//   console.log(x)
// }

// do{
//   console.log(x)
// }while(x<5)

// for(let i=0;i<=5;i++){
//   console.log(i)
// }

let arrays = [1,2,3,4,5,6,7]

let ArrayOfObject = [
    {
      name:"Susi",
      nim: 27012341
    },
    {
      name:"Tono",
      nim: 28012813
    },
    {
      name:"Jacq",
      nim: 2912313
    },
    {
      name:"Marcella",
      nim: 29323823
    },
    {
      name:"Tasya",
      nim: 2812713
    }
  ]

//   for(let i =0;i<ArrayOfObject.length;i++){
//     console.log(ArrayOfObject[i])
//   }

for(let keys in ArrayOfObject){
  console.log(keys, ArrayOfObject[keys])
}

// console.log("")

for(let key of ArrayOfObject){
  console.log(key)
}


// function add(a,b){
//   c = a+b
//   return c
// }
// let square = (x)=> x*x
// function square(x){
//   return x*x
// }

// console.log(square(9))
// console.log(print())
// console.log(add(4,5))


const button = document.getElementById('btn')
button.addEventListener('click', ()=>{
  console.log("Printed")
})