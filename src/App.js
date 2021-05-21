import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/jquery/dist/jquery.min.js";

import "./css/Landingpage.css";
import Landingpage from "./Landingpage";
import { Route, Link } from "react-router-dom";
import Userproflie from "./Userproflie";
import Singleart from "./Singleart";
import "./css/responsive.css";
import GalleryPage from "./GalleryPage";


function App() {
    return (
        <>
            <Route exact path="/" component={Landingpage} />
            <Route exact path="/Userproflie" component={Userproflie} />
            <Route exact path="/Singleart" component={Singleart} />
            <Route exact path="/Gallery" component={GalleryPage}/>
        </>
    );
}

export default App;
