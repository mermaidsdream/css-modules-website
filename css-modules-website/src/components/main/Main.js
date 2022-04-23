import React from 'react';

import main from '../../assets/svg/main.svg';
import form from '../../assets/svg/form.svg';
import contacts from '../../assets/svg/contacts.svg';

import styles from './Main.module.css';

export const Main = () => {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <img src={main} />
                <div className={styles.content}>
                   <h3 className={styles.title}>We are always in touch and will be happy to resolve any of your questions.</h3>
                   <img className={styles.form} src={form} />
                </div>
                <div className={styles.contacts}>
                    <img src={contacts} />
                </div>
            </div>
        </main>
    )
}
