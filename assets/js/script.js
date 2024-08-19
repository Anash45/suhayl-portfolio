// Close the dropdown when the cross icon is clicked
function openMenu(e) {
  e.preventDefault();
  $('.side-nav').addClass('slide-nav');
}
$('#open-menu').on('click', function (e) {
  openMenu(e);
})

$('#close-menu').on('click', function () {
  $('.side-nav').removeClass('slide-nav');
})