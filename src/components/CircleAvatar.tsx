import { FC, useMemo } from "react";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { CircleAvatarProps } from "./types";

export const CircleAvatar: FC<CircleAvatarProps> = ({ id }) => {
  
  const progressValue = useMemo(() => {
    const customValue = String(id).slice(0, 2);
    if (customValue === "99") {
      return Number("100");
    }
    return Number(customValue);
  }, [id]);

  return (
    <>
      <Stack>
        <CircularProgress
          variant="determinate"
          value={progressValue}
          size={100}
          sx={{
            "svg circle": { stroke: "url(#my_gradient)" },
            strokeLinecap: "round",
          }}
        />
        <svg height={80} width={80}>
          <defs>
            <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(250, 93, 117, 1)" />
              <stop offset="100%" stopColor="rgba(120, 100, 246, 1)" />
            </linearGradient>
          </defs>
        </svg>
      </Stack>

      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1,
          marginBottom: "6rem",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            backgroundColor: "#6A3EEA",
            color: "#fefefe",
            borderRadius: 50,
            height: 28,
            width: 28,
            fontSize: 13,
            fontWeight: 500,
          }}
        >
          {progressValue}
        </Typography>
      </Box>
    </>
  );
};
