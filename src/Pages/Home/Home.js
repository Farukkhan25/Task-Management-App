import React, { Fragment, useEffect, useState } from 'react';
import Hero from '../../Components/Hero/Hero';

const Home = () => {
    const [theme, setTheme] = useState("");
    const toggleTheme = () => {
      theme === "" ? setTheme("light-theme") : setTheme("");
    };

    useEffect(() => {
      document.body.className = theme;
    }, [theme]);

    return (
      <Fragment>
        <Hero theme={theme} />
        
      </Fragment>
    );
};

export default Home;