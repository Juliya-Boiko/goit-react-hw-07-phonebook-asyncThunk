import { useSelector, useDispatch } from 'react-redux/es/exports';
import { deleteItem, getItemsValue, getFilterValue } from 'redux/contacts';
import { ContactsListItem, ContactsListButton } from './ContactsList.styled';
import { IoCloseOutline } from 'react-icons/io5';

export const ContactsList = () => {
  const filter = useSelector(getFilterValue);
  const items = useSelector(getItemsValue);
  const dispatch = useDispatch();

  const normalizedValue = filter.toLowerCase();
  const filteredArray = items.filter(option =>
    option.name.toLowerCase().includes(normalizedValue)
  );

  const deleteContact = contactId => {
    dispatch(deleteItem(contactId));
  };

  return (
    <ul>
      {filteredArray.map(({ id, name, number }) => {
        return (
          <ContactsListItem key={id}>
            {name}: {number}
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
