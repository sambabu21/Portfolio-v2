import About from "../Components/About/Index";
import Contact from "../Components/Contact/Index";
import Home from "../Components/Home/Index";
import Skills from "../Components/Skills/Index";
import Work from "../Components/Work/Index";
import Footer from "./Footer";
import Header from "./Header";

export default function MainLayout(){
    return (
        <>
            <Header />
            <Home />
            <Work />
            <Skills />
            <About />
            <Contact />
            <Footer />
        </>
    )
}