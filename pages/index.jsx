import Head from 'next/head'
import Image from 'next/image'
import SignInPage from './Login'
import Register from './Register'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <SignInPage />
  )
}
