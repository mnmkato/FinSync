import supabase from "../supabase";
import NavGrid from "../NavGrid";
import { useEffect, useState } from "react";
import Auth from "../pages/Auth";
import { Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const checkUser = async () => {
    const { data } = await supabase.auth.getUser();
    setUser(data.user);
    setLoading(false);
  };

  useEffect(() => {
    checkUser();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setUser(null); // Update user state immediately on sign out
  };

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  if (!user) {
    return (
      <div className="text-center">
        <Auth checkUser={checkUser} />
      </div>
    );
  }

  return (
    <>
    <Card>
  <CardHeader className="flex items-end">
  <Button variant="destructive" onClick={handleSignOut}>Sign out</Button>
  </CardHeader>
  <CardContent>
  <NavGrid />
  <Outlet />
  </CardContent>
  <CardFooter>
   
  </CardFooter>
</Card>

    
    
    </>
  );
}
