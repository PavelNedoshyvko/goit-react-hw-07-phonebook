import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import toast from 'react-hot-toast';
import {
  AddContactBtn,
  ErrMessage,
  FieldInput,
  FormContacts,
  FormLabel,
} from './ContactForm.styled';

const phoneRegExp = /^(\+?\d+)?\s*(\(\d+\))?[\s-]*([\d-]*)$/;
const nameRegExp = /^(([a-zA-Z' -]{1,80})|([а-яА-ЯЁёІіЇїҐґЄє' -]{1,80}))$/u;

const ContactSchema = Yup.object().shape({
  firstName: Yup.string()
    .matches(
      nameRegExp,
      'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz.'
    )
    .min(2, 'Too Short!')
    .required('Required!'),
  tel: Yup.string()
    .matches(
      phoneRegExp,
      'Phone number must be digits and can contain dashes, parentheses and can start with +'
    )
    .min(16, 'Too short!')
    .max(18, 'Too long!')
    .required('Required!'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  return (
    <div>
      <Formik
        initialValues={{
          firstName: '',
          tel: '',
        }}
        validationSchema={ContactSchema}
        onSubmit={(values, actions) => {
          const existingContact = contacts.find(
            contact => contact.firstName === values.firstName
          );
          if (existingContact) {
            toast.error(`${values.firstName} is already in contacts.`);
          } else {
            dispatch(addContact(values));
          }
          actions.resetForm();
        }}
      >
        <FormContacts>
          <FormLabel htmlFor="firstName">Name</FormLabel>
          <FieldInput id="firstName" name="firstName" placeholder="" />
          <ErrMessage name="firstName" component="div" />

          <FormLabel htmlFor="tel">Number</FormLabel>
          <FieldInput
            id="tel"
            name="tel"
            placeholder="+XX(XXX)-XXX-XX-XX"
            type="tel"
          />
          <ErrMessage name="tel" component="div" />

          <AddContactBtn type="submit">Add contact</AddContactBtn>
        </FormContacts>
      </Formik>
    </div>
  );
};
