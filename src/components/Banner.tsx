import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import blobOutline from "../assets/blob-outline.svg";
import blobSolid from "../assets/blob-solid.svg";
import stars from "../assets/stars.svg";
import Button from "./Button";

type BannerProps = {
  title: string;
  description: string;
  buttonText: string;
  buttonOnClick?: () => void;
};
export default function Banner({
  title,
  buttonOnClick,
  buttonText,
  description,
}: BannerProps) {
  const theme = useTheme();
  const mobileView = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        my: 4,
        p: 3,
        borderRadius: 3,
        background: "linear-gradient(108deg, #8599FF 33.83%, #DAE0FF 114.7%)",
        display: "flex",
        width: "100%",
        rowGap: 4,
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: { xs: "self-start", md: "center" },
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
            textTransform: "capitalize",
            fontSize: 24,
            fontWeight: "bold",
            color: theme.palette.common.white,
          }}
          variant="h5"
        >
          {title}
        </Typography>
        <Typography
          marginTop={{ xs: 1.5, md: 1 }}
          sx={{
            fontSize: 16,
            fontWeight: 500,
            color: theme.palette.common.white,
          }}
        >
          {description}
        </Typography>
      </div>
      <Button
        onClick={buttonOnClick}
        variant="outlined"
        sx={{ zIndex: 1 }}
        size="medium"
      >
        {buttonText}
      </Button>
      <img
        src={blobOutline}
        alt="blob outline"
        width={500}
        style={{
          position: "absolute",
          left: mobileView ? -300 : 10,
          top: mobileView ? -40 : 30,
        }}
      />
      {!mobileView && (
        <img
          src={blobSolid}
          alt="blob solid"
          style={{
            position: "absolute",
            right: 160,
            top: -5,
          }}
        />
      )}
      <img
        src={stars}
        alt="stars"
        style={{ position: "absolute", left: 10, top: -5, opacity: 0.7 }}
      />
      <img
        src={stars}
        alt="stars"
        width={850}
        style={{
          position: "absolute",
          right: -320,
          top: 0,
          opacity: 0.7,
        }}
      />
    </Box>
  );
}
