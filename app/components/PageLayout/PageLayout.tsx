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
                <Link to="/submit-entry"><div className="navbar-button">Create</div></Link>
                <Link to="/view-entries"><div className="navbar-button">View</div></Link>
            </div>
        </div>
        <div className="route-container">
            <Outlet />
        </div>
    </div>
}

export { PageLayout }