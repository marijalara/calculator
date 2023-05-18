import React, {createContext, useState} from 'react';

export interface Calc {
    sign: string;
    num: number;
    res: number;
}

export interface ProviderValueProps {
    calc: Calc;
    setCalc: React.Dispatch<React.SetStateAction<Calc>>
}

export const CalcContext=createContext<ProviderValueProps>({} as ProviderValueProps)

const CalcProvider: React.FC<React.PropsWithChildren<{}>>=({children}) => {
    const [calc, setCalc]=useState<Calc>({
        sign: '',
        num: 0,
        res: 0
    })
    const providerValue: ProviderValueProps={
        calc, setCalc
    }
    return (
        <CalcContext.Provider value={providerValue}>
            {children}
        </CalcContext.Provider>
    )
}

export default CalcProvider