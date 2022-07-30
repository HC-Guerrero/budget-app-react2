import { useEffect, useState } from 'react';
import axios from 'axios';
import Transactions from './transaction';
import './transactionsGallery.css';
const API = process.env.REACT_APP_API_URL;

function TransactionsGallery() {
  const [transaction, setTransaction] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((response) => {
        console.log(response.data);
        setTransaction(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className='transactionsGallery'>
      <section>
        <div className='TransactEntries'>Transaction Entries:</div>

        <table>
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
