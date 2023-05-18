import React, { useContext } from "react";
import { CalcContext } from "../context/CalcContext";

const getStyleName=btn => {
    const className={
        '=': 'equals',
        'x': 'opt',
        '-': 'opt',
        '+': 'opt',
        '÷': 'opt',
        '0': 'numb'
    }
    return className[btn]
}

const Button=({value}) => {
    const {calc, setCalc}=useContext(CalcContext)
    
    //user click comma
    const CommaClick=() => {
        setCalc({
            ...calc,
            num: !calc.num.toString().includes('.') ? calc.num + value : calc.num
        })
    }
    //user click AC
    const ResetClick=() => {
        setCalc({sign: '', num: 0, res: 0})
    }

    //user click number
    const handleClickButton=() => {
        const numberString=value.toString() //changes value into string

        //ako vec imamo nulu i onda kada ponovo je pritisnemo da nam ne pise opet nula nego da stoji samo jedna
        let numberValue
        if(numberString==='0' && calc.num===0) {
            numberValue="0"
        } else {
            //a ovo ako imamo recimo 5 i kliknemo 8 da nam pise 58
            numberValue=Number(calc.num + numberString)
        }
        setCalc({
            ...calc,
            num: numberValue
        })
    }
    //user click operation
    const SignClick=() => {
        setCalc({
            sign: value,
            res: !calc.res && calc.num ? calc.num : calc.res,
            num: 0
        })
    }
    //user click equals
    const EqualsClick=() => {
        //kada pritisnemo neki broj i onda jednako nema potrebe da nam racuna zato ce da ide ovaj uslov
        //i onda cemo tu da prebacimo celu math funkciju
        if(calc.res && calc.num) {
            const Math=(a, b, sign) => {
                const result={
                    '+': (a, b)=> a + b,
                    '-': (a, b)=> a - b,
                    'x': (a, b)=> a * b,
                    '÷': (a, b)=> a / b,
                }
                return result[sign](a, b)
            }
        setCalc({
            res: Math(calc.res, calc.num, calc.sign),
            sign: '',
            num: 0
        })
        } 
    }

    //user click presen
    const PresenClick=() => {
        setCalc({
            num: (calc.num /100),
            res: (calc.num /100),
            sign: ''
        })
    }

    //user click invert button
    const InvertClick=() => {
        setCalc({
            num: calc.num ? calc.num * -1 : 0,
            res: calc.res ? calc.res * -1 : 0,
            sign: ''
        })
    }

    const handleClick=() => {
        //a ovo se odnosi na kondicional
        const results={
            '.': CommaClick,
            'AC': ResetClick,
            '÷': SignClick,
            '-': SignClick,
            '+': SignClick,
            'x': SignClick,
            '=': EqualsClick,
            '%': PresenClick,
            '+/-': InvertClick
        }
        if(results[value]) {
            return results[value]()
        } else {
            return handleClickButton()
        }
    }
    return(
        <button onClick={handleClick} className={`${getStyleName(value)} button`}>{value}</button>
    )
}

export default Button