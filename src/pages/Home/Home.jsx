import Banner from "../../components/Home/Banner";
import Footer from "../../components/Home/Footer";
import Navbar from "../../components/Home/Navbar";
import PopularSection from "../../components/Home/PopularSection";
import Recommended from "../../components/Home/Recommended";


const Home = () => {
    return (
        <div className="py-7">
            <Navbar/>
            <Banner/>
            <PopularSection/>
            <Recommended/>
            <Footer />
        </div>
    );
};

export default Home;