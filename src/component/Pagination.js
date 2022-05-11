import { useEffect } from "react";

function Pagination(props) {
  const {filterTransactions, numTransactions, changePageLimit, changeCurrentPage, currentPage, pageLimit} = props;

  // numPage จะได้หน้า page ทั้งหมดออกมา
  const numPage = Math.ceil(numTransactions / pageLimit);
  let list = [];
  for(let i = 1; i <= numPage; i++ ) {
    // list.push( <li key={i} className="page-item">
    //         <a href="/" className="page-link">
    //         <span>{i}</span>
    //         </a>
    //       </li> )
    list.push(i);
  }

  const handleClickPage = (e, pageNumber) => {
      e.preventDefault();
      changeCurrentPage(pageNumber);
  }

  const handlePageLimit = (e) => {
    changePageLimit(+e.target.value);
    // set ให้เป็นหน้า 1 ทุกครั้งที่เปลี่ยน pageLimit
    changeCurrentPage(1);
  }

  useEffect(() => {
    changeCurrentPage(1)
  }, [filterTransactions])

  // const diff = (currentPage * pageLimit) - numTransactions;
    return(
    <div className="mt-3 d-flex justify-content-between">
        <div className="d-flex align-items-center mb-3">
          <div>
            <select type="text" className="form-select form-select-sm" value={pageLimit} onChange={(e) => handlePageLimit(e)}>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select>
          </div>
          <span className="text-white-50 mx-2 fs-7">
            {/* Showing {( (currentPage - 1) * pageLimit ) + 1} to {currentPage * pageLimit > numTransactions ? (currentPage * pageLimit) - diff : currentPage * pageLimit } of {numTransactions} transactions */}
            Showing {( (currentPage - 1) * pageLimit ) + 1} to {currentPage === numPage ? numTransactions : currentPage * pageLimit } of {numTransactions} transactions
          </span>
        </div>
        <nav>
          <ul className="pagination pagination-sm">
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <a href="/" className="page-link" onClick={(e) => {
                  e.preventDefault();
                  changeCurrentPage(prev => prev - 1);
              }}>
                <span>&laquo;</span>
              </a>
            </li>
           {/* {list.map(item => item)} */}
           {list.map(el => (
            <li key={el} className={`page-item ${ currentPage === el ? 'active' : ''}`}>
              <a href="/" className="page-link" onClick={(e) => handleClickPage(e, el)}>
              <span>{el}</span>
              </a>
            </li>
           ))}
            <li className={`page-item ${currentPage === numPage ? 'disabled' : ''}`}>
              <a href="/" className="page-link" onClick={(e) => {
                  e.preventDefault();
                  changeCurrentPage(prev => prev + 1);
              }}>
                <span>&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    )
}

export default Pagination;