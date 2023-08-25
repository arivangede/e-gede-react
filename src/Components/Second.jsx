import { useNavigate } from "react-router-dom";

const Second = () => {
  const navigate = useNavigate();
  return (
    <>
      <h3>About Route</h3>
      <button onClick={() => navigate("/")}>click</button>
    </>
  );
};

export default Second;
