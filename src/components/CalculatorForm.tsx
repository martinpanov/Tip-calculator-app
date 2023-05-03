import styles from './CalculatorForm.module.css';
import { DataForm } from './Calculator';
import { useContext } from 'react';
import { IsZeroContext } from '../contexts/isZeroContext';


export default function CalculatorForm({
    setFormData
}: { setFormData: React.Dispatch<React.SetStateAction<DataForm>>; }) {
    const { isZeroBill, setIsZeroBill, isZeroPeople, setIsZeroPeople } = useContext(IsZeroContext);
    const handleFormDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === 'bill' && (e.target.value === '0' || !e.target.value)) {
            setIsZeroBill(true);
        } else if (e.target.name === 'bill') {
            setIsZeroBill(false);
        }

        if (e.target.name === 'people' && (e.target.value === '0' || !e.target.value)) {
            setIsZeroPeople(true);
        } else if (e.target.name === 'people') {
            setIsZeroPeople(false);
        }

        setFormData(state => ({ ...state, [e.target.name]: e.target.value }));
    };


    const handleClick = (percentage: number) => {
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
                <input type="number" name="bill" id="bill" placeholder="0" className={styles["invalid"]} onChange={handleFormDataChange} />
            </div>

            <label htmlFor="tip">Select Tip %</label>
            <div className={styles['tip-container']}>
                <input type="button" name="tip" value="5%" onClick={() => handleClick(5)} />
                <input type="button" name="tip" value="10%" onClick={() => handleClick(10)} />
                <input type="button" name="tip" value="15%" onClick={() => handleClick(15)} />
                <input type="button" name="tip" value="25%" onClick={() => handleClick(25)} />
                <input type="button" name="tip" value="50%" onClick={() => handleClick(50)} />
                <input type="number" name="tip" placeholder="Custom" onChange={handleFormDataChange} />
            </div>

            <div className={styles["label-error"]}>
                <label htmlFor="people">Number of People</label>
                {isZeroPeople ? <p className={styles["error"]}>Can't be zero</p> : null}
            </div>

            <div className={styles['bill-people']}>
                <i className="fa-solid fa-user"></i>
                <input type="number" name="people" onChange={handleFormDataChange} />
            </div>
        </form>
    );
}