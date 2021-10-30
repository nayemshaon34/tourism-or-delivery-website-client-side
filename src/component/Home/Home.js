import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Menubar from '../Menubar/Menubar';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Menubar></Menubar>
            <Header></Header>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;