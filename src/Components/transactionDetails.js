import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
const API = process.env.REACT_APP_API_URL;

/*function transactionDetails() {
  const [Transaction, setTransaction] = useState([]);
  let { index } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((response) => {
        setTransaction(response.data);
      })
      .catch(() => {
        navigate('/not-found');
      });
  }, []);
  const handleDelete = () => {
    axios
      .delete(`${API}/transactions/${index}`)
      .then(() => {
        navigate(`/transactions`);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <tr>
      <td>
        <h2>Date: {Transaction.date}</h2>
      </td>
      <td>
        <h2>Name: {Transaction.item_name} </h2>
      </td>
      <td>
        <h2>Amount: {Transaction.amount}</h2>
      </td>
      <td>
        <h2>Source: {Transaction.from}</h2>
      </td>
      <td>
        <h2>Category: {Transaction.category}</h2>
      </td>
      <div>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </tr>
  );
}
export default transactionDetails; */
