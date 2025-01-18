import { BrowserRouter, Route, Routes } from "react-router";
import ShowListPage from "./Pages/ShowList.Page";
import ShowDetailsPage from "./Pages/ShowDetails.Page";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<ShowListPage />} />
          <Route path="/show/:showId" element={<ShowDetailsPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
