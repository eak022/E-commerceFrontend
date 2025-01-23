import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/Main";
import Home from "../pages/Home/Index";
import Shop from "../pages/Shop/Index";
import Cart from "../pages/Cart/Index";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import UpdateProfile from "../components/UpdateProfile";
import UserProfile from "../components/UserProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "singin",
        element: <SignIn />,
      },
      {
        path: "updateprofile",
        element: <UpdateProfile />,
      },
      {
        path: "userprofile",
        element: <UserProfile />,
      },
    ],
  },
]);
export default router;
