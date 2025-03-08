import { Outlet } from "react-router";
import { Link } from "react-router";
const DashBoardLayout = () => {
    const isAdmin = true;
    return (
        <>
            {isAdmin ? (
                <div className="drawer drawer-mobile lg:drawer-open">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col items-center justify-center">
                        {/* Page content here */}
                        <Outlet />
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                            {/* Sidebar content here */}
                            <li>
                                <a href="/dashboard" className="flex justify-start mb-3">
                                <img src="/logo.png" alt="" className="h-6 lg:h-12 pr-1 mx-auto" />
                                    <div className="badge badge-primary">Admin</div>
                                </a>
                            </li>
                            <li><a>Dashboard</a></li>
                            <li><a>Manage Orders</a></li>
                            <li><a href="/dashboard/addProduct">AddProduct</a></li>
                            <li><a href="manage-items">Manage Product</a></li>
                            <li><a>All Users</a></li>
                            <div className="inline-flex items-center justify-center w-full">
                                <h1 className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                                <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 left-1/2 dark:text-white dark:bg-gray-900">Hot Link</span>
                            </div>
                            <li><a>Home</a></li>
                            <li><a>Product</a></li>
                            <li><a>Order Tracking</a></li>
                            <li><a>Customer Support</a></li>
                        </ul>
                    </div>
                </div>
            ) : (
                <div>You are not an Admin</div>
            )}
        </>
    );
}

export default DashBoardLayout;