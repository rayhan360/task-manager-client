import { Outlet } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../Footer/Footer";


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster></Toaster>
        </div>
    );
};

export default MainLayout;