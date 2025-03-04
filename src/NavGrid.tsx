import { Link } from 'react-router-dom';
import { FaWarehouse, FaMoneyBill, FaDollarSign, FaShoppingBag, FaUsers, FaTruck } from 'react-icons/fa';
import { FaChartSimple } from "react-icons/fa6";

export default function NavGrid() {
  return (
    <div className='nav-buttons'>
      <Link to="/inventory">
        <button>
          <div>
            <FaWarehouse />
          </div>
          <span>Inventory</span>
        </button>
      </Link>

      <Link to="/sales">
        <button>
          <div>
            <FaMoneyBill />
          </div>
          <span>Sales</span>
        </button>
      </Link>

      <Link to="/expenses">
        <button>
          <div>
            <FaDollarSign />
          </div>
          <span>Expenses</span>
        </button>
      </Link>

      <Link to="/monthly-profit-loss">
        <button>
          <div>
            <FaChartSimple />
          </div>
          <span>Monthly Profit & Loss</span>
        </button>
      </Link>

      <Link to="/orders-deliveries">
        <button>
          <div>
            <FaShoppingBag />
          </div>
          <span>Orders & Deliveries</span>
        </button>
      </Link>

      <Link to="/customers">
        <button>
          <div>
            <FaUsers />
          </div>
          <span>Customers</span>
        </button>
      </Link>

      <Link to="/suppliers">
        <button>
          <div>
            <FaTruck />
          </div>
          <span>Suppliers</span>
        </button>
      </Link>
    </div>
  );
}
