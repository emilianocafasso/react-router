import { Link } from "react-router-dom"


export default function Navbar() {

    return (
        <div className="bg-light">
            <nav className="navbar mx-4">
                <ul className="nav nav-pills">
                    <li className="navbar-item">
                        <Link to='/' className="nav-link active">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/chi-siamo' className="nav-link">Chi Siamo</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/prodotti' className="nav-link">Prodotti</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )

}