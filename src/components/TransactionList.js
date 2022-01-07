import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transactions from "./Transactions";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((trans) => (
          <Transactions key={trans.id} trans={trans} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
