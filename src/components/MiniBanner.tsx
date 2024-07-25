import { Box, Typography, useTheme } from "@mui/material";
import blobOutline from "../assets/blob-outline.svg";
import blobSolid from "../assets/blob-solid.svg";
import stars from "../assets/stars.svg";
import wallet from "../assets/wallet.svg";
import Button from "./Button";

type MiniBannerProps = {
  title: string;
  description: string;
  buttonText: string;
  buttonOnClick?: () => void;
};
export default function MiniBanner({
  title,
  buttonOnClick,
  buttonText,
  description,
}: MiniBannerProps) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        my: 4,
        p: 3,
        borderRadius: 3,
        background: "linear-gradient(108deg, #8599FF 33.83%, #DAE0FF 114.7%)",
        display: "flex",
        rowGap: 4,
        width: "467px",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "self-start",
        position: "relative",
        overflow: "hidden",
        "::after": {
          content: '""',
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          position: "absolute",
          backgroundColor: "rgba(117,0,234,0.1)",
          zIndex: 0,
        },
      }}
    >
      <div style={{ zIndex: 1 }}>
        <Typography
          sx={{
            textTransform: "uppercase",
            fontSize: 11,
            fontWeight: "bold",
            color: theme.palette.common.white,
          }}
          variant="h5"
        >
          {title}
        </Typography>
        <Typography
          marginTop={1.5}
          sx={{
            fontSize: 24,
            fontWeight: 600,
            color: theme.palette.common.white,
            width: "70%",
          }}
        >
          {description}
        </Typography>
      </div>
      <Button
        onClick={buttonOnClick}
        variant="outlined"
        sx={{ zIndex: 1 }}
        size={"small"}
      >
        {buttonText}
      </Button>
      <img
        src={blobOutline}
        alt="blob outline"
        width={280}
        style={{
          position: "absolute",
          left: -80,
          top: -20,
        }}
      />
      <img
        src={blobSolid}
        alt="blob solid"
        style={{
          position: "absolute",
          right: -300,
          top: -80,
        }}
      />
      <img
        src={stars}
        alt="stars"
        style={{ position: "absolute", left: 10, top: -5 }}
      />
      <img
        src={stars}
        alt="stars"
        width={850}
        style={{
          position: "absolute",
          right: -450,
          top: 0,
        }}
      />
      <img
        src={wallet}
        alt="wallet"
        width={120}
        style={{
          position: "absolute",
          right: 10,
          top: 55,
          transform: "rotate(-18.603deg)",
          filter: "drop-shadow(13px 4px 56px rgba(16, 24, 40, 0.20))",
          zIndex: 2,
        }}
      />
      <img
        src={wallet}
        alt="wallet"
        width={142}
        style={{
          position: "absolute",
          right: 5,
          bottom: -35,
          transform: "rotate(-18.69deg)",
          filter: "drop-shadow(13px 4px 56px rgba(16, 24, 40, 0.20))",
          zIndex: 3,
        }}
      />
    </Box>
  );
}
