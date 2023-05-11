import React from "react";
import { useState } from "react";
import {BiUser } from "react-icons/bi";
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
 
export default function Form() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const mostrarDatos =()=>{
    alert(email + password);
  }
 
  return (
    <React.Fragment>
      {/* <Button onClick={handleOpen} className="rounded-full">Sign In</Button> */}
      <Button onClick={handleOpen} className="flex items-center rounded-full px-3 py-2 gap-2 bg-[#ff5a60] text-white font-bold shadow-lg  hover:bg-[#f9787c] duration-100 ease-out">Sign In <BiUser className="text-[22px]" /></Button>

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
            <Input color="black" type="email" label="Email" size="md" className="" 
            onChange={(event)=>{
              setEmail(event.target.value);
            }}/>
            <Input color="black" type="password" label="Password" size="lg"
            onChange={(event)=>{
              setPassword(event.target.value);
            }} />
            <div className="-ml-2.5">
              <Checkbox color="deep-orange" label="Remember Me" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button onClick={mostrarDatos} className="bg-[#ff5a60] text-white font-bold shadow-lg  hover:bg-[#f9787c] duration-100 ease-out"   fullWidth >
              Sign In
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Don&apos;t have an account?
              <Typography
                as="a"
                href="#signup"
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