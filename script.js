const pickMeong = () => {
  const meongpic = document
    .querySelectorAll(".ddoong")
    .forEach((v) => v.classList.add("hide"));
  document
    .querySelectorAll(".meong")
    .forEach((v) => v.classList.remove("hide"));
  ddoongBtn.classList.remove("clicked");
  meongBtn.classList.add("clicked");
  gallery.scrollTo({
    left: 0,
    behavior: "smooth",
  });
};
const pickDdoong = () => {
  document.querySelectorAll(".meong").forEach((v) => v.classList.add("hide"));
  document
    .querySelectorAll(".ddoong")
    .forEach((v) => v.classList.remove("hide"));
  meongBtn.classList.remove("clicked");
  ddoongBtn.classList.add("clicked");
  gallery.scrollTo({
    left: 0,
    behavior: "smooth",
  });
};
const meongBtn = document.getElementById("meongBtn");
const ddoongBtn = document.getElementById("ddoongBtn");
meongBtn.addEventListener("click", pickMeong);
ddoongBtn.addEventListener("click", pickDdoong);

const gallery = document.getElementsByClassName("dogpicContainer")[0];
