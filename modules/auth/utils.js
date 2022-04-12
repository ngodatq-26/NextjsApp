
import * as Yup from 'yup';

export const SignInSchema = Yup.object().shape({
    password: Yup.string()
      .min(6, 'Password is min 6!')
      .max(50, 'Too Long!')
      .required('Password is Required'),
    email: Yup.string().email('Email is Invalid').required('Email is Required'),
  });