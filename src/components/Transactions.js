import React from "react";

const Transactions = ({ trans }) => {
  const sign = trans.amount < 0 ? "-" : "+";

  return (
    <li className={trans.amount < 0 ? "minus" : "plus"}>
      {trans.text}{" "}
      <span>
        {sign}${Math.abs(trans.amount)}{" "}
      </span>
      <button className="delete-btn">x</button>
    </li>
  );
};

export default Transactions;
