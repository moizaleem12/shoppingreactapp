import * as Yup from "yup";

export const signupscheme = Yup.object({
  name: Yup.string().min(2).max(10).required("Please enter your name"),
  lname: Yup.string().min(2).max(10).required("Please enter last name"),
  email: Yup.string().email().required("Please enter emaiil"),
  password: Yup.string().min(3).max(6).required("Please enter your pass"),
});


export const loginscheme=Yup.object({
  mailed: Yup.string().email().required("Please enter emaiil"),
  passcord: Yup.string().min(3).max(6).required("Please enter your pass"),
})