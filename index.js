import { URL_API_BASIC, URL_API_ADITIONAL } from "./constants.js";

let carouselIndicators = document.getElementsByClassName("carousel-indicators");
let carouselInner = document.getElementsByClassName("carousel-inner");
let NoticiasHighlightsContainer = document.getElementById("noticias-highlights");
let indicationNoticias = document.getElementsByClassName("card-group");
let userPreferenceBanner = document.getElementById("user-preference-banner");
let NoticiasCarrosselList = document.getElementById("not-car");

async function mountSlides() {
  const response = await fetch(`${URL_API_BASIC}/banners`);
  const data = await response.json();

  if (data.length > 1) {
    data.map((data, index) => {
      if (index > 0) {

        //Criando os botões do carrossel
        const button = document.createElement("button");
        button.setAttribute("type", "button");
        button.setAttribute("data-bs-target", "#carouselExampleCaptions");
        button.setAttribute("data-bs-slide-to", `${index}`);
        button.setAttribute("aria-label", `Slide ${index + 1}`);
        carouselIndicators[0].appendChild(button);
        button.setAttribute("class", "active");

        //Criando o conteúdo do carrossel
        const divCarouselItem = document.createElement("div");
        divCarouselItem.setAttribute("class", "carousel-item");
        const img = document.createElement("img");
        img.setAttribute("src", `${data.src}`);
        img.setAttribute("class", "d-block w-100");
        img.setAttribute("alt", `${data.name}`);
        divCarouselItem.appendChild(img);
        carouselInner[0].appendChild(divCarouselItem);

        //Texto
        const divText = document.createElement("div");
        divText.setAttribute("class", "carousel-caption d-none d-md-block");
        const h5 = document.createElement("h5");
        const p = document.createElement("p");
        h5.innerHTML = data.name;
        p.innerHTML = data.description;
        divText.appendChild(h5);
        divText.appendChild(p);
        divCarouselItem.appendChild(divText);
      } else {
        const button = document.createElement("button");
        button.setAttribute("type", "button");
        button.setAttribute("data-bs-target", "#carouselExampleCaptions");
        button.setAttribute("data-bs-slide-to", `${index}`);
        button.setAttribute("aria-label", `Slide ${index + 1}`);
        button.setAttribute("class", "active");
        button.setAttribute("aria-current", "true");
        carouselIndicators[0].appendChild(button);

        //Criando o conteúdo do carrossel
        const divCarouselItem = document.createElement("div");
        divCarouselItem.setAttribute("class", "carousel-item active");
        const img = document.createElement("img");
        img.setAttribute("src", `${data.src}`);
        img.setAttribute("class", "d-block w-100");
        img.setAttribute("alt", `${data.name}`);
        divCarouselItem.appendChild(img);
        carouselInner[0].appendChild(divCarouselItem);

        //Texto
        const divText = document.createElement("div");
        divText.setAttribute("class", "carousel-caption d-none d-md-block");
        const h5 = document.createElement("h5");
        const p = document.createElement("p");
        h5.innerHTML = data.name;
        p.innerHTML = data.description;
        divText.appendChild(h5);
        divText.appendChild(p);
        divCarouselItem.appendChild(divText);
      }
    });
  }
}

mountSlides();

