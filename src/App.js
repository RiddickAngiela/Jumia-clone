import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Home from './pages/home/Home'
import ContactUs from './pages/contact-us/ContactUs'
import Header from './components/Header'
// import Footer from './components/Footer/Footer'
import AboutUs from './pages/about-us/AboutUs'
import Appliances from './pages/Appliances/Appliances'
import BabyProducts from './pages/Baby-Products/BabyProducts'
import Computing from './pages/Computing/Computing'
import Electronics from './pages/Electronics/Electronics'
import Fashion from './pages/Fashion/Fashion'
import Gaming from './pages/Gaming/Gaming'
import HealthBeauty from './pages/Health-&-Beauty/HealthBeauty'
import HomeOffice from './pages/Home-&-Office/HomeOffice'
import PhonesTablets from './pages/Phones-&-Tablets/PhonesTablets'
import SportingGoods from './pages/Sporting-Goods/SportingGoods'

const Layout = () => {
  return (
    <div>
      <Header />
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
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/appliances",
        element: <Appliances />,
      },
      {
        path: "/baby-products",
        element: <BabyProducts />,
      },
      {
        path: "/computing",
        element: <Computing />,
      },
      {
        path: "/electronics",
        element: <Electronics />,
      },
      {
        path: "/fashion",
        element: <Fashion />,
      },
      {
        path: "/gaming",
        element: <Gaming />,
      },
      {
        path: "/health-&-beauty",
        element: <HealthBeauty />,
      },
      {
        path: "/home-&-office",
        element: <HomeOffice />,
      },
      {
        path: "/phones-&-tablets",
        element: <PhonesTablets />,
      },
      {
        path: "/sporting-goods",
        element: <SportingGoods />,
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

export default App;
