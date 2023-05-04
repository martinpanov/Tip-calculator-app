import styles from './Result.module.css';
import { DataForm } from "./Calculator";
import { useEffect, useState, useContext } from 'react';
import { IsZeroContext } from '../contexts/IsZeroContext';

interface DataFormAndSetDataForm extends DataForm {
    setFormData: React.Dispatch<React.SetStateAction<DataForm>>;
}

export default function Result({
    bill,
    tip,
    people,
    setFormData
}: DataFormAndSetDataForm) {
    const { setIsZeroBill, setIsZeroPeople } = useContext(IsZeroContext);
    const [tipAmountPerPerson, setTipAmountPerPerson] = useState<number>(0.00);
    const [totalAmountPerPerson, setTotalAmountPerPerson] = useState<number>(0.00);
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

    useEffect(() => {
        if (!totalAmountPerPerson || !tipAmountPerPerson) {
            setIsButtonDisabled(true);
        }

        if (!bill || !tip || !people) {
            return;
        }

        setIsButtonDisabled(false);
        setTipAmountPerPerson((bill * (tip / 100)) / people);
        setTotalAmountPerPerson((bill += bill * (tip / 100)) / people);

    }, [bill, tip, people]);

    const resetHandler = () => {
        setTipAmountPerPerson(0.00);
        setTotalAmountPerPerson(0.00);
        setIsButtonDisabled(true);
        setIsZeroBill(false);
        setIsZeroPeople(false);
        setFormData({
            bill: '',
            tip: '',
            people: ''
        });
    };

    return (
        <div className={styles['result']}>
            <div className={styles["result-result-data"]}>
                <div className={styles["result-data"]}>
                    <h4>Tip Amount<br /><span>/ person</span></h4>
                    <p>${Number(tipAmountPerPerson).toFixed(2)}</p>
                </div>

                <div className={styles["result-data"]}>
                    <h4>Total<br /><span>/ person</span></h4>
                    <p>${Number(totalAmountPerPerson).toFixed(2)}</p>
                </div>
            </div>
            <button disabled={isButtonDisabled ? true : false} onClick={resetHandler}>RESET</button>
        </div>
    );
}