import React from 'react';
import s from './Navbar.module.css'
import Link from '../link/Link';

const Navbar = () => {
    return (
        <div className={s.navbarMenu}>
            <Link href="/routingWithoutUsingLibrary/home">home</Link>
            <Link href="/routingWithoutUsingLibrary/news">news</Link>
            <Link href="/routingWithoutUsingLibrary/contact">contact</Link>
            <Link href="/routingWithoutUsingLibrary/about">about</Link>
        </div>
    );
};

export default Navbar;