import { Navigate } from 'react-router-dom'

import Homepage from '../components/homepage'

import DyingLight from '../components/ARPG/DyingLight'
import MHW from '../components/ARPG/MHW'


import Diablo2 from '../components/MMO-anheiLike/Diablo2'
import Diablo3 from '../components/MMO-anheiLike/Diablo3'
import ZTHJ from '../components/MMO-anheiLike/ZTHJ'

import QF from '../components/RTS/QF'
import Red2 from '../components/RTS/RA2'
import War3 from '../components/RTS/War3'

import Zmxl from '../components/Casual/zmxl'

const routes = [
    {
        path: '/homepage',
        element: <Homepage />
    },
    {
        path: '/mhw',
        element: <MHW />,
    },
    {
        path: '/dyinglight',
        element: <DyingLight />
    },
    {
        path: '/diablo2',
        element: <Diablo2 />
    },
    {
        path: '/diablo3',
        element: <Diablo3 />
    },
    {
        path: '/zthj',
        element: <ZTHJ />
    },
    {
        path: '/red2',
        element: <Red2 />
    },
    {
        path: '/war3',
        element: <War3 />
    },
    {
        path: '/7f',
        element: <QF />
    },
    {
        path: '/zmxl',
        element: <Zmxl />
    },
    {
        path: '/',
        element: <Navigate to='/homepage' />
    }
]

export default routes