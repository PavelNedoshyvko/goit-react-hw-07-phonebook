import { useDispatch, useSelector } from 'react-redux';
import { FilterFieldInput, FilterLabel } from './Filter.styled';
import { changeFilter } from 'redux/filterSlise';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <div>
      <FilterLabel htmlFor="findContacts">Find contacts by name</FilterLabel>
      <FilterFieldInput
        type="text"
        name="findContacts"
        value={filter}
        onChange={evt => dispatch(changeFilter(evt.target.value))}
      />
    </div>
  );
};
