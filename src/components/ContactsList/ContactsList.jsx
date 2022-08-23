import { ContactsListItem, ContactsListButton } from './ContactsList.styled';
import { IoCloseOutline } from 'react-icons/io5';
import { useEffect } from 'react';
import { getAllContacts, deleteCurrentContact} from 'redux/contacts/operations';
import { getItemsValue, getFilterValue } from 'redux/contacts/selectors';
import { useRedux } from 'hooks/useRedux';

export const ContactsList = () => {
  const [useSelector, dispatch] = useRedux();
  const filter = useSelector(getFilterValue);
  const items = useSelector(getItemsValue);

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]) 

  const normalizedValue = filter.toLowerCase();
  const filteredArray = items.filter(option =>
   option.name.toLowerCase().includes(normalizedValue)
  );

  const deleteContact = contactId => {
    dispatch(deleteCurrentContact(contactId));
  };

  return (
    <ul>
      {filteredArray.map(({ id, name, phone }) => {
        return (
          <ContactsListItem key={id}>
            {name}: {phone}
            <ContactsListButton
              onClick={() => {
                deleteContact(id);
              }}
            >
              <IoCloseOutline />
              Delete
            </ContactsListButton>
          </ContactsListItem>
        );
      })}
    </ul>
  );
};