async function mountNoticiasHighlightsCard() {
  const response = await fetch(`${URL_API_BASIC}/noticias-highlights`);
  const data = await response.json();

  //Criando card vertical
  const cardVerticalData = data[0];
  const divRow = document.createElement("div");
  divRow.setAttribute("class", "row");
  const divCol = document.createElement("div");
  divCol.setAttribute("class", "col");
  divRow.appendChild(divCol);
  const divCard = document.createElement("div");
  divCard.setAttribute("class", "card");
  divCard.setAttribute("style", "max-width: 100%");
  divRow.appendChild(divCard);
  divCol.appendChild(divCard);
  const img = document.createElement("img");
  img.setAttribute("src", `${cardVerticalData.img}`);
  img.setAttribute("class", "card-img-top");
  img.setAttribute("alt", `${cardVerticalData.name}`);
  divCard.appendChild(img);
  const divCardBody = document.createElement("div");
  divCardBody.setAttribute("class", "card-body");
  divCard.appendChild(divCardBody);
  const h5 = document.createElement("h5");
  const p = document.createElement("p");
  const link = document.createElement("a");
  link.setAttribute("href", `noticias-highlights/1`);
  link.setAttribute("class", "btn btn-primary btn-orange");
  h5.innerHTML = cardVerticalData.name;
  p.innerHTML = cardVerticalData.description;
  link.innerHTML = "Veja a noticia";
  divCardBody.appendChild(h5);
  divCardBody.appendChild(p);
  divCardBody.appendChild(link);
  NoticiasHighlightsContainer.appendChild(divRow);

  //Criando cards horizontais
  const divColRight = document.createElement("div");
  divColRight.setAttribute("class", "col-8");
  divRow.appendChild(divColRight);

  data.map((data, index) => {
    if (index > 0) {
      const divRowRight = document.createElement("div");
      divRowRight.setAttribute("class", "row");
      divRowRight.setAttribute("style", "min-height: 50%");
      divColRight.appendChild(divRowRight);
      const divCard = document.createElement("div");

      //Controlando margens
      if (index % 2 !== 0) {
        divCard.setAttribute("class", "card mb-3");
      } else {
        divCard.setAttribute("class", "card mt-3");
      }

      divCard.setAttribute("style", "max-width: 100%; padding: 0;");
      divRowRight.appendChild(divCard);
      const divRowG0 = document.createElement("div");
      divRowG0.setAttribute("class", "row g-0");
      divRowG0.setAttribute("style", "height: 100%");
      divCard.appendChild(divRowG0);
      const divColImg = document.createElement("div");
      divColImg.setAttribute("class", "col-md-4");
      divRowG0.appendChild(divColImg);
      const img = document.createElement("img");
      img.setAttribute("src", `${data.img}`);
      img.setAttribute("class", "img-fluid rounded-start");
      img.setAttribute("alt", `${data.name}`);
      img.setAttribute("style", "height: 100%");
      divColImg.appendChild(img);
      const divColTxt = document.createElement("div");
      divColTxt.setAttribute("class", "col-md-8");
      divRowG0.appendChild(divColTxt);
      const divcardBodyLeft = document.createElement("div");
      divcardBodyLeft.setAttribute("class", "card-body");
      divColTxt.appendChild(divcardBodyLeft);

      const h5 = document.createElement("h5");
      h5.setAttribute("class", "card-title");
      const p = document.createElement("img");
      img.setAttribute("class", "card-text");
      const link = document.createElement("a");
      link.setAttribute("href", `noticias-highlights/1`);
      link.setAttribute("class", "btn btn-primary btn-orange");
      h5.innerHTML = data.name;
      p.innerHTML = data.description;

      divcardBodyLeft.appendChild(h5);
      divcardBodyLeft.appendChild(img);
      divcardBodyLeft.appendChild(link);
    }
  });
}

mountNoticiasHighlightsCard();

async function mountIndicationNoticias() {
  const response = await fetch(`${URL_API_ADITIONAL}/indication-noticias`);
  const data = await response.json();

  data.map((data, index) => {
    const divCard = document.createElement("div");
    divCard.setAttribute("class", "card mx-1");
    indicationNoticias[0].appendChild(divCard);
    const img = document.createElement("img");
    img.setAttribute("src", `${data.img}`);
    img.setAttribute("class", "card-img-top");
    img.setAttribute("alt", `${data.name}`);
    divCard.appendChild(img);

    const divCardBody = document.createElement("div");
    divCardBody.setAttribute("class", "card-body");
    divCard.appendChild(divCardBody);

    const h5 = document.createElement("h5");
    h5.setAttribute("class", "card-title");
    const p = document.createElement("p");
    p.setAttribute("class", "card-text");
    const link = document.createElement("a");
    link.setAttribute("href", `noticias-highlights/1`);
    link.setAttribute("class", "btn btn-primary btn-orange");
    h5.innerHTML = data.name;
    p.innerHTML = data.description;
    
    divCardBody.appendChild(h5);
    divCardBody.appendChild(p);
    divCardBody.appendChild(link);
  });
}

