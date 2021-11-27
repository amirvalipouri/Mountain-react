import React from 'react'
import Snow from '../../assert/snow.png'
import styles from './Submit.module.css'

const Submit = () => {
    return(
        <div className={styles.container} style={{ backgroundImage: `url(${Snow})`}}>
            <div className={styles.card}>
                <h1>HOW WE CAN HELP YOU?</h1>
                <div className={styles.form}>
                    <form>
                        <div   className={styles.input}>
                            <input required type="text" placeholder="Enter your Name" />
                        </div>

                        <div   className={styles.input}>
                            <input required type="email" placeholder="Enter your Email" />
                        </div>

                        <div className={styles.input}>
                            <textarea rows={8} cols={30} placeholder="Enter your message" />
                        </div>

                        <div>
                            <button className={styles.btn}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Submit
