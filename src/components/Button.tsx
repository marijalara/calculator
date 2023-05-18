import React, {useContext} from 'react';
import { CalcContext } from '../context/CalcContext';

interface ButtonProps {
    value: string | number
} 

const getStyleName=(btn: string)=> {
    const className: Record<string, string>={
        '=': 'equals',
        'x': 'opt',
        '-': 'opt',
        '+': 'opt',
        '÷': 'opt',
        '0': 'numb'
    }
    return className[btn]
}

const Button: React.FC<ButtonProps>= ({value}) => {
    const {calc, setCalc}=useContext(CalcContext)

    const CommaClick =(): void => {
        setCalc({
            ...calc,
            num: !calc.num.toString().includes('.') ? Number(calc.num) + Number(value) : calc.num
        })
    }
    const ResetClick=() => {
        setCalc({sign: '', num: 0, res: 0})
    }
    const handleClickButton=() => {
        const numberString=value.toString() 
        
        let numberValue: number
        if(numberString==='0' && calc.num===0) {
            numberValue=0
        } else {
            numberValue=Number(calc.num + numberString)
        }
        setCalc({
            ...calc,
            num: numberValue
        })
    }
    const SignClick=() => {
        setCalc({
            sign: value.toString(),
            res: !calc.res && calc.num ? calc.num : calc.res,
            num: 0
        })
    }
    const EqualsClick=() => {
        if(calc.res && calc.num) {
            const Math=(a: number, b: number, sign: string) => {
                const result: Record<string, Function>={
                    '+': (a: number, b: number)=> a + b,
                    '-': (a: number, b: number)=> a - b,
                    'x': (a: number, b: number)=> a * b,
                    '÷': (a: number, b: number)=> a / b,
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
    const PresenClick=() => {
        setCalc({
            num: (calc.num /100),
            res: (calc.num /100),
            sign: ''
        })
    }
    const InvertClick=() => {
        setCalc({
            num: calc.num ? calc.num * -1 : 0,
            res: calc.res ? calc.res * -1 : 0,
            sign: ''
        })
    }
    const handleClick=() => {
        const results: Record<string, Function>={
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
    return (
        <button onClick={handleClick} className={`${getStyleName(value.toString())} button`}>
            {value}
        </button>
    )
}

export default Button