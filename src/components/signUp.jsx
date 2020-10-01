import React from 'react';
 import { useFormik } from 'formik';
 import * as Yup from "yup";
 import './style.css';
 
 

 const Signup = () => {
   const formik = useFormik({
     initialValues: {
       firstName: '',
       lastName: '',
       email: '',
       password:''
     },
   
     onSubmit: values => {
       console.log(JSON.stringify(values, null, 2));
       console.log(values);
     },
   });
   return (
     <form className="SignUp-container" onSubmit={formik.handleSubmit}>
       <label htmlFor="firstName">First Name</label>
       <input
         id="firstName"
         name="firstName"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.firstName}
       />
       
       <label htmlFor="lastName">Last Name</label>
       <input
         id="lastName"
         name="lastName"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.lastName}
       />
       
       <label htmlFor="email">Email Address</label>
       <input
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         value={formik.values.email}
       />
        
        <label htmlFor="password">Password</label>
       <input
         id="password"
         name="password"
         type="password"
         onChange={formik.handleChange}
         value={formik.values.password}
       />
        
       <button type="submit">Submit</button>
     </form>
   );
 };

 export default Signup;