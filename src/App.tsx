import Navbar from "./components/Navbar/Navbar.tsx";
import { Container, Typography } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Home from "./containers/Home/Home.tsx";
import PostForm from "./containers/PostForm/PostForm.tsx";

const App = () => (
  <>
    <header>
      <Navbar />
    </header>
    <Container maxWidth="lg">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/new-post" element={<PostForm />}></Route>
        <Route
          path="*"
          element={<Typography variant="h3">Page not found</Typography>}
        ></Route>
      </Routes>
    </Container>
  </>
);

export default App;
