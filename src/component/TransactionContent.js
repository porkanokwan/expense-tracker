import { useState } from "react";
import Report from "./Report";
import FilterBar from "./FliterBar";
import Pagination from "./Pagination";
import TransactionList from "./TransactionList";

function TransactionContent(props) {
  const { transactions, deleteTransaction, selectTransaction } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const [searchMonth, setSearchMonth] = useState("");
  const [searchYear, setSearchYear] = useState("");
  const [pageLimit, setPageLimit] = useState(10); // ใน 1 หน้า ให้มีได้ 10 อัน
  const [currentPage, setCurrentPage] = useState(1); // หน้า page ปัจจุบันอยู่หน้า 1

  const changeSearchTerm = (value) => {
    setSearchTerm(value);
  };

  const changeSearchMonth = (value) => {
    setSearchMonth(value);
  };

  const changeSearchYear = (value) => {
    setSearchYear(value);
  };

// เช็คค่า ถ้าค่า search เป็น '' ทั้งหมด ให้ส่งค่า state transactions แบบไม่ต้อง filter แต่ถ้าไม่เท่ากับ '' ให้เอา transactions ไป filter ต้องเช็คเพราะ ถ้าไม่เช็คทุกคั้งที่ render component มันจะ filter ทุกครั้งโดยไม่จำเป็น
//  ถ้าเขียนแบบนี้เวลาไม่มีการ search จะทำให้ filterTransactions = transactions ส่งผลให้ filterTransactions ชี้ไปที่ ref เดียวกันกับ transactions ดังนั้น ต้องระวังห้ามแก้ไขค่าใน filterTransactions เพราะ จะทำให้ค่าใน transactions จะโดนแก้ตามไปด้วย
const filterTransactions = searchTerm === '' && searchMonth === '' && searchYear === '' ?  transactions : transactions.filter(
    item => ( item.payee.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.type.toLowerCase().includes(searchTerm.toLowerCase()) ) &&
    ( new Date(item.date).getMonth() === searchMonth || searchMonth === '' ) && ( new Date(item.date).getFullYear() === searchYear || searchYear === '' )
  );

  const changePageLimit = (value) => {
    setPageLimit(value)
  };
  const changeCurrentPage = (value) => {
    setCurrentPage(value)
  };

//   ['a', 'b', 'c', 'd', 'e', 'f'] currentPage 1 show index ที่ 0 - 5 (เอา 4 ไม่เอา 5), page 2 show index ที่ 5 - 10
  const showTransaction = filterTransactions.slice((currentPage-1) * pageLimit, pageLimit*currentPage)

  return (
    <>
      <Report transactions={filterTransactions} />
      <FilterBar
        searchTerm={searchTerm}
        searchMonth={searchMonth}
        searchYear={searchYear}
        changeSearchTerm={changeSearchTerm}
        changeSearchMonth={changeSearchMonth}
        changeSearchYear={changeSearchYear}
      />
      <Pagination filterTransactions={filterTransactions} numTransactions={filterTransactions.length} changePageLimit={changePageLimit} changeCurrentPage={changeCurrentPage} pageLimit={pageLimit} currentPage={currentPage}/>
      <TransactionList
        transactions={showTransaction}
        deleteTransaction={deleteTransaction}
        selectTransaction={selectTransaction}
      />
    </>
  );
}

export default TransactionContent;
