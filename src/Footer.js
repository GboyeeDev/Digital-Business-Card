

import './Footer.css'

function Footer() {
    return(
        <div className="footer">
            <a href="https://github.com/GboyeeDev" className="footer-link"><img src={github} alt="description of icon"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
            <a href="https://twitter.com/g_b_o_y_e_g_a" className="footer-link"><img src={twitter} alt="description of icon"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
            <a href="https://www.instagram.com" className="footer-link"><img src={instagram} alt="description of icon"/></a>
        </div>
    )
}

export default Footer;
