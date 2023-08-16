import React from 'react';
import { SignInForm } from './SignInForm';

const SignIn = async () => {
  return (
    <div>
      <h1 className="text-xl text-center py-5">SignIn</h1>
      <div className="flex justify-center">
        <SignInForm />
      </div>
    </div>
  );
};

export default SignIn;