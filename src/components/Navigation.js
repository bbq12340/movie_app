import React from "react";
import {Link} from "react-router-dom";
import "./Navigation.css";

function Navigation() {
    return (
        <div class="bg-gray-800 relative flex items-center justify-between h-16">
            <Link to="/" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link to="/about" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">About</Link>
        </div>
    )
}

export default Navigation;