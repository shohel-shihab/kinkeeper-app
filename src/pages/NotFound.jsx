import { Link } from "react-router"


const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <h1 className="text-center text-3xl">404 Page Not Found</h1>
            <p><Link to="/">Back to home page</Link></p>
        </div>
    )
}

export default NotFound