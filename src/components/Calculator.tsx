import { IsZeroContext } from '../contexts/IsZeroContext';
import styles from './Calculator.module.css';
import CalculatorForm from './CalculatorForm';
import Result from './Result';
import { useState } from 'react';

export interface DataForm {
    bill: number | '',
    tip: number | '',
    people: number | '';
};

export default function Calculator() {
    const [formData, setFormData] = useState<DataForm>({
        bill: '',
        tip: '',
        people: ''
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
                <CalculatorForm {...formData} setFormData={setFormData} />
                <Result {...formData} setFormData={setFormData} />
            </div>
        </IsZeroContext.Provider>
    );
}