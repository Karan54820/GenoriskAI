// import React from 'react';
// import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
// import { jwtDecode } from 'jwt-decode'; // Corrected import

// const LoginWithGoogle = () => {
//   const handleSuccess = (credentialResponse) => {
//     // Decode the JWT token to get user info
//     const decoded = jwtDecode(credentialResponse.credential); // Use jwtDecode here
//     console.log('Login Success:', decoded);

//     // Save user info to state or send it to your backend
//     const { name, email, picture } = decoded;
//     console.log('User Info:', { name, email, picture });

//     // You can now redirect the user or update your app's state
//   };

//   const handleError = () => {
//     console.log('Login Failed');
//   };

//   return (
//     <GoogleOAuthProvider clientId="473248465547-s9c4qv4kspvibt4uplg11mm2tgm2ulu2.apps.googleusercontent.com">
//       <GoogleLogin
//         onSuccess={handleSuccess}
//         onError={handleError}
//         useOneTap // Optional: Enables Google One Tap login
//       />
//     </GoogleOAuthProvider>
//   );
// };

// export default LoginWithGoogle;


import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom'; // For navigation

const LoginWithGoogle = () => {
  const navigate = useNavigate();

  const handleSuccess = (credentialResponse) => {
    // Decode the JWT token
    const decoded = jwtDecode(credentialResponse.credential);
    console.log('Login Success:', decoded);

    // Save the token to local storage
    localStorage.setItem('google_token', credentialResponse.credential);

    // Save user info to state or send it to your backend
    const { name, email, picture } = decoded;
    console.log('User Info:', { name, email, picture });

    // Redirect to the dashboard
    navigate('/dashboard');
  };

  const handleError = () => {
    console.log('Login Failed');
  };

  return (
    <GoogleOAuthProvider clientId="473248465547-s9c4qv4kspvibt4uplg11mm2tgm2ulu2.apps.googleusercontent.com">
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={handleError}
        render={(renderProps) => (
          <button
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#fff',
              color: '#757575',
              border: '1px solid #ddd',
              borderRadius: '4px',
              padding: '10px 20px',
              fontSize: '16px',
              cursor: 'pointer',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              width: '100%',
              maxWidth: '300px',
              margin: '0 auto',
            }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Google Logo"
              style={{ width: '20px', height: '20px', marginRight: '10px' }}
            />
            Sign Up with Google
          </button>
        )}
      />
    </GoogleOAuthProvider>
  );
};

export default LoginWithGoogle;