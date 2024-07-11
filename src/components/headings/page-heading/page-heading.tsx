import React from "react";

import { PageHeadingRoot } from "./page-heading.style";

type PageHeadingProps = {
  children: React.ReactNode;
};

export default function PageHeading({ children }: PageHeadingProps) {
  return <PageHeadingRoot>{children}</PageHeadingRoot>;
}
