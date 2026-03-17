$(document).ready(function () {

  // ===== MENU TOGGLE =====
  $('#menu').click(function () {
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-toggle');
  });

  // ===== SCROLL EVENTS =====
  $(window).on('scroll load', function () {
    $('#menu').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');

    // scroll top button
    if (window.scrollY > 60) {
      document.querySelector('#scroll-top').classList.add('active');
    } else {
      document.querySelector('#scroll-top').classList.remove('active');
    }

    // scroll spy - active nav link
    $('section').each(function () {
      let height = $(this).height();
      let offset = $(this).offset().top - 200;
      let top = $(window).scrollTop();
      let id = $(this).attr('id');
      if (top > offset && top < offset + height) {
        $('.navbar ul li a').removeClass('active');
        $('.navbar').find(`[href="#${id}"]`).addClass('active');
      }
    });
  });

  // ===== SMOOTH SCROLLING =====
  $('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top,
    }, 500, 'linear');
  });

  // ===== CONTACT FORM (EmailJS) =====
  $("#contact-form").submit(function (event) {
    event.preventDefault();
    emailjs.init("YOUR_EMAILJS_USER_ID"); // 🔁 Remplacer par ton User ID EmailJS
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', '#contact-form')
      .then(function () {
        document.getElementById("contact-form").reset();
        alert("✅ Message sent successfully!");
      }, function (error) {
        console.log('FAILED:', error);
        alert("❌ Failed to send. Please try again.");
      });
  });

  // ===== TAB VISIBILITY =====
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === "visible") {
      document.title = "Portfolio | Marwen Khlifi";
      $("#favicon").attr("href", "assets/images/hero.png");
    } else {
      document.title = "Come Back! 👋";
      $("#favicon").attr("href", "assets/images/hero.png");
    }
  });

  // ===== TYPED.JS =====
  var typed = new Typed(".typing-text", {
    strings: [
      "Mobile Development",
      "Full-Stack Web Dev",
      "Android & Flutter",
      "DevOps & Cloud",
      "Software Engineering"
    ],
    loop: true,
    typeSpeed: 60,
    backSpeed: 30,
    backDelay: 1200,
  });

  // ===== SCROLL REVEAL ANIMATIONS =====
  const sr = ScrollReveal({
    origin: 'bottom',
    distance: '40px',
    duration: 800,
    delay: 100,
    easing: 'ease',
    reset: false,
  });

  sr.reveal('.home .content',    { origin: 'left',   delay: 200 });
  sr.reveal('.home .image',      { origin: 'right',  delay: 300 });
  sr.reveal('.about .row .image',{ origin: 'left',   delay: 200 });
  sr.reveal('.about .row .content', { origin: 'right', delay: 300 });
  sr.reveal('.skills .bar',      { interval: 80,     delay: 100 });
  sr.reveal('.education .box',   { interval: 150,    delay: 100 });
  sr.reveal('.work .box',        { interval: 150,    delay: 100 });
  sr.reveal('.experience .container', { interval: 200, delay: 100 });
  sr.reveal('.contact .container', { delay: 200 });
  sr.reveal('.heading',          { origin: 'top',    delay: 100 });

});
