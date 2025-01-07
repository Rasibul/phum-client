import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AdminDashBoard from "../pages/admin/AdminDashBoard";
import CreateStudent from "../pages/admin/CreateStudent";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFacaulty from "../pages/admin/CreateFaculty";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <div>Home</div>,
      },
    ],
  },
  {
    path: "/admin",
    element: <App />,
    children: [
      {
        index: true,
        element: <AdminDashBoard />,
      },
      {
        path: "dashboard",
        element: <AdminDashBoard />,
      },
      {
        path: "create-student",
        element: <CreateStudent />,
      },
      {
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        path: "create-facaulty",
        element: <CreateFacaulty />,
      },
    ],
  },
]);

export default router;
