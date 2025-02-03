import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { BeatLoader } from "react-spinners";
import Error from "./error";
import { useState } from "react";
import * as Yup from "yup";

const Login = () => {
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormdata((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const [error, setError] = useState({});

  const handleLogin = async(e) => {
    setError([])
    try {
        const schema = Yup.object().shape({
            email:Yup.string().email("Invalid email").required("email is required"),
            password:Yup.string().min(6,"password must be atleast six characters").required("Password is required"),
        });
        await schema.validate(formdata,{abortEarly:false});
        
    } catch (e) {
        const newErrors={}
        e?.inner?.forEach((err)=>{
            newErrors[err.path]=err.message;
        });
        setError(newErrors); 

        
    }

  };
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            to your account if you already have one
          </CardDescription>
          <Error message={"some error"} />
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Input
              name="email"
              type="email"
              placeholder="Enter Email"
              onChange={handleInputChange}
            />
            {error.email&&<Error message={"some error"} />}
          </div>
          <div className="space-y-1">
            <Input
              name="password"
              type="password"
              placeholder="Enter Password"
              onChange={handleInputChange}
            />
            {error.password&&<Error message={"some error"} />}
          </div>
        </CardContent>
        <CardFooter>
          
          <Button onClick={handleLogin}>{0 ? <BeatLoader size={10} color="#36d7b7" /> : "Login"}</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
