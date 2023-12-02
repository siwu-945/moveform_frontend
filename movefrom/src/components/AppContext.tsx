import { PetraWallet } from "petra-plugin-wallet-adapter";
import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
import { AutoConnectProvider, useAutoConnect } from "./AutoConnectProvider";
import { FC, ReactNode } from "react";
import { AlertProvider, useAlert } from "./AlertProvider";
import React from "react";

const WalletContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const { autoConnect } = useAutoConnect();
    const { setErrorAlertMessage } = useAlert();

    const wallets = [
        new PetraWallet(),
    ];

    return (
        <AptosWalletAdapterProvider
            plugins={wallets}
            autoConnect={autoConnect}
            onError={(error) => {
                console.log("Custom error handling", error);
                setErrorAlertMessage(error);
            }}
        >
            {children}
        </AptosWalletAdapterProvider>
    );
};

export const AppContext: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <AutoConnectProvider>
            <AlertProvider>
                <WalletContextProvider>{children}</WalletContextProvider>
            </AlertProvider>
        </AutoConnectProvider>
    );
};
