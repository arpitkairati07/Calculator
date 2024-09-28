import styles from './App.module.css';
import Display from './components/Dispaly'; // Fixed the typo
import ButtonContainer from './components/ButtonContainer';
import { useState } from 'react';

function App() {
  const [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === 'C') {
      setCalVal("");
    } else if (buttonText === '=') {
      try {
        const result = eval(calVal); // Still using eval with caution
        setCalVal(result.toString());
      } catch (error) {
        setCalVal("Error");
      }
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal} />
      <ButtonContainer onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
