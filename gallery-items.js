const array= [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const ulList = document.querySelector('.js-gallery');
const lightboxContent = document.querySelector('.lightbox__overlay');
const bigImg = document.querySelector("[data-source]");
const div = document.querySelector(".js-lightbox");
let img = document.querySelector(".lightbox__image");
 
array.forEach((el) => {
  ulList.insertAdjacentHTML("afterbegin",
    `<li class="gallery__item">
   <a class="gallery__link" href="${el.original}">
    <img class="gallery__image" src="${el.preview}" data-source="${el.original}" alt="${el.description}" />
    </a>
    </li> `)
});
  
const findingName = function (e) {
  e.preventDefault()
  if (e.target.nodeName !== "IMG") {
    return
  }
  let img = e.target;
  openModal(img.dataset.source);
};

const openModal = function (picture) {
  div.classList.add("is-open");
  img.removeAttribute("src");
  img.setAttribute("src", picture);
  
  array.forEach((el, i, array) => {
    if (el.original === img.src )
    {
      
      const followingImage = (e) => {
        if (e.key === 'ArrowRight') {
          if (i > 0) {
            i = i - 1
            img.removeAttribute("src")
          img.setAttribute("src", array[i].original)}
          else {i = i +array.length-1
            img.removeAttribute("src")
          img.setAttribute("src", array[i].original)}
          
        }else if (e.key === 'ArrowLeft') {
          if (i < array.length - 1) {
            i = i + 1
            img.removeAttribute("src")
            img.setAttribute("src", array[i].original)
            
          }
          else {
            i=i- array.length + 1
            img.removeAttribute("src")
            img.setAttribute("src", array[i].original)
          };
          
        }
      }  
      window.addEventListener('keydown', followingImage)
    }
  })
  window.addEventListener('keydown',closingEscape)
  div.addEventListener('click', closingModal);
};
const closingModal = (e) => {
 if (e.target.nodeName !== "IMG") {
   div.classList.remove("is-open")
  div.removeEventListener('click', closingModal)
  }
};

const closingEscape = (e) => {
  if (e.key === 'Escape') {
    div.classList.remove('is-open')
    window.removeEventListener('keydown',closingEscape)
  }
};
ulList.addEventListener("click",findingName)
