import React from 'react';
import MyForm from './form';
import { AppContext } from './components/AppContext';
import WalletConnect from './components/WalletConnect';
import './style/app.css';

function App() {
    return (
        <div className="App">
            <AppContext>
                <WalletConnect />
                <MyForm />
            </AppContext>
        </div>
    );
}

export default App;