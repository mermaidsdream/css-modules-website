import React from 'react';

import footer from '../../assets/svg/footer.svg';

import styles from './Footer.module.css';

export const Footer = () => {
    return (
      <div className={styles.footer}>
        <div className={styles.container}>
          <div>
            <img src={footer} />
          </div>
        </div>
      </div>
    )
}
