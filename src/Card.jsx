import profilePic from './assets/profile-picture.jpeg';

function Card() {

    return(
        <div className="card">
            <img src={profilePic} className="profile" alt="Profile-picture"/>
            <h2 className='name'>Bro Code</h2>
            <p className='description'>I make Youtube videos and play video games</p>  
        </div>
    )
}

export default Card