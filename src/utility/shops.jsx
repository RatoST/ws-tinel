import React from 'react';
import BackgroundPic from '../images/backgroundW.png';
import DetImg from '../images/detailBck.png'
import Brush from '../images/brush.png';
import Fed from '../images/fed.png';
import Bed from '../images/bed.png';
import Mar from '../images/mar.png';

const shops = {
    "first-shop": {
        id:1,
        image:BackgroundPic,
        catIcon:Brush,
        theme:"design",
        date:<time dateTime="2020-07-27">July 27 2020</time>,
        time:<time dateTime="08:00">08:00</time>,
        title:"Desing WS",
        price:199,
        speaker:"Mike Designer",
        detImg:DetImg,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",


    },
    "second-shop": {
        id:2,
        image:BackgroundPic,
        catIcon:Fed,
        theme:"fed",
        date:<time dateTime="2020-07-27">July 27 2020</time>,
        time:<time dateTime="10:00">10:00</time>,
        title:"FrontEndDev WS",
        price:149,
        speaker:"Shime Razvojnik",
        detImg:DetImg,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    },
    "third-shop": {
        id:3,
        image:BackgroundPic,
        catIcon:Bed,
        theme:"bed",
        date:<time dateTime="2020-07-27">July 27 2020</time>,
        time:<time dateTime="12:00">12:00</time>,
        title:"BackEndDev WS",
        price:237,
        speaker:"Mate Znanstvenik",
        detImg:DetImg,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    },
    "fourth-shop": {
        id:4,
        image:BackgroundPic,
        catIcon:Mar,
        theme:"mar",
        date:<time dateTime="2020-08-12">Aug 12 2020</time>,
        time:<time dateTime="08:00">08:00</time>,
        title:"Marketing WS",
        price:117,
        speaker:"Kupi Prodoj",
        detImg:DetImg,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    },
    "fifth-shop": {
        id:5,
        image:BackgroundPic,
        catIcon:Brush,
        theme:"design",
        date:<time dateTime="2020-08-12">Aug 12 2020</time>,
        time:<time dateTime="10:00">10:00</time>,
        title:"Design WS",
        price:337,
        speaker:"Lipa Mare",
        detImg:DetImg,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    },
    "sixt-shop": {
        id:6,
        image:BackgroundPic,
        catIcon:Fed,
        theme:"fed",
        date:<time dateTime="2020-08-12">Aug 12 2020</time>,
        time:<time dateTime="12:00">12:00</time>,
        title:"FrontEndDev WS",
        price:274,
        speaker:"Gust Ga Slusat",
        detImg:DetImg,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    }
};

export default shops;