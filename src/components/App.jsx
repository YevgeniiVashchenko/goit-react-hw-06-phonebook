import { GlobalStyles } from './GlobalStyles';
import 'modern-normalize';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { MainForm, MainTitle, Title } from './App.styled';

export const App = () => {
  return (
    <MainForm>
      <GlobalStyles />
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      <ContactList />
    </MainForm>
  );
};
