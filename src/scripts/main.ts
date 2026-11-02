console.log("Hello, world!");

export function initThemeBtn() {
  const btn = document.getElementById("theme-btn");

  btn.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
  });
}

initThemeBtn();
