const FunctionalButton = (props) => {
    return (
        <>
            <button 
                style={{ backgroundColor: "blue", color: "white", padding: "15px" }}
                onClick={props.clickFunction}    
            >CLICK ME</button>
        </>
    )
}

export default FunctionalButton