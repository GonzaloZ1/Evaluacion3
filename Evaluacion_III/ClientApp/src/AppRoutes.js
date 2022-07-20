import Portada from "./components/Portada";
import Mensaje from "./components/Mensaje";

const AppRoutes = [
  {
    index: true,
    element: <Portada />
  },
  {
    path: '/enviar-mensaje',
    element: <Mensaje />
  }
];

export default AppRoutes;
