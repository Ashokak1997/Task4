import './Footer.css';

import logo from '../../Image/logo.png';

const Footer = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-lg-6 col-sm-12 col-md-12">
                    <img src={logo} alt="logo" />
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad</p>
                    <div className='footer-body d-flex'>
                        <p>Address : </p>
                        <p> 60/a, 11th Avenue, Ashok nagar, Chennai-600083</p>
                    </div>
                    <div className='footer-body d-flex'>
                        <p>Email : </p>
                        <p>LKN@gmail.com</p>
                    </div>
                    <div className='footer-body d-flex'>
                        <p>Call us :  </p>
                        <p>+91 98765 43210</p>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-md-6">
                    <h6>SHOP BY</h6>
                    <p>Wishlist</p>
                    <p>Login / Register</p>
                    <p>Track Order</p>
                    <p>Checkout</p>
                    <p>Shop All Product</p>
                </div>
                <div className="col-lg-3 col-sm-6 col-md-6">
                    <h6>QUINK LINK</h6>
                    <p>Baby Care</p>
                    <p>Baby Care</p>
                    <p>Eye Care</p>
                    <p>Face Care</p>
                    <p>Hair care</p>
                    <p>Health Care</p>
                    <p>Wishlist</p>
                </div>
            </div>

        </div>
    );
}

export default Footer;