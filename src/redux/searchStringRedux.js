import searchString from '../components/Search/Search';
import searchContainer from '../components/Search/SearchContainer';

// selectors
export const getSearchString = searchString;
export const countVisibleCards = searchString.filter(card => new RegExp(searchString, 'i').test(card.title)).length;
export const countAllCards = ({cards}) => cards.length;

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

