import { useState } from "react";
import styles from "./styles.module.scss";

interface InputProps {
  label: string;
  placeholder: string;
  passwordVariant?: Boolean;
  onChange: any;
  value: string;
  id: string;
}

const Input = ({
  id,
  label,
  placeholder,
  passwordVariant,
  onChange,
  value,
}: InputProps) => {
  const [showPass, setShowPass] = useState<boolean>(false);

  return (
    <div className={styles.container} key={id}>
      {!passwordVariant ? (
        <>
          <span className={styles.label}>{label}</span>
          <label className={styles.inputContainer} htmlFor={id}>
            <input
              id={id}
              type="text"
              placeholder={placeholder}
              autoComplete="nah"
              onChange={onChange}
              value={value}
            />
          </label>
          <div className={styles.border} />
        </>
      ) : (
        <>
          <span className={styles.label}>{label}</span>
          <label className={styles.inputContainer} htmlFor={id}>
            <input
              id={id}
              type={showPass ? "text" : "password"}
              placeholder={placeholder}
              onChange={onChange}
              value={value}
            />
            <span
              onClick={() => setShowPass((showPass) => !showPass)}
              className={styles.showSwitch}
            >
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.94 18.44C16.2306 19.743 14.1491 20.4649 12 20.5C5 20.5 1 12.5 1 12.5C2.24389 10.1819 3.96914 8.15663 6.06 6.56003M9.9 4.74002C10.5883 4.5789 11.2931 4.49836 12 4.50003C19 4.50003 23 12.5 23 12.5C22.393 13.6356 21.6691 14.7048 20.84 15.69M14.12 14.62C13.8454 14.9148 13.5141 15.1512 13.1462 15.3151C12.7782 15.4791 12.3809 15.5673 11.9781 15.5744C11.5753 15.5815 11.1752 15.5074 10.8016 15.3565C10.4281 15.2056 10.0887 14.9811 9.80385 14.6962C9.51897 14.4113 9.29439 14.072 9.14351 13.6984C8.99262 13.3249 8.91853 12.9247 8.92563 12.5219C8.93274 12.1191 9.02091 11.7219 9.18488 11.3539C9.34884 10.9859 9.58525 10.6547 9.88 10.38"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 1.5L23 23.5"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </label>
          <div className={styles.border} />
        </>
      )}
    </div>
  );
};

export default Input;
