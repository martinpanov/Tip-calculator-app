import styles from './Result.module.css';
import { useEffect, useState } from 'react';
import { DataForm } from "./Calculator";

export default function Result({
    bill,
    tip,
    people
}: DataForm) {
    const [tipAmountPerPerson, setTipAmountPerPerson] = useState<number>(0.00);
    const [totalAmountPerPerson, setTotalAmountPerPerson] = useState<number>(0.00);

    useEffect(() => {
        if (!bill || !people) {
            return;
        }

        setTotalAmountPerPerson(bill += (bill * tip) / people);

    }, [bill, tip, people]);

    return (
        <div className={styles['result']}>
            <div className={styles["result-result-data"]}>
                <div className={styles["result-data"]}>
                    <h4>Tip Amount<br /><span>/ person</span></h4>
                    <p>$0.00</p>
                </div>

                <div className={styles["result-data"]}>
                    <h4>Total<br /><span>/ person</span></h4>
                    <p>${totalAmountPerPerson.toFixed(2)}</p>
                </div>
            </div>
            <button>RESET</button>
        </div>
    );
}