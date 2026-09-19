```javascript
/* =========================================
   HAIR BY HADDY
   Main JavaScript
========================================= */


/* =========================================
   SMOOTH NAVIGATION
========================================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", function (event) {

    const targetId = this.getAttribute("href");

    if (targetId === "#") {
      return;
    }

    const target = document.querySelector(targetId);

    if (target) {
      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }

  });

});


/* =========================================
   PRODUCT BUTTONS
========================================= */

const orderButtons = document.querySelectorAll(".order-button");

orderButtons.forEach(button => {

  button.addEventListener("click", function () {

    const productCard = this.closest(".product-card");

    const productName =
      productCard.querySelector("h3").textContent;

    const message =
      `Hi Haddy! 👋 I’m interested in the ${productName} wig. Is it available?`;

    /*
      We'll add the real WhatsApp number later.
      For now this gives us the message we want to send.
    */

    console.log("Customer message:", message);

    alert(
      `You're interested in: ${productName}\n\nWe'll connect this button to WhatsApp next.`
    );

  });

});


/* =========================================
   NAVBAR SHADOW
========================================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if (window.scrollY > 20) {

    navbar.style.boxShadow =
      "0 8px 30px rgba(55, 31, 25, 0.08)";

  } else {

    navbar.style.boxShadow = "none";

  }

});


/* =========================================
   SIMPLE SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(
  ".product-card, .about-content, .about-card, .gallery-item, .contact-content"
);

const revealObserver = new IntersectionObserver(
  (entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";

        revealObserver.unobserve(entry.target);

      }

    });

  },
  {
    threshold: 0.12
  }
);


revealElements.forEach(element => {

  element.style.opacity = "0";
  element.style.transform = "translateY(25px)";
  element.style.transition =
    "opacity 0.7s ease, transform 0.7s ease";

  revealObserver.observe(element);

});


/* =========================================
   PAGE LOADED
========================================= */

console.log("Hair by Haddy website loaded successfully ✨");
```

