import {FiUser} from 'react-icons/fi'

const Nav = () => {
    return (
        <div className="nav">
            <h1>LOGO</h1>
            <div className="profile">
                <span>
                    <FiUser/>
                </span>
                <p>username@resoluteai.in</p>
            </div>
        </div>
    )
}

export default Nav;