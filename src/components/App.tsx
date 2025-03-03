import { BrowserRouter, Route, Routes } from "react-router";
import RecipeGallery from "../pages/RecipeGallery";
import HomePage from "../pages/HomePage";
import UserPage from "../pages/UserPage";
import Info from "../pages/Info";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="recipe_gallary" element={<RecipeGallery />} />
        <Route path="user" element={<UserPage />} />
        <Route path="info" element={<Info />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
