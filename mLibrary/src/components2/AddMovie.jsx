import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const AddMovie = () => {
  // Custom validation function
  const validate = (values) => {
    const errors = {};

    if (!values.title) {
      errors.title = 'Title is required';
    }

    if (!values.director) {
      errors.director = 'Director is required';
    }

    if (!values.genre) {
      errors.genre = 'Genre is required';
    }

    if (!values.year) {
      errors.year = 'Year is required';
    } else if (isNaN(values.year) || Number(values.year) <= 1900) {
      errors.year = 'Year must be greater than 1900';
    }

    if (!values.rating) {
      errors.rating = 'Rating is required';
    } else if (Number(values.rating) < 1 || Number(values.rating) > 10) {
      errors.rating = 'Rating must be between 1 and 10';
    }

    // Synopsis is optional – no validation

    return errors;
  };

  return (
    <Formik
      initialValues={{
        title: '',
        director: '',
        genre: '',
        year: '',
        rating: '',
        synopsis: '',
      }}
      validate={validate}
      onSubmit={(values, { resetForm }) => {
        console.log('Form submitted:', values);
        alert(JSON.stringify(values, null, 2));
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form style={{ maxWidth: '500px', margin: 'auto' }}>
          <h2>Add a Movie</h2>

          <div>
            <label>Title:</label>
            <Field type="text" name="title" />
            <ErrorMessage name="title" component="div" style={{ color: 'red' }} />
          </div>

          <div>
            <label>Director:</label>
            <Field type="text" name="director" />
            <ErrorMessage name="director" component="div" style={{ color: 'red' }} />
          </div>

          <div>
            <label>Genre:</label>
            <Field type="text" name="genre" />
            <ErrorMessage name="genre" component="div" style={{ color: 'red' }} />
          </div>

          <div>
            <label>Year:</label>
            <Field type="number" name="year" />
            <ErrorMessage name="year" component="div" style={{ color: 'red' }} />
          </div>

          <div>
            <label>Rating (1–10):</label>
            <Field type="number" name="rating" />
            <ErrorMessage name="rating" component="div" style={{ color: 'red' }} />
          </div>

          <div>
            <label>Synopsis:</label>
            <Field as="textarea" name="synopsis" rows="3" />
            <ErrorMessage name="synopsis" component="div" style={{ color: 'red' }} />
          </div>

          <button type="submit" disabled={isSubmitting} style={{ marginTop: '10px' }}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default AddMovie;


