import '../../index.css'
function NumberSquare(props) {
    return (
        <button
        className='number_square color'
        >
            {props.value}
        </button>
    )
}

export default NumberSquare