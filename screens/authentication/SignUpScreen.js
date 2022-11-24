import { useContext, useState } from 'react';
import { Alert } from 'react-native';

import AuthContent from '../../components/Auth/AuthContent';
import LoadingOverlay from '../../components/UI/LoadingOverlay';
import { AuthContext } from '../../store/auth-context';
import { createUser } from '../../util/auth';

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  async function signupHandler({ email, firstName, lastName, gender, birthday, country, password }) {
    setIsAuthenticating(true);
    try {
      const token = await createUser(email, firstName, lastName, gender, birthday, country, password);
      authCtx.authenticate(token);
    } catch (error) {
      console.log(error.response.data)
      setIsAuthenticating(false);
      Alert.alert(
        'Authentication failed',
        'Could not create user, please check your input and try again later.'
      );
      setIsAuthenticating(false);
    }
    setIsAuthenticating(false);

  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />;
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
