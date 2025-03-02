import { currentPage, fetchImages, IMAGES_PER_PAGE } from './js/pickabay-api';
import {
  hideButtonLoadMore,
  hideLoadingView,
  renderImages,
  showButtonLoadMore,
  showLoadingView,
  showMessageLastPage,
  showMessageNoResults,
} from './js/render-functions';

const form = document.querySelector('form');
const input = document.querySelector('#search-text');
const btnLoadMore = document.getElementById('load-more');

form.addEventListener('submit', e => {
  e.preventDefault();

  handleSearch();
});

btnLoadMore.addEventListener('click', () => handleSearch(true));

async function handleSearch(isNextPage = false) {
  hideButtonLoadMore();
  const searchText = input.value.trim();

  if (!searchText) return;

  showLoadingView(isNextPage);

  try {
    const data = await fetchImages(searchText, isNextPage);

    handleSearchResults(data.data, isNextPage);
  } catch (err) {
    console.log(err);
  }
}

function handleSearchResults(
  { hits: images, totalHits: imagesCount },
  isNextPage
) {
  const pagesCount = Math.ceil(imagesCount / IMAGES_PER_PAGE);
  const isLastPage = currentPage === pagesCount;
  const hasResults = !!images.length;

  if (!hasResults) showMessageNoResults();

  if (isLastPage) showMessageLastPage();

  if (hasResults && !isLastPage) showButtonLoadMore();

  hideLoadingView();
  renderImages(images, isNextPage);
}
