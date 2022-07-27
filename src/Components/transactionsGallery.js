import { useEffect, useState } from 'react';
import axios from 'axios';
import Transactions from './transactions';
const API = process.env.REACT_APP_API_URL;

function TransactionsGallery() {
  const [transaction, setTransaction] = useState([]);
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
          <thread>
            <tr>
              <th>Transaction Entries</th>
            </tr>
          </thread>
          <tbody>
            {transaction.map((transaction, index) => {
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
