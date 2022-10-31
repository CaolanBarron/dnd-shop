import React from "react";
import { Navigate, Route } from 'react-router-dom';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';



// This component will be displayed when the user goes to the base URL
// And is not signed in. If they are signed in they should be sent to the ShopList screen
class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            profile: null,
        }
        this.gapiLoad = this.gapiLoad.bind(this);
    }
    

    gapiLoad() {
        const initClient = () => {
            gapi.client.init({
                clientId: process.env.REACT_APP_CLIENT_ID,
                scope: ''
            });
        };
        gapi.load('client:auth2', initClient);
    }
    componentDidMount() {
        this.gapiLoad();
    }
    componentDidUpdate() {
        this.gapiLoad();
    }

    render(){
        const onSuccess = (res) => {
            this.props.setLogin(res.profileObj);
            this.setState({profile: res.profileObj})
        };
        const onFailure = (err) => {
            console.log('failed', err);
        };

        if (this.state.profile) {
            return(<Navigate to='/shoplist/' />)
        }

        return(
            <>
                <h1>Welcome to DND Shop</h1>
                <h2>Sign in to view and create shops</h2>
                <br />
                <br />
                <GoogleLogin
                    clientId={process.env.REACT_APP_CLIENT_ID}
                    buttonText="Sign in with Google"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                />
            </>
        )
    }
}

export default LoginPage;
