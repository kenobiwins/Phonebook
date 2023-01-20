import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import { Section } from './Section/Section';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';

export const App = () => {
  return (
    <>
      <Section majorTitle={'Phonebook'}>
        <PhonebookForm />
      </Section>

      <Section title={'Contacts'}>
        <Filter />
        <ContactsList />
      </Section>
    </>
  );
};
