import {useContext} from "react";
import {ReactCardFlipContext} from "@/ReactCardFlipProvider/lib/ReactCardFlipContext";

interface useReactCardFlipResult {
    toggleCardFlip: () => void;
    isFlipped: boolean;
}


export const useReactCardFlip = (): useReactCardFlipResult => {

    const {isFlipped, setIsFlipped} = useContext(ReactCardFlipContext);

    const toggleCardFlip = () => {
        setIsFlipped(!isFlipped);
    }

    return {
        isFlipped,
        toggleCardFlip,
    }
}