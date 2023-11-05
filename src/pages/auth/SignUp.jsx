import React, { useState } from "react";
import Button from "../../components/button/Button";
import CustomInput from "../../components/form/CustomInput";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";

function SignUp() {
  const navigate = useNavigate();
  const [signupBtnLoad, setSignupBtnLoad] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(password !== confirmPassword) {
      return setSignupBtnLoad(false);
    }
    setSignupBtnLoad(true);
    try {
      const user = await createUserWithEmailAndPassword(auth, `${email}@gmail.com`, password);
      console.log(user)
    } catch (error) {
      console.log(error.message)
    }
    setTimeout(() => {
      setSignupBtnLoad(false);
      navigate("/home");
    }, 2000);
  };

  return (
    <div className="md:w-[350px] animate-fade-out p-6 rounded-xl drop-shadow-lg bg-grey1">
      <h3 className="text-4xl font-bold m-2">Sign Up</h3>
      <p className="m-2 mb-4 text-sm">
        Already have an account? &nbsp;
        <span
          onClick={() => navigate("/sign-in")}
          className="text-primaryblue font-medium cursor-pointer"
        >
          Sign In
        </span>
      </p>

      <form onSubmit={handleSubmit}>
        <CustomInput
          id="email"
          label="Phone No"
          type="text"
          required
          minLength="10"
          maxLength="10"
          defaultValue={email}
          updateValue={setEmail}
        /> 
        <CustomInput
          id="password"
          label="Password"
          type="password"
          required
          minLength="8"
          defaultValue={password}
          updateValue={setPassword}
        />
        <CustomInput
          id="confirmPassword"
          label="Confirm Password"
          type="password"
          required
          minLength="8"
          defaultValue={confirmPassword}
          updateValue={setConfirmPassword}
        />

        <br />
        <Button
          title="Sign Up"
          classes="bg-greenHome1 text-white px-4 py-2"
          align="center"
          loading={signupBtnLoad}
        />
      </form>
    </div>
  );
}

export default SignUp;
