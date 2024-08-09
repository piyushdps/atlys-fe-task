/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useEffect, useRef, useState } from "react";
import EyeSvg from "../assets/eye.svg";

export const enum LoginMode {
  "LOGIN" = "LOGIN",
  "REGISTER" = "REGISTER",
}

type LoginAndRegisterProps = {
  /** Choose between register or login when rendered */
  mode?: LoginMode;
  /** If true, the component will manage the URL hash */
  manageUrlHash?: boolean;
};

const LoginAndRegister = ({
  mode = LoginMode.LOGIN,
  manageUrlHash = true,
}: LoginAndRegisterProps) => {
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const handleShowPassword = () => {
    if (passwordInputRef.current) {
      passwordInputRef.current.type === "password"
        ? (passwordInputRef.current.type = "text")
        : (passwordInputRef.current.type = "password");
    }
  };

  const [workingMode, setWorkingMode] = useState<LoginMode>(mode);
  useEffect(() => {
    if (!manageUrlHash) return;
    if (workingMode === LoginMode.LOGIN) {
      window.history.replaceState(
        "",
        document.title,
        window.location.pathname + "#login"
      );
    } else if (workingMode === LoginMode.REGISTER) {
      window.history.replaceState(
        "",
        document.title,
        window.location.pathname + "#register"
      );
    }
  }, [workingMode]);

  if (workingMode === LoginMode.LOGIN)
    return (
      <div className="w-full max-w-md p-8 bg-[#27292d] border border-[#969696] rounded-lg shadow-lg ">
        <h2 className="text-center text-gray-400 text-sm font-medium">
          WELCOME BACK
        </h2>
        <h1 className="mt-2 text-lg font-semibold text-center text-white">
          Log into your account
        </h1>

        <form className="mt-6 space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300"
            >
              Email or Username
            </label>
            <input
              type="text"
              id="email"
              className="w-full mt-1 p-2 bg-transparent border border-[#35373B] text-white rounded-md "
              placeholder="Enter your email or username"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="flex justify-between items-center text-sm font-medium text-gray-300"
            >
              Password
              <a href="#" className="text-sm text-white ">
                Forgot password?
              </a>
            </label>
            <div className="relative mt-1">
              <input
                ref={passwordInputRef}
                type="password"
                id="password"
                className="w-full p-2 bg-transparent border border-[#35373B] text-white rounded-md"
                placeholder="Enter your password"
              />
              <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                <img
                  className="cursor-pointer"
                  src={EyeSvg}
                  onClick={handleShowPassword}
                />
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-4 text-center text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            Login now
          </button>
        </form>

        <p className="mt-3 text-sm text-gray-400">
          Not registered yet?{" "}
          <span
            onClick={() => setWorkingMode(LoginMode.REGISTER)}
            className="text-white cursor-pointer"
          >
            Register →
          </span>
        </p>
      </div>
    );

  return (
    <div className="w-full max-w-md p-8 bg-[#27292d] border border-[#969696] rounded-lg shadow-lg ">
      <h2 className="text-center text-gray-400 text-sm font-medium">SIGN UP</h2>
      <h1 className="mt-2 text-lg font-semibold text-center text-white">
        Create an account to continue
      </h1>

      <form className="mt-6 space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            className="w-full mt-1 p-2 bg-transparent border border-[#35373B] text-white rounded-md "
            placeholder="Enter your email "
          />
        </div>
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-300"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            className="w-full mt-1 p-2 bg-transparent border border-[#35373B] text-white rounded-md "
            placeholder="Choose a preferred username"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="flex justify-between items-center text-sm font-medium text-gray-300"
          >
            Password
          </label>
          <div className="relative mt-1">
            <input
              ref={passwordInputRef}
              type="password"
              id="password"
              className="w-full p-2 bg-transparent border border-[#35373B] text-white rounded-md"
              placeholder="Choose a strong password"
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-3">
              <img
                className="cursor-pointer"
                src={EyeSvg}
                onClick={handleShowPassword}
              />
            </span>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-2 mt-4 text-center text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
        >
          Continue
        </button>
      </form>

      <p className="mt-3 text-sm text-gray-400">
        Already have a account?{" "}
        <span
          onClick={() => setWorkingMode(LoginMode.LOGIN)}
          className="text-white cursor-pointer  "
        >
          Login →
        </span>
      </p>
    </div>
  );
};

export default LoginAndRegister;
