import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import css from './LoginForm.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/auth/operations';

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const emailId = useId();
  const passwordId = useId();

  function handleSubmit(values, action) {
    console.log(values);
    dispatch(loginUser(values))
      .unwrap()
      .then(() => navigate('/'));
    action.resetForm();
  }

  return (
    <div>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={handleSubmit}
      >
        <Form className={css.loginForm}>
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
            <label htmlFor={emailId}>Password</label>
            <Field
              id={passwordId}
              type="password"
              name="password"
              className={css.input}
            />
            <ErrorMessage name="password" component="span" />
          </div>
          <button type="submit">Log in</button>
          <p>
            No account yet? <Link to="/register">Register</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
