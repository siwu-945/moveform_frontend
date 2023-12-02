import {
    FaucetClient,
    Network,
    Provider,
    Types
} from "aptos";
import {NetworkName, useWallet} from "@aptos-labs/wallet-adapter-react";
import {useAutoConnect} from "../components/AutoConnectProvider";
import {useAlert} from "../components/AlertProvider";
import {AccountInfo, NetworkInfo, WalletInfo} from "@aptos-labs/wallet-adapter-core";
import WalletSelectorAntDesign from "./WalletSelectorAntDesign";
import React from "react";
import type {
    InputGenerateTransactionData,
} from "@aptos-labs/wallet-adapter-core";


const aptosClient = (network?: string) => {
    if (network === NetworkName.Devnet.toLowerCase()) {
        return DEVNET_CLIENT;
    } else if (network === NetworkName.Testnet.toLowerCase()) {
        return TESTNET_CLIENT;
    } else if (network === NetworkName.Mainnet.toLowerCase()) {
        throw new Error("Please use devnet or testnet for testing");
    } else {
        throw new Error(`Unknown network: ${network}`);
    }
}

const faucet = (network?: string) => {
    if (network === NetworkName.Devnet.toLowerCase()) {
        return DEVNET_FAUCET;
    } else if (network === NetworkName.Testnet.toLowerCase()) {
        return TESTNET_FAUCET;
    } else if (network === NetworkName.Mainnet.toLowerCase()) {
        throw new Error("Please use devnet or testnet for testing");
    } else {
        throw new Error(`Unknown network: ${network}`);
    }
}

const DEVNET_CLIENT = new Provider(Network.DEVNET);
const TESTNET_CLIENT = new Provider(Network.TESTNET);
const DEVNET_FAUCET = new FaucetClient("https://fullnode.devnet.aptoslabs.com", "https://faucet.devnet.aptoslabs.com");
const TESTNET_FAUCET = new FaucetClient("https://fullnode.testnet.aptoslabs.com", "https://faucet.testnet.aptoslabs.com");

const isSendableNetwork = (connected: boolean, network?: string): boolean => {
    return connected && (network?.toLowerCase() === NetworkName.Devnet.toLowerCase()
        || network?.toLowerCase() === NetworkName.Testnet.toLowerCase())
}

export default function WalletConnect() {
    const {
        account,
        connected,
        network,
        wallet,
    } = useWallet();

    return (
        <div>
            <table className="table-auto w-full border-separate border-spacing-y-8 shadow-lg bg-white border-separate">
                <tbody>
                <WalletSelect/>
                {/*<AutoConnect/>*/}
                {connected && <Row><Col title={true} border={true}>
                </Col>
                    <Col border={true}/>
                </Row>}
                {/*{connected && <WalletProps wallet={wallet} network={network} account={account}/>}*/}
                {/*{connected && <RequiredFunctionality/>}*/}
                </tbody>
            </table>
        </div>
    );
}

function WalletSelect() {
    return <>
        {/*<Row>*/}
        {/*    <Col title={true} border={true}>*/}
        {/*        <h2><b>Wallet Select</b></h2>*/}
        {/*    </Col>*/}
        {/*    <Col border={true}/>*/}
        {/*</Row>*/}
        {/*<Row>*/}
        {/*    <Col title={true}>*/}
        {/*        <h3>Connect a Wallet</h3>*/}
        {/*    </Col>*/}
        {/*    <Col>*/}
        {/*        <WalletButtons/>*/}
        {/*    </Col>*/}
        {/*</Row>*/}
        <Row>
            <Col title={true}>
                <h3>Wallet Connect</h3>
            </Col>
            <Col>
                <WalletSelectorAntDesign/>
            </Col>
        </Row>
    </>;
}

// TODO: Verify public key matches account
function WalletProps(props: { account: AccountInfo | null, network: NetworkInfo | null, wallet: WalletInfo | null }) {
    const {account, network, wallet} = props;
    const isValidNetworkName = () => {
        // TODO: Do we allow non lowercase
        return Object.values<string | undefined>(NetworkName).includes(props.network?.name);
    }

    return <>
        <tr>
            <Col title={true}>
                <h3>Wallet Name</h3>
            </Col>
            <Col>
                <b> Name: </b>
                {wallet?.name}
                <b> URL: </b>
                <a
                    target="_blank"
                    className="text-sky-600"
                    rel="noreferrer"
                    href={wallet?.url}
                >
                    {wallet?.url}
                </a>
            </Col>
        </tr>
        <Row>
            <Col title={true}>
                <h3>Account Info</h3>
            </Col>
            <Col>
                <DisplayRequiredValue name={"Address"} isCorrect={!!account?.address}
                                      value={account?.address}/>
                <DisplayRequiredValue name={"Public key"} isCorrect={!!account?.publicKey}
                                      value={account?.publicKey?.toString()}/>
                <DisplayOptionalValue name={"ANS Name (only if attached)"} value={account?.ansName}/>
                <DisplayOptionalValue name={"Min keys required (only for multisig)"}
                                      value={account?.minKeysRequired?.toString()}/>
            </Col>
        </Row>
        <Row>
            <Col title={true}>
                <h3>Network Info</h3>
            </Col>
            <Col>
                <DisplayRequiredValue name={"Network Name"} isCorrect={isValidNetworkName()} value={network?.name}
                                      expected={"one of: " + Object.values<string>(NetworkName).join(", ")}/>
                <DisplayOptionalValue name={"URL"} value={network?.url}/>
                <DisplayOptionalValue name={"ChainId"} value={network?.chainId}/>
            </Col>
        </Row>
    </>;
}

