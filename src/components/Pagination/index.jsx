import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";
const Pagination = ({ onChangePage }) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      pageRangeDisplayed={5}
      pageCount={3}
      onPageChange={(event) => {
        onChangePage(event.selected + 1);
      }}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
