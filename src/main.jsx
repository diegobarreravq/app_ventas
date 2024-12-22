import ReactDOM from "react-dom/client";
import ProviderContex from "./components/context/ProviderContex.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Vender from "./routes/Vender.jsx";
import Registro from "./routes/Registro.jsx";
import Productos from "./routes/Productos.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Vender />,
  },
  {
    path: "/registro",
    element: <Registro />,
  },
  {
    path: "/productos",
    element: <Productos />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProviderContex>
    <RouterProvider router={router} />
  </ProviderContex>
);
