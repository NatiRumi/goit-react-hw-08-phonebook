import React from 'react';
import { useDispatch } from 'react-redux';
import { filterContact } from '../../redux/contacts/slice';
import css from './Form.module.css';

const FormSearch = () => {
  const dispatch = useDispatch();

  return (
    <div className={css.formSearch}>
      <label>
        Find contacts by name
        <input
          type="text"
          name="filter"
          onChange={e => dispatch(filterContact(e.currentTarget.value))}
          className={css.inputFormSearch}
        />
      </label>
    </div>
  );
};

export default FormSearch;
