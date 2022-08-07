import React from 'react';

const Navbar = () => {
    const menubar = <>
        <li><a>Home</a></li>
        <li><a>Agency</a></li>
        <li><a>Portfolio</a></li>
        <li><a>Priceing</a></li>
        <li><a>Page</a></li>
        <li><a>Blog</a></li>
        <li><a>Contact</a></li>
    </>
    return (
        <div>
            <div className="navbar text-white bg-gradient-to-r from-primary to-violet-400 ">
                <div className='container mx-auto'>
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabindex="0" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52">
                                {
                                    menubar
                                }
                            </ul>
                        </div>
                        <a className="btn btn-ghost normal-case text-xl">Kabbo</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">
                            {
                                menubar
                            }
                        </ul>
                    </div>
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        <span className="badge badge-sm indicator-item">8</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;