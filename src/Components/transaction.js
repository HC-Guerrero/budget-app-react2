import { Link } from 'react-routeer-dom';
function Transaction({ transaction, index }) {
  return (
    <tr>
      <h1>Bank Account Total:</h1>
      <td>{transaction.date}</td>
      <td>{transaction.category}</td>
      <td>{transaction.amount}</td>
    </tr>
  );
}
export default Transaction;
