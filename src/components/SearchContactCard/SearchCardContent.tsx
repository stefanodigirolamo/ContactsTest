import { FC } from "react";
import { cardContentStyle } from "./styles";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Button } from "../Button";
import { SearchContentCardProps } from "./types";

export const SearchCardContent: FC<SearchContentCardProps> = ({ firstName, lastName }) => {
  return (
    <CardContent sx={cardContentStyle}>
      <Stack direction="column" sx={{ textAlign: "start" }}>
        <Typography sx={{ fontSize: 17, fontWeight: 500 }} color="#000000">
          {firstName + " " + lastName}
        </Typography>
        <Typography sx={{ fontSize: 14, fontWeight: 200 }} color="#818181">
          Nessuna connessione
        </Typography>
      </Stack>

      <Button />
    </CardContent>
  );
};
