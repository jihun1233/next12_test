import { useDispatch, useSelector } from "react-redux"
import { selectModalIsOpen, toggleIsOpen } from "../store/modalSlice"

export const useModal = () => {
    const dispatch = useDispatch();
    const isOpen = useSelector(selectModalIsOpen)

    const toggleModal = () =>{
        dispatch(toggleIsOpen());
    }

    return [isOpen, toggleModal]
}