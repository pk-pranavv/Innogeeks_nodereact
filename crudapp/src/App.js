import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Components/Login/Login"
import { Routes, Route } from "react-router-dom";
import { useSelector} from "react-redux";
import AddUser from "./Components/User/AddUser";
import EditUser from "./Components/User/EditUser";
import ListUser from "./Components/User/ListUser";
import Header from "./Components/Header/Header";
function App() {
  const { isLogged } = useSelector((state) => state);
  const localData = localStorage.getItem("token");
  return (
    <div className="container">
      {localData ? <Header /> : ""}
      {/* <h2>This is CRUD app</h2> */}
      {/* {!isLogged ? <Login /> : ""} */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/list" element={<ListUser />} />
        <Route path="/create" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </div>
  );
}

export default App;

{/* <div className="container">
      <h2>This is crud App</h2>
      {/* {!isLogged ? <Login /> : ""} */}
    //   <Routes>
    //     <Route path="/" element={<Login />} />
    //     <Route path="/list" element={<ListUser />} />
    //     <Route path="/create" element={<AddUser />} />
    //     <Route path="/edit/:id" element={<EditUser />} />
    //   </Routes>
    
    // </div> */}