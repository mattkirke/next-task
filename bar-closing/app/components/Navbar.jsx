import React from 'react'
import Link from "next/link";
import Logo from "./logo.png"
import Image from 'next/image';
export default function Navbar(){
    return (
        <div> 
            <nav className="navbar">
                <Image 
                    src={Logo}
                    alt="Beer Logo"
                    width={65}
                    quality={100}
                    placeholder='blur'
                />
                <Link href="/">Dashboard</Link>
                <Link href="/list">List</Link>
            </nav>
        </div>
    )
}
