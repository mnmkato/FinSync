import supabase from '../supabase'; 
import { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


interface InventoryItem {
  ItemID: number;
  ItemName: string;
  Category: string;
  StockLevel: number;
  PurchasePrice: number;
  SellingPrice: number;
  Supplier: string;
}

export default function Inventory() {
  const [inventoryData, setInventoryData] = useState<InventoryItem[]>([]);

  // Fetch data from Supabase
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('inventory')
        .select('*')

      if (error) {
        console.error('Error fetching data:', error);
      } else {
        console.log(data);
        setInventoryData(data);
      }
    };

    fetchData();
  }, []);
  
    return (
      <>
        <h1>Inventory</h1>
        <Table>
      <TableCaption>A list of your inventory items.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Item Name</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Stock Level</TableHead>
          <TableHead>Purchase Price</TableHead>
          <TableHead>Selling Price</TableHead>
          <TableHead>Supplier</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {inventoryData.map((item) => (
          <TableRow key={item.ItemID}>
            <TableCell className="font-medium">{item.ItemName}</TableCell>
            <TableCell>{item.Category}</TableCell>
            <TableCell>{item.StockLevel}</TableCell>
            <TableCell>{item.PurchasePrice}</TableCell>
            <TableCell>{item.SellingPrice}</TableCell>
            <TableCell>{item.Supplier}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
      </>
    );
  }