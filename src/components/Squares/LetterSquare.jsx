import './squares.css'
function LetterSquare(props) {
    return (
        <button
        className="ls color"
        
        >
            {props.value}
        </button>
    )
}

export default LetterSquare