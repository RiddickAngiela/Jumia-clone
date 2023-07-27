import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import Contact from './components/Contact';
// import Navbar from "./components/Navbar"

const Layout = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Outlet />
      {/* <Footer /> */}
    </div>
  )
}

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
        path: "/contact",
        element: <Contact />,
      },
    ]
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <Home />
//       <Contact />
//     </div>
//   );
// }

export default App;
