import { FacebookProvider, LoginButton } from 'react-facebook';
import {useHistory} from 'react-router-dom'

function Login({setToken}) {

    const history = useHistory()

    console.log(history)

    const handleResponse = (data) => {
        setToken(data.tokenDetail?.accessToken)
        history.push('/dashboard')
      }
     
    const handleError = (error) => {
        console.log({ error });
      }


    return (
      <div className="login-container">
        <FacebookProvider appId="1153580595131093">
          <LoginButton
            scope="email, instagram_basic, pages_show_list"
            onCompleted={handleResponse}
            onError={handleError}
            className="login-button"
          >
            <span>Login via Facebook</span>
          </LoginButton>
            {/* {data ? <p>{data.profile.email}</p> : null}
            <Instagram token={data.tokenDetail?.accessToken}/> */}
        </FacebookProvider>
      </div>
    );
}

export default Login;