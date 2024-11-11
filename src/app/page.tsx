"use client";
import {Wallet} from "@/components/Wallet";
import {Transactions} from "@/components/Transactions";
import ReactCardFlip from 'react-card-flip';
import {useReactCardFlip} from "@/ReactCardFlipProvider";

import './Page.scss';


export default function Home() {

   const {isFlipped} = useReactCardFlip();

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>

            <Wallet/>

            <Transactions/>

        </ReactCardFlip>
    );
}
