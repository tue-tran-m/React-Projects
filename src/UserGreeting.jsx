
function UserGreeting(props) {

    const welcomeGreeting = <h2 className="welcome-message">Wellcome {props.userName}</h2>

    const loginPrompt = <h2 className="login-prompt">Please log in to continue</h2>

    return(
        props.isTrue ? welcomeGreeting : loginPrompt
    );
}

export default UserGreeting
