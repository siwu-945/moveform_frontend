import React from 'react';
import MyForm from './form';
import { AppContext } from './components/AppContext';
import WalletConnect from './components/WalletConnect';

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