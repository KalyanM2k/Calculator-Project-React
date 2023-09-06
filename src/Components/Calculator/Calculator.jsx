import React from "react";
import "./Calculator.css";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: "",
      showDot: true,
    };
  }

  handleValue = (digit) => {
    const { displayValue, showDot } = this.state;

    if (digit === ".") {
      if (showDot) {
        this.setState({
          displayValue: displayValue + digit,
          showDot: false,
        });
      }
    } else {
      this.setState({
        displayValue: displayValue + digit,
      });
    }
  };

  handleOperation = (operator) => {
    const { displayValue } = this.state;
    const lastChar = displayValue.at(-1);

    if (
      lastChar === "+" ||
      lastChar === "-" ||
      lastChar === "*" ||
      lastChar === "/" 
    ) {
      return;
    } else {
      this.setState({
        displayValue: displayValue + operator,
        showDot: true,
      });
    }
  };

  calculate = () => {
    const { displayValue } = this.state;
    const result = eval(displayValue);

    this.setState({
      displayValue: result,
    });
  };

  clearDisplay = () => {
    this.setState({
      displayValue: "",
      showDot: true,
    });
  };

  deleteLastDigit = () => {
    const { displayValue } = this.state;
    const lastChar = displayValue.slice(-1);

    if (lastChar === ".") {
      this.setState({
        displayValue: displayValue.slice(0, -1),
        showDot: true,
      });
    } else {
      this.setState({
        displayValue: displayValue.slice(0, -1),
      });
    }
  };

  render() {
    const { displayValue } = this.state;

    return (
      <div className="container">
        <input type="text" id="display" value={displayValue} readOnly />
        <div className="keypad">
          <button onClick={() => this.clearDisplay()}>C</button>
          <button onClick={() => this.deleteLastDigit()}>DEL</button>
          <button onClick={() => this.handleOperation("%")}>%</button>
          <button onClick={() => this.handleOperation("/")}>/</button>
          <br />

          <button onClick={() => this.handleValue("7")}>7</button>
          <button onClick={() => this.handleValue("8")}>8</button>
          <button onClick={() => this.handleValue("9")}>9</button>
          <button onClick={() => this.handleOperation("*")}>*</button>

          <br />
          <button onClick={() => this.handleValue("4")}>4</button>
          <button onClick={() => this.handleValue("5")}>5</button>
          <button onClick={() => this.handleValue("6")}>6</button>
          <button onClick={() => this.handleOperation("-")}>-</button>

          <br />
          <button onClick={() => this.handleValue("1")}>1</button>
          <button onClick={() => this.handleValue("2")}>2</button>
          <button onClick={() => this.handleValue("3")}>3</button>
          <button onClick={() => this.handleOperation("+")}>+</button>

          <br />
          <button onClick={() => this.handleValue("00")}>00</button>
          <button onClick={() => this.handleValue("0")}>0</button>
          <button onClick={() => this.handleValue(".")}>.</button>
          <button className="orange" onClick={() => this.calculate()}>
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
