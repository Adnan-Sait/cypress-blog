import React from "react";
import { useSelector } from "react-redux";
import { quotesSelector } from "../slices/quotesSlice";

function QuotesPage() {
  /**
   * @type {{quotes: import("../slices/quotesSlice").QuotesSource[]}}
   */
  const { quotes } = useSelector(quotesSelector);

  return (
    <div>
      {quotes.map((item) => {
        return (
          <li>
            <p>{item.quote}</p>
            <p>{item.author}</p>

            <div>
              {item.category.map((category) => {
                return <p>{category}</p>;
              })}
            </div>
          </li>
        );
      })}
    </div>
  );
}

export default QuotesPage;
