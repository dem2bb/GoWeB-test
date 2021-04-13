const refs = {
  homeBtn: document.querySelector('.homeBtn'),
  features: document.querySelector('.features-section'),
  aboutBtn: document.querySelector('.aboutBtn'),
  aboutus: document.querySelector('.aboutus'),
  casesBtn: document.querySelector('.casesBtn'),
  cases: document.querySelector('.cases'),
  blogBtn: document.querySelector('.blogBtn'),
  blog: document.querySelector('.blog'),
  contactBtn: document.querySelector('.contactBtn'),
  contact: document.querySelector('.contact'),
};

function scrollTo(element) {
  window.scroll({
    left: 0,
    top: element.offsetTop - 115,
    behavior: 'smooth',
  });
}

refs.homeBtn.addEventListener('click', () => {
  scrollTo(refs.features);
});

refs.aboutBtn.addEventListener('click', () => {
  scrollTo(refs.aboutus);
});

refs.casesBtn.addEventListener('click', () => {
  scrollTo(refs.cases);
});

refs.blogBtn.addEventListener('click', () => {
  scrollTo(refs.blog);
});

refs.contactBtn.addEventListener('click', () => {
  scrollTo(refs.contact);
});
