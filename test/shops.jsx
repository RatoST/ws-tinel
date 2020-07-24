import React from 'react';
import BackgroundPic from '../images/backgroundW.png';
import DetImg from '../images/detailBck.png'
import Brush from '../images/brush.png';
import Fed from '../images/fed.png';
import Bed from '../images/bed.png';
import Mar from '../images/mar.png';

const shops = 
    [
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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

    },
    {
        id:7,
        image:BackgroundPic,
        catIcon:Fed,
        theme:"fed",
        date:<time dateTime="2020-08-12">Aug 12 2020</time>,
        time:<time dateTime="14:00">14:00</time>,
        title:"FrontEndDev WS",
        price:374,
        speaker:"Kodira Kolud",
        detImg:DetImg,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    },
    {
        id:8,
        image:BackgroundPic,
        catIcon:Brush,
        theme:"design",
        date:<time dateTime="2020-08-14">Aug 14 2020</time>,
        time:<time dateTime="08:00">08:00</time>,
        title:"Design WS",
        price:439,
        speaker:"Katarina Her",
        detImg:DetImg,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    },
    {
        id:9,
        image:BackgroundPic,
        catIcon:Mar,
        theme:"mar",
        date:<time dateTime="2020-08-14">Aug 14 2020</time>,
        time:<time dateTime="10:00">10:00</time>,
        title:"Marketing WS",
        price:327,
        speaker:"Prodajen Uje",
        detImg:DetImg,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    },
    {
        id:10,
        image:BackgroundPic,
        catIcon:Mar,
        theme:"mar",
        date:<time dateTime="2020-08-14">Aug 14 2020</time>,
        time:<time dateTime="12:00">12:00</time>,
        title:"Marketing WS",
        price:721,
        speaker:"Max Manus",
        detImg:DetImg,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    },
    {
        id:11,
        image:BackgroundPic,
        catIcon:Bed,
        theme:"bed",
        date:<time dateTime="2020-08-17">Aug 17 2020</time>,
        time:<time dateTime="08:00">08:00</time>,
        title:"BackEndDev WS",
        price:630,
        speaker:"John Johnny",
        detImg:DetImg,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    },
    {
        id:12,
        image:BackgroundPic,
        catIcon:Bed,
        theme:"bed",
        date:<time dateTime="2020-08-17">Aug 17 2020</time>,
        time:<time dateTime="12:00">12:00</time>,
        title:"BackEndDev WS",
        price:524,
        speaker:"Jo Maracic",
        detImg:DetImg,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    }
    
]
;

export default shops;