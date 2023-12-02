import { BCS } from 'aptos';
import {useWallet} from "@aptos-labs/wallet-adapter-react";
import {useCallback} from "react";
import {AccountAddress, HexInput} from "@aptos-labs/ts-sdk";


export function useSubmit() {
    const { account, signAndSubmitTransaction } = useWallet();

    return useCallback(async (formData: any) => {
        if (!account) {
            throw new Error("No account");
        }
        const transaction = {
            sender: 0x3119b1c3c8d3aaad5040b46a11a11111a3c11ba9cff1af48a70a3818bde0469e2,
            data: {
                type: "entry_function_payload",
                type_arguments: [],
                function: `0xf0ee3187beaa48e56def59dbe52d7e932c3e559c28ae26568fa91ff9ae85e145::main_form_aggregate::create`,
                functionArguments: [
                    formData["fr-5pqi"],
                    formData["fr-duif"],
                    formData["fr-6i34"],
                    formData["fr-8xjs"],
                    formData["fr-9c3f"],
                    formData["fr-4ok6"],
                    formData["fr-b3ub"],
                    formData["fr-1z7o"],
                    formData["fr-d8rw"],
                    formData["fr-dy3l"],
                    formData["fr-6f68"],
                    formData["fr-47yy"],
                    formData["fr-gh3o"],
                    formData["fr-fbba"],
                    formData["fr-hhzp"],
                    formData["single_text1"],
                ],
            }
        };

        // @ts-ignore
        const transactionRes = await signAndSubmitTransaction(transaction);

        console.log(transactionRes);

        return transactionRes;

    }, [account, signAndSubmitTransaction]);
}
