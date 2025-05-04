import { Outlet, Link } from "react-router";
import "./PageLayout.css"

interface IProps {
    children: any
}
const PageLayout = (props: IProps) => {
    return <div className="layout">
        <div className="navbar">
            <div className="header">
                <div className="navbar-title">Guardz App</div>
                <div className="navbar-author">By Tal Arbetov</div>
            </div>
            <div className="navbar-buttons-container">
                <Link to="/submit"><div className="navbar-button">Create</div></Link>
                <Link to="/data"><div className="navbar-button">View</div></Link>
            </div>
        </div>
        <Outlet />
    </div>
}

export { PageLayout }