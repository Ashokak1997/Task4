import './ShopLocation.css';
import image1 from '../../Image/image 7.png';
import image2 from '../../Image/image 8.png';
import image3 from '../../Image/image 9.png';
import image4 from '../../Image/image 10.png';
import image5 from '../../Image/image 11.png';
import image6 from '../../Image/image 12.png';

const ShopLocation = () => {
    return (
        <div className='container'>
            <div className="shop-location-head">
                <h4>Shop By Location</h4>
                <p>Visit our nearby shop</p>
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-secondary">Chennai - 1</button>
                    <button type="button" class="btn btn-secondary">Chennai - 2</button>
                    <button type="button" class="btn btn-secondary">Chennai - 3</button>
                    <button type="button" class="btn btn-secondary">Chennai - 4</button>
                    <button type="button" class="btn btn-secondary">Chennai - 5</button>
                </div>
            </div>
            <div className='row my-4'>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <p>Address :</p>
                    <div className='d-flex my-3'>
                        <span><i class="fa-solid fa-location-pin"></i></span>
                        <span>60/a, 11th Avenue,
                            Ashok nagar, Chennai-600083</span>
                    </div>
                    <p>Phone :</p>
                    <div className='d-flex '>
                        <span><i class="fa-solid fa-phone"></i></span> {"  "}
                        <span>97911 30444 </span>
                    </div>
                    <div className='d-flex '>
                        <span><i class="fa-solid fa-phone"></i></span>
                        <span>97911 30444 </span>
                    </div>
                    <div className='d-flex my-3'>
                        <div className='mx-1'><i class="fa-light fa-timer"></i></div>
                        <div className='mx-1'>Mon - Sat</div>
                        <div className='mx-1'>
                            10:00 AM to 08:00 PM</div>
                    </div>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <div class="mapouter"><div class="gmap_canvas"><iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=chennai&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>
                    </div>
                </div>
            </div>
            <div className='shop-img mt-5'>
                <div className='m-4'>
                    <img src={image1} alt="img" />
                    <p className='my-2'>Handmade​</p>
                </div>
                <div className='m-4'>
                    <img src={image2} alt="img" />
                    <p className='my-2'>Naturally Made</p>
                </div>
                <div className='m-4'>
                    <img src={image3} alt="img" />
                    <p className='my-2'>No Harsh Chemicals
                    </p>
                </div>
                <div className='m-4'>
                    <img src={image4} alt="img" />
                    <p className='my-2'>Skin-Friendly</p>
                </div>
                <div className='m-4'>
                    <img src={image5} alt="img" />
                    <p className='my-2'>Safe Use</p>
                </div>
                <div className='m-4'>
                    <img src={image6} alt="img" />
                    <p className='my-2'>Skin-Friendly</p>
                </div>

            </div>
        </div >
    );
}

export default ShopLocation;