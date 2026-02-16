const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const wrapper = document.getElementById("wrapper");

// auto-open after the scene + flowers
setTimeout(() => {
wrapper.classList.add("open");
openBtn.classList.add("hidden");
closeBtn.classList.remove("hidden");
}, 2300);

// buttons still work
openBtn.addEventListener("click", () => {
wrapper.classList.add("open");
openBtn.classList.add("hidden");
closeBtn.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
wrapper.classList.remove("open");
closeBtn.classList.add("hidden");
openBtn.classList.remove("hidden");
});