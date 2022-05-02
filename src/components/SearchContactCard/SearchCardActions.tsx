import { FC } from "react";
import { cardActionsStyle } from "./styles";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";

export const SearchCardActions: FC = () => {
  return (
    <CardActions sx={cardActionsStyle}>
      <Typography sx={{ fontSize: 14 }} color="#8463E7" gutterBottom>
        Sta già condividendo{" "}
        <u>
          <a
            href="https://www.disneyplus.com/"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#8463E7", fontWeight: 600 }}
          >
            Disney Plus
          </a>
        </u>
      </Typography>
    </CardActions>
  );
};
