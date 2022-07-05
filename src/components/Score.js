import '../styles/Score.css';

export default function Score(props) {
    return (
        <div className="score">
            <div>Score</div>
            <div className="score_point">{props.user_score}:{props.comp_score}</div>
            <div
                className="score__reset"
                onClick={() => props.onReset()}>
                Reset</div>
        </div>
    );
}