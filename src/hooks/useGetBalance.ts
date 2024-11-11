"use client";
import TonWeb from "tonweb";
import {getHttpEndpoint} from "@orbs-network/ton-access";
import {useTonAddress} from "@tonconnect/ui-react";
import {useEffect, useState} from "react";


export const useGetBalance = () => {

    const [balance, setBalance] = useState<null | string>(null);
    const userFriendlyAddress = useTonAddress();

    useEffect(() => {
        if (!userFriendlyAddress) return;

        (async () => {
            const endpoint = await getHttpEndpoint({network: "testnet"}); // get the decentralized RPC endpoint
            const tonweb = new TonWeb(new TonWeb.HttpProvider(endpoint)); // initialize tonweb library

            // The current balance for the given address in nanograms.
            const newBalance = await tonweb.getBalance(userFriendlyAddress);
            const formattedBalance = TonWeb.utils.fromNano(newBalance);

            setBalance(formattedBalance);
        })()
    }, [userFriendlyAddress]);


    return {
        balance
    };
}