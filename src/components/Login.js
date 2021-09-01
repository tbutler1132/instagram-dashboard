import { FacebookProvider, LoginButton } from 'react-facebook';
import { useState } from 'react';

function Login(props) {

    const [data, setData] = useState(false)

    const handleResponse = (data) => {
        setData(data);
      }
     
    const handleError = (error) => {
        console.log({ error });
      }

      console.log(data)


    return (
        <FacebookProvider appId="1153580595131093">
        <LoginButton
          scope="email"
          onCompleted={handleResponse}
          onError={handleError}
        >
          <span>Login via Facebook</span>
        </LoginButton>
            {data ? <p>{data.profile.email}</p> : null}
      </FacebookProvider>
    );
}

export default Login;