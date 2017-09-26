$('#navButton').on('click', function(e) {
  $('#navButton').toggleClass("-active");
  $('#navigation').toggleClass("-on");
  $('body').toggleClass("overflowHidden");
  e.preventDefault();
});