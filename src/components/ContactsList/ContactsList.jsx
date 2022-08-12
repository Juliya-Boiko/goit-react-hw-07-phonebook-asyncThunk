import { useSelector, useDispatch } from 'react-redux/es/exports';
import { ContactsListItem, ContactsListButton } from './ContactsList.styled';
import { IoCloseOutline } from 'react-icons/io5';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { deleteItem } from 'redux/contacts';
import { getItemsValue, getFilterValue } from 'redux/selectors';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterValue);
  const items = useSelector(getItemsValue);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]) 

  const normalizedValue = filter.toLowerCase();
  const filteredArray = items.filter(option =>
   option.name.toLowerCase().includes(normalizedValue)
  );

  const deleteContact = contactId => {
    dispatch(deleteItem(contactId));
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
