import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/Main";
import DashBoardLayout from "../layouts/DashbordLayout";
import Dashboard from "../Dashboard/index"
import Home from "../pages/Home/Index";
import Shop from "../pages/Shop/Index";
import Cart from "../pages/Cart/Index";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import UpdateProfile from "../components/UpdateProfile";
import UserProfile from "../components/UserProfile";
import ProtectPage from "../pages/ProtectPage/index";
import AddProduct from "../pages/AddProduct/index";
import ManageItems from "../pages/ManageItems/index";

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
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/cart",
        element: (
          <ProtectPage>
            <Cart />
          </ProtectPage>
        ),
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/singin",
        element: <SignIn />,
      },
      {
        path: "/updateProfile",
        element: (
          <ProtectPage>
            <UpdateProfile />
          </ProtectPage>
        ),
      },
      {
        path: "/userprofile",
        element: (
          <ProtectPage>
            <UserProfile />
          </ProtectPage>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <ProtectPage>
        <DashBoardLayout />
      </ProtectPage>
    ),
    children: [
      {
        path: "",
        element: <Dashboard />
      },
      {
        path: "addProduct",
        element: <AddProduct />
      },
      {
        path: "manage-items",
        element: <ManageItems />
      }
    ]
  }
]);
export default router;
