import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Auth0Provider} from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Auth0Provider 
        domain='dev-3ypxxcyl.us.auth0.com'
        clientId='29272672610-vte2m3kcjuka4v7c1i33olqfvdmivfll.apps.googleusercontent.com'
        redirectUrl={window.location.origin}
    >
        
        <App />
        
    </Auth0Provider>
  
);
