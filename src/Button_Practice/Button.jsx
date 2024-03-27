
function Button() {

    const styles = {
        backgroundColor: "hsl(200, 100%, 50%)",
        color: "white",
        padding: "10px 20px" 
    }

    return(
        <button className="button" style={styles}>Click me</button>
    );
}

export default Button