import React from 'react';

export const SubmitSuccess = (txHash: string) => {
    return (
        <div>
            <h1>Success!</h1>
            <p>
                Your transaction has been submitted to the blockchain.
                View it on the <a target='_blank' href={`https://explorer.aptoslabs.com/txn/${txHash}?network=testnet`}>Aptos Explorer</a>.
            </p>
        </div>
    );
}
