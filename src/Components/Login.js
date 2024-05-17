import "../App.css";
import Footer from "./Footer";
import Marquee from "./Marquees";
import PageTop from "./PageTop";
import Navbar from "./Navbar";
import { useFormik } from "formik";
import { signupscheme, loginscheme } from "../schemas";
import { useNavigate } from "react-router-dom";
const initialValues = {
  name: "",
  lname: "",
  email: "",
  password: "",
};
const loginvalue = {
  mailed: "",
  passcord: "",
};
export default function Login() {
  const navigate = useNavigate();
  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleBlur,
    handleChange: handleSignupChange,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: signupscheme,
    onSubmit: (values, action) => {
      const email = values.email;
      const pass = values.password;
      const setdata = JSON.stringify(localStorage.setItem("email", email));
      const setpass = JSON.stringify(localStorage.setItem("pass", pass));
      // console.log(localStorage.getItem("email", setdata));
      // console.log(localStorage.getItem("pass", setpass));
      action.resetForm();
      alert("Singup successfull Now login");
    },
  });
  // login
  const {
    values: loginValue,
    errors: loginerrors,
    handleSubmit: handleLoginSubmit,
    handleChange: handleLoginChange,
    touched: logintouched,
  } = useFormik({
    initialValues: loginvalue,
    validationSchema: loginscheme,
    onSubmit: (values, action) => {
      const storedemail = localStorage.getItem("email");
      const storedpass = localStorage.getItem("pass");
      const usermail = values.mailed;

      const userpass = values.passcord;
      if (storedemail == usermail && storedpass == userpass) {
        navigate("/");
      } else {
        alert("user is not resgiter");
        // console.log(storedemail, storedpass, usermail, userpass);
      }
      action.resetForm();
    },
  });

  return (
    <>
      <Navbar />
      <PageTop />
      <div className="container-fluid d-flex justify-content-center align-items-center my-3" id="formcontainer">
        <div className="col-6">
          <form id="formsdata">
            <h5> Sing in </h5>
            <p>
              Please enter your email and password below to access your account{" "}
            </p>{" "}
            <label for="enter email"> Enter Email </label>{" "}
            <input
              className="email m-3 p-3"
              type="email"
              name="mailed"
              id="mailed"
              value={loginValue.mailed}
              onChange={handleLoginChange}
              autoComplete="off"
            />
            <label for="enter email"> Enter password </label>{" "}
            <input
              className="password m-3 p-3"
              type="password"
              name="passcord"
              id="passcord"
              value={loginValue.passcord}
              onChange={handleLoginChange}
              autoComplete="off"
            />{" "}
            {loginerrors.passcord && logintouched.passcord ? (
              <p> {loginerrors.passcord} </p>
            ) : null}{" "}
            <button className="btn btn-dark text-light" type="submit">
              Sigin{" "}
            </button>{" "}
          </form>{" "}
        </div>{" "}
        {/* regiter */}{" "}
        <div className="col-6">
          <h6> Register </h6>{" "}
          <p> Please register below to create an account </p>{" "}
          <form onSubmit={handleSubmit} id="registercontainer">
            <input
              className="name m-2 p-3"
              type="name"
              id="name"
              placeholder="First Name"
              name="name"
              value={values.name}
              onChange={handleSignupChange}
              onBlur={handleBlur}
              autoComplete="off"
            />{" "}
            {errors.name && touched.name ? <p> {errors.name} </p> : null}{" "}
            <input
              className="lastname m-2 p-3"
              type="name"
              id="lname"
              name="lname"
              placeholder="Last Name"
              value={values.lname}
              onChange={handleSignupChange}
              onBlur={handleBlur}
              autoComplete="off"
            />{" "}
            {errors.lname && touched.lname ? <p> {errors.lname} </p> : null}{" "}
            <input
              className="email m-2 p-3"
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email"
              value={values.email}
              onChange={handleSignupChange}
              onBlur={handleBlur}
              autoComplete="off"
            />{" "}
            {errors.email && touched.email ? <p> {errors.email} </p> : null}{" "}
            <input
              className="password m-2 p-3"
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
              value={values.password}
              onChange={handleSignupChange}
              onBlur={handleBlur}
              autoComplete="off"
            />{" "}
            {errors.password && touched.password ? (
              <p> {errors.password} </p>
            ) : null}{" "}
            <button type="submit" className="btn btn-dark text-light">
              Create an account{" "}
            </button>{" "}
          </form>{" "}
        </div>{" "}
      </div>{" "}
      <Marquee />
      <Footer />
    </>
  );
}
