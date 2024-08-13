import React from 'react';

const FooterLayout = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <p className="" style={{ display: "flex" }}>
                    &copy;copyright {new Date().getFullYear()} &nbsp;<a href="#" className="copyright-link">codewithsadee</a>&nbsp; and adapted by<span>&nbsp;LanorRoid</span>. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}

export default FooterLayout;
