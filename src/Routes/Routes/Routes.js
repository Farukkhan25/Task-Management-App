import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Register/Register";
import AddTask from "../../Pages/Task/AddTask/AddTask";
import CompletedTasks from "../../Pages/Task/CompletedTasks/CompletedTasks";
import MyTask from "../../Pages/Task/MyTask/MyTask";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addTask",
        element: <AddTask />,
      },
      {
        path: "/myTask",
        element: <MyTask />,
      },
      {
        path: "/completedTasks",
        element: <CompletedTasks />,
      },
    ],
  },
]);
