import React, {FC} from 'react';
import {useGetBalance} from "@/hooks/useGetBalance";
import {useTonConnectUI} from "@tonconnect/ui-react";
import {useReactCardFlip} from "@/ReactCardFlipProvider";
import TonWeb from "tonweb";
import {CHAIN} from "@tonconnect/sdk";
import classNames from "classnames";

import './Transactions.scss';


interface TransactionsProps {
    className?: string;
}

export const Transactions: FC<TransactionsProps> = ({className}) => {

    return (
        <div className={classNames('Transactions', {}, [className])}>
                <Header/>
                <Body/>
        </div>
    );
};


const Header = () => {
    const {balance} = useGetBalance();
    const {toggleCardFlip} = useReactCardFlip();

    return (
        <div className={classNames('Header')}>
            <button onClick={toggleCardFlip}>Кошелек</button>
            <span>{balance}</span>
        </div>
    )
}

const inputIgnoreBtn = ['-', ',', '+', 'e'];

const inputNumberIgnoreBtn = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (inputIgnoreBtn.includes(e.key)) e.preventDefault();
}


const Body = () => {
    const [tonConnectUI] = useTonConnectUI();

    const sendTransaction = (address: string, amount: string) => {
        tonConnectUI.sendTransaction({
            validUntil: Date.now() + 5 * 60 * 1000, // 5 minutes
            network: CHAIN.TESTNET,
            messages: [
                {
                    address,
                    amount,
                },
            ],
        })
            .then(() => alert('Transaction sent successfully'))
            .catch((error) => alert('Error sending transaction:' + error));
    }


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const amount = (form.elements[0] as HTMLInputElement).value;
        const address = (form.elements[1] as HTMLInputElement).value;
        const formattedAmount = TonWeb.utils.toNano(amount).toNumber();

        sendTransaction(address, formattedAmount);
    }

    return (
        <form onSubmit={handleSubmit} className={'Transactions_Body'}>
            <div>
                <span>Ввод количества TON</span>
                <input required={true} type="number" step="any" onKeyPress={inputNumberIgnoreBtn}/>
            </div>
            <div>
                <span>Ввод адреса кошелька получателя</span>
                <input required={true} type="text"/>
            </div>

            <button type='submit'>Отправить</button>

        </form>
    )
}