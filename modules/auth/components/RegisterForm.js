import React from 'react';
import { SignUpSchema } from '../utils';
import { useFormik} from 'formik';
import Link from 'next/link';

const RegisterForm = () =>{
    const [formValues,setFormValues] = React.useState({
        email : "",
        password : ""
    });

    const formik = useFormik({
        initialValues: {
          password:'',
          email: '',
          confirmPassword : ''
        },
        validationSchema : SignUpSchema,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div className="w-full max-w-xs" style={{maxWidth : "100%",padding : 200,paddingLeft : 550}}>
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" style={{width : 400}} 
                  onSubmit={formik.handleSubmit}
                  >
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                           id="username"
                           name="email" 
                           type="text" 
                           value={formik.values.email}
                           onChange={formik.handleChange}
                           onBlur={formik.onBlur}
                           placeholder="Username"
                    />
                    {
                        formik.errors.email && formik.touched ? (<p class="text-red-500 text-xs italic">{formik.errors.email}</p>)  : null
                    }
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                           id="password" 
                           name="password"
                           type="password" 
                           placeholder="password"
                           value={formik.values.password}
                           onBlur={formik.onBlur}
                           onChange={formik.handleChange} 
                           />
                    {
                        formik.touched && formik.errors.password ? (<p class="text-red-500 text-xs italic">{formik.errors.password}</p>)  : null
                    }
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                       Confirm Password
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                           id="confirmPassword" 
                           name="confirmPassword"
                           type="password" 
                           placeholder="Confirm password"
                           value={formik.values.confirmPassword}
                           onBlur={formik.onBlur}
                           onChange={formik.handleChange} 
                           />
                    {
                        formik.touched && formik.errors.confirmPassword ? (<p class="text-red-500 text-xs italic">{formik.errors.confirmPassword}</p>)  : null
                    }
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Sign Up
                    </button>
                    <Link href="/Login">
                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                        if you have account,login {"->"}
                    </a>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default RegisterForm