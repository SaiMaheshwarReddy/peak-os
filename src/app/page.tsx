import { redirect } from "next/dist/client/components/navigation";
import Image from "next/image";

export default function Home() {
  const loggedIn = true;
  if (loggedIn) {
  }
  redirect("/login");
}
