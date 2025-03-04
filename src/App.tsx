import "./App.css";
import Inventory from "./pages/Inventory";
import Sales from "./pages/Sales";
import Expenses from "./pages/Expenses";
import MonthlyProfitLoss from "./pages/MonthlyProfitLoss";
import OrdersDeliveries from "./pages/OrdersDeliveries";
import Customers from "./pages/Customers";
import Suppliers from "./pages/Suppliers";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} >
        <Route path="inventory" element={<Inventory />} />
        <Route path="sales" element={<Sales />} />
        <Route path="expenses" element={<Expenses />} />
        <Route path="monthly-profit-loss" element={<MonthlyProfitLoss />} />
        <Route path="orders-deliveries" element={<OrdersDeliveries />} />
        <Route path="customers" element={<Customers />} />
        <Route path="suppliers" element={<Suppliers />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
