import logoimg from '../../Image/logo.png';
import Vector from '../../Image/Vector.png';
import Vector1 from '../../Image/Vector1.png';
import phone from '../../Image/phone.png';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light  container">
                <div class="container-fluid">
                    <Link to='/'>
                        <img src={logoimg} alt="log" />
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav m-auto mb-2 mb-lg-0">
                            <form class="d-flex search">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-success" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
                            </form>
                        </ul>
                        <form class="d-flex align-items-center">
                            <div className='nav-register'>
                                <div>REGISTER / LOGIN</div>
                            </div>
                            <div className='nav-register'>
                                <img src={Vector} alt="log" />
                            </div>
                            <div className='nav-register'>
                                <img src={Vector1} alt="log" />
                            </div>
                            {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
                            {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
                        </form>
                    </div>
                </div>
            </nav>
            <nav class="navbar navbar-expand-lg navbar-light container">
                <div class="container-fluid">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li class="nav-item dropdown d-flex align-items-center">
                            <i class="fa-solid fa-bars"></i>
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                All Categories
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">1</a></li>
                                <li><a class="dropdown-item" href="#">2</a></li>
                            </ul>
                        </li>
                    </ul>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Home
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">1</a></li>
                                    <li><a class="dropdown-item" href="#">2</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to='/shop'>Shop</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to='/about'>About Us</Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Blog</a>
                            </li>
                        </ul>
                        <form>
                            <div class="d-flex cutomer align-items-center">
                                <div> <img src={phone} alt="phone" /></div>
                                <div>
                                    <p style={{ margin: "0px" }}>+91 834534534</p>
                                    <p style={{ margin: "0px" }}>Customer Support</p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;