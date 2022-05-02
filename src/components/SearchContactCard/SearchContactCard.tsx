import { FC } from "react";
import { SearchContactCardProps } from "../types";
import { cardStyle } from "./styles";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import { ImageAvatar } from "../ImageAvatar";
import { SearchCardContent } from "./index";
import { SearchCardActions } from "./index";

export const SearchContactCard: FC<SearchContactCardProps> = ({
  id,
  firstName,
  lastName,
  source,
}) => {
  return (
    <Stack sx={{ position: "relative" }}>
      <ImageAvatar source={source} id={id} firstName={firstName} />
      <Card key={id} sx={cardStyle}>
        <SearchCardContent firstName={firstName} lastName={lastName} />
        <SearchCardActions />
      </Card>
    </Stack>
  );
};
