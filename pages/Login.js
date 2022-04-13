import React from 'react'
import Image from 'next/image'
import Logo from '../images/logo.png'

const SignInForm = React.lazy(() => import('../modules/auth/components/SignInForm'))

const SignInPage = () =>{

    return (
        <div>
          <SignInForm />
        </div>
    )
}

export default SignInPage;