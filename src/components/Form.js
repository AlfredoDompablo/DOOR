import React from "react";
//import { useState, useEffect } from "react";
import { Formik } from "formik";

import { BiUser } from "react-icons/bi";
//import axios from "axios";

import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";
import {createUserRequest} from "../api/user.api"

export default function Form() {
  // useEffect(() => {
  //   axios
  //     .get("https://door-ipn.ddns.net:3001/public-ip")
  //     .then((response) => {
  //       const publicIp = response.data.ip;
  //       console.log(publicIp); // Aquí puedes usar la dirección IP pública en tu aplicación React
  //     })
  //     .catch((error) => {
  //       console.error("Error al obtener la dirección IP pública:", error);
  //     });
  // }, []);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const addUser = () => {
  //   // axios.post("http://localhost:3001/create",{
  //   axios
  //     .post("https://door-ipn.ddns.net:3001/create", {
  //       email: email,
  //       password: password,
  //     })
  //     .then(() => {
  //       alert("Binvenido");
  //     });
  // };

  return (
    <React.Fragment>
      {/* <Button onClick={handleOpen} className="rounded-full">Sign In</Button> */}
      <Button
        onClick={handleOpen}
        className="flex items-center rounded-full px-3 py-2 gap-2 bg-[#ff5a60] text-white font-bold shadow-lg  hover:bg-[#f9787c] duration-100 ease-out"
      >
        Sign In <BiUser className="text-[22px]" />
      </Button>

      <Dialog
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none flex sm:flex-none items-center justify-center"
      >
        <div>
          <Card className="">
            <CardHeader
              variant="gradient"
              className="mb-4 grid h-28 place-items-center bg-primario"
            >
              <Typography variant="h3" color="white">
                Sign In
              </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
              {/* <Formik 
              initialValues={{ email: '', password: '' }}
                onSubmit={(values, { setSubmitting })=>{
                  console.log(values)
                }}
              >
                  {(handleChange, handleSubmit, isSubmitting,)=>(

                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                  <Input
                    color="black"
                    type="email"
                    name="email"
                    label="Email"
                    size="md"
                    //className=""
                    onChange={handleChange}
                    value={values.email}
                    />
                  <Input
                    color="black"
                    type="password"
                    name ="password"
                    label="Password"
                    size="lg"
                    onChange={handleChange}
                    value={values.password}
                     //onChange={(event) => {
                    //   setPassword(event.target.value);
                    // }}
                  />
              </form>
                )}
            </Formik> */}

              <Formik
                initialValues={{ email: "", password: "" }}
                validate={(values) => {
                  const errors = {};
                  if (!values.email) {
                    errors.email = "Required";
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                      values.email
                    )
                  ) {
                    errors.email = "Invalid email address";
                  }
                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(async () => {
                    //alert(JSON.stringify(values, null, 2));
                    try {
                      const response = await createUserRequest(values);
                      console.log(response);
                    } catch (error) {}
                    setSubmitting(false);
                  }, 400);
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
                }) => (
                  <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <Input
                      type="email"
                      name="email"
                      color="black"
                      label="Email"
                      size="lg"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    {errors.email && touched.email && errors.email}
                    <Input
                      color="black"
                      type="password"
                      name="password"
                      label="Password"
                      size="lg"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                    {errors.password && touched.password && errors.password}
                    {/* <button type="submit" disabled={isSubmitting}>
                      Submit
                    </button> */}
                    <Button
                      // onClick={addUser}
                      className="bg-[#ff5a60] text-white font-bold shadow-lg  hover:bg-[#f9787c] duration-100 ease-out"
                      type="submit"
                      disabled={isSubmitting}
                      fullWidth
                    >
                      Sign In
                    </Button>
                  </form>
                )}
              </Formik>

              <div className="-ml-2.5">
                <Checkbox color="deep-orange" label="Remember Me" />
              </div>
            </CardBody>
            <CardFooter className="pt-0">
              <Typography variant="small" className="mt-6 flex justify-center">
                Don&apos;t have an account?
                <Typography
                  as="a"
                  href="/signup"
                  variant="small"
                  color="blue"
                  className="ml-1 font-bold"
                  onClick={handleOpen}
                >
                  Sign up
                </Typography>
              </Typography>
            </CardFooter>
          </Card>
        </div>
      </Dialog>
    </React.Fragment>
  );
}
