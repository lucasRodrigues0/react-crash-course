import { Link } from 'react-router-dom'

export const NotFoundPage = () => {
    return (
        <>
            <h1>Oops! Page not found!</h1>
            <button>
                <Link to={'/'}>Back to homepage</Link>
            </button>
        </>
    )
}