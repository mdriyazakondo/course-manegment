import Banner from "../components/Home/Banner/Banner";
import LatestCourse from "../components/Home/LatestCourse/LatestCourse";
import Testimonial from "../components/Home/Tastimonial/Tastimonial";

const Home = async () => {
  return (
    <div className="min-h-screen mt-16 md:mt-18">
      <Banner />
      <LatestCourse />
      <Testimonial />
    </div>
  );
};

export default Home;
