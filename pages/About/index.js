import { useModal } from "../../hooks/modalHooks";

function About(props) {
    const [isOpen, toggleModal] = useModal();

    return (<div>
        About..
        <button onClick={toggleModal}>toggle Modal</button>
    </div>)
}

export default About;
