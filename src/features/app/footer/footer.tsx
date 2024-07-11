import { Typography } from "@mui/material";
import { FooterRoot } from "./footer.style";

export default async function Footer() {
  return (
    <FooterRoot>
      <Typography variant="h6" fontWeight={"bold"}>
        All right reserved Kernel 2024
      </Typography>
    </FooterRoot>
  );
}
