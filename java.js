$(document).ready(function(){
  $("img").click(function(){
    var number=$(this).attr("src");
    $(this).attr("src", $(this).attr("data-alt-src"));
    $(this).attr("data-alt-src",number);
  })
})
