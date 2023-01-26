import BestSeller from "../BestSeller/BestSeller";
import BabyCare from "./BabyCare/BabyCare";
import Banner from "./Banner/Banner";
import EysLipsCare from "./Eys&LipsCare/EysLipsCare";
import FaceCare from "./FaceCare/FaceCare";
import Faq from "./Faq/Faq";
import Footer from "./Footer/Footer";
import HairCare from "./HairCare/HairCare";
import HealthCare from "./HealthCare/HealthCare";
import Navbar from "./Navbar/Navbar";
import NewArrivals from "./NewArrivals/NewArrivals";
import OurBrands from "./OurBrand/OurBrands";
import ShopConcern from "./ShopConcern/ShopConcern";
import ShopLocation from "./ShopLocation/ShopLocation";

const Home = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <OurBrands />
            <BestSeller />
            <ShopConcern />
            <NewArrivals />
            <FaceCare />
            <HairCare />
            <BabyCare />
            <HealthCare />
            <EysLipsCare />
            <Faq />
            <ShopLocation />
            <Footer />
        </>
    );
}

export default Home;