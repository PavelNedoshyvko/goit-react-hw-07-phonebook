import { useDispatch, useSelector } from 'react-redux';
import { DeleteBtn, ListItem } from './ConatctList.styled';
import { deleteContact } from 'redux/contactsSlice';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const visibleContacts = contacts.filter(contact =>
    contact.firstName.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {visibleContacts.map(({ id, firstName, tel }) => (
        <ListItem key={id}>
          {firstName}: {tel}
          <DeleteBtn type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </DeleteBtn>
        </ListItem>
      ))}
    </ul>
  );
};