function DisplayRequiredValue(props: { name: string, isCorrect: boolean, value?: string, expected?: string }) {
    const {name, isCorrect, value, expected} = props;

    const successStyling = () => {
        if (isCorrect) {
            return {color: 'green'}
        } else {
            return {color: 'black', border: '2px solid red'}
        }
    }

    return <div style={successStyling()}><p>
        <b>{name}:</b> {value ?? "Not present"} {!isCorrect && expected && <>
        <b>Expected:</b> {expected}</>}</p></div>
}

function DisplayOptionalValue(props: { name: string, value?: string | null }) {
    return <div><p><b>{props.name}:</b> {props.value ?? "Not present"}</p></div>
}

function AutoConnect() {
    const {autoConnect, setAutoConnect} = useAutoConnect();
    return <>
        <Row>
            <Col title={true} border={true}>
                <h3>Auto reconnect on page open</h3>
            </Col>
            <Col border={true}>
                <div className="relative flex flex-col overflow-hidden">
                    <div className="flex">
                        <label className="inline-flex relative items-center mr-5 cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={autoConnect}
                                readOnly
                            />
                            <div
                                onClick={() => {
                                    setAutoConnect(!autoConnect);
                                }}
                                className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
                            ></div>
                        </label>
                    </div>
                </div>
            </Col>
        </Row>
    </>;
}

function RequiredFunctionality() {
    const {setSuccessAlertMessage, setSuccessAlertHash} = useAlert();

    // TODO: pass as props
    const {
        connected,
        disconnect,
        account,
        network,
        signAndSubmitTransaction,
        signMessage,
    } = useWallet();
    let sendable = isSendableNetwork(connected, network?.name)

    const onSignMessage = async () => {
        const payload = {
            message: "Hello from Aptos Wallet Adapter",
            nonce: Math.random().toString(16),
            address: true,
            application: true,
            chain_id: true,
        };
        const response = await signMessage(payload);
        setSuccessAlertMessage(JSON.stringify(response));
    };

    const onSignAndSubmitTransaction = async () => {
        const payload: Types.TransactionPayload = {
            type: "entry_function_payload",
            function: "0x1::coin::transfer",
            type_arguments: ["0x1::aptos_coin::AptosCoin"],
            arguments: [account?.address, 1], // 1 is in Octas,
        };
        // @ts-ignore
        const response = await signAndSubmitTransaction(payload);
        try {
            await aptosClient(network?.name.toLowerCase()).waitForTransaction(response.hash);
            setSuccessAlertHash(response.hash, network?.name);
        } catch (error) {
            console.error(error);
        }
    };

    return <Row>
        <Col title={true} border={true}>
            <h3>Standard Functions</h3>
        </Col>
        <Col border={true}>
            <Button color={"blue"} onClick={disconnect} disabled={!connected} message={"Disconnect"}/>
            <Button color={"blue"} onClick={onSignAndSubmitTransaction} disabled={!sendable}
                    message={"Sign and submit transaction"}/>
            <Button color={"blue"} onClick={onSignMessage} disabled={!sendable} message={"Sign message"}/>
        </Col>
    </Row>;
}

function Row(props: { children?: React.ReactNode }) {
    return <tr>
        {props.children}
    </tr>
}

function Col(props: { title?: boolean, border?: boolean, children?: React.ReactNode }) {
    return <td className={`px-8 py-4 ${props.border ? "border-t" : ""} w-${props.title ? "1/4" : "3/4"}`}>
        {props.children}
    </td>
}

function Button(props: { color: string | undefined, onClick: () => void, disabled: boolean, message: string }) {
    const {color, onClick, disabled, message} = props;
    return <button
        className={`bg-${color}-500 text-white font-bold py-2 px-4 rounded mr-4 ${
            disabled
                ? "opacity-50 cursor-not-allowed"
                : `hover:bg-${color}-700`
        }`}
        onClick={onClick}
        disabled={disabled}
    >{message}</button>
}