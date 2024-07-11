"use client"; // Add this line at the top

import useCrudOperations from "@/hooks/useCrudOperations";
import React, { useState } from "react";
import { StyledAddButton, StyledStatusTitle } from "./tasksList.style";
import { StatusEnum } from "@/utils/enum";
import { Stack } from "@mui/material";
import TaskCard from "@/features/landing/task-card/task-card";
import { CustomLoader } from "../CustomLoader/CustomLoader";
import DialogFormAddTask from "../dialogFormAddTask/DialogFormAddTask";
import { statusLabels } from "@/config/constants/constants";

const TaskList = () => {
  const [open, setOpen] = useState(false);
  const [taskStatus, setTaskStatus] = useState<StatusEnum>(StatusEnum.TODO);
  const { tasks, createTask, deleteTask, loading } = useCrudOperations();

  const handleCreateTask = (status: StatusEnum) => {
    setTaskStatus(status);
    handleClickOpen();
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (loading) return <CustomLoader />;

  return (
    <>
      <DialogFormAddTask
        open={open}
        handleClose={handleClose}
        handleAddTask={createTask}
        taskStatus={taskStatus}
      />
      <Stack direction="row" gap={2} flexWrap="wrap" justifyContent="center">
        {Object.entries(StatusEnum).map(([key, status]) => (
          <Stack key={status} spacing={1} alignItems="center">
            <StyledStatusTitle>{statusLabels[status]}</StyledStatusTitle>
            {tasks
              .filter((task) => task.status === status)
              .map((task) => (
                <TaskCard
                  key={task.id}
                  title={task.title}
                  priority={task.priority}
                  date={task.created_at}
                  id={task.id}
                  deleteTask={deleteTask}
                />
              ))}
            <StyledAddButton
              onClick={() => handleCreateTask(status as StatusEnum)}
            >
              + ADD
            </StyledAddButton>
          </Stack>
        ))}
      </Stack>
    </>
  );
};

export default TaskList;
