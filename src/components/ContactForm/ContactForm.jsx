/* eslint-disable react/prop-types */
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { nanoid } from '@reduxjs/toolkit';

const validation = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too much!')
    .required('This is required.'),
  number: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too much!')
    .required('This is required.'),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  //form ids
  const nameId = useId();
  const numberId = useId();

  function handleSubmit(values, actions) {
    dispatch(
      addContact({
        id: nanoid(),
        name: values.name,
        number: values.number,
      })
    );
    actions.resetForm();
  }

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={validation}
    >
      <Form className={css.form}>
        <div>
          <label htmlFor={nameId}>Name</label>
          <Field id={nameId} type="text" name="name" className={css.input} />
          <ErrorMessage name="name" component="span" />
        </div>
        <div>
          <label htmlFor={numberId}>Number</label>
          <Field
            id={numberId}
            type="text"
            name="number"
            className={css.input}
          />
          <ErrorMessage name="number" component="span" />
        </div>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
