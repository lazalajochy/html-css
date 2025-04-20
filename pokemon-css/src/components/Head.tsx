import logo from "../assets/logo.png"
import "./Head.css"


export const Head = () => {
    return (
        <div className="container-header">
            <ul>
                <li>
                    <a>
                        <img src={logo} alt="Logo" className="logo" />
                    </a>

                </li>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#doc">Docs</a>
                </li>
            </ul>

        </div>
    )
}