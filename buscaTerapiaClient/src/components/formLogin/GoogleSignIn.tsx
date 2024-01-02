import { GoogleLogin } from "@react-oauth/google";

const GoogleSignIn = () => {
  return (
    <GoogleLogin>
      onSuccess=
      {(credentialResponse) => {
        console.log(credentialResponse);
      }}
      onError=
      {() => {
        console.log("Login Failed");
      }}
    </GoogleLogin>
  );
};

export default GoogleSignIn;
