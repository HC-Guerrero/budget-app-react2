import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
const API = process.env.REACT_APP_API_URL;

function TransactionDetails() {
  const [transaction, setTransaction] = useState([]);
  let { index } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((response) => {
        setTransaction(response.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [index, navigate]);

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
    <article>
      <table>
        <tbody>
          <tr>
            <td>
              <h2>Date: {transaction.date}</h2>
            </td>
            <td>
              <h2>Name: {transaction.item_name} </h2>
            </td>
            <td>
              <h2>Amount: {transaction.amount}</h2>
            </td>
            <td>
              <h2>Source: {transaction.from}</h2>
            </td>
            <td>
              <h2>Category: {transaction.category}</h2>
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={handleDelete}>Delete</button>
      <Link to={`/transactions/${index}/edit`}>
        <button>Edit</button>
      </Link>
    </article>
  );
}
export default TransactionDetails;
