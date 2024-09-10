import React, { useRef, useEffect } from "react";
import styles from "./styles.module.css";

export default function ValueDisplay({ value }) {
  const prevValue = useRef("");

  useEffect(() => {
    prevValue.current = value;
  }, [value]);

  return (
    <div className={styles.inputWrapper}>
      <div className={styles.pWrapp}>
        <p>
          Current value: <br />
          {value}
        </p>
      </div>
      <div className={styles.centerLine}></div>
      <div className={styles.pWrapp}>
        <p>
          Previous value: <br /> {prevValue.current}
        </p>
      </div>
    </div>
  );
}
