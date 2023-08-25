import { useNavigate } from "react-router-dom";

const First = () => {
  const navigate = useNavigate();

  return (
    <>
      <h3 className="">HOMEPAGE Route</h3>
      <button onClick={() => navigate("/about")}>click</button>
    </>
  );
};

export default First;
