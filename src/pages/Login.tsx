import Auth from "../components/Auth";
import LogoSvg from "../assets/logo.svg";

const Login = () => {
  return (
    <div className="items-center flex justify-center min-h-screen ">
      <div className="w-full max-w-md mx-3 ">
        <img src={LogoSvg} alt="logo" className="mx-auto w-20 h-20 mb-12 " />
        <Auth manageUrlHash={false} />
      </div>
    </div>
  );
};

export default Login;
