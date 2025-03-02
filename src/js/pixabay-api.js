import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import axios from "axios";

const KEY = '45785559-b0577f06fb94f4ced9a4d3280';
const BASE_URL = 'https://pixabay.com/api/';

export async function getSearch(searchText, currentPage, perPage) {
    try {

        searchText = searchText.replace(/\s+/g, '+');

        const response = await axios.get(`${BASE_URL}`, {
            params: {
                key: KEY,
                q: searchText,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: true,
                page: currentPage,
                per_page: perPage,
            }
        })
        return response.data;
    } catch (error) {
        iziToast.error({
            title: 'Error',
            message: 'Sorry! The site is currently unavailable. Please try later!',
        });

        throw error;
    }
}