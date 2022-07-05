import '../styles/Hand.css';

export default function Hand(props) {
    return (
        <img className={"hand" +
                (props.animate ? " hand--animate" : "")}
            src={props.src} />
    );
}