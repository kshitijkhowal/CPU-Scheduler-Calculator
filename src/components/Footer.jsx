import React from 'react'
import { Github } from 'lucide-react';
import { Link } from 'react-router';


const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-black text-white py-4 text-center flex justify-center gap-9 mt-8">
            <p className="text-sm">
                Created by <span className="font-bold">Kshitij Khowal</span> &copy; {currentYear}
            </p>
            <Link to="https://github.com/kshitijkhowal">
                <Github/>
            </Link>
        </footer>
    )
}

export default Footer
