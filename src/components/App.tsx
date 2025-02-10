import { BrowserRouter, Route, Routes } from "react-router";
import RecipeGallary from "../pages/RecipeGallary";
import HomePage from "../pages/HomePage";
import UserPage from "../pages/UserPage";
import Info from "../pages/Info";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="recipe_gallary" element={<RecipeGallary />} />
        <Route path="user" element={<UserPage />} />
        <Route path="info" element={<Info />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
