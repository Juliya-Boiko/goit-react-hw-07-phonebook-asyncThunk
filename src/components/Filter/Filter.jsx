import { Input } from './Filter.styled';
import { filterContacts } from 'redux/contacts/actions';
import { getFilterValue } from 'redux/contacts/selectors';
import { useRedux } from 'hooks/useRedux';

export const Filter = () => {
  const [useSelector, dispatch] = useRedux();
  const filter = useSelector(getFilterValue);

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