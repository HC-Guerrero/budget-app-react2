/*import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const API = process.env.REACT_APP_API_URL;

function transactionNew() {
  const navigate = useNavigate();
  const [Transaction, setTransaction] = useState({
    date: '',
    item_name: '',
    amount: 0,
    from: '',
    category: '',
  });

  const handleTransactionEdit = (event) => {
    setTransaction({ ...Transaction, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${API}/transactions`, Transaction)
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
          value={Transaction.date}
          type='text'
          onChange={handleTransactionEdit}
          placeholder='Date format: MM/DD/YY'
          required
        />
        <label htmlFor='item_name'>Transaction Name:</label>
        <input
          id='item_name'
          type='text'
          value={Transaction.item_name}
          placeholder='What was this transaction for?'
          onChange={handleTransactionEdit}
        />
        <label htmlFor='amount'>Transaction Amount:</label>
        <input
          id='amount'
          type='Number'
          value={Transaction.value}
          placeholder='How much money was exchanged?'
          onChange={handleTransactionEdit}
          required
        />
        <label htmlFor='from'>Transaction Recipient:</label>
        <input
          id='from'
          type='text'
          value={Transaction.from}
          placeholder='Who did you make this transaction with?'
          onChange={handleTransactionEdit}
          required
        />
        <label htmlFor='category'>Transaction Category:</label>
        <input
          id='category'
          type='text'
          value={Transaction.category}
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
 */
