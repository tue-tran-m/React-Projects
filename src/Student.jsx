import PropTypes from 'prop-types';

function Student(props) {
    
    return(<div className="student">
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Student: {props.isStudent ? "Yes" : "No"}</p>
    </div>);
}

Student.defaultProps = {
    name: "Tran",
    age: 24,
    isStudent: false,
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}
export default Student;
// Student will get name of properties in the App.jsx documents