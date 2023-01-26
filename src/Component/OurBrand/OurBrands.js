import brand from '../../Image/logo.png';
import './OurBrands.css';

const OurBrands = () => {
    return (
        <div className='container brands'>
            <h4>Our Brands</h4>
            <div className='row '>
                <div className='col-lg-4 col-md-6 brands-col'>
                    <img src={brand} alt="brand" />
                    <p>Krishna Naturals
                        Hair care</p>
                </div>
                <div className='col-lg-4 col-md-6 brands-col'>
                    <img src={brand} alt="brand" />
                    <p>Krishna Naturals
                        Hair care</p>
                </div>
                <div className='col-lg-4 col-md-6 brands-col'>
                    <img src={brand} alt="brand" />
                    <p>Krishna Naturals
                        Hair care</p>
                </div>
            </div>
        </div>
    );
}

export default OurBrands;