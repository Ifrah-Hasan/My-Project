fetch("data.json")
  .then(res => res.json())
  .then(data => {
    
    // Navbar
    document.getElementById("siteTitle").textContent = data.siteTitle;
    const navList = document.getElementById("navLinks");
    const mobileMenu = document.getElementById("mobileMenu");

    data.navLinks.forEach(link => {
      const id = link.toLowerCase();
      const li = document.createElement("li");
      li.innerHTML = `<a href="#${id}" class="hover:text-blue-600 transition">${link}</a>`;
      navList.appendChild(li);

      const mobileLi = document.createElement("li");
      mobileLi.innerHTML = `<a href="#${id}" class="block py-2 hover:underline">${link}</a>`;
      mobileMenu.appendChild(mobileLi);
    });

    // Hero Section
    document.getElementById("heroTitle").textContent = data.hero.title;
    document.getElementById("heroSubtitle").textContent = data.hero.subtitle;
    document.getElementById("heroBtn").textContent = data.hero.buttonText;
    document.getElementById("heroBg").style.backgroundImage = `url('${data.hero.backgroundImage}')`;

    // Features
    document.getElementById("featuresTitle").textContent = data.features.title;
    const featuresList = document.getElementById("featuresList");
    data.features.list.forEach(f => {
      const card = document.createElement("div");
      card.className = "p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition";
      card.innerHTML = `
        <div class="text-5xl mb-4">${f.icon}</div>
        <h3 class="text-xl font-semibold mb-2">${f.title}</h3>
        <p class="text-gray-600">${f.desc}</p>
      `;
      featuresList.appendChild(card);
    });

    // About
    document.getElementById("aboutTitle").textContent = data.about.title;
    document.getElementById("aboutText").textContent = data.about.text;
    document.getElementById("aboutImage").src = data.about.image;

    // Testimonials
    document.getElementById("testimonialsTitle").textContent = data.testimonials.title;
    const testimonialsList = document.getElementById("testimonialsList");
    data.testimonials.list.forEach(t => {
      const card = document.createElement("div");
      card.className = "bg-white p-6 rounded-lg shadow hover:shadow-lg transition";
      card.innerHTML = `
        <img src="${t.image}" alt="${t.name}" class="w-16 h-16 rounded-full mx-auto mb-4">
        <p class="italic text-gray-600 mb-2">"${t.feedback}"</p>
        <h4 class="font-semibold text-blue-600">${t.name}</h4>
      `;
      testimonialsList.appendChild(card);
    });

    // Contact
    document.getElementById("contactTitle").textContent = data.contact.title;
    document.getElementById("contactSubtitle").textContent = data.contact.subtitle;

    // Footer
    document.getElementById("footerText").textContent = data.footer;

    // Mobile menu toggle
    document.getElementById("menuBtn").addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  })
  .catch(err => console.error("Error loading JSON:", err));
