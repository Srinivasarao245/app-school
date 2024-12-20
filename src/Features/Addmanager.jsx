import React from 'react';
import {Field, Form, Formik} from 'formik'
function Addmanager() {
  return (
    <div>
      <Formik>
        <Form>
          <div class="form-floating mb-3 p-2 m-2">
            <Field type="text" name="category" class='form-control'></Field>
            <label>Manager Name</label>
          </div>
          <div class="form-floating mb-3 p-2 m-2">
            <Field type="text" name="category" class='form-control'></Field>
            <label>Manager Id</label>
          </div>
        </Form>
      </Formik>
    </div>
  ) };
export default Addmanager;
