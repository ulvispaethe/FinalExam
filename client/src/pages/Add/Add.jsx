import React from 'react'
import { Formik } from 'formik';
import * as Yup from "yup"
import axios from 'axios'
import './Add.scss'
import {Helmet} from "react-helmet";
const AddPage = () => {
  return (
      <React.Fragment>
                  <Helmet>
            <title>Add Page</title>
        </Helmet>
      <div className='divv'>
    <div className='formik'>
    <Formik
  initialValues={{
    name: '',
    price: '',
  }}
  validationSchema={Yup.object({
    name: Yup.string().required('name is required!'),
    price: Yup.string().required('price is required!'),
  })}
  onSubmit={(values, { resetForm, setSubmitting, handleSubmit }) => {
    axios
      .post('http://localhost:8080/', values)
      .then(response => {
        console.log(response.data); 
        setSubmitting(false);
        resetForm();
        handleSubmit();
      })
      .catch(error => {
        console.error(error); 
        setSubmitting(false);
      });
  }}
>
  {({ values, handleChange, dirty, errors, touched, handleSubmit, handleReset, isSubmitting }) => (
    <form className="magic-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Brand Name</label>
      <input
        type="text"
        placeholder="Name"
        id="name"
        className="input"
        value={values.name}
        onChange={handleChange}
      />
      {errors.name && touched.name && <div className="input-feedback">{errors.name}</div>}
      <br />
      <label htmlFor="price">Price</label>
      <input
        type="text"
        placeholder="Price"
        id="price"
        className="input"
        value={values.price}
        onChange={handleChange}
      />
      {errors.price && touched.price && <div className="input-feedback">{errors.price}</div>}
      <br />
      <button className="btn1" type="submit" disabled={!dirty || isSubmitting}>
        Add
      </button>
    </form>
  )}
</Formik>
    </div>
      </div>
      </React.Fragment>
  )
}

export default AddPage