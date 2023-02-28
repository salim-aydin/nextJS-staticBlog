import React from "react";
import styles from "./styles.module.css";

export default function Loading(){ // spinner wrapper component'ı kullanacağız burada spinner'ı göstermek için 
    return(
        <div className={styles.spinnerWrapper}>
            <div className={styles.spinner}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            
        </div>
    )
}