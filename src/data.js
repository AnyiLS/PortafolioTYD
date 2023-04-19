import ExImg1 from './assets/ex-img-1.png';
import ExImg2 from './assets/ex-img-2.gif';
import ExImg12 from './assets/ex-img-9.png';
import ExImg14 from './assets/ex-img-4.gif';
import ExImg4 from './assets/ex-img-4.png';
import ExImg5 from './assets/ex-img-5.gif';
import ExImg13 from './assets/mulador.gif';
import ExImg6 from './assets/ex-img-6.png';
import ExImg10 from './assets/planificacion.png';
import ExImg7 from './assets/ex-img-7.png';
import ExImg8 from './assets/ex-img-8.png';
import ExImg9 from './assets/ex-img-9.png';
import ExImg11 from './assets/rompecabezas.png';
import Gif from './assets/gif.gif';
import Gif2 from './assets/bubbleGif-john.gif';
import Video from './assets/video-concentrese.webm.gif';
import Video1 from './assets/video-1.gif';
import Video2 from './assets/sopspechar.gif';


export const dumiProjects = [
    {
        id: 1,
        name: 'Bubble Shooter EML',
        slug: '1',
        category: 'Desarrollos web',
        descrption:
            'Bubble shooter es un juego de lógica, en donde el objetivo es eliminar todas las burbujas de la pantalla apuntando hacia las burbujas en las cuales podamos crear grupos de 3 o más del mismo color, de esta forma, los grupos formados irán siendo derribados. Este juego puede contener características como: login y registro, conexión con base de datos para almacenamiento de puntajes por usuario, pop ups informativos, distribución por niveles, personalización de sprites (pueden ser otras figuras distintas a las burbujas), animaciones y sonidos.',
        images: [{type: "image", url: ExImg1}, {type: "image", url: Gif2}],
        platform: ["Web", "Android", "iOS"],
        language: ["HTML", "CSS", "JS"]
    },
    {
        id:2,
        name: 'Rompecabezas',
        slug: '2',
        category: 'Desarrollos web',
        descrption:
            'El jugador tiene que poner las piezas de manera correcta para poder obtener  la solución, un puzle tiene diferentes piezas que hay que unir, cada pieza tiene una pequeña parte de un dibujo que aparece cuando todas las piezas están correctamente unidas. Características: Rompecabezas de imágenes  Debes encontrar el patron  Es  un muy divertido resolver, solo tienes que subir la imagenes . 15 deslizantes ',
            images: [{type: "image", url: ExImg11}, {type: "image", url: Video1}],
            platform: ["Web"],
            language: ["HTML", "CSS", "JS"]
    },
    {
        id: 3,
        name: 'Sospechar no falla',
        slug: '3',
        category: 'Desarrollos web',
        descrption:
            '!Disfruta desafiandote en el juego de preguntas de la mano de nuestro sospechoso, en nuestras escenas obtendras 2 corazones para contestar dos preguntas de falso o verdadero para descubrir el misterio. Cada escena es un misterio cada puerta es un misterio, usted es el detective aqui intenta encontrar los crimenes ocultos luego resuelve el casom, finalmente salva a la persona a traves de una investigacion de desafio misterioso. ',
            images: [{type: "image", url: ExImg6}, {type: "image", url: Video2}],
            platform: ["Web"],
        language: ["React", "CSS", "JS"]

    },
    {
        id: 4,
        name: 'Concentrese',
        slug: '4',
        category: 'Desarrollos web',
        descrption:
            'Se tienen que ir descubriendo parejas de elementos iguales o relacionados entre ellos, que se encuentran escondidos. En cada tirada se destapan un par de piezas que se vuelven a esconder si no hacen par. El objetivo es destapar todas las parejas..',
        images: [{type: "image", url: ExImg10}, {type: "image", url: Video}],
        platform: ["Web"],
        language: ["HTML", "CSS", "JS"]
    },
    {
        id: 5,
        name: 'Lorem ipsum',
        slug: 'lorem-ipsum-web-5',
        category: 'Desarrollos web',
        descrption:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod nisi vitae elementum eleifend. Aenean vehicula massa non nunc commodo, eu molestie justo molestie. Nullam suscipit velit metus, sed finibus augue mollis id. Aenean elementum non nisi at pellentesque. Integer finibus, tortor vel dapibus eleifend, ante nulla pellentesque mi, ut sodales augue nisl sit amet massa. Mauris et blandit augue, non dignissim mauris.',
            images: [{type: "image", url: ExImg12}, {type: "video", url: Video}],
    },
    {
        id: 6,
        name: 'Concentrese',
        slug: '4',
        category: 'Desarrollos moviles',
        descrption:
        'Se tienen que ir descubriendo parejas de elementos iguales o relacionados entre ellos, que se encuentran escondidos. En cada tirada se destapan un par de piezas que se vuelven a esconder si no hacen par. El objetivo es destapar todas las parejas..',
            images: [{type: "image", url: ExImg2}, {type: "image", url: Video}],
            platform: ["Web"],
        language: ["HTML", "CSS", "JS"]
    },
    {
        id: 7,
        name: 'Rompecabezas',
        slug: '2',
        category: 'Desarrollos moviles',
        descrption:
        'El jugador tiene que poner las piezas de manera correcta para poder obtener  la solución, un puzle tiene diferentes piezas que hay que unir, cada pieza tiene una pequeña parte de un dibujo que aparece cuando todas las piezas están correctamente unidas. Características: Rompecabezas de imágenes  Debes encontrar el patron  Es  un muy divertido resolver, solo tienes que subir la imagenes . 15 deslizantes ',

            images: [{type: "image", url: ExImg14}, {type: "image", url: Video}],
            platform: ["Web"],
            language: ["HTML", "CSS", "JS"]
    },
    {
        id: 8,
        name: 'Bubble Shooter EML',
        slug: '1',
        category: 'Desarrollos moviles',
        descrption:
        'Bubble shooter es un juego de lógica, en donde el objetivo es eliminar todas las burbujas de la pantalla apuntando hacia las burbujas en las cuales podamos crear grupos de 3 o más del mismo color, de esta forma, los grupos formados irán siendo derribados. Este juego puede contener características como: login y registro, conexión con base de datos para almacenamiento de puntajes por usuario, pop ups informativos, distribución por niveles, personalización de sprites (pueden ser otras figuras distintas a las burbujas), animaciones y sonidos.',

            images: [{type: "image", url: ExImg13}, {type: "image", url: Video}],
            platform: ["Web", "Android", "iOS"],
        language: ["HTML", "CSS", "JS"]
    },
    {
        id: 9,
        name: 'Sospechar no falla',
        slug: '3',
        category: 'Desarrollos moviles',
        descrption:
        '!Disfruta desafiandote en el juego de preguntas de la mano de nuestro sospechoso, en nuestras escenas obtendras 2 corazones para contestar dos preguntas de falso o verdadero para descubrir el misterio. Cada escena es un misterio cada puerta es un misterio, usted es el detective aqui intenta encontrar los crimenes ocultos luego resuelve el casom, finalmente salva a la persona a traves de una investigacion de desafio misterioso. ',
            images: [{type: "image", url: ExImg5}, {type: "video", url: Video}],
            platform: ["Web"],
        language: ["React", "CSS", "JS"]
    },
    {
        id: 10,
        name: 'Lorem ipsum',
        slug: '5',
        category: 'Desarrollos moviles',
        descrption:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod nisi vitae elementum eleifend. Aenean vehicula massa non nunc commodo, eu molestie justo molestie. Nullam suscipit velit metus, sed finibus augue mollis id. Aenean elementum non nisi at pellentesque. Integer finibus, tortor vel dapibus eleifend, ante nulla pellentesque mi, ut sodales augue nisl sit amet massa. Mauris et blandit augue, non dignissim mauris.',
            images: [{type: "image", url: ExImg4}, {type: "video", url: Video}],
    },
    {
        id: 11,
        name: 'Lorem ipsum',
        slug: '1',
        category: 'Videojuegos',
        descrption:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod nisi vitae elementum eleifend. Aenean vehicula massa non nunc commodo, eu molestie justo molestie. Nullam suscipit velit metus, sed finibus augue mollis id. Aenean elementum non nisi at pellentesque. Integer finibus, tortor vel dapibus eleifend, ante nulla pellentesque mi, ut sodales augue nisl sit amet massa. Mauris et blandit augue, non dignissim mauris.',
            images: [{type: "image", url: ExImg7}, {type: "video", url: Video}],
    },
    {
        id: 12,
        name: 'Lorem ipsum',
        slug: '2',
        category: 'Videojuegos',
        descrption:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod nisi vitae elementum eleifend. Aenean vehicula massa non nunc commodo, eu molestie justo molestie. Nullam suscipit velit metus, sed finibus augue mollis id. Aenean elementum non nisi at pellentesque. Integer finibus, tortor vel dapibus eleifend, ante nulla pellentesque mi, ut sodales augue nisl sit amet massa. Mauris et blandit augue, non dignissim mauris.',
            images: [{type: "image", url: ExImg8}, {type: "video", url: Video}],
    },
    {
        id: 13,
        name: 'Candy Crush',
        slug: '13',
        category: 'Videojuegos',
        descrption:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod nisi vitae elementum eleifend. Aenean vehicula massa non nunc commodo, eu molestie justo molestie. Nullam suscipit velit metus, sed finibus augue mollis id. Aenean elementum non nisi at pellentesque. Integer finibus, tortor vel dapibus eleifend, ante nulla pellentesque mi, ut sodales augue nisl sit amet massa. Mauris et blandit augue, non dignissim mauris.',
            images: [{type: "image", url: ExImg9}, {type: "video", url: Video}],
            platform: ["Web"],
        language: ["HTML", "CSS", "JS"]
    },
    {
        id: 14,
        name: 'Lorem ipsum',
        slug: '4',
        category: 'Videojuegos',
        descrption:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod nisi vitae elementum eleifend. Aenean vehicula massa non nunc commodo, eu molestie justo molestie. Nullam suscipit velit metus, sed finibus augue mollis id. Aenean elementum non nisi at pellentesque. Integer finibus, tortor vel dapibus eleifend, ante nulla pellentesque mi, ut sodales augue nisl sit amet massa. Mauris et blandit augue, non dignissim mauris.',
            images: [{type: "image", url: ExImg7}, {type: "video", url: Video}],
    },
    {
        id: 15,
        name: 'Lorem ipsum',
        slug: 'lorem-ipsum-vg-5',
        category: 'Videojuegos',
        descrption:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod nisi vitae elementum eleifend. Aenean vehicula massa non nunc commodo, eu molestie justo molestie. Nullam suscipit velit metus, sed finibus augue mollis id. Aenean elementum non nisi at pellentesque. Integer finibus, tortor vel dapibus eleifend, ante nulla pellentesque mi, ut sodales augue nisl sit amet massa. Mauris et blandit augue, non dignissim mauris.',
            images: [{type: "image", url: ExImg8}, {type: "video", url: Video}],
    },
];
