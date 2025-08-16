'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    const avatarEl   = this.querySelector("[data-testimonials-avatar]");
    const titleEl    = this.querySelector("[data-testimonials-title]");
    const textEl     = this.querySelector("[data-testimonials-text]");

    // modal variable
    const modalImg     = document.querySelector("[data-modal-img]");
    const modalTitle   = document.querySelector("[data-modal-title]");
    const modalText    = document.querySelector("[data-modal-text]");
    const modalGithub  = document.querySelector("[data-modal-github]");
    const modalTime    = document.querySelector("[data-modal-time]"); // <time> di modal

    // Isi modal dasar
    if (avatarEl) {
      modalImg.src = avatarEl.src;
      modalImg.alt = avatarEl.alt || "";
    }

    const titleHTML     = titleEl ? titleEl.innerHTML.trim() : "";
    const checktextHTML = textEl ? textEl.textContent.trim() : "";

    modalTitle.innerHTML = titleHTML;

    // HARD-CODED fallback:
    // Jika title dan text sama-sama kosong, isi modalText dengan "blabla"
    if (titleHTML === "Tanam AI" && checktextHTML === "Frontend") {
      modalText.innerHTML = '<p class="project-category">For the frontend of Tanam AI, I developed it during a coding camp by Dicoding, powered by DBS. It was built as a Single Page Application (SPA) to deliver smooth and seamless navigation, while the implementation of Progressive Web App (PWA) features ensures offline functionality and installability. With a responsive design, the application adapts well across devices, showcasing modern web development practices and practical use cases. This frontend highlights innovation, efficiency, and adaptability gained through hands-on learning.</p>';
      modalGithub.href = "https://github.com/tatangwarianta/capstone_tanamAI"; 
      modalTime.textContent = "17 June, 2025";
      modalTime.setAttribute("datetime", "2025-06-17");
    }else if (titleHTML === "Tanam AI" && checktextHTML === "Backend"){
      modalText.innerHTML = '<p class="project-category">For the backend of Tanam AI, I took full responsibility even though it was originally a group project. The backend is built with Hapi and Node.js, providing a reliable REST API. Its main feature uses TensorFlow to detect crop pests directly from the client’s device camera. The detection results appear in less than one second with an accuracy of more than 98%. This backend showcases the integration of machine learning with efficient API services, ensuring both performance and scalability for real-world agricultural needs.</p>';
      modalGithub.href = "https://github.com/RayyanHermanto/server_capstone";  
      modalTime.textContent = "17 June, 2025";
      modalTime.setAttribute("datetime", "2025-06-17");
    }else if (titleHTML === "Maniy" && checktextHTML === "Frontend"){
      modalText.innerHTML = '<p class="project-category">For the frontend of Maniy, I developed it as a personal project using React with Vite as the build tool to ensure fast performance and a modern development experience. The application is designed as a Single Page Application (SPA) with Progressive Web App (PWA) features, allowing smooth navigation, offline access, and installability across devices. Its responsive interface provides a user-friendly experience for managing finances online. This frontend showcases the application of modern web technologies to deliver both efficiency and accessibility in personal financial tracking.</p>';
      modalGithub.href = "https://github.com/RayyanHermanto/Maniy";  
      modalTime.textContent = "8 August, 2025";
      modalTime.setAttribute("datetime", "2025-08-08");
    }else if (titleHTML === "Maniy" && checktextHTML === "Backend"){
      modalText.innerHTML = '<p class="project-category">For the backend of Maniy, I built it as a personal project with a robust architecture using NestJS and GraphQL to handle queries efficiently. Security is ensured through JWT authentication and OAuth integration, while MongoDB serves as the main database to store all user financial records in a centralized yet secure manner. To support scalability and reliability, I integrated RabbitMQ for message brokering, Redis for caching, and Docker for containerized deployment. Automated testing with Jest was also implemented to maintain code quality. This backend demonstrates a combination of security, scalability, and performance in delivering an online financial recording system.</p>';
      modalGithub.href = "https://github.com/RayyanHermanto/Maniy";  
      modalTime.textContent = "8 August, 2025";
      modalTime.setAttribute("datetime", "2025-08-08");
    }else if (titleHTML === "Guardian Forest 3D" && checktextHTML === "Game"){
      modalText.innerHTML = '<p class="project-category">Guardian Forest 3D is a side-scrolled evolution of the original project, rebuilt in Unity for GEMASTIK 2025. The shift to 3D is intentional: it improves runtime performance (optimized rendering, culling, and batching), enables smoother animations, and streamlines the asset pipeline. The level design and enemy behavior are rebalanced to adjust difficulty thoughtfully—more depth, clearer feedback, and fair challenge—without sacrificing fun. Core mechanics are preserved and refined for a tighter moment-to-moment experience, delivering engaging gameplay that showcases strong problem-solving and technical execution in a competitive setting.</p>';
      modalGithub.href = "https://github.com/muhammad-kal/Guardian-Forest-Reborn";  
      modalTime.textContent = "3 July, 2025";
      modalTime.setAttribute("datetime", "2025-07-03");
    }else if (titleHTML === "Guardian Forest 2D" && checktextHTML === "Game"){
      modalText.innerHTML = '<p class="project-category">Guardian Forest 2D is a game project developed for the GEMASTIK 2024 competition using the Godot Engine. It features strategic pathfinding mechanics, modular design with Scriptable Objects, smooth animations enhanced by tweening, and a clean architecture following the Model-View-Controller (MVC) pattern. The project combines technical depth with engaging gameplay, highlighting both creativity and programming expertise in a competitive setting.</p>';
      modalGithub.href = "https://github.com/muhammad-kal/GuardianForest";  
      modalTime.textContent = "15 June, 2024";
      modalTime.setAttribute("datetime", "2024-06-15");
    }else if (titleHTML === "Rayyan Personal Portofolio v1" && checktextHTML === "Frontend"){
      modalText.innerHTML = '<p class="project-category">Personal Portfolio (Legacy) — built with React, Vite, and Three.js. I optimized the 3D assets (reduced polygon counts, compressed textures, and efficient GLTF pipelines) so the scenes load quickly and render smoothly without SSR—fully client-side. The app uses smart loading (lazy imports, route/code splitting) and tuned Three.js rendering to keep FPS stable on mid-range devices. Result: a visually rich, responsive portfolio that showcases interactive 3D work while staying lightweight and fast in the browser.</p>';
      modalGithub.href = "https://github.com/RayyanHermanto/Rayyan-Personal-Portfolio-V1";  
      modalTime.textContent = "29 April, 2025";
      modalTime.setAttribute("datetime", "2025-04-29");
    }
    testimonialsModalFunc();
  });
}


// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
// FIX: selector yang benar
const selectValue = document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select?.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    // NORMALIZE: trim + lower
    const selectedValue = this.innerText.trim().toLowerCase();
    if (selectValue) selectValue.innerText = this.innerText.trim();
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    const category = (filterItems[i].dataset.category || "").trim().toLowerCase();
    if (selectedValue === "all" || selectedValue === category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    const selectedValue = this.innerText.trim().toLowerCase();
    if (selectValue) selectValue.innerText = this.innerText.trim();
    filterFunc(selectedValue);

    if (lastClickedBtn) lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}




// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// helper: set active
function setActive(target) {
  pages.forEach((p) => p.classList.toggle("active", p.dataset.page === target));
  navigationLinks.forEach((btn) => {
    const label = btn.textContent.trim().toLowerCase();
    btn.classList.toggle("active", label === target);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// add event to all nav link
navigationLinks.forEach((btn) => {
  btn.addEventListener("click", function () {
    const target = this.textContent.trim().toLowerCase(); // "certificate"
    setActive(target);
  });
});
