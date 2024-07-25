import { Container, useMediaQuery } from "@mui/material";
import Banner from "./Banner";
import theme from "./theme";
function App() {
  const mobileView = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Container>
      <Banner
        title={`${!mobileView ? "Introducing: " : ""} test service`}
        buttonText="Learn more"
        description={
          mobileView
            ? "Lorem sit and dolor consector lorlepspsm!"
            : "Lorem ipsum dolor sit amet, consectetur adipiscing elit donec vitae faucibus."
        }
        buttonOnClick={() => alert("onClick")}
      />
    </Container>
  );
}

export default App;
