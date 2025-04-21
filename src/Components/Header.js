import { Link } from "react-router-dom"

export  default function Header() {
    return  <header>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <Link className="navbar-brand" to={"/"}>My Blog</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="abc">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="abc">Posts</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="abc">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="abc">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>
}