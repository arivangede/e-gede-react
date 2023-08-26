import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="entrance">
        <div>
          <h1>Halaman Home</h1>
        </div>
        <div className="flex justify-center items-center w-full">
          <Link to={"/Fitur/1"} className="">
            <span>Fitur 1</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
