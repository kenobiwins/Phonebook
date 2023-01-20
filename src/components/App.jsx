import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import { Section } from './Section/Section';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';
import { useSelector } from 'react-redux';
import { getErrorStatus, getLoadingStatus } from 'redux/selectors';
import { Spinner } from './Spinner/Spinner';

export const App = () => {
  const error = useSelector(getErrorStatus);
  const isLoading = useSelector(getLoadingStatus);
  return (
    <>
      <Section majorTitle={'Phonebook'}>
        <PhonebookForm />
      </Section>

      <Section title={'Contacts'}>
        <Filter />
        {isLoading && !error && <Spinner />}
        <ContactsList />
      </Section>
    </>
  );
};
