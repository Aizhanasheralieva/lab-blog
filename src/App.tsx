import Navbar from "./components/Navbar/Navbar.tsx";
import { Container, Typography } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Home from "./containers/Home/Home.tsx";
import About from "./containers/About/About.tsx";
import Contacts from "./containers/Contacts/Contacts.tsx";
import NewPost from "./containers/NewPost/NewPost.tsx";
import EditPost from "./containers/EditPost/EditPost.tsx";
import PostDetailedInformation from "./components/PostDetailedInformation/PostDetailedInformation.tsx";

const App = () => (
  <>
    <header>
      <Navbar />
    </header>
    <Container maxWidth="lg">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/posts" element={<Home />}></Route>
        <Route path="/posts/new-post" element={<NewPost />}></Route>
        <Route path="/posts/:idPost/edit" element={<EditPost />}></Route>
        <Route
          path="/posts/:idPost"
          element={<PostDetailedInformation />}
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
        <Route
          path="*"
          element={<Typography variant="h3">Page not found</Typography>}
        ></Route>
      </Routes>
    </Container>
  </>
);

export default App;
