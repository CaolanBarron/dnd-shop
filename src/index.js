import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";

import ErrorPage from './error-page';
import ShopView from './components/ShopView';
import ShopCreator from './components//shop-management/ShopCreator';
import ShopList from './components/shop-management/ShopList';
import {getShop, getUser} from './database';
import LoginPage from './components/LoginPage';

// Main Component. The users basic info will be kept in state here and sent out 
// To components that require it.
class App extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            profile: null,
            router: null,
        };
        this.createRouter = this.createRouter.bind(this);
        this.setLogin = this.setLogin.bind(this);
    }
    
    setLogin(profileObj) {
        this.setState({profile: profileObj});
        console.log(this.state.profile)
    }
    createRouter(){
        this.setState({
            router: createBrowserRouter([
            {
                path: "/",
                element: <LoginPage setLogin={this.setLogin}/>,
                errorElement: <ErrorPage />,
            },
            {
                path: "/shoplist/",
                element: <ShopList />,
                errorElement: <ErrorPage />,
            },
        ])})  
    }

    componentDidMount() {
        this.createRouter();
    }

    render(){
        if (this.state)
            return this.state.router ? (
                <RouterProvider router={this.state.router} />
            ) : (
                <p>Loading</p>
            )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
