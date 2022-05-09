import TransactionAction from "./component/TransactionAction";
import TransactionContent from "./component/TransactionContent";


function App() {
  return (
    <div className="container mw-md">
      <TransactionAction/>
      <TransactionContent/>

      
      <footer className="text-white-50 text-center py-3 fs-7">
        Copyright © 2021 Flyinggiraffe. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
