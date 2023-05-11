import React, { useState } from 'react';
import "./style.css";
import { currencies } from '../currencies';
import { Result } from './Result';


export const Form = ({ calculateResult, result }) => {
  const [currency, setCurrency] = useState(currencies[0].abbr);
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
        <p>
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
        </p>
        <p>
          <label>
            <span className="form__labelText">
              Waluta:
            </span>
            <select
              value={currency}
              onChange={({ target }) => setCurrency(target.value)}>

              {currencies.map((currency => (
                <option
                  key={currency.abbr}
                  value={currency.abbr}
                >
                  {currency.name}
                </option>
              )))}
            </select>
          </label>
        </p>
        <p>
          <button className="form__button"
            onClick={() => calculateResult(currency, amount)}>PRZELICZ</button>
        </p>
        <p>
          <label>
            <span className="form__result">
            </span>
          </label>
        </p>
      </fieldset>
      <Result result={result} />
    </form>
  );
};

export default Form;