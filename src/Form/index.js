import React, { useState } from 'react';
import "./style.css";
import { currencies } from './currencies';
import { Result } from './Result';
import Calendar from '../Date';


export const Form = ({ calculateResult, result }) => {
  const [currency, setCurrency] = useState(currencies[0].short);
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  }

  return (
    <form onSubmit={onSubmit}>
 
      <fieldset className="form__fieldset">
        <legend className="form__legend">Przelicznik walut
        </legend>
        <div>
        <Calendar
      />
          <label>
            <span className="form__labelText">
              Kwota w zł*:
            </span>
            <input
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
              type="number"
              min="0.01"
              step="0.01"
              required
              placeholder="Wpisz kwotę w zł" />
          </label>
        </div>
        <div>
          <label>
            <span className="form__labelText">
              Waluta:
            </span>
            <select
              value={currency}
              onChange={({ target }) => setCurrency(target.value)}>

              {currencies.map((currency => (
                <option
                  key={currency.short}
                  value={currency.short}
                >
                  {currency.name}
                </option>
              )))}
            </select>
          </label>
        </div>
        <div>
          <button className="form__button">PRZELICZ</button>
        </div>
        <div>
          <label>
            <span className="form__result">
              <Result result={result} />
            </span>
          </label>
        </div>
      </fieldset>

    </form>
  );
};

export default Form;