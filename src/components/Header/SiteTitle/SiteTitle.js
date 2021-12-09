import { useLocation, useSearchParams } from "react-router-dom"
import logo from './logo.svg'
import './SiteTitle.css'

const SiteTitle = () => {
    const atHome = (useLocation()).pathname === '/';
    const [, setSearchParams] = useSearchParams();

    return (
        <div
            className='SiteTitle'
            style={{ height: atHome ? '10vh' : '5vh' }}
            onClick={() => { setSearchParams({ q: '' }) }}>
            <img src={logo} alt='Logo' />
        </div>
    )
}

export default SiteTitle
