import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./ui/Home"
import Menu, { loader as MenuLoader } from "./features/menu/Menu"
import Cart from "./features/cart/Cart"
import CreateOrder, {
  action as CreateOrderActoin,
} from "./features/order/CreateOrder"
import Order, { loader as OrderLoader } from "./features/order/Order"
import AppLayout from "./ui/AppLayout"
import Error from "./ui/Error"

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: MenuLoader,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: CreateOrderActoin,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: OrderLoader,
        errorElement: <Error />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
