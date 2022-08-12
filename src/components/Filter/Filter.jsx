import { Input } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { filterItems } from 'redux/contacts';
import { getFilterValue } from 'redux/selectors';

export const Filter = () => {
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();

  const handlerFilter = evt => {
    dispatch(filterItems(evt.target.value));
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
