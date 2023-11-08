import React from "react";
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs";
import Tasks from "@/components/common/Tasks";
async function fetchCompleted(id: string | null) {
  if (!id) return;
  const res = await prisma.task.findMany({
    where: {
      userId: id,
      isCompleted: true,
    },
  });
  if (!res) return [];
  return res;
}
async function Completed() {
  const { userId } = auth();
  const res: any = await fetchCompleted(userId);

  return (
    <div>
      <Tasks title="Completed Tasks" data={res} />
    </div>
  );
}

export default Completed;
