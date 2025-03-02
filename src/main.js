import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getSearch } from "./js/pixabay-api";
import { createMarkup } from "./js/render-functions";

const form = document.querySelector('.js-form');
const gallery = document.querySelector('.js-gallery');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more-btn');
const loadMoreBtnText = document.querySelector('.load-more-btn_text');
const loadBtnSpinner = document.querySelector('.loader-btn')

let saveQuery = '';
let refreshPage;
const perPage = 40;
let currentPage;
let totalHits;

loader.style.display = 'none';

// ==== Listener and function search images form;

form.addEventListener('submit', onSearch);

async function onSearch(evt) {
    evt.preventDefault()
    gallery.innerHTML = '';

    loader.style.display = 'block';

    saveQuery = evt.target.elements.query.value.trim();
    currentPage = 1;

    if (saveQuery === '') {
        return iziToast.warning({
            title: 'Hello',
            message: 'Please enter search text!',
        }),
            loader.style.display = 'none',
            hideLoadMoreBtn(),
            form.reset()
    }


    try {
        const resp = await getSearch(saveQuery, currentPage, perPage)

        gallery.insertAdjacentHTML("beforeend", createMarkup(resp.hits));
        totalHits = resp.totalHits;

        if (!resp.hits.length) {
            iziToast.error({
                title: 'Error',
                message: 'Sorry, there are no images matching your search query. Please try again!',
            }),
                loader.style.display = 'none';
            hideLoadMoreBtn();
            form.reset();
            return;
        }

        loader.style.display = 'none';

        refreshPage = new SimpleLightbox('.gallery a', {
            captions: true,
            captionsData: 'alt',
            captionDelay: 250,
        });
        refreshPage.refresh();

        checkBtnStatus();
    } catch (err) {

        loader.style.display = 'none';

    };
    form.reset();
}

// ==== Listener and function Button Load More;

loadMoreBtn.addEventListener('click', loadBtnSearch);

async function loadBtnSearch() {
    currentPage += 1;
    checkBtnStatus();
    showBtnSpinner();

    const resp = await getSearch(saveQuery, currentPage, perPage)

    gallery.insertAdjacentHTML("beforeend", createMarkup(resp.hits));
    hideBtnSpinner();
    scrollNextPage();
}

// ==== functions show and hide Button Load More;

function showLoadMoreBtn() {
    loadMoreBtn.classList.remove('hidden');
}

function hideLoadMoreBtn() {
    loadMoreBtn.classList.add('hidden');
}

function checkBtnStatus() {
    const maxPage = Math.ceil(totalHits / perPage);

    if (currentPage >= maxPage) {
        hideLoadMoreBtn();
        iziToast.info({
            title: 'Hello',
            message: 'You have viewed all the images.',
            position: 'topRight',
        });
    } else {
        showLoadMoreBtn();
    }
}

// ==== functions show and hide button Load More Spinner;

function showBtnSpinner() {
    loadBtnSpinner.classList.remove('hidden');
    loadMoreBtnText.classList.add('hidden');
}

function hideBtnSpinner() {
    loadBtnSpinner.classList.add('hidden');
    loadMoreBtnText.classList.remove('hidden');
}

// ==== function Button scroll top;

function scrollingTopPage() {
    document.addEventListener('DOMContentLoaded', function () {
        const upButton = document.querySelector('.up-btn');

        upButton.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });

            document.body.classList.add('scrolling');
        });

        window.addEventListener('scroll', function () {
            if (window.scrollY > 200) {
                upButton.classList.add('show');
            } else {
                upButton.classList.remove('show');
            }

            if (document.body.classList.contains('scrolling') && window.scrollY === 0) {
                document.body.classList.remove('scrolling');
            }
        });
    });
}

scrollingTopPage();

// ==== function smooth scroll next page;

function scrollNextPage() {
    const infoCard = gallery.firstElementChild.getBoundingClientRect();
    const heightCard = infoCard.height * 2;

    scrollBy({
        behavior: 'smooth',
        top: heightCard,
    });
}