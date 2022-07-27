import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const API = process.env.REACT_APP_API_URL;

function transactionNew() {
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState({
    date: '',
    item_name: '',
    amount: 0,
    from: '',
    category: '',
  });

  const handleTransactionEdit = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${API}/transactions`, transaction)
      .then((response) => {
        navigate('/transactions');
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className='NewTransaction'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='date'>Date:</label>
        <input
          id='date'
          value={transaction.date}
          type='text'
          onChange={handleTransactionEdit}
          placeholder='Date format: MM/DD/YY'
          required
        />
        <label htmlFor='item_name'>Transaction Name:</label>
        <input
          id='item_name'
          type='text'
          value={transaction.item_name}
          placeholder='What was this transaction for?'
          onChange={handleTransactionEdit}
        />
        <label htmlFor='amount'>Transaction Amount:</label>
        <input
          id='amount'
          type='Number'
          value={transaction.value}
          placeholder='How much money was exchanged?'
          onChange={handleTransactionEdit}
          required
        />
        <label htmlFor='from'>Transaction Recipient:</label>
        <input
          id='from'
          type='text'
          value={transaction.from}
          placeholder='Who did you make this transaction with?'
          onChange={handleTransactionEdit}
          required
        />
        <label htmlFor='category'>Transaction Category:</label>
        <input
          id='category'
          type='text'
          value={transaction.category}
          placeholder='How would you categorize this transaction?'
          onChange={handleTransactionEdit}
        />
        <br />
        <input type='submit' />
      </form>
    </div>
  );
}
export default transactionNew;
