import Keycloak from 'keycloak-js'
const keycloakConfig = {
   url: 'https://keycloak-experis.herokuapp.com/auth/', 
   realm: 'testrelam', 
   clientId: 'my-app'
}
const keycloak = new Keycloak(keycloakConfig);
export default keycloak