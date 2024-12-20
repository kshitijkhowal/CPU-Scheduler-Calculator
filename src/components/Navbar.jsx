import React from 'react'
import { House } from 'lucide-react';

import { Link } from 'react-router-dom';


const Navbar = (Props) => {
    return (
        <nav className="bg-black w-full text-white py-4 shadow-md">
            <div className="mx-auto flex item-center justify-between">
                <Link to="/" className="flex items-center px-8">
                    <House />
                </Link>
                <div className="flex-grow text-xl font-bold text-center">{Props.title}</div>
            </div>
        </nav>
    )
}

export default Navbar
