$(function () {
  $('a[href^="#"]').click(function (event) {
    var id = $(this).attr('href');
    var offset = 20;
    var target = $(id).offset().top - offset;

    $('html, body').animate({
      scrollTop: target
    }, 500);
    event.preventDefault();
  });
});

/*
<a href='#sarasa'>sarasa</> (este es el link que va en el navbar)

<a id='sarasa'></a> (esto lo pones en la pagína en el lugar a donde querés que vaya)*/