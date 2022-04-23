import React from 'react';

import styles from './Header.module.css';

import mail from '../../assets/svg/mail.svg';
import number from '../../assets/svg/number.svg';
import WhatsApp from '../../assets/svg/WhatsApp.svg';
import hurt from '../../assets/svg/hurt.svg';
import language from '../../assets/svg/language.svg';
import logo from '../../assets/svg/logo.svg';

export const Header = () => {
    return (
        <header className={styles.header}>
          <div className={styles.container}>
            <div className={styles.contacts}>
              <div>
                <img src={mail} />
              </div>
              <div>
                <img src={number} />
              </div>
              <div>
                <img src={WhatsApp} />
              </div>
            </div>
            <div className={styles.social}>
              <div>
                <img src={hurt} />
              </div>
              <div>
                <img src={language} />
              </div>
            </div>
            <div className={styles.navbar}>
              <img className={styles.logo} src={logo} />
              <ul className={styles.list}>
                <li className={styles.item}><a href='#'>Cities</a></li>
                <li className={styles.item}><a href='#'>Properties</a></li>
                <li className={styles.item}><a href='#'>Blog</a></li>
                <li className={styles.item}><a href='#'>Video</a></li>
                <li className={styles.item}><a href='#'>Contacts</a></li>
              </ul>
              <button className={styles.button}>Log in</button>
              <span className={styles.element}>|</span>
              <button className={styles.button}>Sign up</button>
            </div>
          </div>
        </header>
    )
}
