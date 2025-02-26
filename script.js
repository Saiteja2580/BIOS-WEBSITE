window.onload = function () {
  console.log("working");

  // Hide loader
  document.getElementById("loader").style.display = "none";

  // Show content
  document.getElementById("content").classList.remove("hidden");
};

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("hamburger-menu");
  const navMenu = document.getElementById("nav-menu");

  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active"); // Toggle the 'active' class
  });

  // Close the menu when a link is clicked
  document.querySelectorAll(".li-links a").forEach((link) => {
    link.addEventListener("click", function () {
      navMenu.classList.remove("active");
    });
  });
});

// Check if IntersectionObserver is supported
if ("IntersectionObserver" in window) {
  let lazyImages = document.querySelectorAll(".lazy");

  // Define the intersection observer
  let lazyLoad = function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        // Load the image
        let img = entry.target;
        img.src = img.getAttribute("data-src");
        img.classList.remove("lazy"); // Optionally remove 'lazy' class

        // Stop observing the image after it has loaded
        observer.unobserve(img);
      }
    });
  };

  // Create an intersection observer
  let observer = new IntersectionObserver(lazyLoad, {
    rootMargin: "0px 0px 50px 0px", // Load the image when it's about to come into the viewport
  });

  // Observe each lazy image
  lazyImages.forEach(function (img) {
    observer.observe(img);
  });
} else {
  // Fallback for older browsers
  let lazyImages = document.querySelectorAll(".lazy");
  lazyImages.forEach(function (img) {
    img.src = img.getAttribute("data-src");
  });
}

document.addEventListener("click", function () {
  let video = document.querySelector("video");
  if (video.paused) {
    video.play();
  }
});
