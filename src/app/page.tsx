"use client";
import { AuthScreen } from "@/features/auth/components/auth-screen";
import { useAuthActions } from "@convex-dev/auth/react";

import{Button} from "@/components/ui/button"

export default function Home() {

  const {signOut} = useAuthActions();
  return (
    <div>
      Logged in
      <Button onClick={()=>signOut()}>Sign Out</Button>
    </div>
  );
}
