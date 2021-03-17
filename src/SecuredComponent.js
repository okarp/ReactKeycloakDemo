import React, { useState, useEffect } from 'react';
import Keycloak from 'keycloak-js';



function SecuredComponent() {
    
  const [authenticated, setAuthenticated] = useState(false);
  const [authentication, setAuthentication] = useState(null);

  useEffect(() =>{
    const keycloak = Keycloak('/keycloak.json');
    keycloak.init({onLoad: 'login-required'}).then(authenticated => {  
      setAuthentication(keycloak);
      setAuthenticated(authenticated);
      console.log(keycloak.token)
    })
    
  }, []);

  function logOut(){
    console.log(authentication)
    authentication.logout();
  }

  return (       
    <div> 
          {authenticated &&  
           <div>
             <div><p>Olet kirjautunut sisään</p></div>   
             <button type="button" onClick={logOut}>
              Kirjaudu ulos
            </button>                      
           </div> 
          }
           {!authenticated &&  
           <div>
             <div><p>Kirjaudutaan...</p></div>                         
           </div> 
          }
    </div> 
  );
}

export default SecuredComponent;

