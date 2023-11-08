import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { AppWrap, TitleApp, TitleContactList } from './App.styled';
import { Toaster } from 'react-hot-toast';

export const App = () => {
  return (
    <AppWrap>
      <TitleApp>Phonebook</TitleApp>
      <ContactForm />
      <TitleContactList>Contacts</TitleContactList>
      <Filter />
      <ContactList />
      <Toaster />
    </AppWrap>
  );
};
