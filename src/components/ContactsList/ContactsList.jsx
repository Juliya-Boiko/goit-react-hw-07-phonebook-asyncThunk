import { useSelector, useDispatch } from 'react-redux/es/exports';
import { ContactsListItem, ContactsListButton } from './ContactsList.styled';
import { IoCloseOutline } from 'react-icons/io5';
import { useEffect } from 'react';
import { getAllContacts, deleteCurrentContact} from 'redux/operations';
import { getItemsValue, getFilterValue } from 'redux/selectors';
import { toast } from "react-toastify";

export const ContactsList = () => {
  const dispatch = useDispatch();
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
    toast.success('DELETE CONTACT!', {});
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