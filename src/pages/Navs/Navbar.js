import avatar from '../../images/profile-avatar.png'

const NavBar = () => {
    return (
        <div className="nav">
            <div className="navigation">Navigation</div>
            <div className="title">Habit Tracker</div>
            <div className="options">
                <img src={avatar} alt="avatar" />
            </div>
        </div>
    )
}

export default NavBar