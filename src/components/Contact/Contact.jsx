import { IoPerson } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import s from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";

export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <li className={s.item}>
      <div className={s.wrapper}>
        <p className={s.text}>
          <IoPerson className={s.icon} /> {name}
        </p>
        <p className={s.text}>
          <FaPhoneAlt className={s.icon} /> {number}
        </p>
      </div>
      <button onClick={() => dispatch(deleteContact(id))} className={s.button}>
        Delete
      </button>
    </li>
  );
};