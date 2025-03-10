"use server";

import { signOut } from "@/auth";

export const handleSignOut = async () => {
  console.log("User logged out");
  try {
    await signOut();
  } catch (error) {
    throw error;
  }
};
