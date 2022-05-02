import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";

export const Button = () => {
  return (
    <IconButton
      sx={{
        border: "1px solid #794BFF",
        background: "#EAE8FE",
        borderRadius: 2,
        height: 45,
        width: 45,
      }}
    >
      <AddIcon sx={{ color: "#794BFF" }} />
    </IconButton>
  );
};
