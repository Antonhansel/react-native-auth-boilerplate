import {Alert} from 'react-native';
import {storeSession} from '../../actions';
import {clusterName} from '../../../Hasura';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

const tryGoogleLogin = async (token) => {
  let googleInfo = null;
  try {
    googleInfo = fetch ('https://www.googleapis.com/userinfo/v2/me', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const hasuraAuthUrl = `https://auth.${clusterName}.hasura-app.io/v1/signup`;
    const options = {
      "method": "POST",
      "headers": {
        "Content-Type": "application/json"
      },
      "body": JSON.stringify({
        "provider": "google",
        "data": {
          "id_token": token
        }
      })
    };
    const response = await fetch(hasuraAuthUrl, options);
    const respObj = await response.json();
    if (response.status == 200) {
      respObj['success'] = true;
      respObj['google_profile_info'] = googleInfo;
    }
    return respObj;
  } catch (e) {
    console.log(e);
    return e;
  }
};

const handleGoogleAuth = async(androidClientId, iosClientId, loginCallback, startLoadingIndicator, stopLoadingIndicator) => {
  await GoogleSignin.hasPlayServices({ autoResolve: true });
  await GoogleSignin.configure({webClientId: androidClientId, iosClientId});
  try {
    const user = await GoogleSignin.signIn();
    const hasuraLoginResp = await tryGoogleLogin(user.idToken);
    if (hasuraLoginResp.success) {
      hasuraLoginResp.userDetails = {name: user.name, email: user.email}
      await storeSession({
        id: hasuraLoginResp.hasura_id,
        token: hasuraLoginResp.auth_token,
        googleProfileInfo: hasuraLoginResp.google_profile_info,
        type: "google"
      });
      loginCallback({
        id: hasuraLoginResp.hasura_id,
        token: hasuraLoginResp.auth_token,
        googleProfileInfo: hasuraLoginResp.google_profile_info,
        type: "google",
        config:{webClientId: androidClientId, iosClientId}
      });
      Alert.alert("Success", "Signup Successful");
    } else {
      Alert.alert("Error", hasuraLoginResp.message);
    }
  } catch (e) {
    console.log(e);
  }
}

export {
  handleGoogleAuth
};
