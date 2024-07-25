import { Container } from "@mui/material";
import Banner from "./components/Banner";
import MiniBanner from "./components/MiniBanner";
function App() {
  return (
    <Container sx={{ display: "flex", flexDirection: "column" }}>
      <MiniBanner
        title="TEST SERVICE"
        buttonText="Learn more"
        description="Lorem sit and dolor consector lorlepspsm!"
        buttonOnClick={() => alert("mini banner")}
      />
      <Banner
        title="Introducing: test service"
        buttonText="Learn more"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit donec vitae faucibus."
        buttonOnClick={() => alert("banner")}
      />
    </Container>
  );
}

export default App;
