import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../../Pages/MenuPage/index.jsx";
import QuestionPage from "../../Pages/QuestionsPage/index.jsx";
import MaterialPage from "../../Pages/MaterialsPage/index.jsx";
import ContactsPage from "../../Pages/ContactsPage/index.jsx";
import NotFoundPage from "../../Pages/NotFoundPage/index.jsx";

const Main = () => {
  return (
    <Routes>
      <Route index={true} element={<MainPage />} />
      <Route path="/questions" element={<QuestionPage />} />
      <Route path="/materials" element={<MaterialPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Main;
