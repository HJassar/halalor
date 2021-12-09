import { useLocation } from "react-router-dom"

import Search from './Search/Search'
import SiteTitle from './SiteTitle/SiteTitle'

import './Header.css'

const Header = () => {
    const atHome = (useLocation()).pathname === '/';

    return (
        <header
            style={{ flexGrow: atHome ? 0.6 : 0, }}
        >
            <SiteTitle />
            <Search />
        </header >
    )
}

export default Header
