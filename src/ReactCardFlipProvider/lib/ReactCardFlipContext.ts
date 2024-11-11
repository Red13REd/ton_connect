import {createContext} from "react";


export interface ReactCardFlipProps {
    isFlipped: boolean;
    setIsFlipped: (value: boolean) => void;
}


export const ReactCardFlipContext = createContext<ReactCardFlipProps>(
    {isFlipped: false, setIsFlipped:() => {}}
);

