import { PriorityEnum } from "@/utils/enum";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

interface DialogFormAddTaskProps {
  taskStatus: string;
  open: boolean;
  handleClose: () => void;
  handleAddTask: (task: any) => void;
}

const DialogFormAddTask = ({
  open,
  taskStatus,
  handleClose,
  handleAddTask,
}: DialogFormAddTaskProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setPriority(event.target.value as string);
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(event.target.value);
  };

  const handleSubmit = () => {
    handleAddTask({
      id: "",
      title: title,
      description: description,
      priority: priority,
      status: taskStatus,
      created_at: new Date().toISOString(),
    });
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add new task</DialogTitle>
      <DialogContent>
        <Stack style={{ gap: 8, margin: 12 }}>
          <TextField
            autoFocus
            required
            id="title"
            name="title"
            label="Task Title"
            type="title"
            fullWidth
            variant="outlined"
            onChange={handleTitleChange}
          />
          <TextField
            autoFocus
            required
            id="description"
            name="description"
            label="Task description"
            type="description"
            fullWidth
            variant="outlined"
            onChange={handleDescriptionChange}
          />

          <FormControl fullWidth>
            <InputLabel id="priority-select-label">Priority</InputLabel>
            <Select
              labelId="priority-select-label"
              id="priority-select"
              value={priority}
              label="Task Priority"
              onChange={handleChange}
            >
              <MenuItem value={PriorityEnum.LOW}>{PriorityEnum.LOW}</MenuItem>
              <MenuItem value={PriorityEnum.MEDIUM}>
                {PriorityEnum.MEDIUM}
              </MenuItem>
              <MenuItem value={PriorityEnum.HIGH}>{PriorityEnum.HIGH}</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Add</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogFormAddTask;
