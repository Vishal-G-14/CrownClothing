// import {
//   signInWithGooglePopup,
//   createUserDocumentFromAuth,
// } from "../../Utils/firebase/FirebaseUtils";
import React from "react";

import SignUpForm from "../../components/sign-up-form/SignUpFormComponent";
import SignInForm from "../../components/sign-in-form/SignInFormComponent";

import './AuthenticationStyles.scss'

const Authentication = () => {

  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
