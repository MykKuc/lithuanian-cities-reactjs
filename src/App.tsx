import React from 'react';
import {ChakraProvider} from "@chakra-ui/react";
import MainPage from "./pages/MainPage";
import {Route, Routes} from "react-router-dom";
import VilniusPage from "./pages/VilniusPage";
import KaunasPage from "./pages/KaunasPage";
import KlaipedaPage from "./pages/KlaipedaPage";
import SiauliaiPage from "./pages/SiauliaiPage";
import HeaderTabs from "./components/layout/header/HeaderTabs";

function App() {
  return (
      <div>

    <ChakraProvider>
        <HeaderTabs/>









    </ChakraProvider>
    </div>
  );
}

export default App;
