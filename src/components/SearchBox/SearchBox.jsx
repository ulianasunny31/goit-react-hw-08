/* eslint-disable react/prop-types */
import { useId } from 'react';
import css from './SearchBox.module.css';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';

const SearchBox = () => {
  const dispatch = useDispatch();

  const searchInputId = useId();

  function handleFilterChange(filterName) {
    dispatch(changeFilter(filterName));
  }

  return (
    <div className={css.searchBoxDiv}>
      <label htmlFor={searchInputId}>Find contacts by name</label>
      <input
        id={searchInputId}
        name="search"
        type="text"
        onChange={(e) => {
          handleFilterChange(e.target.value);
        }}
      ></input>
    </div>
  );
};

export default SearchBox;
