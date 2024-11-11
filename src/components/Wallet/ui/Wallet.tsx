import {FC} from 'react';
import classNames from "classnames";
import {useGetBalance} from "@/hooks/useGetBalance";
import {TonConnectButton, useTonAddress} from "@tonconnect/ui-react";
import {useReactCardFlip} from "@/ReactCardFlipProvider";

import './Wallet.scss';

interface WalletProps {
    className?: string;
}

export const Wallet: FC<WalletProps> = ({className}) => {

    return (
        <div className={classNames('Wallet', {}, [className])}>
            <Header/>

            <Address/>
        </div>
    );
};


const Header: FC = () => {
    const {balance} = useGetBalance();

    return (
        <div className={classNames('Header')}>
            <span>{balance}</span>
            <TonConnectButton/>
        </div>
    );
};

const Address: FC = () => {
    const userFriendlyAddress = useTonAddress();
    const {toggleCardFlip} = useReactCardFlip();


    return (
        <div className={classNames('AddressWrapper')}>
            <div className={classNames('Address')}>
                <div>
                    <span>Address:</span>
                    <span>{userFriendlyAddress}</span>
                </div>
            </div>
            <button onClick={toggleCardFlip} disabled={!userFriendlyAddress}>Транзакции</button>
        </div>
    );
};
