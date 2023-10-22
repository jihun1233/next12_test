import Modal from '../components/Modal'
import MyHeader from './MyHeader'
import '../styles/globals.css'
import {wrapper} from '/store/store'

function MyApp({ Component, pageProps }) {
  return <div>
    <MyHeader></MyHeader>
    <Component {...pageProps} ></Component>
    <Modal></Modal>
    </div>
}

export default wrapper.withRedux(MyApp)
