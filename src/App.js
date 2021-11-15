import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Home from './pages/Home/Home';
import BookingPage from './pages/BookingPage/BookingPage';
import Login from './pages/Login/Login/Login'
import Register from './pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import AddLatestApartment from './pages/Admin/AddLatestApartment/AddLatestApartment';
import LatestApartment from './pages/Admin/LatestApartment/LatestApartment';
import AdminHome from './pages/Admin/AdminHome/AdminHome';
import BookingList from './pages/Admin/BookingList/BookingList';
import Dashboard from './pages/Dashboard/Dashboard';
import AddApartment from './pages/Admin/AddApartment/AddApartment';



function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>

        <Switch>
          
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

        


          <PrivateRoute path="/booking/:id">
          <BookingPage></BookingPage>
          </PrivateRoute>

          <PrivateRoute path="/dashboard/">
          <Dashboard></Dashboard>
          </PrivateRoute>

          <Route path="/add_latest_apartment">
            <AddLatestApartment></AddLatestApartment>
          </Route>

          <Route path="/add_apartment">
            <AddApartment></AddApartment>
          </Route>

          <Route path="/latestApartmentList">
            <LatestApartment></LatestApartment>
          </Route>

          <Route path="/bookingList">
            <BookingList></BookingList>
          </Route>

          <Route path="/admin">
            <AdminHome></AdminHome>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/register">
            <Register></Register>
          </Route>

         

        </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
