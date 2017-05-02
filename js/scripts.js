$(function(){
  $("form#character-survey").submit(function(event){
    event.preventDefault();
    $("#character-responses").show();
    $("input:checkbox[name=favorite-character]:checked").each(function(){
      var myfavoritecharacter = $(this).val();
      $('#character-responses').append(myfavoritecharacter + "<br>");
    });
    $('#character-survey').hide();
  });
});
