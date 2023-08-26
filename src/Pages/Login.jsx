const Login = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className=" bg-white rounded-2xl shadow-xl p-4 gap-4 flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold">Login</h1>
        <div className="p-2 rounded-lg w-full">
          <label className="m-2" htmlFor="user">
            Username / NIK
          </label>
          <input
            type="text"
            id="user"
            placeholder="Username / NIK"
            className="input input-bordered w-full "
          />
        </div>
        <div className="p-2 rounded-lg w-full">
          <label className="m-2" htmlFor="password">
            Password
          </label>
          <input
            type="text"
            id="password"
            placeholder="Password"
            className="input input-bordered w-full "
          />
        </div>
        <button className="flex px-4 py-2 rounded-xl bg-slate-800 text-white items-center justify-between border hover:shadow-lg hover:bg-white group ">
          <span className="text-base mr-2 group-hover:text-slate-800">
            LOGIN
          </span>
          <i class="bx bxs-log-in text-xl group-hover:text-slate-800"></i>
        </button>
      </div>
    </div>
  );
};

export default Login;
