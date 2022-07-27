import { useEffect, useState } from 'react';
import axios from 'axios';
import Transactions from './transaction';
import './transactionsGallery.css';
const API = process.env.REACT_APP_API_URL;

function TransactionsGallery() {
  const [Transaction, setTransaction] = useState([]);
  useEffect(() => {
    axios.get(`${API}/transactions`).then((response) => {
      setTransaction(response.data);
      console.log(response);
    });
  }, []);
  return (
    <div className='transactionsGallery'>
      <section>
        <table>
          <tbody>
            <tr>
              <th className='TransactEntries'>Transaction Entries:</th>
            </tr>
          </tbody>
          <tbody>
            {Transaction.map((transaction, index) => {
              return (
                <Transactions
                  key={index}
                  transaction={transaction}
                  index={index}
                />
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default TransactionsGallery;
