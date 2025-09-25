import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Libro {
  id: number;
  titulo: string;
  autor: string;
  descripcion: string;
  imagen: string;
  temas?: string[]; 
}

@Injectable({
  providedIn: 'root',
})
export class LibrosService {
  private libros: Libro[] = [
    {
      id: 1,
      titulo: 'Lo Que El Bosque Esconde',
      autor: 'Gema Bonnín Sánchez',
      descripcion: 'En Rodian la magia está prohibida, y aquellos que la practican son perseguidos. Neriabeth Rosaleal es una de esas personas, por eso extrema las precauciones cuando se ve obligada a trasladarse a la capital. Viajará en compañía de Kilian Monteyermo, un noble que tiene una importante misión que cumplir para con el rey. En ese viaje se encontrarán con algo que acabará poniendo en juego las vidas de ambos y el futuro de todo el reino, algo que contiene ecos de un pasado y de una historia que aún no se ha cerrado del todo.',
      imagen: 'https://res.cloudinary.com/dky2dscgr/image/upload/v1758147879/imagesKYK/libros/mp47go4jeex1y9pfbgkx.jpg',
      temas: ['fantasía', 'magia prohibida', 'romance', 'aventura', 'fantasía juvenil', 'conflicto político', 'identidad secreta', 'viaje iniciático', 'reinos ficticios', 'opresión', 'amor prohibido']
      // paginas: 624 ,
     //tamaño: '1.2MB',
     //editorial: ' Crossbooks',
     //publicacion: 2018
    },
    {
      id: 2,
      titulo: 'Cruce de caminos',
      autor: 'Marga Gil Benítez',
      descripcion: 'El comienzo Un detective retirado, con un trauma del pasado, y un inspector de policía, con una forma de trabajar muy peculiar, intentarán atrapar a un psicópata que siembra el pánico en la ciudad. Por otro lado, un mafioso chino, casi moribundo, busca a su discípulo para despedirse de él. Como en un cruce de caminos, los protagonistas de esta novela se encontrarán y alejarán, dejando a flor de piel antiguos rencores que marcan el presente de algunos de los personajes.',
      imagen: 'https://res.cloudinary.com/dky2dscgr/image/upload/v1758147878/imagesKYK/libros/gkwxxofdu7zk2fcbgj61.webp',
      temas: ['Policiaca', 'Espionaje'], 
    // paginas: 274,
     //tamaño: '15cm x21cm',
     //editorial: 'Ediciones atlantis',
     //publicacion: 2011
    },
    {
      id: 3,
      titulo: 'Don Quijote de la Mancha',
      autor: 'Miguel de Cervantes',
      descripcion: 'Alonso Quijano es un hombre pobre que de tanto leer novelas de caballeria enloquece y se nombra a si mismo Don Quijote de La Mancha, caballero andante. El delirio del Quijote lo llevara a emprender un viaje al lado de Sancho Panza, su escudero, con quien vivira grandes aventuras para tratar de cumplir su ideal de ayudar a lo pobres y desfavorecidos, y de lograr el amor de Dulcinea del Toboso.',
      imagen: 'https://res.cloudinary.com/dky2dscgr/image/upload/v1758147878/imagesKYK/libros/azmtuq24hix47q3jbq4b.jpg',
      temas: ['Aventura', 'Caballería', 'Locura', 'Identidad', 'Realidad vs Ficción', 'Humor', 'Amistad', 'Crítica social', 'Literatura', 'Honor']
, 
     // paginas: 901,
     //tamaño: '790g',
     //editorial: 'Editores Mexicanos Unidos S.A.',
     //publicacion: 2019
    },
    {
      id: 4,
      titulo: 'Harry Potter y La Orden del Fenix',
      autor: 'J.k.Rowling',
      descripcion: 'Las tediosas vacaciones de verano en casa de sus tíos todavía no han acabado y Harry se encuentra más inquieto que nunca. Apenas ha tenido noticias de Ron y Hermione, y presiente que algo extraño está sucediendo en Hogwarts. En efecto, cuando por fin comienza otro curso en el famoso colegio de magia y hechicería, sus temores se vuelven realidad. El Ministerio de Magia niega que Voldemort haya regresado y ha iniciado una campaña de desprestigio contra Harry y Dumbledore, para lo cual ha asignado a la horrible profesora Dolores Umbridge la tarea de vigilar todos sus movimientos. Así pues, además de sentirse solo e incomprendido, Harry sospecha que Voldemort puede adivinar sus pensamientos, e intuye que el temible mago trata de apoderarse de un objeto secreto que le permitiría recuperar su poder destructivo.',
      imagen: 'https://res.cloudinary.com/dky2dscgr/image/upload/v1758147880/imagesKYK/libros/dic1mvqidoxlkoopz5ve.jpg',
      temas: ['Amistad', 'Resistencia', 'Autoritarismo', 'Coraje', 'Lealtad', 'Justicia', 'Pérdida', 'Identidad', 'Educación', 'Poder y corrupción'], 
    },
    {
      id: 5,
      titulo: 'Hasta Que Caiga La Luna',
      autor: 'Sarah Parker',
      descripcion: 'Los Creadores jamás esperaron que sus queridos dragones, al llegar su fin, ascendieran a los cielos. Tampoco que se enroscaran en forma de esfera allá donde la gravedad no podía alcanzarlos y llenaran el firmamento de tumba s... De lunas. Y, desde luego, jamás esperaron que cayeran». Como asesina rebelde, el objetivo de Raeve es cumplir su misión y que jamás la atrapen. Sin embargo, cuando un cazarrecompensas rival hace añicos su realidad, la joven se ve prisionera del Gremio de los Nobles, una organización de elementales poderosos que pretende dar ejemplo con ella. Solo la muerte podrá liberarla. Devastado por una terrible pérdida, el jinete de dragón Kaan Vaegor decapitó a un rey y se puso su corona derretida. Ahora, su búsqueda incansable para reunir fragmentos lunares lo conduce a la prisión de la ciudad, donde se topa con una Raeve encadenada, con rabia en la mirada y sangre en las manos. Juntos deberán descubrir una verdad que amenaza con hacer que su mundo se desmorone... y ellos con él.',
      imagen: 'https://res.cloudinary.com/dky2dscgr/image/upload/v1758147880/imagesKYK/libros/ph9g88du1np1pxppflmo.jpg',
      temas: [
  "fantasía épica",
  "magia / sistema mágico original",
  "crueldad del poder",
  "rebelión y resistencia",
  "identidad y búsqueda personal",
  "amor romántico que desafía obstáculos",
  "trauma y pérdida",
  "justicia y jerarquías sociales",
  "secreto(s) / verdad revelada",
  "almas gemelas / vínculo especial"
]
    },
    {
      id: 6,
      titulo: 'Maleducada',
      autor: 'Antonio Ortiz',
      descripcion: 'MalEducada relata la historia de Paula Beckwitt, una adolescente de clase alta que sufre un accidente cerebrovascular y está en coma. En ese estado comienza a recordar con detalle todos los sucesos que la llevaron hasta ese punto. Con una narración vertiginosa y conmovedora, el lector irá descubriendo la verdad de su vida, y además se enterará de los oscuros secretos de su más íntimo círculo de amigos. Basada en hechos reales, en esta novela se muestra la vida desenfrenada y el complejo mundo interior de una joven que, teniéndolo todo, se sentía vacía y solitaria. MalEducada es una historia que narra la vida de jóvenes que han perdido el rumbo porque sus familias están desestructuradas, en sus colegios el matoneo es constante y sus refugios han sido las malas amistades, el alcohol y la droga.',
      imagen: 'https://res.cloudinary.com/dky2dscgr/image/upload/v1758147881/imagesKYK/libros/bym1eirrmtwyadazvc3b.jpg',
      temas: [
  "accidente y consecuencias físicas/mentales",
  "memoria y remordimiento",
  "amistad tóxica",
  "familia desestructurada",
  "soledad y vacío interior",
  "presión social / adolescencia privilegiada",
  "adicciones (alcohol, drogas)",
  "bullying / acoso escolar",
  "identidad personal",
  "verdades ocultas / secretos",
  "autoimagen / autoestima"
],
    },
    {
      id: 7,
      titulo: 'Pinocho',
      autor: 'Disney',
      descripcion: 'Cuento infantil Clásicos de Disney: Pinocho" Este libro de Disney te lleva a un mágico universo donde la imaginación y la aventura cobran vida a través de las páginas de uno de los cuentos más queridos de todos los tiempos, te adentrarás en la inolvidable historia de Pinocho, el entrañable muñeco de madera que cobra vida. Basado en el clásico de Disney, esta narrativa cobra vida a través de ilustraciones encantadoras que te transportarán al mundo de los deseos, las enseñanzas y la amistad. Cada página está llena de detalles cautivadores que harán las delicias de los fans de los cuentos clásicos de Disney.Este libro es un tesoro que transportará a lectores de todas las edades al mundo de las lecciones de vida y el poder de la amistad. "Clásicos de Disney: Pinocho" . Tanto si eres un fanático de Disney de toda la vida como si estás descubriendo estas maravillosas historias por primera vez, este libro te llevará a un viaje inolvidable a través de los desafíos y aventuras de Pinocho.',
      imagen: 'https://res.cloudinary.com/dky2dscgr/image/upload/v1758147882/imagesKYK/libros/aerp1pzls5rm0cnpxa02.jpg',
      temas: [
  "mentiras / verdad",
  "obediencia / desobediencia",
  "transformación (de muñeco a ser humano)",
  "educación / disciplina",
  "responsabilidad personal",
  "amistad y traición",
  "familia / amor paternal",
  "tentaciones / malos consejos",
  "consecuencias de las acciones",
  "moralidad y ética",
  "castigo y redención",
  "sacrificio"
]

    },
    {
      id: 8,
      titulo: 'El principito',
      autor: 'Antoine De Saint-Exupéry',
      descripcion: 'Este breve y hermoso relato es una invitación permanente a cuestionar las convenciones establecidas. El Principito también es una de las obras más conocidas y más vendidas de todos los tiempos, aproximadamente ciento cincuenta millones de ejemplares en diversos idiomas. Con un singular sentido de la imaginación, inteligencia y sabiduría Antoine de Saint Exupéry creó un libro que es una profunda reflexión sobre el amor, la amistad, y el sentido de la vida. El personaje central es un inolvidable niño que se interroga sobre el mundo mientras viaja de planeta en planeta y pone en duda las certezas de los adultos. Esta es, simplemente, una lectura para celebrar.',
      imagen: 'https://res.cloudinary.com/dky2dscgr/image/upload/v1758147883/imagesKYK/libros/irtbaneb2qkhso30hafu.jpg',
      temas: [
  "amistad",
  "amor",
  "soledad",
  "crecimiento personal",
  "sentido de la vida",
  "pérdida de la inocencia",
  "visión infantil vs. visión adulta",
  "imaginación",
  "responsabilidad (simbolizada por la rosa)",
  "crítica a la sociedad moderna",
  "búsqueda de sentido"
]

    },
        {
      id: 9,
      titulo: 'Cien Años De Soledad ',
      autor: 'Gabriel Garcia Marquez',
      descripcion: '"Muchos años después, frente al pelotón de fusilamiento, el coronel Aureliano Buendía había de recordar aquella tarde remota en que su padre lo llevó a conocer el hielo. Macondo era entonces una aldea de veinte casas de barro y cañabrava construidas a la orilla de un río de aguas diáfanas que se precipitaban por un lecho de piedras pulidas, blancas y enormes como huevos prehistóricos. El mundo era tan reciente, que muchas cosas carecían de nombre, y para mencionarlas había que señalarlas con el dedo."Mito por derecho propio, saludada por sus lectores como la obra en español más importante después de la Biblia, Cien años de soledad cuenta la saga de la familia Buendía y su maldición, que castiga el matrimonio entre parientes dándoles hijos con cola de cerdo. Como un río desbordante, a lo largo de un siglo se entretejerán sus destinos por medio de sucesos maravillosos en el fantástico pueblo de Macondo, en una narración que es la cumbre indiscutible del realismo mágico y la literatura del boom. Alegoría universal, es también una visión de Latinoamérica y una parábola sobre la historia humana.',
      imagen: 'https://res.cloudinary.com/dky2dscgr/image/upload/v1758147877/imagesKYK/libros/krnw6aktyxradcipyukx.jpg',
      temas: [
  "soledad",
  "realismo mágico",
  "tiempo cíclico / repetición histórica",
  "la familia y la herencia ancestral",
  "memoria y olvido",
  "amor y pasión",
  "Destino inevitable",
  "corrupción del poder",
  "crítica social",
  "identidad personal y colectiva",
  "tradición vs. cambio",
  "aislamiento geográfico y cultural"
]


    },
     {
      id: 10,
      titulo: 'Peel Back the Skin: Anthology of Horror Stories ',
      autor: 'Jonathan Maberry',
      descripcion: 'They re among us.They live down the street, in the apartment next door and even in our own homes. Theyre the real monsters. And they stare back at us from our bathroom mirrors.PEEL BACK THE SKIN is a powerhouse anthology of terror that strips away the human mask from the real monsters of our time -- mankind. Featuring a star-studded cast of award-winning authors from the horror, dark fantasy, speculative fiction, transgressive, bizzaro, extreme horror and thriller genres, PEEL BACK THE SKIN is the next game-changing release from Grey Matter Press.PEEL BACK THE SKIN includes fifteen all-new works of fiction from Jonathan Maberry, Ray Garton, Tim Lebbon, Graham Masterton, Yvonne Navarro, Ed Kurtz, Durand Sheng Welsh, James Lowder, Joe McKinney, Lucy Taylor, Charles Austin Muir, Erik Williams, Nancy A. Collins, John McCallum Swain and William Meikle. From Bram Stoker Award-nominated editors Anthony Rivera and Sharon Lawson.',
      imagen: 'https://res.cloudinary.com/dky2dscgr/image/upload/v1758147876/imagesKYK/categorias/de7sysjz58vefpgwcjcm.png',
      temas: [
  "la naturaleza humana como monstruo",
  "culpa y remordimiento",
  "trauma psicológico",
  "violencia familiar y abuso",
  "pérdida / duelo",
  "justicia oscura / venganza",
  "delirio / locura",
  "fantasmas / sobrenatural",
  "realismo mágico mezclado con horror psicológico",
  "moralidad ambigua",
  "sociedad corrupta",
  "monstruos externos vs. internos",
  "el peso del pasado",
  "aislamiento y alienación",
  "religión / fanatismo"
]
    },
    
  ];

  getLibros() {
    return this.libros;
  }

  getLibroPorId(id: number) {
    return this.libros.find(libro => libro.id === id);
  }
}
