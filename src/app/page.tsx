import { redirect } from "next/dist/client/components/navigation";

export default function Home() {
  const loggedIn = true;
  if (loggedIn) {
  }
  redirect("/login");
}
