"use client";

import PageHeading from "@/components/headings/page-heading/page-heading";

import { StyledLandingPageRoot } from "./landing-page.style";

import TaskList from "@/components/tasksList/tasksList";

export default async function LandingPage() {
  return (
    <StyledLandingPageRoot>
      <PageHeading>My Kanban Board</PageHeading>

      <TaskList />
    </StyledLandingPageRoot>
  );
}
