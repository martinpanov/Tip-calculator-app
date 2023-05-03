import { createContext } from 'react';

type IsZeroContextType = {
    isZeroBill: boolean;
    setIsZeroBill: React.Dispatch<React.SetStateAction<boolean>>;
    isZeroPeople: boolean;
    setIsZeroPeople: React.Dispatch<React.SetStateAction<boolean>>;
};

export const IsZeroContext = createContext<IsZeroContextType>({
    isZeroBill: true,
    setIsZeroBill: () => { },
    isZeroPeople: true,
    setIsZeroPeople: () => { }
});