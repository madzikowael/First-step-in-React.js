import searchString from '../components/Search/Search';
import searchContainer from '../components/Search/SearchContainer';

// selectors
export const getSearchString = state => state.searchString;
console.log(searchString, 'show me searchString');
export const countAllCards = ({cards}) => cards.length;
export const countVisibleCards = ({cards, searchString}) => cards.filter(card => new RegExp(searchString, 'i').test(card.title)).length;

// action name creator

// actions types

// action creators

// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}

