import { Contact } from "../Contact/Contact";
import { useSelector } from "react-redux";

import s from "./ContactList.module.css";
import { selectContacts, selectFilter } from "../../redux/selectors";
export const ContactList = () => {
  const { contacts } = useSelector(selectContacts);
  const { filter } = useSelector(selectFilter);
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter)
  );
  return (
    <ul className={s.list}>
      {filteredContacts.map((contact) => (
        <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
        />
      ))}
    </ul>
  );
};