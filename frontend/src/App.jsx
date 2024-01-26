import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Layout from "./layouts/Layout.jsx";
import CreateNote from "./pages/CreateNote.jsx";
import UpdateNote from "./pages/UpdateNote.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/notes/create",
        element: <CreateNote />,
      },
      {
        path: "/notes/update/:id",
        element: <UpdateNote />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="min-vh-100">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
