import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams, Link } from 'react-router-dom';
const API = process.env.REACT_APP_API_URL;

function TransactionEdit() {
  const navigate = useNavigate();
  let { index } = useParams();
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

  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((response) => {
        setTransaction(response.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [index]);
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`${API}/transactions/${index}`, transaction)
      .then(() => {
        navigate(`/transactions/${index}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className='EditTransaction'>
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

        <br />
      </form>
    </div>
  );
}
export default TransactionEdit;
