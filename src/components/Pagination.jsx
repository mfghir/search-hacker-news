import React from "react";
import { useGlobalContext } from "../Context/Context";

const Pagination = () => {
  const { isLoading, page, nbPages, handlePage } = useGlobalContext();

  return (
    <div className="pagination-container">
      <button disabled={isLoading} onClick={() => handlePage("dec")}>
        prev
      </button>
      <p>
        {page + 1} of {nbPages}
      </p>
      <button disabled={isLoading} onClick={() => handlePage("inc")}>
        next
      </button>
    </div>
  );
};

export default Pagination;
