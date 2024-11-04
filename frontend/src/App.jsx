import { Route, Routes } from "react-router-dom"; // inputs from packages 
import { Toaster } from "react-hot-toast";
/* pages imports */
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";//+
import ExplorePage from "./pages/ExplorePage";
import LikesPage from "./pages/LikesPage";

/* component imports */ 
import Sidebar from "./components/SideBar";
import {useAuthContext} from "./context/AuthContexts";


function App() {
  const {authUser} = useAuthContext();
  
  if(loading) return null
  return (
  <div className="flex text-white"> 
    <Sidebar />
    <div className="max-w-5xl my-5 text-white mx-auto transition-all duration-300 flex-1">
      <Routes>
        <Route path= '/' element= {<HomePage />} />
        <Route path= '/login' element= { !authUser ? <LoginPage /> : <Navigate to = {"/"} />} />
        <Route path= '/signup' element= {!authUser ? <SignUpPage /> : <Navigate to = {"/"} />} />
        <Route path= '/explore' element= {authUser ? <ExplorePage /> : <Navigate to = {"/login"} />} />
        <Route path= '/likes' element= {authUser ? <LikesPage /> : <Navigate to = {"/login"} />} />
      </Routes>
      <Toaster />
    </div>
  </div>
  );
}


export default App;
