/* eslint-disable react/prop-types */
import Modal from 'react-modal';
import css from './ModalPrompt.module.css';
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { changeContact } from '../../redux/contacts/operations';

Modal.setAppElement('#root');

const ModalPrompt = ({ isModalOpen, onModalClose, contact }) => {
  const dispatch = useDispatch();
  const nameId = useId();
  const numberId = useId();

  function handleChange(values) {
    if (!contact.id) return;

    dispatch(
      changeContact({
        id: contact.id,
        name: values.name,
        number: values.number,
      })
    )
      .unwrap()
      .then(() => onModalClose());
  }
  return (
    <Modal
      isOpen={!!isModalOpen}
      onRequestClose={onModalClose}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <Formik
        initialValues={{
          name: contact.name,
          number: contact.number,
        }}
        onSubmit={handleChange}
      >
        <Form className={css.form}>
          <h3>Edit contact</h3>
          <div className={css.inputDiv}>
            <label htmlFor={nameId}>Name</label>
            <Field id={nameId} type="text" name="name" />
            <ErrorMessage name="name" component="span" />
          </div>
          <div className={css.inputDiv}>
            <label htmlFor={numberId}>Number</label>
            <Field id={numberId} type="text" name="number" />
            <ErrorMessage name="number" component="span" />
          </div>
          <button type="submit">Change</button>
        </Form>
      </Formik>
      <div></div>
    </Modal>
  );
};

export default ModalPrompt;
