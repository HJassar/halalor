import logo from './synafylogo.svg';

import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="synafy">
                    Another project by <a href="https://synafy.com">
                        <div>
                            <img
                                className="synafy-logo"
                                width="20px"
                                style={{ verticalAlign: 'middle' }}
                                src={logo} alt="logo" fill="green" />
                        </div>
                    </a>
                </div>
                <div className="footer-links">
                    Terms of Service &bull; Privacy Policy &bull; Contact Us
                </div>
                <div className="copyright">
                    © {(new Date().getFullYear())} Halalor. All rights reserved.
                </div>
            </div>
        </footer >
    )
}

export default Footer
