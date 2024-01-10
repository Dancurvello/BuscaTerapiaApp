import { GoogleLogin } from "@react-oauth/google";

const GoogleSignIn = ({ isRegisterForm }: { isRegisterForm: boolean }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSuccess = (credentialResponse: any) => {
    console.log(credentialResponse);
  };

  const handleError = () => {
    console.log("Login Failed");
  };

  return (
    <div className={`google-sign-in ${isRegisterForm ? "flipped-text" : ""}`}>
      <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
    </div>
  );
};

export default GoogleSignIn;
