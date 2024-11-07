import Reception from "./pages/Reception/Reception";
import Layout from "./components/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import Floor from "./pages/Floor/Floor";
import PrivateRoute from "./utils/PrivateRoute";
import Forbidden from "./pages/Forbidden/Forbidden";




function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout> <Reception/></Layout>}>
        </Route>
        <Route path="/floor/:index" element={<PrivateRoute isAllowed={true}> <Layout> <Floor /></Layout></PrivateRoute>}>
        </Route>
        <Route path="/error" element={<Layout> <Forbidden/></Layout>}>
        </Route>
      </Routes>
    </>
  );
}

export default App;
