import Home from "./Routes/home/HomeComponent";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Routes/navigation/NavigationComponent";
import Authentication from "./Routes/authentication/AuthenticationComponent";

const Shop = () =>{
  return <h1>This is Shop page</h1>
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop/>} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
