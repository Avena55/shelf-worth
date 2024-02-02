/* eslint-disable react/no-unescaped-entities */
import HomePage from "@/components/HomePage/HomePage";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/authOptions";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return <HomePage session={session} />;
}
