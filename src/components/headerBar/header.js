import { Link } from "react-router-dom"

export default function HeaderBar() {
    return (
        <div className="navbar">
            <Link to="/login"><button>LogIn</button></Link>
            <Link to="/signup"><button>SignUp</button></Link>
        </div>
    )
}