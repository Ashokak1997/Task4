import './NewArrivals.css';
import md5 from 'md5';
import axios from 'axios';
import { useEffect, useState } from 'react';

const NewArrivals = () => {
    const [image, setImage] = useState([])

    useEffect(() => {
        getNewArrivals();
    }, [])

    const getNewArrivals = async () => {
        const authToken = (input) => {
            return md5("LK@$$$@2022" + input)
        }
        let input = "NEW"
        const d = {
            "auth_token": authToken(input),
            "user_id": "1"
        }
        try {
            const { data } = await axios.post(`https://staging.technotackle.com/LKN/admin/api/v1/new_arrival`, d)
            console.log(data)
            setImage(data.new_arrival)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='BestSeller-head container mb-5'>
            <div className='BestSeller-body my-3'>
                <h4>New Arrivals</h4>
                <button>VIEW ALL</button>
            </div>

            <div className='row'>
                {image.map((item) => {
                    return (
                        <div className='col-lg-3 col-sm-6 col-md-6' key={item.product_details.id}>
                            <div class="card" >
                                <img src={item.product_details.featured_image} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    {/* <h5 class="card-title">Card title</h5> */}
                                    <p class="card-text">Hibiscus Shampoo With Vitamin C and Vitamin D for Hair care </p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Catoegry : Hair</li>
                                    <li class="list-group-item">Reduces Hair Fall | Strengthens Hair |Softens Hair</li>
                                    <li class="list-group-item"><i class="fa-solid fa-star"></i>4.7 | <i class="fa-solid fa-message"></i> 672 Reviews </li>
                                    <li class="list-group-item">₹243.00 ₹283.00</li>
                                </ul>
                                <div className='card-btn'>
                                    <button>Add to Card</button>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    );
}

export default NewArrivals;