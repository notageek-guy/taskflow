import Tasks from "@/components/common/Tasks";
import { prisma } from "@/lib/prisma";
import React from "react";
import { auth } from "@clerk/nextjs/server";

async function fetchTasks(id: string | null) {
  if (!id) return;
  const res = await prisma.task.findMany({
    where: {
      userId: id,
    },
  });
  if (!res) return [];
  return res;
}

async function Home() {
  const { userId } = auth();
  const data: any = await fetchTasks(userId);
  return (
    <div className="">
      <Tasks title="All Task" data={data} />
    </div>
  );
}

export default Home;
