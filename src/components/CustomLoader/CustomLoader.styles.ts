import { COLORS } from "@/utils/colors";
import { styled } from "@mui/material";
export const StyledLoaderContainer = styled("div")`
  .loader {
    border: 8px solid ${COLORS.GREY};
    border-top: 8px solid ${COLORS.HIGH_PRIORITY_BG};
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); /* Centering using translate */
    z-index: 1000;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
