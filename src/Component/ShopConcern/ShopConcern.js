import './ShopConcern.css';
import shop from '../../Image/shop.png';
import { useEffect, useState } from 'react';
import md5 from 'md5';
import axios from 'axios';

const ShopConcern = () => {
    const [image, setImage] = useState([])

    useEffect(() => {
        getShopConcern();
    }, [])


    const getShopConcern = async () => {
        const authToken = (input) => {
            return md5("LK@$$$@2022" + input)
        }
        let input = "CONCERN"
        const d = {
            "auth_token": authToken(input),
            "user_id": "1"
        }
        try {
            const { data } = await axios.post(`https://staging.technotackle.com/LKN/admin/api/v1/shop_by_concern`, d)
            console.log(data)
            setImage(data.shop_by_concern)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="shop-head container mt-5">
            <div className="shop-body mb-3">
                <h4>Shop By Concern</h4>
                <p>We provide Problem faced solution</p>
            </div>
            <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-secondary">Hair</button>
                <button type="button" class="btn btn-secondary">Face</button>
                <button type="button" class="btn btn-secondary">Body</button>
            </div>
            <div className='shop-img mt-5'>
                {image.map((item) => {
                    return (
                        <div className='m-4'>
                            <img src={item.concerns[0].concern_image_url} alt="img" />
                            <p>{item.concerns[0].concern_name}</p>
                        </div>
                    )
                })}

            </div>
        </div>
    );
}

export default ShopConcern;