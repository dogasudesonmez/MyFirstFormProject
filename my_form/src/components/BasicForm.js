import react from 'react';
import { useState } from 'react';
import { useFormik } from 'formik';
import {basicSchema} from '../schemas'
const BasicForm = () => {
    const onSubmit = () => {
        console.log("Submitted");
    };
    const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: "",
            age: "",
            password: "",
            confirmPassword:"",
        },
        validationSchema: basicSchema,
        onSubmit,
    })
    console.log(errors);
    return (
        <form onSubmit={handleSubmit} autoComplete="off">
            <label htmlFor="email">Email</label>
            <input
                value={values.email}
                onChange={handleChange}
                id="email" type="email"
                placeholder="Enter your Email"
                className={errors.email ? "input-error": ""}
            />
            
            <label htmlFor="age">Age</label>
            <input
                value={values.age}
                onChange={handleChange}
                onBlur={handleBlur}
                id="age" type="age"
                placeholder="Your Age" />
            <label htmlFor="password">Password</label>
            <input
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                id="password" type="password"
                placeholder="Password" />
          
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                id="confirmPassword" type="password"
                placeholder="confirm password" />
            <button type="submit">Submit</button>
        </form>
        );

}
export default BasicForm;