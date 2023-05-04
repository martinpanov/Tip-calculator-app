import styles from './CalculatorForm.module.css';
import { DataForm } from './Calculator';
import { useContext, useState } from 'react';
import { IsZeroContext } from '../contexts/IsZeroContext';

interface DataFormAndSetDataForm extends DataForm {
    setFormData: React.Dispatch<React.SetStateAction<DataForm>>;
}


export default function CalculatorForm({
    bill,
    tip,
    people,
    setFormData
}: DataFormAndSetDataForm) {
    const { isZeroBill, setIsZeroBill, isZeroPeople, setIsZeroPeople } = useContext(IsZeroContext);
    const [activeButton, setActiveButton] = useState<number>(0);

    const handleFormDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === 'bill' && e.target.value === '0') {
            setIsZeroBill(true);
        } else if (e.target.name === 'bill') {
            setIsZeroBill(false);
        }

        if (e.target.name === 'people' && e.target.value === '0') {
            setIsZeroPeople(true);
        } else if (e.target.name === 'people') {
            setIsZeroPeople(false);
        }

        setFormData(state => ({ ...state, [e.target.name]: Number(e.target.value) ? Number(e.target.value) : '' }));
    };


    const handleClick = (percentage: number) => {
        setActiveButton(percentage);
        setFormData(state => ({ ...state, tip: percentage }));
    };

    return (
        <form>
            <div className={styles["label-error"]}>
                <label htmlFor="bill">Bill</label>
                {isZeroBill ? <p className={styles["error"]}>Can't be zero</p> : null}
            </div>

            <div className={styles['bill-people']}>
                <i className="fa-solid fa-dollar-sign icon"></i>
                <input
                    type="number"
                    name="bill"
                    placeholder="0"
                    className={isZeroBill ? styles["invalid"] : undefined}
                    onChange={handleFormDataChange}
                    value={bill ? bill : ''}
                />
            </div>

            <label htmlFor="tip">Select Tip %</label>
            <div className={styles['tip-container']}>
                {[5, 10, 15, 25, 50, 'Custom'].map((value: number | string, index) => {
                    if (value === 'Custom') {
                        return <input
                            key={index}
                            type="number"
                            name="tip"
                            placeholder="Custom"
                            onChange={handleFormDataChange}
                            onClick={() => setActiveButton(0)}
                            value={tip ? tip : ''}
                        />;
                    }

                    return <input
                        key={index}
                        type="button"
                        name="tip"
                        value={`${value}%`}
                        // @ts-ignore
                        onClick={() => handleClick(value)}
                        className={activeButton === value ? styles["active"] : undefined}
                    />;
                })}
            </div>

            <div className={styles["label-error"]}>
                <label htmlFor="people">Number of People</label>
                {isZeroPeople ? <p className={styles["error"]}>Can't be zero</p> : null}
            </div>

            <div className={styles['bill-people']}>
                <i className="fa-solid fa-user"></i>
                <input
                    type="number"
                    name="people"
                    placeholder="0"
                    className={isZeroPeople ? styles["invalid"] : undefined}
                    onChange={handleFormDataChange}
                    value={people ? people : ''}
                />
            </div>
        </form>
    );
}