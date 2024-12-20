import React from 'react';
import { Field, Form, Formik } from 'formik';
function AddBranch() {
  return (
    <div >
      <Formik>
        <div className='row justify-content-start'>
            <div className='col-10 col-sm-8 col-md-5 col-lg-4'>
                <div className='border border-light p-4 round sfadow'>
                    <Form>
                        <Field type="text" name="branch name" class='form-control p-2 mb-3' placeholder='Branch Name'></Field>
                        <Field type="text" name="Branch Location" class='form-control p-2 mb-4' placeholder='Branch Location'></Field>
                        <button className='btn btn-primary w-25 mb-2'>Submit</button>
                    </Form>
                </div>
            </div>
        </div>
      </Formik>
    </div>
  )
};
export default AddBranch;
