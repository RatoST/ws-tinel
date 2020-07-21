import React from 'react';
import BackgroundPic from '../images/backgroundW.png';
import Brush from '../images/brush.png';
import Fed from '../images/fed.png';
import Bed from '../images/bed.png';
import Mar from '../images/mar.png';

const wsList = [
    {
        id:1,
        image:<img src={BackgroundPic} alt="test"/>,
        catIcon:<img src={Brush} alt="BrushIco"/>,
        date:<time dateTime="2020-07-27">July 27 2020</time>,
        time:<time dateTime="08:00">08:00</time>,
        title:"Desing WS",
        price:199,
        speaker:"Mike Designer",
        descriptionWs:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",


    },
    {
        id:2,
        image:<img src={BackgroundPic} alt="test" />,
        catIcon:<img src={Fed} alt="FedIco"/>,
        date:<time dateTime="2020-07-27">July 27 2020</time>,
        time:<time dateTime="10:00">10:00</time>,
        title:"FrontEndDev WS",
        price:149,
        speaker:"Shime Razvojnik",
        descriptionWs:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    },
    {
        id:3,
        image:<img src={BackgroundPic} alt="test" />,
        catIcon:<img src={Bed} alt="BedIco"/>,
        date:<time dateTime="2020-08-07">August 7 2020</time>,
        time:<time dateTime="09:00">09:00</time>,
        title:"BackEndDev WS",
        price:237,
        speaker:"Mate Znanstvenik",
        descriptionWs:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    },
    {
        id:4,
        image:<img src={BackgroundPic} alt="test" />,
        catIcon:<img src={Mar} alt="MarIco"/>,
        date:<time dateTime="2020-08-07">August 7 2020</time>,
        time:<time dateTime="11:00">11:00</time>,
        title:"Marketing WS",
        price:117,
        speaker:"Kupi Prodoj",
        descriptionWs:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    },
    {
        id:5,
        image:<img src={BackgroundPic} alt="test"/>,
        catIcon:<img src={Brush} alt="BrushIco"/>,
        date:<time dateTime="2020-07-27">July 27 2020</time>,
        time:<time dateTime="12:00">12:00</time>,
        title:"Design WS",
        price:337,
        speaker:"Lipa Mare",
        descriptionWs:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    },
    {
        id:6,
        image:<img src={BackgroundPic} alt="test" />,
        catIcon:<img src={Fed} alt="FedIco"/>,
        date:<time dateTime="2020-07-27">July 27 2020</time>,
        time:<time dateTime="14:00">14:00</time>,
        title:"FrontEndDev WS",
        price:274,
        speaker:"Gust Ga Slusat",
        descriptionWs:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    }
];

export default wsList;