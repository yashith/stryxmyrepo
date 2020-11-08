import React from 'react';
import { useFormik } from 'formik';
import { Container, Row, Form,  Button,Col } from 'react-bootstrap';

function IsseForm(props){
 
    const warningstyle = { color: 'red' };
    const validate = values => {
        
        const errors = {}
        if (!values.priority) {
            errors.priority = 'Required'
        }
        if (!values.summery) {
            errors.summery = 'Required'
        }
        if (!values.expected) {
            errors.expected = 'Required'
        }
        if (!values.result) {
            errors.result = 'Required'
        }

        return errors;

    }
    const formik = useFormik({
        initialValues: {
            priority: '', //Import project value from project card
            summery: '',
            result: '',
            expected: '',
            id:"1",
        },
        validate,
        onSubmit: values => {alert(JSON.stringify(values, null, 2));},
            // alert(JSON.stringify(values, null, 2));
            //props.setbugs(props.bugs.push(values));
            // console.log(values);
            // console.log(values.priority);
        
            
    });
    const prioritylist=['Low','Medium','High'];

    return (
        <div>
            
                    <Form onSubmit={formik.handleSubmit}>
                        <Form.Group >
                            <Form.Label>Priority</Form.Label>
                            <Form.Control as="select"  name="priority" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.priority}>{/*set error handler*/}
                                {prioritylist.map((priority) => <option value={priority} label={priority}/>)}
                                
                            </Form.Control>
                            {formik.errors.project && formik.touched.project ? <Form.Text style={warningstyle}>{formik.errors.project}</Form.Text> : null}
                        </Form.Group>
                        
                        {/* summery of the bug */}
                        <Form.Group>
                            <Form.Label>Summary</Form.Label>
                            <Form.Control as="textarea" rows={4} placeholder="Summery of the bug" name="summery" onChange={formik.handleChange} onBlur={formik.handleBlur}
                                value={formik.values.summery}></Form.Control>
                            {formik.errors.summery && formik.touched.summery ? <Form.Text style={warningstyle}>{formik.errors.summery}</Form.Text> : null}
                        </Form.Group>
                        {/* Resulting output */}
                        <Form.Group>
                            <Form.Label>Outputted Result</Form.Label>
                            <Form.Control type="text" name="result" onChange={formik.handleChange} onBlur={formik.handleBlur}
                                value={formik.values.result}></Form.Control>
                            {formik.errors.result && formik.touched.result ? <Form.Text style={warningstyle}>{formik.errors.result}</Form.Text> : null}
                        </Form.Group>
                        {/* Expected output */}
                        <Form.Group>
                            <Form.Label>Expected Result</Form.Label>
                            <Form.Control type="text" name="expected" onChange={formik.handleChange} onBlur={formik.handleBlur}
                                value={formik.values.expected}></Form.Control>
                            {formik.errors.expected && formik.touched.expected ? <Form.Text style={warningstyle}>{formik.errors.expected}</Form.Text> : null}
                        </Form.Group>
                        
                        <Button type='submit'  >Add issue</Button>
                        <Button type='button'  onClick={props.cl} >Close</Button>
                       
                      
                        
                        
                    </Form>




        </div>
    )
}
export default IsseForm;