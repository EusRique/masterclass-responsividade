// Make Cards
const sectionCards = document.querySelector("section.cards");

const card = document.querySelector("div.card");

const videos = [
  {
    title: "Peaky Blinders | Netflix",
    duration: "57 min",
    thumb: "https://i.ytimg.com/vi/Uv8bfaxl9j4/hqdefault.jpg",
    video_id: "Uv8bfaxl9j4"
  },
  {
    title: "Brooklyn Nine Nine | Netflix",
    duration: "25 min",
    thumb: "https://i.ytimg.com/vi/lFqqXYVdrUs/hqdefault.jpg",
    video_id: "lFqqXYVdrUs"
  },
  {
    title: "La Casa de Papel | Netflix",
    duration: "54 min",
    thumb: "https://i.ytimg.com/vi/wco-sejtris/hqdefault.jpg",
    video_id: "wco-sejtris"
  },
  {
    title: "Elite | Netflix",
    duration: "50 min",
    thumb: "https://i.ytimg.com/vi/RyLMD7veWBI/hqdefault.jpg",
    video_id: "RyLMD7veWBI"
  },
  {
    title: "Breaking Bad | Netflix",
    duration: "48 min",
    thumb: "https://i.ytimg.com/vi/FH_Pm-0kuFc/hqdefault.jpg",
    video_id: "FH_Pm-0kuFc"
  },
  {
    title: "Prison Break | Netflix",
    duration: "33 min",
    thumb: "https://i.ytimg.com/vi/JtbEnAMi5Yg/hqdefault.jpg",
    video_id: "JtbEnAMi5Yg"
  }
];

videos.map(video => {
  const cardClone = card.cloneNode(true);
  cardClone.setAttribute("id", video.video_id);
  cardClone.querySelector("img").src = video.thumb;
  cardClone.querySelector(".title").innerHTML = video.title;
  cardClone.querySelector(".info > p.text--medium").innerHTML =
    video.duration;
  sectionCards.appendChild(cardClone);
});

card.remove();

// Modal actions
const modalOverlay = document.querySelector(".modal-overlay");
const modal = document.querySelector(".modal");
const cards = [...document.querySelectorAll(".cards .card")];

cards.forEach(card => {
  card.addEventListener("click", () => {
    modal.querySelector(
      "iframe"
    ).src = `https://www.youtube.com/embed/${card.getAttribute("id")}`;
    modalOverlay.classList.add("active");
    modal.classList.add("active");
    document.querySelector("body").style.overflow = "hidden";
  });
});

document.querySelector(".close-modal").addEventListener("click", () => {
  modalOverlay.classList.remove("active");
  modal.classList.remove("active");
  modal.querySelector("iframe").src = ``;
  document.querySelector("body").style.overflow = "initial";
});
