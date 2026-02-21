document.addEventListener("DOMContentLoaded", function () {

  // ==============================
  // 🌙 Taraweeh Recordings
  // ==============================
  const taraweehList = [
    { title: "1st Taraweeh Tafseer", file: "taraweeh1.ogg" },
    { title: "2nd Taraweeh Tafseer", file: "taraweeh2.ogg" },
    { title: "3rd Taraweeh Tafseer", file: "taraweeh3.ogg" },
    { title: "4th Taraweeh Tafseer", file: "taraweeh4.ogg" }
  ];

  // ==============================
  // 🕌 Friday Khutbah Recordings
  // ==============================
  const khutbahList = [
    { title: "1st Friday Khutbah", file: "khutbah1.ogg" }
  ];

  // Get Containers
  const taraweehContainer = document.getElementById("taraweehContainer");
  const khutbahContainer = document.getElementById("khutbahContainer");

  // ==============================
  // Generate Taraweeh Cards
  // ==============================
  taraweehList.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<h2>${item.title}</h2>`;
    card.onclick = () => openAudio(`audio/${item.file}`, item.title);
    taraweehContainer.appendChild(card);
  });

  // ==============================
  // Generate Khutbah Cards
  // ==============================
  khutbahList.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<h2>${item.title}</h2>`;
    card.onclick = () => openAudio(`audio/${item.file}`, item.title);
    khutbahContainer.appendChild(card);
  });

  // ==============================
  // Tab Switching + Active Highlight
  // ==============================
  window.showSection = function (section) {

    const taraweehSection = document.getElementById("taraweehSection");
    const khutbahSection = document.getElementById("khutbahSection");
    const buttons = document.querySelectorAll(".tabs button");

    // Hide both sections
    taraweehSection.classList.add("hidden");
    khutbahSection.classList.add("hidden");

    // Remove active from all buttons
    buttons.forEach(btn => btn.classList.remove("active"));

    if (section === "taraweeh") {
      taraweehSection.classList.remove("hidden");
      buttons[0].classList.add("active");
    } else if (section === "khutbah") {
      khutbahSection.classList.remove("hidden");
      buttons[1].classList.add("active");
    }
  };

  // ==============================
  // Open Audio
  // ==============================
  window.openAudio = function (src, title) {

    const audioSection = document.getElementById("audioSection");
    const audio = document.getElementById("audioPlayer");

    document.getElementById("audioSource").src = src;
    document.getElementById("audioTitle").innerText = title;

    audio.load();
    audioSection.classList.remove("hidden");
  };

  // ==============================
  // Audio Controls
  // ==============================
  window.playAudio = function () {
    document.getElementById("audioPlayer").play();
  };

  window.pauseAudio = function () {
    document.getElementById("audioPlayer").pause();
  };

  window.forward = function () {
    const audio = document.getElementById("audioPlayer");
    audio.currentTime += 10;
  };

  window.backward = function () {
    const audio = document.getElementById("audioPlayer");
    audio.currentTime -= 10;
  };

  // ==============================
  // Show Taraweeh by default on load
  // ==============================
  showSection("taraweeh");


});

