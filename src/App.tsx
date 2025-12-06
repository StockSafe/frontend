import { Box } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import businessMock from "./mock/business";

const App = () => {
  return (
    <Box>
      <Navbar />
      <>{businessMock.business.title}</>
    </Box>
  );
};

export default App;
