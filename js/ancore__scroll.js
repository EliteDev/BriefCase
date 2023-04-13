let ancoreLinks = document.querySelectorAll('.ancore__menu');

ancoreLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();

    let targetElement = document.querySelector(link.getAttribute('href'));
    let targetPosition = targetElement.offsetTop;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
});

