import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsOperations';
import toast from 'react-hot-toast';
import {
  AddContactBtn,
  ErrMessage,
  FieldInput,
  FormContacts,
  FormLabel,
} from './ContactForm.styled';
import { selectContacts } from 'redux/selectors';

const phoneRegExp = /^\d{3}-\d{3}-\d{4}$/;
const nameRegExp = /^(([a-zA-Z' -]{1,80})|([а-яА-ЯЁёІіЇїҐґЄє' -]{1,80}))$/u;

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      nameRegExp,
      'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz.'
    )
    .min(2, 'Too Short!')
    .required('Required!'),
  phone: Yup.string()
    .matches(
      phoneRegExp,
      'Phone number must be digits and can contain dashes, parentheses and can start with +'
    )
    .min(10, 'Too short!')
    .max(12, 'Too long!')
    .required('Required!'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          phone: '',
        }}
        validationSchema={ContactSchema}
        onSubmit={(values, actions) => {
          const existingContact = contacts.find(
            contact => contact.name === values.name
          );
          if (existingContact) {
            toast.error(`${values.name} is already in contacts.`);
          } else {
            dispatch(addContact(values));
          }
          actions.resetForm();
        }}
      >
        <FormContacts>
          <FormLabel htmlFor="name">Name</FormLabel>
          <FieldInput id="name" name="name" placeholder="" />
          <ErrMessage name="name" component="div" />

          <FormLabel htmlFor="phone">Number</FormLabel>
          <FieldInput
            id="phone"
            name="phone"
            placeholder="XXX-XXX-XXXX"
            type="phone"
          />
          <ErrMessage name="phone" component="div" />

          <AddContactBtn type="submit">Add contact</AddContactBtn>
        </FormContacts>
      </Formik>
    </div>
  );
};
