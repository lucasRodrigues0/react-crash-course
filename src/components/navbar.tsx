import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';

export const Navbar = () => {

    const activeStyle = ({ isActive }: any ) => isActive ? 'bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2' : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2';

    return (
        <>
            <nav className="bg-indigo-700 border-b border-indigo-500">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="flex h-20 items-center justify-between">
                        <div
                            className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
                        >
                            <div className="flex flex-shrink-0 items-center mr-4">
                                <img
                                    className="h-10 w-auto"
                                    src={logo}
                                    alt="React Jobs"
                                />
                                <span className="hidden md:block text-white text-2xl font-bold ml-2"
                                >React Jobs</span>
                            </div>
                            <div className="md:ml-auto">
                                <div className="flex space-x-2">
                                    <NavLink
                                        to={'/'}
                                        className={activeStyle}
                                    >Home</NavLink>
                                    <NavLink
                                        to={'/jobs'}
                                        className={activeStyle}
                                    >Jobs</NavLink>
                                    <NavLink
                                        to={'/add-new'}
                                        className={activeStyle}
                                    >Add Job</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}