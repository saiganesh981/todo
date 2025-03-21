import React from 'react';
import { useFormik } from 'formik';

const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log('form submit', values);
    },
    validate: (values) => {
      let errors = {};
      if (!values.name) {
        errors.name = 'Name is required';
      }
      if (!values.email) {
        errors.email = 'E-mail is required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      if (!values.password) {
        errors.password = 'Password is required';
      } else if (!/(?=.*[A-Z])/.test(values.password)) {
        errors.password = 'Password must contain at least one capital letter';
      } else if (!/(?=.*\d)/.test(values.password)) {
        errors.password = 'Password must contain at least one number';
      } else if (!/(?=.*[!@#$%^&*])/.test(values.password)) {
        errors.password = 'Password must contain at least one special character';
      }
      return errors;
    },
  });

  return (
    <div>
      <form autoComplete="off" onSubmit={formik.handleSubmit} style={{ marginLeft: '40%', marginTop: '300px' }}>
        <label>Name</label>
        <br />
        <input type="text" name="name" id="name" value={formik.values.name} onChange={formik.handleChange} />
        {formik.errors.name ? <div>{formik.errors.name}</div> : null}
        <br />
        <label>E-mail</label>
        <br />
        <input type="email" name="email" id="email" value={formik.values.email} onChange={formik.handleChange} />
        {formik.errors.email ? <div>{formik.errors.email}</div> : null}
        <br />
        <label>Password</label>
        <br />
        <input type="password" name="password" id="password" value={formik.values.password} onChange={formik.handleChange} />
        {formik.errors.password ? <div>{formik.errors.password}</div> : null}
        <br />
        <button type="submit">Register</button>
        <br />
      </form>
    </div>
  );
};

export default Form;