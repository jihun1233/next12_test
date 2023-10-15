import Modal from '../components/Modal'
import '../styles/globals.css'
import {wrapper} from '/store/store'

function MyApp({ Component, pageProps }) {
  return <div>
    <Component {...pageProps} ></Component>
    <Modal></Modal>
    </div>
}

export default wrapper.withRedux(MyApp)
