import { useDispatch, useSelector } from 'react-redux';
import { DeleteBtn, ListItem } from './ConatctList.styled';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from 'redux/contactsOperations';
import {
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/selectors';
import { Loader } from 'components/Loader/Loader';
import toast from 'react-hot-toast';

export const ContactList = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const visibleContacts = useSelector(selectVisibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {loading && <Loader />}
      {error === 'Rejected' &&
        toast.error("We're sorry, something went wrong! Try again, please.", {
          style: {
            fontSize: '18px',
            padding: '16px',
            position: 'center-center',
          },
        })}
      {visibleContacts.length > 0 && (
        <ul>
          {visibleContacts.map(({ id, name, phone }) => (
            <ListItem key={id}>
              {name}: {phone}
              <DeleteBtn
                type="button"
                onClick={() => dispatch(deleteContact(id))}
              >
                Delete
              </DeleteBtn>
            </ListItem>
          ))}
        </ul>
      )}
    </>
  );
};