mountIndicationNoticias();

async function mountUserPreferenceBanner() {
  const response = await fetch(`${URL_API_ADITIONAL}/user-preference-banner`);
  const data = await response.json();
  const dataBannerPreferences = data[0];

  const img = document.createElement("img");
  img.setAttribute("src", `${dataBannerPreferences.src}`);
  img.setAttribute("style", "max-height: 146px;object-fit: cover;");
  img.setAttribute("class", "card-img-top");
  img.setAttribute("alt", `${dataBannerPreferences.name}`);
  userPreferenceBanner.appendChild(img);

  const divCardBody = document.createElement("div");
  divCardBody.setAttribute("class", "card-body quaternary-color");
  userPreferenceBanner.appendChild(divCardBody);
  const h5 = document.createElement("h5");
  h5.setAttribute("class", "card-title");
  h5.innerHTML = dataBannerPreferences.description;
  divCardBody.appendChild(h5);
}

mountUserPreferenceBanner();

//Noticias

async function textFavoriteCategory(event) {
  const category = event.target.innerHTML;

  const response = await fetch(`${URL_API_ADITIONAL}/not-car`);
  const data = await response.json();

  const noticiasCategory = data.filter((noticias) => {
    return noticias.category === category;
  });

  const infosCategory = document.getElementById("infos-category");
  infosCategory.innerHTML = "";
  const div = document.createElement("div");
  const ul = document.createElement("ul");
  infosCategory.appendChild(ul);

  noticiasCategory.map((noticias) => {
    const li = document.createElement("li");
    ul.appendChild(li);
    const link = document.createElement("a");
    link.setAttribute("href", `not-car/${noticias.id}`);
    link.innerHTML = noticias.name;
    li.appendChild(link);
  });
}

async function mountNoticiasCarrossel() {
  const response = await fetch(`${URL_API_ADITIONAL}/not-car`);
  const data = await response.json();

  let allCategories = [];

  for (let i = 0; i < data.length; i++) {
    allCategories.push(data[i].category);
  }

  const categoriesFilter = allCategories.filter((category, i) => {
    return allCategories.indexOf(category) === i;
  });

  //escrevendo elementos
  let ul = document.createElement("ul");
  ul.setAttribute("class", "nav nav-tabs card-header-tabs");
  NoticiasCarrosselList.appendChild(ul);

  categoriesFilter.map((category) => {
    const li = document.createElement("li");
    li.setAttribute("class", "nav-item");
    ul.appendChild(li);
    const link = document.createElement("a");
    link.onclick = textFavoriteCategory;
    link.setAttribute("class", "nav-link");
    link.setAttribute("aria-current", "true");
    link.innerHTML = category;
    li.appendChild(link);
  });

  const noticiasCategory = data.filter((noticias) => {
    return noticias.category === categoriesFilter[0];
  });

  const infosCategory = document.getElementById("infos-category");
  infosCategory.innerHTML = "";
  const div = document.createElement("div");
  const ulDefault = document.createElement("ul");
  infosCategory.appendChild(ulDefault);

  noticasCategory.map((noticias) => {
    const li = document.createElement("li");
    ulDefault.appendChild(li);
    const link = document.createElement("a");
    link.setAttribute("href", `not-car/${noticias.id}`);
    link.innerHTML = noticias.name;
    li.appendChild(link);
  });
}

mountNoticiasCarrossel();
