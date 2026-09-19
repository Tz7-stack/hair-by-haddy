```javascript
// ========================================
// HAIR BY HADDY — MAIN JAVASCRIPT
// ========================================

document.addEventListener("DOMContentLoaded", () => {

  // ----------------------------------------
  // Smooth scrolling
  // ----------------------------------------

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

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


  // ----------------------------------------
  // Navbar shadow on scroll
  // ----------------------------------------

  const navbar = document.querySelector(".navbar");

  if (navbar) {
    window.addEventListener("scroll", () => {
      navbar.classList.toggle("scrolled", window.scrollY > 20);
    });
  }


  // ----------------------------------------
  // Wig order buttons
  // ----------------------------------------

  document.querySelectorAll(".order-button").forEach(button => {

    button.addEventListener("click", () => {

      const productName =
        button.dataset.product ||
        button.closest(".product-card")?.querySelector("h3")?.textContent ||
        "wig";

      const message =
        `Hi Haddy! 👋 I'm interested in the ${productName} wig. Is it available?`;

      console.log("Customer enquiry:", message);

      // WhatsApp number can be added later.
      alert(
        `You selected:\n\n${productName}\n\nWe'll connect this button to Hair by Haddy's WhatsApp shortly. 💕`
      );

    });

  });


  // ----------------------------------------
  // Scroll reveal animations
  // ----------------------------------------

  const revealElements = document.querySelectorAll(
    ".product-card, .about-content, .about-card, .gallery-item, .contact-content"
  );

  if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            revealObserver.unobserve(entry.target);

          }

        });

      },
      {
        threshold: 0.12
      }
    );

    revealElements.forEach(element => {
      revealObserver.observe(element);
    });

  } else {

    // Fallback for older browsers
    revealElements.forEach(element => {
      element.classList.add("visible");
    });

  }


  // ----------------------------------------
  // Image fallback
  // ----------------------------------------

  document.querySelectorAll("img").forEach(image => {

    image.addEventListener("error", () => {

      image.style.display = "none";

      const parent = image.parentElement;

      if (parent && !parent.querySelector(".image-fallback")) {

        const fallback = document.createElement("div");

        fallback.className = "image-fallback";

        fallback.textContent = "Hair by Haddy";

        parent.appendChild(fallback);

      }

    });

  });


  // ----------------------------------------
  // Website loaded
  // ----------------------------------------

  console.log(
    "✨ Hair by Haddy website loaded successfully!"
  );

});
```

