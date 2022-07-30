import { Link } from 'react-router-dom';
import './transaction.css';
function Transactions({ transaction, index }) {
  return (
    <table className='TransacTable'>
      <thead>
        <tr>
          <th scope='col'>Date:</th>
          <th scope='col'>Category:</th>
          <th scope='col'> Amount:</th>
          <th scope='col'>Link:</th>
        </tr>
      </thead>
      <tr id='transacTR'>
        <td>
          <h2 id='dateTD'>{transaction.date}</h2>
        </td>

        <td>
          <h2 id='categoryTD'>{transaction.category}</h2>
        </td>

        <td>
          <h2 id='amountTD'>{transaction.amount}</h2>
        </td>
        <td>
          <Link to={`/transactions/${index}`}>Show More</Link>
        </td>
      </tr>
    </table>
  );
}
export default Transactions;
