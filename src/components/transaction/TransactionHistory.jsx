import {Table, Thead, Tr} from './TransactionHistoryStyled'

const TransactionHistory = ({ transaction }) => {

  return (
    <Table>
      <Thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </Thead>

      <tbody>
        {transaction.map(({ id, type, amount, currency }) => {
          return (
            <Tr key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </Tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default TransactionHistory;
