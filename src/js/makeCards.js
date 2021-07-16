import fetchCountries from './fetchCountries';
import countries from '../templates/countriesList.hbs';
import debounce from 'lodash/debounce';

const DEBOUNCE_DELAY = 300;

const input = document.getElementById('search-box');
const coutriesList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

input.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(e) {
  e.preventDefault();

  const inputValue = e.target.value;
  if (inputValue.length > 0) {
    fetchCountries(
      `https://restcountries.eu/rest/v2/name/${inputValue}?fields=name;capital;population;flag;languages`,
    );
  }
}