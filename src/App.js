import { BrowserRouter,
        Switch,
        Route,
        } from 'react-router-dom';
import './App.css';
import AddService from './Component/AddService/AddService';
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import ManageOrders from './Component/ManageOrders/ManageOrders';
import Menubar from './Component/Menubar/Menubar';
import NotFound from './Component/NotFound/NotFound';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Tours from './Component/Tours/Tours';
import YourOrder from './Component/YourOrder/YourOrder';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div className="">
        <AuthProvider>
        <BrowserRouter>
        <Menubar></Menubar>
          <Switch>
            <Route exact path="/"> 
              <Home></Home>
            </Route>
            <Route path="/home">
                <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/tours">
              <Tours></Tours>
            </PrivateRoute>
            <PrivateRoute path="/myOrder">
              <YourOrder></YourOrder>
            </PrivateRoute>
            <PrivateRoute path="/manageOrders">
              <ManageOrders></ManageOrders>
            </PrivateRoute>
            <Route path="/addService">
                <AddService></AddService>
              </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
        </AuthProvider>
    </div>
  );
}

export default App;
