import topAsset from "../Assets/img/login/assetTop.png";
import botAsset from "../Assets/img/login/assetBottom.png";

const Login = () => {
  return (
    <>
      <div className="absolute top-0 z-0">
        <img src={topAsset} alt="top" className="flow-bot" />
      </div>
      <div className="absolute bottom-0 z-0">
        <img src={botAsset} alt="bot" className="flow-top" />
      </div>
      <div className="flex justify-center items-center w-full h-full relative z-10">
        <div className="w-[90%] h-full flex justify-center items-center">
          <div className=" bg-white w-[90%] bg-opacity-20 backdrop-blur-sm border text-slate-600 rounded-2xl shadow-xl py-12 px-8 gap-4 flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold">Login</h1>
            <div className="p-2 rounded-lg w-full">
              <input
                type="text"
                id="user"
                placeholder="Username / NIK"
                className="input input-bordered bg-transparent w-full "
                required
              />
            </div>
            <div className="p-2 rounded-lg w-full">
              <input
                type="text"
                id="password"
                placeholder="Password"
                className="input input-bordered bg-transparent w-full "
              />
            </div>
            <button className="flex px-4 py-2 rounded-xl bg-slate-800 text-white items-center justify-between border hover:shadow-lg hover:bg-white group ">
              <span className="text-base mr-2 group-hover:text-slate-800">
                LOGIN
              </span>
              <i className="bx bxs-log-in text-xl group-hover:text-slate-800"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
