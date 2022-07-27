import { Link } from 'react-router-dom';
function Transaction({ transaction, index }) {
  return (
    <tr>
      <h1>Bank Account Total:</h1>
      <td>{transaction.date}</td>
      <td>{transaction.category}</td>
      <td>{transaction.amount}</td>
      <td>
        <Link to={`/transactions/${index}`}>*</Link>
      </td>
    </tr>
  );
}
export default Transaction;
