import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import illustration1 from "./assets/illustration1.svg";
import illustration2 from "./assets/illustration2.svg";
import stars from "./assets/stars.svg";
import wallet from "./assets/wallet.svg";
import Button from "./components/Button";

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
            textTransform: { xs: "uppercase", md: "capitalize" },
            fontSize: { xs: 11, md: 24 },
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
            fontSize: { xs: 24, md: 16 },
            fontWeight: { xs: 600, md: 500 },
            color: theme.palette.common.white,
            width: { xs: "70%", md: "100%" },
          }}
        >
          {description}
        </Typography>
      </div>
      <Button
        onClick={buttonOnClick}
        variant="outlined"
        sx={{ zIndex: 1 }}
        size={mobileView ? "small" : "large"}
      >
        {buttonText}
      </Button>
      <img
        src={illustration1}
        alt="illustration 1"
        width={mobileView ? 280 : 500}
        style={{
          position: "absolute",
          left: mobileView ? -80 : 10,
          top: mobileView ? -20 : 30,
        }}
      />
      <img
        src={illustration2}
        alt="illustration 2"
        style={{
          position: "absolute",
          right: mobileView ? -300 : 160,
          top: mobileView ? -80 : -5,
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
          right: mobileView ? -450 : -320,
          top: 0,
        }}
      />
      {mobileView && (
        <img
          src={wallet}
          alt="stars"
          style={{ position: "absolute", right: 0, bottom: 0 }}
        />
      )}
    </Box>
  );
}
