import { useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { SearchBox } from './SearchBox/SearchBox';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsThunk } from '../redux/contactsOps';
import s from './App.module.css';
import { selectError, selectLoading } from '../redux/selectors';
import { Error } from './Error/Error';
import { Loading } from './Loading/Loading';
export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  return (
    <div className={s.div}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {error && <Error />}
      {loading && <Loading />}
      {!error && !loading && <ContactList />}
    </div>
  );
};