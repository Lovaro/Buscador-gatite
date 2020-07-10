const isActive = document.getElementsByClassName("is-active");
const razas = document.getElementById("razas");
const bntsearchRazas = document.getElementById("searchRazas");
const searchFiltros = document.getElementById("searchFiltros");
const menus = document.querySelectorAll(".tabs li");
const tabsSections = document.querySelectorAll(".tab-section");
const randomGatit = document.getElementById("random");
const btnRandomCat = document.getElementById("random-cat-btn");
const inputSearchRazas = document.getElementById("breed-search-input");
const btnInputSearchRazas = document.getElementById("breed-search-btn");

const clearAllClass = () => {
  menus.forEach((element) => {
    element.classList.remove("is-active");
  });
};

menus.forEach((element) => {
  element.addEventListener("click", () => {
    // console.log(getHash(element.children[0].href))
    clearAllClass();
    element.classList.add("is-active");
    let href = getHash(element.children[0].href);
    addClassHidden(href);
    document.getElementById(href).classList.remove("is-hidden");
  });
});

const addClassHidden = (href) => {
  tabsSections.forEach((element) => {
    // console.log('target del element', element.id)
    if (element.id !== href) {
      element.classList.add("is-hidden");
    }
  });
};

const getHash = (text) => {
  return text.slice(text.indexOf("#") + 1);
};

const catImg = document.getElementById("cat-img");
const randomGatite = async () => {
  const response = await fetch(`https://api.thecatapi.com/v1/images/search/`);
  const randomGatit = (await response.json())[0];
  catImg.src = randomGatit.url;
  catImg.width = randomGatit.width;
  catImg.height = randomGatit.height;
};

const searchRazas = async (name) => {
  const response = await fetch(
    `https://api.thecatapi.com/v1/breeds/search?q=${name}`
  );
  const getRaza = await response.json();

  console.log(getRaza);
};

btnInputSearchRazas.addEventListener("click", (e) => {
  searchRazas(inputSearchRazas.value);
});

randomGatite();
