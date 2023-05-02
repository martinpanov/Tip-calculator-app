import styles from './Calculator.module.css';

export default function Calculator() {
    return (
        <div className={styles['calculator']}>
            <form>
                <div className={styles['bill']}>
                    <label htmlFor="bill">Bill</label>
                    <input type="number" name="bill" id="bill" placeholder="0" />
                </div>

                <div className={styles['tip-container']}>
                    <label htmlFor="tip">Select Tip %</label>
                    <div className="tip-first-row">
                        <input type="button" name="tip" value="5%" />
                        <input type="button" name="tip" value="10%" />
                        <input type="button" name="tip" value="15%" />
                    </div>

                    <div className={styles['tip-second-row']}>
                        <input type="button" name="tip" value="25%" />
                        <input type="button" name="tip" value="50%" />
                        <input type="number" name="tip" placeholder="Custom" />
                    </div>
                </div>

                <div className={styles['people']}>
                    <label htmlFor="people">Number of People</label>
                    <input type="number" />
                </div>
            </form>

            <div className={styles['result']}>
                <h2>Tip Amount <span>/ person</span></h2>
                <p>$0.00</p>

                <h2>Total <span>/ person</span></h2>
                <p>$0.00</p>

                <button>RESET</button>
            </div>

        </div>
    );
}