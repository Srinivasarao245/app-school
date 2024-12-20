import { Field, Form, Formik } from 'formik';
import React from 'react';
function AddStudent() {
  return (
    <div>
      <Formik>
        <Form>
            <div class="form-floating mb-3 p-2 m-2">
              <Field type="text" name="name" class='form-control'></Field>
              <label htmlFor="">Student Name</label>
            </div>
            <div class="form-floating mb-3 p-2 m-2">
              <Field type="text" name="id" class='form-control'></Field>
              <label htmlFor="">Student Id</label>
            </div>
        </Form>
      </Formik>
    </div>
  ) };
export default AddStudent;
