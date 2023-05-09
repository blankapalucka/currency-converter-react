import React from "react";
import "./style.css";

const Form = (props) =>(
    <form>
        <fieldset className="form__fieldset">
          <legend className="form__legend">Przelicznik walut
          </legend>
          <p>
            <label>
              <span className="form__labelText">
                Kwota w zł*:
              </span>
              <input type="number" min="0.01" step="0.01" required />
            </label>
          </p>
          <p>
            <label>
              <span className="form__labelText">
                Waluta:
              </span>
              <select name="currency">
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
                <option value="GBP">GBP</option>
                <option value="NOK">NOK</option>
              </select>
            </label>
          </p>
          <p>
            <button className="form__button">PRZELICZ</button>
          </p>
          <p>
            <label>
              <span className="form__result">
               </span> 
          </label>
        </p>
      </fieldset>

    </form>

);

export default Form;