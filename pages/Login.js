import React from 'react'
import Image from 'next/image'
import Logo from '../images/logo.png'
import { fethAPI } from '../utils/fetch'
import { API_PATHS } from '../configs/apiConfigs'
import axios from 'axios'
import dynamic from 'next/dynamic'

const SignInForm = dynamic(() => import('../modules/auth/components/SignInForm'));

const SignInPage = ({props}) =>{

    const [loading,setLoading] = React.useState(false);
    const [message,setMessage] = React.useState('');

    const onLogin = async (email,password)=>{
      setLoading(true);
      await fetch (API_PATHS.login,{email : email,password : password},true).then(data =>{
        console.log(data.data)
        return data.data
      })
      setLoading(false)
    }

    return (
        <div>
          <SignInForm onLogin={onLogin} name="sara" loading={loading}/>
        </div>
    )
}

export async function getStaticProps() {
  return {
    props : {
      props
    }
  }
}

export default SignInPage;