"use client";

import React, { useState } from "react";

import { cn } from "@/lib/utils";
import { Loader, Trash } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import EditTask from "./EditTask";
import { useRouter } from "next/navigation";
import axios from "axios";

interface ITask {
  title: string;
  isCompleted: boolean;
  id: string;
  isImportant: boolean;
  description: string | TrustedHTML;
  date: string;
}
import { format, parseISO } from "date-fns";

function TaskItem(props: ITask) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const deleteTask = async (id: string) => {
    try {
      setLoading(true);
      await axios.delete(`/api/task/${id}`);
      router.refresh();
    } catch (error) {
      console.log("Error deleting");
    } finally {
      setLoading(false);
    }
  };

  const bg = {
    done: "bg-green-500",
    pending: "bg-red-500",
  };

  return (
    <div className={cn("block max-w-sm p-6 bg-background border rounded-lg")}>
      <h5 className="mb-2 capitalize text-2xl font-bold tracking-tight ">
        {props.title}
      </h5>
      <div
        className="mb-4"
        dangerouslySetInnerHTML={{ __html: props.description }}
      />
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <Badge className={`${props.isCompleted ? bg.done : bg.pending}`}>
            {props.isCompleted ? "Completed" : "Incomplete"}
          </Badge>
          <Badge className={`${props.isImportant ? bg.done : bg.pending}`}>
            {props.isImportant ? "Important" : "UnImportant"}
          </Badge>
        </div>

        <div className="flex items-center space-x-2">
          <Button onClick={() => deleteTask(props.id)} size="icon">
            {loading ? <Loader /> : <Trash />}
          </Button>
          <EditTask id={props.id} />
        </div>
        <div>
          <p className="text-end">
            {format(parseISO(props.date), "dd-MM-yyy")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TaskItem;
