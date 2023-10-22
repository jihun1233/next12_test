import styles from '/styles/Header.module.css'
import {RiArrowGoBackLine} from 'react-icons/ri'
import {AiFillHome} from 'react-icons/ai'
import { useDGBRouter } from '../hooks/routeHooks';

function Header({}) {
    const { goBack, routeWithPath } = useDGBRouter();
    const onReturnClick = () => {
        goBack();
    }

    const onHomeClick = () => {
        routeWithPath('/')
    }

    return ( <header className={styles.header}>
        <RiArrowGoBackLine size="35px" onClick={onReturnClick}></RiArrowGoBackLine>
        <AiFillHome size="35px" onClick={onHomeClick}></AiFillHome>
    </header> );
}

export default Header;