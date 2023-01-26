import axios from 'axios';
import { useEffect, useState } from 'react';
import banner from '../../Image/Banner-image.png';
import './Banner.css';
import md5 from 'md5';

const Banner = () => {

    const [image, setImage] = useState([])

    useEffect(() => {
        getBannerData();
    }, [])

    const getBannerData = async () => {
        const authToken = (input) => {
            return md5("LK@$$$@2022" + input)
        }
        let input = "WEB"
        const d = {
            "auth_token": authToken(input),
            "banner_type": "WEB"
        }
        try {
            const { data } = await axios.post(`https://staging.technotackle.com/LKN/admin/api/v1/banners`, d)
            setImage(data.banner_details)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="banner-section">
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    {image.map((img, index) => {
                        return (
                            <div class={index == 0 ? "carousel-item active" : "carousel-item"} >
                                <img src={img.image_name} class="d-block w-100" alt="..." />
                            </div>
                        )
                    })}
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Banner;