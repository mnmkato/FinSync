import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

export default function AddEntry() {
  const [open, setOpen] = useState(false);

  // Define media queries
  const isDesktop = useMediaQuery({ minWidth: 1024 }); // For desktop
  const isMobile = useMediaQuery({ maxWidth: 1023 }); // For mobile

  return (
    <>
      {/* Dialog for desktop screens */}
      {isDesktop && (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button>Add inventory</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add New item to inventory</DialogTitle>
              <DialogDescription>
                Make changes to your list of inventory here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <InventoryForm />
          </DialogContent>
        </Dialog>
      )}

      {/* Drawer for mobile screens */}
      {isMobile && (
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerTrigger asChild>
            <Button >Add inventory</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader className="text-left">
              <DrawerTitle>Add inventory</DrawerTitle>
              <DrawerDescription>
              Make changes to your list of inventory here. Click save when you're done.
              </DrawerDescription>
            </DrawerHeader>
            <InventoryForm className="px-4" />
            <DrawerFooter className="pt-2">
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      )}
    </>
  );
}

function InventoryForm({ className }: React.ComponentProps<"form">) {
  return (
    <form className={cn("grid items-start gap-4", className)}>
      
      <div className="grid gap-2">
        <Label htmlFor="item-name">Item Name</Label>
        <Input type="text" id="item-name" placeholder="Enter item name" />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="category">Category</Label>
        <Input type="text" id="category" placeholder="Enter category" />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="stock-level">Stock Level</Label>
        <Input type="number" id="stock-level" placeholder="Enter stock level" />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="purchase-price">Purchase Price</Label>
        <Input type="number" id="purchase-price" placeholder="Enter purchase price" step="0.01" />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="selling-price">Selling Price</Label>
        <Input type="number" id="selling-price" placeholder="Enter selling price" step="0.01" />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="supplier">Supplier</Label>
        <Input type="text" id="supplier" placeholder="Enter supplier name" />
      </div>

      <Button type="submit">Save changes</Button>
    </form>
  );
}
