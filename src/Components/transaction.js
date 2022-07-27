import { Link } from 'react-router-dom';
function Transaction({ transaction, index }) {
  return (
    <article>
      <tr>
        <h1>Bank Account Total:</h1>
        <td>
          <h2>{transaction.date}</h2>
        </td>
        <td>
          <h2>{transaction.category}</h2>
        </td>
        <td>
          <h2>{transaction.amount}</h2>
        </td>
        <td>
          <Link to={`/transactions/${index}`}>*</Link>
        </td>
      </tr>
    </article>
  );
}
export default Transaction;
