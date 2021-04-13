import $ from 'jquery';

const refs = {
  header: document.querySelector('.header'),
};

$(window).on('scroll', function () {
  $(refs.header).toggleClass('active', $(this).scrollTop() > 70);
});
