import { Form, Formik, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';

import s from './ContactForm.module.css';

import { useDispatch } from 'react-redux';
import { addContactThunk } from '../../redux/contactsOps';

const initialValues = { name: '', number: '' };
const reg = /^\d{3}-?\d{3}-?\d{4}$/;

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Required!')
    .min(3, 'Min 3 characters!')
    .max(50, 'Too long!'),
  number: Yup.string()
    .required('Required!')
    .matches(reg, 'Should be in "123-456-7890" format'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const nameId = useId();
  const numberId = useId();
  const handleSubmit = (values, actions) => {
    dispatch(addContactThunk({ ...values }));
    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <label
            htmlFor={nameId}
            className={s.label}
          >
            Name:
            <Field
              type="text"
              name="name"
              id={nameId}
              className={s.input}
              placeholder="John Johnson"
            ></Field>
            <ErrorMessage
              name="name"
              component="span"
              className={s.error}
            />
          </label>
          <label
            htmlFor={numberId}
            className={s.label}
          >
            Number:
            <Field
              type="tel"
              name="number"
              id={numberId}
              className={s.input}
              placeholder="123-456-7890"
            ></Field>
            <ErrorMessage
              name="number"
              component="span"
              className={s.error}
            />
          </label>
          <button
            type="submit"
            className={s.button}
          >
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
};