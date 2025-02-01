/* eslint-disable react/prop-types */
import { useId } from 'react';
import css from './SearchBox.module.css';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';
import { FaSearch } from 'react-icons/fa';

const SearchBox = () => {
  const dispatch = useDispatch();

  const searchInputId = useId();

  function handleFilterChange(filterName) {
    dispatch(changeFilter(filterName));
  }

  return (
    <div className={css.searchBoxDiv}>
      <label htmlFor={searchInputId}>Find contacts by name/number:</label>
      <div className={css.searchContainer}>
        <input
          id={searchInputId}
          name="search"
          type="text"
          onChange={(e) => {
            handleFilterChange(e.target.value);
          }}
        />
        <FaSearch className={css.searchIcon} />
      </div>
    </div>
  );
};

export default SearchBox;
