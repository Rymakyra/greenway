document.addEventListener('DOMContentLoaded', function () {
  const navigation = document.getElementById('navigation');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav_menu a');

  navigation.addEventListener('click', function () {
    navigation.classList.toggle('active');
    navMenu.classList.toggle('active');

    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
  });

  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      navigation.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  document.addEventListener('click', function (e) {
    if (!navMenu.contains(e.target) && !navigation.contains(e.target) && navMenu.classList.contains('active')) {
      navigation.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});