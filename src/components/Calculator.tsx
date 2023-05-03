import { IsZeroContext } from '../contexts/isZeroContext';
import styles from './Calculator.module.css';
import CalculatorForm from './CalculatorForm';
import Result from './Result';
import { useState } from 'react';

export type DataForm = {
    bill: number,
    tip: number,
    people: number;
};

export default function Calculator() {
    const [formData, setFormData] = useState<DataForm>({
        bill: 0,
        tip: 0,
        people: 0
    });

    const [isZeroBill, setIsZeroBill] = useState<boolean>(false);
    const [isZeroPeople, setIsZeroPeople] = useState<boolean>(false);


    return (
        <IsZeroContext.Provider value={{
            isZeroBill,
            setIsZeroBill,
            isZeroPeople,
            setIsZeroPeople
        }}>
            <div className={styles['calculator']}>
                <CalculatorForm setFormData={setFormData} />
                <Result {...formData} />
            </div>
        </IsZeroContext.Provider>
    );
}