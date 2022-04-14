import React from 'react'
import dynamic from 'next/dist/shared/lib/dynamic';
const RegisterForm = dynamic(() => import("../modules/auth/components/RegisterForm"));

const Register = () =>{
    return(
        <RegisterForm />
    )
}

export default Register;