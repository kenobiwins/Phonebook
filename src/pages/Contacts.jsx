import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { PhonebookForm } from 'components/PhonebookForm/PhonebookForm';
import { Section } from 'components/Section/Section';

export const Contacts = () => {
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
