const Button = (props) => {
    return (
        <>
            <button style={{color: props.color, backgroundColor: props.backColor, padding: props.padding}}>{props.value}</button>
        </>
    )
}

export default Button