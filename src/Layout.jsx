import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from './component/layout/Footer';
import Header from './component/layout/Header';
const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout