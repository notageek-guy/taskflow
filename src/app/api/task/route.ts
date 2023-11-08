import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

import { auth } from "@clerk/nextjs";

export async function POST(req: Request) {
  try {
    const { userId } = auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized", status: 401 });
    }
    const data = await req.json();
    const task = await prisma.task.create({
      data: {
        userId,
        ...data,
      },
    });

    return NextResponse.json(task, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Error creating task", status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const { userId } = auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized", status: 401 });
    }

    const { id, isCompleted, isImportant, date, title, description } =
      await req.json();
    const task = await prisma.task.update({
      where: {
        id,
      },
      data: {
        isImportant,
        isCompleted,
        date,
        title,
        description,
        
      },
    });

    return NextResponse.json(task);
  } catch (error) {
    console.log("ERROR UPDATING TASK: ", error);
    return NextResponse.json({ error: "Error deleting task", status: 500 });
  }
}
