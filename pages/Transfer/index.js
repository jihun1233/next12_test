import { useState } from "react";
import { useModal } from "../../hooks/modalHooks";
import styles from './transfer.module.css';
import Link from "next/link";

function About(props) {
    const [isOpen, toggleModal] = useModal();
    const [totalAmt, setTotalAmt] = useState(0);
    const onTotalAmtChange = (e) => {
        setTotalAmt(e.currentTarget.value)
    }

    const [targetAccno, setTargetAccno] = useState(0);
    const onTargetAccnoChange = (e) => {
        setTargetAccno(e.currentTarget.value)
    }

    return (
    <div className={styles.container}>
        <h2>이체</h2>

        <button onClick={toggleModal}>toggle Modal</button>
        <br></br>
        <br></br>

        <div className={styles.inputWrapper}>
            <input className={styles.total_amt} type="number" value={totalAmt} onChange={onTotalAmtChange}></input>
            <button type="button" onClick={()=>alert(totalAmt)}>이체</button>
        </div>
        <div className={styles.inputWrapper}>
            <input className={styles.targetAccno} type="number" value={targetAccno} onChange={onTargetAccnoChange}></input>
            <button type="button" onClick={()=>alert(targetAccno)}>계좌번호</button>
        </div>

        <Link href="Transfer2">
            <a>다음</a>
        </Link>
    </div>)
}

export default About;
