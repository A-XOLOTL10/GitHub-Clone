import {FaGithub, FaGoogle} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import { handleLoginWithGithub } from '../lib/functions';
const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center pxx-6 py-8 mx-auto h-screen lg:py-0 ">
      <div className="w-full rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 bg-glass">
        <div className="p-6 spacey04 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold md:text-2xl text-center">
            Login with Github
          </h1>
          <button
            type="button"
            className="text-white bg-[#24292F]/50 font-medium rounded-lg flex gap-2 p-2 items-center w-full text-center justify-center"
            onClick={handleLoginWithGithub}
          >
            <FaGithub className="w-5 h-5" /> Log in with GitHub
          </button>

          {/* <button type="button" className="text-white bg-[#24292F]/50 font-medium rounded-lg flex gap-2 p-2 items-center w-full text-center justify-center">
          <FaGoogle className="w-5 h-5" />  Log in with Google 
        </button> */}

          <p className="text-sm text-center font-light text-gray-500">
            {"Don't"} have an account?{" "}
            <Link
              to="/signup"
              className=" font-medium text-primary-600 hover:underline text-blue-600"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;