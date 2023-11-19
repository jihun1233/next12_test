import { useState } from "react";
import { useModal } from "../../hooks/modalHooks";
import styles from '../Transfer/transfer.module.css';
import Link from "next/link";
import { useDGBRouter } from "../../hooks/routeHooks";

function About(props) {
    const [isOpen, toggleModal] = useModal();
    const { goBack, routeWithPath, replaceWithPath } = useDGBRouter();
    const [totalAmt, setTotalAmt] = useState(0);
    const onTotalAmtChange = (e) => {
        setTotalAmt(e.currentTarget.value)
    }

    const [targetAccno, setTargetAccno] = useState(0);
    const onTargetAccnoChange = (e) => {
        setTargetAccno(e.currentTarget.value)
    }

    const onSubmit = () => {
        replaceWithPath('/')
        alert('전송')
    }
    return (
    <div className={styles.container}>
        <h2>이체 2단계</h2>

        <button onClick={toggleModal}>toggle Modal</button>
        <br></br>
        <br></br>


        <button onClick={onSubmit}>전송</button>
    </div>)
}

export default About;
