import { Input } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from 'redux/actions';
import { getFilterValue } from 'redux/selectors';

export const Filter = () => {
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();

  const handlerFilter = evt => {
    dispatch(filterContacts(evt.target.value));
  };

  return (
    <Input
      placeholder="Type name..."
      type="text"
      name="name"
      onChange={handlerFilter}
      value={filter}
    />
  );
};