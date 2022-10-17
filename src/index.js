import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

import ShopView from './components/ShopView';
import ShopCreator from './components/ShopCreator';

function App() {
    return (
        <ShopCreator />
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(App());
