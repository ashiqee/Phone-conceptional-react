import { useLoaderData } from "react-router-dom";
import Phones from "../../pages/Phones/Phones";
import Banner from "../Header/Banner/Banner";

const Home = () => {
  const phones = useLoaderData();

  return (
    <div>
      <Banner />
      <Phones phones={phones} />
    </div>
  );
};

export default Home;
