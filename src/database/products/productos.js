/* import bolsoNegro from '../../assets/img/bolso-negro.jpg'
import collecBolsos1 from '../../assets/img/collec-bolsos.jpg'
import collecBolsos2 from '../../assets/img/collec-bolsos-2.jpg'

import gorraB_W from '../../assets/img/gorra-b&w.jpg'
import gorraCafe from '../../assets/img/gorra-cafe.jpg'
import gorraMorada from '../../assets/img/gorra-morada.jpg'
import gorraRosa from '../../assets/img/gorra-rosa.jpg'

import mediaBCN1 from '../../assets/img/media-bcn-1.jpg'
import mediaBCN2 from '../../assets/img/media-bcn-2.jpg'
import mediaBN from '../../assets/img/media-bn.jpg'
import mediaGV1 from '../../assets/img/media-gv-1.jpg'
import mediaGV2 from '../../assets/img/media-gv-2.jpg'

import enteAzul from '../../assets/img/ente-azul.jpg'
import enteNegro from '../../assets/img/ente-negro-2.jpg'
import collectEnte from '../../assets/img/collect-ente.jpg'

import setNegro1 from '../../assets/img/set-negro-1.jpg'
import setNegro2 from '../../assets/img/set-negro-2.jpg'

import shortCafe1 from '../../assets/img/short-cafe-1.jpg'
import shortCafe2 from '../../assets/img/short-cafe-2.jpg'
import shortCafe3 from '../../assets/img/short-cafe-3.jpg'
import shortCafe4 from '../../assets/img/short-cafe-4.png'
import shortMorado1 from '../../assets/img/short-morado-1.jpg'
import shortMorado2 from '../../assets/img/short-morado-2.jpg'
import shortMorado3 from '../../assets/img/short-morado-3.jpg'
import shortMorado4 from '../../assets/img/short-morado-4.png' */

 import bolsoNegro from '../../assets/bolso-negro.jpg'
import collecBolsos1 from '../../assets/collec-bolsos.jpg'
import collecBolsos2 from '../../assets/collec-bolsos-2.jpg'

import gorraB_W from '../../assets/gorra-b&w.jpg'
import gorraCafe from '../../assets/gorra-cafe.jpg'
import gorraMorada from '../../assets/gorra-morada.jpg'
import gorraRosa from '../../assets/gorra-rosa.jpg'

import mediaBCN1 from '../../assets/media-bcn-1.jpg'
import mediaBCN2 from '../../assets/media-bcn-2.jpg'
import mediaBN from '../../assets/media-bn.jpg'
import mediaGV1 from '../../assets/media-gv-1.webp'
import mediaGV2 from '../../assets/media-gv-2.webp'

import enteAzul from '../../assets/ente-azul.jpg'
import enteNegro from '../../assets/ente-negro-2.jpg'
/* import enteNegroVid from '../../assets/ente-negro-1-vid.mp4' */
import collectEnte from '../../assets/collect-ente.jpg'

import setNegro1 from '../../assets/set-negro-1.jpg'
import setNegro2 from '../../assets/set-negro-2.jpg'

import shortCafe1 from '../../assets/short-cafe-1.jpg'
import shortCafe2 from '../../assets/short-cafe-2.jpg'
import shortCafe3 from '../../assets/short-cafe-3.jpg'
import shortCafe4 from '../../assets/short-cafe-4.png'
import shortMorado1 from '../../assets/short-morado-1.jpg'
import shortMorado2 from '../../assets/short-morado-2.jpg'
import shortMorado3 from '../../assets/short-morado-3.jpg'
import shortMorado4 from '../../assets/short-morado-4.png' 


// productos 

const products = [
    {
        id: 1,
        title: 'Morrales pequeños',
        description: 'Lindos morrales deportivos pequeños medidas ancho 20cm largo 24cm, material tela en lona, variedad de colores',
        price: 52000,
        category: {
            id: 3,
            name: 'Accesorios',
        },
        images: [
            bolsoNegro,
            collecBolsos1,
            collecBolsos2
        ]
    },
    {
        id: 2,
        title: 'Gorras blanco y negro',
        description: 'Lindas gorras,nike y alo en color blanco y negro infaltables',
        price: 26000,
        category: {
            id: 3,
            name: 'Accesorios',
        },
        images: [
            gorraB_W
        ]
    },
    {
        id: 3,
        title: 'Gorra Beige',
        description: 'Hermosa gorra de color beige',
        price: 26000,
        category: {
            id: 3,
            name: 'Accesorios',
        },
        images: [
           gorraCafe
        ]
    },


    {
        id: 4,
        title: 'Gorra lila',
        description: 'Hermosa gorra de color lila',
        price: 26000,
        category: {
            id: 3,
            name: 'Accesorios',
        },
        images: [
           gorraMorada
        ]
    },
    {
        id: 5,
        title: 'Gorra rosada',
        description: 'Hermosa gorra de color rosada, excelente calidad',
        price: 26000,
        category: {
            id: 3,
            name: 'Accesorios',
        },
        images: [
            gorraRosa
        ]
    },
    {
        id: 6,
        title: 'Medias Nike',
        description: 'Hermosas medias marca nike color blanca negra o beige',
        price: 13000,
        category: {
            id: 2,
            name: 'medias',
        },
        images: [
            mediaBCN1,
            mediaBCN2
        ]
    },
    {
        id: 7,
        title: 'Medias Nike 3/4',
        description: 'Hermosas medias marca nike color blanca negra ',
        price: 13000,
        category: {
            id: 2,
            name: 'medias',
        },
        images: [
            mediaBN
        ]
    },
    {
        id: 8,
        title: 'Medias Nike',
        description: 'Hermosas medias marca nike color verde o gris',
        price: 13000,
        category: {
            id: 2,
            name: 'medias',
        },
        images: [
            mediaGV1,
            mediaGV2
        ]
    },
    {
        id: 9,
        title: 'Enterizo Azul',
        description: 'Lindo Enterizo deportivo color azul',
        price: 90000,
        category: {
            id: 1,
            name: 'Ropa deportiva',
        },
        images: [
            enteAzul,
            collectEnte
        ]
    },
    {
        id: 10,
        title: 'Enterizo negro',
        description: 'Lindo Enterizo en short color negro',
        price: 90000,
        category: {
            id: 1,
            name: 'Ropa deportiva',
        },
        images: [
            enteNegro,
            collectEnte,
            /* enteNegroVid */
        ]
    },
    {
        id: 11,
        title: 'Set deportivo negro',
        description: 'Lindo set deportivo top + short color negro',
        price: 98000,
        category: {
            id: 1,
            name: 'Ropa deportiva',
        },
        images: [
            setNegro1,
            setNegro2
        ]
    },
    {
        id: 12,
        title: 'Short beige ',
        description: 'Lindo short deportivo con push up color beige',
        price: 45000,
        category: {
            id: 1,
            name: 'Ropa deportiva',
        },
        images: [
            shortCafe1,
            shortCafe2,
            shortCafe3,
            shortCafe4
        ]
    },
    {
        id: 13,
        title: 'Short burdeos',
        description: 'Lindo short deportivo con push up color burdeo',
        price: 42000,
        category: {
            id: 1,
            name: 'Ropa deportiva',
        },
        images: [
            shortMorado1,
            shortMorado2,
            shortMorado3,
            shortMorado4
        ]
    }
]


export default products