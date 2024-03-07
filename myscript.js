let section_counter = document.querySelector('#section_counter');
let counters = document.querySelectorAll('.counter-item .counter');

// Scroll Animation

let CounterObserver = new IntersectionObserver(
  (entries, observer) => {
    let [entry] = entries;
    if (!entry.isIntersecting) return;

    let speed = 200;
    counters.forEach((counter, index) => {
      function UpdateCounter() {
        const targetNumber = +counter.dataset.target;
        const initialNumber = +counter.innerText;
        const incPerCount = targetNumber / speed;
        if (initialNumber < targetNumber) {
          counter.innerText = Math.ceil(initialNumber + incPerCount);
          setTimeout(UpdateCounter, 40);
        }
      }
      UpdateCounter();

      if (counter.parentElement.style.animation) {
        counter.parentElement.style.animation = '';
      } else {
        counter.parentElement.style.animation = `slide-up 0.3s ease forwards ${
          index / counters.length + 0.5
        }s`;
      }
    });
    observer.unobserve(section_counter);
  },
  {
    root: null,
    threshold: window.innerWidth > 768 ? 0.4 : 0.3,
  }
);

CounterObserver.observe(section_counter);



function hello() {
  window.addEventListener('resize', function() {
    var desktopBanner = document.getElementById("desktopBanner");
    var mobileBanner = document.getElementById("mobileBanner");
    if (window.innerWidth < 600) {
      desktopBanner.style.display = 'none';
      if (desktopBanner) {
        desktopBanner.remove();
      }
    }

    if (window.innerWidth >= 600) {
      mobileBanner.style.display = 'none';

      if (mobileBanner) {
        mobileBanner.remove();
      }
    }
  });
}

hello(); // Call the function to start listening for resize events


function takeFormData() {
  var name = document.getElementById("MyName").value;
  var email = document.getElementById("MyEmail").value;
  var phone = document.getElementById("MyPhone").value;
  var query = document.getElementById("MyQuery").value;
  var link = document.getElementById("waLink");

  // Clear previous query parameters
  link.href = "https://wa.me/";

  // Append new query parameters
  link.href += `8095825520?text=You Have a new Query %20 Name is: ${name} || Contact no is: ${phone} || Email is: ${email} & the Query is: ${query}`;
}
