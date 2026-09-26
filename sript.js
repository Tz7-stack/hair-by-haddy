// ===============================
// HAIR BY HADDY - MAIN JAVASCRIPT
// ===============================

document.addEventListener("DOMContentLoaded", () => {

  // -------------------------------
  // MOBILE NAVIGATION
  // -------------------------------

  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("active");

      menuToggle.setAttribute("aria-expanded", isOpen);

      menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    // Close menu when a navigation link is clicked
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
      });
    });
  }


  // -------------------------------
  // CURRENT YEAR
  // -------------------------------

  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }


  // -------------------------------
  // PRODUCT ENQUIRY BUTTONS
  // -------------------------------

  const productLinks = document.querySelectorAll(".product-link");
  const productSelect = document.getElementById("product");

  productLinks.forEach((link) => {

    link.addEventListener("click", () => {

      const productName = link.dataset.product;

      if (productSelect && productName) {
        productSelect.value = productName;
      }

    });

  });


  // -------------------------------
  // CONTACT FORM
  // -------------------------------

  const contactForm = document.getElementById("contactForm");

  if (contactForm) {

    contactForm.addEventListener("submit", (event) => {

      event.preventDefault();

      const name =
        document.getElementById("name")?.value.trim();

      const product =
        document.getElementById("product")?.value;

      const message =
        document.getElementById("message")?.value.trim();


      // Basic validation
      if (!name || !message) {
        alert("Please enter your name and message.");
        return;
      }


      // ---------------------------------
      // IMPORTANT:
      // Replace this number with Haddy's
      // WhatsApp number later.
      // ---------------------------------

      const whatsappNumber = "234XXXXXXXXXX";


      let whatsappMessage =
        `Hello Hair by Haddy!%0A%0A` +
        `My name is ${encodeURIComponent(name)}.%0A`;


      if (product) {
        whatsappMessage +=
          `I'm interested in: ${encodeURIComponent(product)}.%0A`;
      }


      whatsappMessage +=
        `%0A${encodeURIComponent(message)}`;


      const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;


      // Open WhatsApp
      window.open(whatsappURL, "_blank");

    });

  }


  // -------------------------------
  // SMOOTH SCROLLING
  // -------------------------------

  document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", (event) => {

      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") {
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


  // -------------------------------
  // SIMPLE SCROLL REVEAL
  // -------------------------------

  const revealElements = document.querySelectorAll(
    ".product-card, .feature, .about-content, .about-image, .contact-item, .contact-form"
  );


  if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
      (entries, observerInstance) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observerInstance.unobserve(entry.target);

          }

        });

      },
      {
        threshold: 0.12
      }
    );


    revealElements.forEach((element) => {
      element.classList.add("reveal");
      observer.observe(element);
    });

  } else {

    revealElements.forEach((element) => {
      element.classList.add("visible");
    });

  }

});
