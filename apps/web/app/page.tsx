import { client } from "@repo/db/client";

export default async function Home() {
  const user = await client.user.findFirst();
  return (
    <div>
      <div>This is the Username: {user?.username}</div>
      <div>This is the User_id: {user?.id}</div>
    </div>
  );
}
