$(document).ready(function(){

const btn = $("#btn-default")
const btn2 = $("#btn-default-2")
// btn.delay(5000).fadeOut('slow')



btn.click(function(){
  btn.animate({
    width: '500px',
    height: '500px'
  },1000)
})

// btn.click(function(){
//   $('#box').fadeOut('slow');
// })
// btn2.click(function(){
//   $('#box').fadeIn('slow');
// })
// btn.click(function(){
//   $("#box").fadeToggle(2000)
// })
// btn.click(function(){
//   $("#box").fadeTo(2000, .5)
// })

// btn.click(function(){
//   $('#box').hide('slow');
// })
// btn2.click(function(){
//   $('#box').toggle('slow');
// })
// btn2.click(function(){
//   $('#box').show('slow');
// })
// btn.click(function(){
//   $('#box').slideUp('slow');
// })
// btn.click(function(){
//   $('#box').slideToggle('slow');
// })
// btn2.click(function(){
//   $('#box').slideDown('slow');
// })
// btn.click(function(){
//   $('#box').addClass('green');
// })
// btn2.click(function(){
//   $('#box').removeClass('green');
// })

// $('#box').children().css('color','red')
// $('p').parent().css('backgroundColor','yellow')
// $('h3').siblings().css('color','green')
// $('h4').next().css('fontSize','10px')
// $('h4').prev().css('fontSize','50px')


// btn.hover(function(){
//   window.alert("Aku di hover")
// })
$('input').focus(function(){
  $(this).css("fontSize", "160px")
})

$('#input-text').blur(function(){
  alert("Blur telah diaktifkan")
})
$('#input-text').change(function(){
  alert("Perubahan telah terjadi")
})

// $('#input-text').keypress(function(){
//   console.log("Kamu mengetik " + $(this).val())
// })
// $('#input-text').keydown(function(){
//   console.log("Kamu mengetik " + $(this).val())
// })
// $('#input-text').keyup(function(){
//   console.log("Kamu mengetik " + $(this).val())
// })

$('#my-form').submit(function(){
alert("Form telah disubmit")
})



});