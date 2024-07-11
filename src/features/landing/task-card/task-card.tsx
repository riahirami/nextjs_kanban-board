import { Stack, Typography } from "@mui/material";

import {
  StyledTaskCardRoot,
  StyledPriority,
  StyledTitle,
  StyledDate,
  StyledCardContainer,
  StyledDeleteOutlineOutlinedIcon,
} from "./task-card.style";
import { formatDate } from "@/utils/helpers";

type TaskCardProps = {
  id: string;
  title: string;
  priority: string;
  date: string;
  deleteTask: (id: string) => void;
};

export default function TaskCard({
  id,
  title,
  priority,
  date,
  deleteTask,
}: TaskCardProps) {
  return (
    <Stack p={2} spacing={2}>
      <StyledCardContainer>
        <Stack spacing={1}>
          <StyledPriority priority={priority}>{priority}</StyledPriority>
          <StyledTitle>{title}</StyledTitle>
          <StyledDate>{formatDate(date)}</StyledDate>
        </Stack>
        <Typography onClick={() => deleteTask(id)}>
          <StyledDeleteOutlineOutlinedIcon color={"info"} />
        </Typography>
      </StyledCardContainer>
    </Stack>
  );
}
