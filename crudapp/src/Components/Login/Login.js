import { useDispatch, useSelector } from "react-redux";
import UserService from "../../Services/UserService";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { useEffect } from "react";
const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {email,password, isLogged}=useSelector((state)=>state);
    useEffect(() => {
        const localData = localStorage.getItem("token");
        if(localData) {
            navigate("/list");
        }
    }, []);

    const emailChangeHandler = (event) => {
        dispatch({ type: "email", value: event.target.value });
    };
    const passwordChangeandler = (e) => {
        dispatch({ type: "password", value: e.target.value });
    };
    const loginHandler = (event) => {
        event.preventDefault();

        UserService.loginUser({ email: email, password: password }).then((res) => {
            if(res.data != "") {
                localStorage.setItem("token", res.data.token);
                dispatch({ type: "logged", value: true});
                navigate("/list");
            } else {
                dispatch ({ type: "logged", value:false})
            }
        });
    };
    return (
        <div className="container mt-3">
            {isLogged===false?(
                <div className="alert alert-danger">
                    <strong>Error: </strong>Login credentials Failed
                </div>
            ):("")}
            <form onSubmit={loginHandler}>
                <div className="mb-3 mt-3">
                    <label htmlFor="email">Email</label>
                    <input onChange={emailChangeHandler}
                        type="email"
                        name="email"
                        id="email"
                        className="form-control"
                        placeholder="Enter Email"
                    />
                </div>
                <div className="mb-3 mt-3">
                    <label htmlFor="password">Password</label>
                    <input onChange={passwordChangeandler}
                        type="Password"
                        name="Password"
                        id="Password"
                        className="form-control"
                        placeholder="Enter Password"
                    />
                </div>
                <button type="submit" className="btn btn-warning mr-10">
                <span class="spinner-grow spinner-grow-sm"></span>
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;