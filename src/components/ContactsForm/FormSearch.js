import React from 'react';
import { useDispatch } from 'react-redux';
import { filterContact } from '../../redux/contacts/slice';
import css from './Form.module.css';

const FormSearch = () => {
  const dispatch = useDispatch();

  return (
    <label className={css.formSearch}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        onChange={e => dispatch(filterContact(e.currentTarget.value))}
        className={css.inputFormSearch}
      />
    </label>
  );
};

export default FormSearch;