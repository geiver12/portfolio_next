import Link from "next/link";

const Navbar = () => {

    let data = true

    const callCollapse = () => {
        
        const collapse = document.querySelector('#navbarNav')
        if (data === true)
            collapse.classList.add('show')
        else
            collapse.classList.remove('show')
        data = !data;

    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link href="/">
                    <a className="navbar-brand" >Personal PortFolio</a>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={callCollapse}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">

                        <li className="nav-item">
                            <Link href="/certification">
                                <a className="nav-link" >Certifications</a>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link href="/github">
                                <a className="nav-link" >Github</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/about">
                                <a className="nav-link" >About</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;