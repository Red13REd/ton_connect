import React, {FC, useMemo, useState} from 'react';
import {ReactCardFlipContext} from "../lib/ReactCardFlipContext";


const ReactCardFlipProvider: FC<{ children: React.ReactNode }> = ({children}) => {

    const [isFlipped, toggleCardFlip] = useState<boolean>(false);

    const defaultProps = useMemo(() => ({
        isFlipped,
        setIsFlipped: toggleCardFlip,
    }), [isFlipped])


    return (
        <ReactCardFlipContext.Provider value={defaultProps}>
            {children}
        </ReactCardFlipContext.Provider>
    );
};

export default ReactCardFlipProvider;