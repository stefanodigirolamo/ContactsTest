import { FC, useState, useMemo } from "react";
import { ImageAvatarProps } from "./types";
import Box from "@mui/material/Box";
import { CircleAvatar } from "./index";
import Avatar from "@mui/material/Avatar";

export const ImageAvatar: FC<ImageAvatarProps> = ({ source, id, firstName }) => {
  const [isErrorImg, setIsErrorImg] = useState<boolean>(false);

  const avatarError = useMemo(() => {
    const customValue = firstName.slice(0, 1);
    return customValue;
  }, [firstName]);

  return (
    <Box
      sx={{
        position: "absolute",
        display: "inline-flex",
        height: 100,
        zIndex: 1,
        left: "2%",
        top: "8%",
      }}
    >
      <CircleAvatar id={id} />
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
          objectFit: "cover",
        }}
      >
        {isErrorImg ? (
          <Avatar
            sx={{
              height: 80,
              width: 80,
              border: "2px solid #F9F9FC",
              background: "#282c34",
            }}
          >
            {avatarError}
          </Avatar>
        ) : (
          <Avatar
            src={source}
            onError={() => setIsErrorImg(true)}
            sx={{
              height: 80,
              width: 80,
              border: "2px solid #F9F9FC",
              background: "#F9F9FC",
            }}
          />
        )}
      </Box>
    </Box>
  );
};
