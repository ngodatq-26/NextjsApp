import '../styles/globals.css'
import wrapper from "../redux/configureStore"

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp)
