import '../styles/AppButton.css';

export default function AppButton(props) {
    return (
        <button
            className="appButton"
            onClick={() => props.onClick()}>
            {props.text}
        </button>
    );
}