import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../HomePage/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Dashboard from "../Pages/TaskManager/Dashboard/Dashboard";
import PersonalTask from "../Pages/TaskManager/PersonalTask/PersonalTask";
import PrivateRoute from "./PrivateRoute";
import AboutSection from "../Pages/AboutSection/AboutSection";
import BlogSection from "../Pages/NewsLatter/BlogSection";
import KnowledgeBase from "../Pages/KnowledgeBase/KnowledgeBase";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/registration",
                element: <Registration></Registration>
            },
            {
                path: "/aboutUs",
                element: <AboutSection></AboutSection>
            },
            {
                path: "/community",
                element: <BlogSection></BlogSection>
            },
            {
                path: "/knowledge",
                element: <KnowledgeBase></KnowledgeBase>
            }
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: "personal",
                element: <PersonalTask></PersonalTask>
            },
            
        ]
    }
])

export default Router;