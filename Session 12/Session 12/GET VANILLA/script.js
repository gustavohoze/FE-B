document.addEventListener('DOMContentLoaded', function(){
  const ajax = new XMLHttpRequest();
  // const date = new Date();
  // console.log(date.getDay())
  const button = document.getElementById('btn-get-data');
  const url = "Products.json";
  const lists = document.getElementById('lists');
  const input = document.getElementById('input-text');

  // button.addEventListener('click', function(){
  //   ajax.onload = function(){
  //     if(ajax.status ===200){
  //       const data = JSON.parse(ajax.responseText);
  //       lists.textContent = "";
  //           for(const x of data.products){
  //             let list = document.createElement('li');
  //             list.textContent = x.title;
  //             lists.append(list);
  //             }
  //     }else{
  //       alert("gagal mengambil data");
  //     }
  //   }
  //   ajax.open("GET", url);
  //   ajax.send();
  //   // const data = JSON.parse(ajax.responseText)
  //   // // JSON.stringify
  //   // for(const x of data.products){
  //   //   console.log(x.title);
  //   // }
  // })
button.addEventListener('click', function(){
  const value = input.value;
  ajax.onload = function(){
    if(value == ""){
      alert("Value tidak boleh kosong");
    }else{
      if(ajax.status===200){
        const datas = JSON .parse(ajax.responseText);
        lists.textContent = "";
        const searchRegex = new RegExp(value, "i");
        for(const x of datas.products){
          let title = x.title;
          if(searchRegex.test(title)){
            let list = document.createElement('li');
            list.textContent = title;
            lists.append(list);
          }else{

          }

          }

      }else{
        alert("gagal mengambil data")
      }
    }
   
  }
  ajax.open('GET', url);
  ajax.send();
})
})