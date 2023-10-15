import {useSelector} from 'react-redux'
import { selectModalIsOpen } from "../../store/modalSlice";
import { createPortal } from 'react-dom';
import styles from './modal.module.css';
import { useModal } from '../../hooks/modalHooks';

const Modal = () => {  
    const [isOpen] = useModal();
    if(!isOpen) return null;

    return createPortal(
            <div class={styles.modalContainer}>
                <p>modal 입니다</p>
            </div>,
            document.querySelector('#modal-root')
          )

  };

export default Modal