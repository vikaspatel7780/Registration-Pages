import React from "react";
import { GoogleAuthProvider, GoogleLogin } from '@react-oauth/google';

const GoogleLoginComponent = () => {
  return (
    <GoogleAuthProvider clientId="YOUR_CLIENT_ID">
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </GoogleAuthProvider>
  );
}

export default GoogleLoginComponent;
