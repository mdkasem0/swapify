import { createBrowserRouter } from "react-router";
import Home from "../Page/Home";
import MainLayout from "../Layout/MainLayout";
import About from "../Page/About";
import Login from "../Component/Authontication/Login";
import SignUp from "../Component/Authontication/SignUp";
import ForgetPassword from "../Component/ShareComponent/ForgetPassword";
import Profile from "../Page/Profile";
import ProtectedRouts from "./ProtectedRouts";
import AllSkills from "../Page/AllSkills";
import SkillDetails from "../Page/SkillDetails";
import ErrorPage from "../Page/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement:<ErrorPage/>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element:
        <ProtectedRouts>
          <About/>
        </ProtectedRouts>
      },
      {
        path: "/allSkills",
        element:
        <ProtectedRouts>
          <AllSkills/>
        </ProtectedRouts>
        
      },
      {
        path: "/skills-details/:id",
        element:
        <ProtectedRouts>
          <SkillDetails/>
        </ProtectedRouts>
        
      },
      {
        path: "/profile",
        element:<Profile/>

      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/signup",
        element:<SignUp/>
      },
      {
        path:"/forgot-password",
        element:<ForgetPassword/>
      }
    ],
  },
]);

export default router;
