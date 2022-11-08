/*Задание 1 - галерея изображений
Создай галерею с возможностью клика по её элементам и просмотра
 полноразмерного изображения в модальном окне. Посмотри демо видео
  работы галереи.
  Выполняй это задание в файлах 01-gallery.html и 01-gallery.js. Разбей его на несколько подзадач:

1.Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
2.Реализация делегирования на div.gallery и получение url большого изображения.
3.Подключение скрипта и стилей библиотеки модального окна basicLightbox. Используй CDN сервис jsdelivr и
 добавь в проект ссылки на минифицированные (.min) файлы библиотеки.
4.Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
5.Замена значения атрибута src элемента <img> в модальном окне перед открытием. Используй готовую разметку 
модального окна с изображением из примеров библиотеки basicLightbox.*/

import { galleryItems } from './gallery-items.js';
// Change code below this line
/*import {basicLightbox} from './basicLightbox.js';*/
console.log(galleryItems);

const divRef = document.querySelector('.gallery');

function createGalleryMarkup(items){
    return items.map(
        (item) => `<div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
        <img class="gallery__image"
        src="${item.previev}"
        data-source="{item.original}"
        alt="${item.description}"
        />
        </a>
        </div>`
    )
    .join("");
}

const addGalleryMarkup = createGalleryMarkup(galleryItems);
divRef.innerHTML = addGalleryMarkup;
divRef.addEventListener("click", onImageClick);
function onImageClick(evt){
    blockStandartAction(evt);

    if(evt.target.nodeName !== "IMG"){
        return;
    }
    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
    `);
    instance.show();
    divRef.addEventListener("keydown", (evt) =>{
        if (evt.code === "Escape"){
            instanse.close();
        }
    });
}
function blockStandartAction(evt){
    evt.preventDefault();
}


/*const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryItemsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup );
galleryContainer.addEventListener('click', onGalleryContainerClick)

function onGalleryContainerClick(evt){
    evt.preventDefault();
    const instance = basicLightbox.create(`
    <div class="modal">
    <img src="${evt.target, dataset.sourse}" width="800" height="600">
    </div>
        `);
    const  isGalleryImageElement = evt.target.classList.contains('gallery__image');
    if(!isGalleryImageElement){
        return;
    }
    instance.show();
/*console.log(evt.target);*/
/*}


function createGalleryItemsMarkup (galleryItems){
    return galleryItems
    .map(({preview, original, description}) => 
           ` <div class ="gallery__item">
        <a class = "gallery__link" href="${original}">
        <img class= "gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a>
       </div>`
    ).join("");
    
}; */
/*const gallery = document.querySelector('.gallery');
const galleryMarkup = createGallery(galleryItems);
gallery.insertAdjacentHTML('beforeend',galleryMarkup );
gallery.addEventListener('click', onClick);

function createdGallery (galleryItems){
    return galleryItems
    .map(({preview, original,description}) =>
    `<div class = "gallery__item">
    <a class="gallery__link" href="${original}">
    <img
    class= "gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
    />
    </a>
    </div>`
    ).join("");
};

function onClick(evt){
    if(evt.target.tagName !== 'IMG')return;
    evt.preventDefault();

    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
    `)

    instance.show();

    document.addEventListener('keydown', (evt) => {
        if (evt.key === 'Escape') instance.close();
    });
}*/

/*function onClick(evt){
    evt.preventDefault();
    const instance = basiclightLightbox.create(`
    <img src ="${evt.target.dataset.source}">`
    );
    if(!evt.target.classList.contains("gallery--image")){
        return;
    }
    instance.show();
}

function createGalleryItems(galleryItems){
    return galleryItems
    .map (({description, previev, original}) => {
        return `<a class ="gallery__link" href="large-image.jpg">
        <img
        class = "gallery __image"
        src="${previev}"
        data-source=${original}"
        alt="${description}"
        />
        </a> `;
    })
    .join("");
}*/

