//$(function(){
//   $('h1').click(function(){
//      $(".sample").slideToggle(1000,function(){
//         alert('animation completed');
//      });
//   });
//});


$(function(){
   $('h1').click(function(){
      $(".sample").css('background-color','skyblue')
          .slideUp('2000')
          .slideDown('1500')
   });
});