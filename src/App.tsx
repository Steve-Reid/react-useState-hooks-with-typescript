import * as React from 'react';
import './App.css';

interface AppProps {}

export const App: React.FC<AppProps> = () => {
  const [name, setName] = React.useState('');
  const [income, setIncome] = React.useState('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };

  const handleIncomeSelect = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setIncome(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    console.log('state = ', name, income);
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <div>
            <span>Name: </span>
            <input type="text" value={name} onChange={handleNameChange} />
          </div>
          <div>
            <span>Income: </span>
            <select value={income} onChange={handleIncomeSelect}>
              <option value="high">High</option>
              <option value="mid">Mid</option>
              <option value="low">Low</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </header>
    </div>
  );
};
