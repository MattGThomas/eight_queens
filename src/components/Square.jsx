function Square(props) {
    return (
        <button
        className="reg_square color"
        onClick={props.onClick}
        >
            {props.value}
        </button>
    )
}

export default Square