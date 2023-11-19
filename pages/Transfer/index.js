import { useState } from "react";
import { useModal } from "../../hooks/modalHooks";
import styles from './transfer.module.css';

function About(props) {
    const [isOpen, toggleModal] = useModal();
    const [totalAmt, setTotalAmt] = useState(0);
    const onTotalAmtChange = (e) => {
        setTotalAmt(e.currentTarget.value)
    }

    return (
    <div className={styles.container}>
        <h2>이체</h2>

        <button onClick={toggleModal}>toggle Modal</button>
        <br></br>
        <br></br>

        <div className={styles.total_amt_wrapper}>
        
            <input className={styles.total_amt} type="number" value={totalAmt} onChange={onTotalAmtChange}></input>
            <button type="button" onClick={()=>alert(totalAmt)}>이체</button>
        </div>
    </div>)
}

export default About;
