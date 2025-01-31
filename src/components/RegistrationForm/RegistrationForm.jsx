import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import css from './RegistrationForm.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/auth/operations';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();

  function handleSubmit(values, action) {
    console.log(values);
    dispatch(registerUser(values))
      .unwrap()
      .then(() => navigate('/'));
    action.resetForm();
  }

  return (
    <div>
      {' '}
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        onSubmit={handleSubmit}
      >
        <Form className={css.registerForm}>
          <div>
            <label htmlFor={nameId}>Name</label>
            <Field id={nameId} type="text" name="name" className={css.input} />
            <ErrorMessage name="name" component="span" />
          </div>
          <div>
            <label htmlFor={emailId}>Email</label>
            <Field
              id={emailId}
              type="text"
              name="email"
              className={css.input}
            />
            <ErrorMessage name="email" component="span" />
          </div>

          <div>
            <label htmlFor={passwordId}>Password</label>
            <Field
              id={passwordId}
              type="password"
              name="password"
              className={css.input}
            />
            <ErrorMessage name="password" component="span" />
          </div>
          <button type="submit">Register</button>
          <p>
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
