import { Link } from "react-router"


const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <h1 className="text-center text-6xl font-extrabold text-[#244D3F]">404</h1>
            <p>Page Not Found</p>
            <p className="bg-[#244D3F] my-2 text-white py-2 px-4 rounded-md"><Link to="/">Home page</Link></p>
        </div>
    )
}

export default NotFound