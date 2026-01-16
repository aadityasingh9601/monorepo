import { client } from "@repo/db/client";

export default async function Home() {
  const user = await client.user.findFirst();
  return (
    <div>
      <div>Username: {user?.username}</div>
      <div>User_id: {user?.id}</div>
    </div>
  );
}
