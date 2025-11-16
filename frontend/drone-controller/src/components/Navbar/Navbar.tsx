import logo from "../../assets/logo.png"
import "./Navbar.css"

const Navbar:React.FC = ()=>{

    return(
        <>
            <div className="navbar-container container">
                <img src={logo} alt="ANU Rocketry logo" className="logo" />
                <h1>Project Stella Dashboard and Controller</h1>
            </div>
        </>
    )
}

export default Navbar;