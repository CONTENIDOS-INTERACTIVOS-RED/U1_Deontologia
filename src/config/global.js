export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad:
      'Fundamentos filosóficos y aplicados de la deontología profesional en el ámbito administrativo',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Fundamentos filosóficos de la deontología profesional',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'El problema de la deontología y sus planteamientos filosóficos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Corrientes filosóficas aplicadas a la ética profesional',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Corrientes filosóficas aplicadas a la ética profesional',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Diferencias conceptuales entre ética y moral',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Consecuencias prácticas en la administración de empresas',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Análisis crítico de dilemas ético-morales en contextos organizacionales',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia: 'Vila Ramos, B. (2013). Deontología profesional. Dykinson.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/56954',
    },
    {
      referencia:
        'Colegio Odontológico del Perú. (2009). Código de ética y deontología. Colegio Odontológico del Perú.',
      link:
        'http://vin.unitru.edu.pe/images/etica/regla/codigo/cell_odontologo.pdf',
    },
    {
      referencia:
        'Castro, G. (2022). El papel de la ética en la toma de decisiones empresariales. Revista Nexus Enero -junio 2023. Vol. 2 -No. 1.',
      link: 'https://editorialinnova.com/index.php/nrj/article/view/8/8',
    },
    {
      referencia:
        'Álvarez Burgos, M. I., Arévalo Lizarazo, G. A. & Rosas Castañeda, N. C. (2023). Ética para administradores de empresas desde la formación integral en la educación superior. Universidad Santo Tomás.',
      link:
        'https://www.docsity.com/es/docs/articulo-etica-administracion-de-empresas-universidad-articulo-empresas-etica-universit/11039500/',
    },
    {
      referencia: 'Ricourt, P. (2002). Ética y moral. Veritas, (10).',
      link:
        'https://revistachilenadederecho.uc.cl/index.php/veritas/article/download/63289/50607',
    },
    {
      referencia:
        'Velarde Dávila, L. (2018). Reflexiones sobre la profesión, la deontología y la ética. Review of Global Management, 3(1), 113-116.',
      link: 'https://revistas.upc.edu.pe/index.php/rgm/article/view/705',
    },
  ],
  glosario: [
    {
      termino: 'Autonomía moral',
      significado:
        'Capacidad de una persona para tomar decisiones éticas basadas en principios propios, sin depender exclusivamente, de normas externas.',
    },
    {
      termino: 'Bien común',
      significado:
        'Aquello que beneficia simultáneamente a todos los miembros de una comunidad, por encima de los intereses individuales.',
    },
    {
      termino: 'Confidencialidad',
      significado:
        'Deber de proteger la información privada o sensible, adquirida en el ejercicio profesional.',
    },
    {
      termino: 'Cultura organizacional',
      significado:
        'Conjunto de valores, creencias y prácticas que caracterizan la forma de actuar de una organización.',
    },
    {
      termino: 'Código de ética',
      significado:
        'Conjunto de principios y normas que orientan la conducta profesional, dentro de una organización.',
    },
    {
      termino: 'Deliberación ética',
      significado:
        'Proceso reflexivo mediante el cual se evalúan diferentes opciones en un dilema moral, considerando valores y consecuencias.',
    },
    {
      termino: 'Dignidad humana',
      significado:
        'Reconocimiento del valor intrínseco de toda persona, fundamento de los derechos humanos y de la ética profesional.',
    },
    {
      termino: 'Equidad',
      significado:
        'Principio ético que busca tratar a cada persona, según sus necesidades y circunstancias, promoviendo justicia distributiva.',
    },
    {
      termino: 'Integridad',
      significado:
        'Coherencia entre los valores éticos personales y las acciones realizadas en la vida profesional.',
    },
    {
      termino: 'Justicia organizacional',
      significado:
        'Percepción de equidad en los procedimientos, relaciones y resultados dentro de una organización.',
    },
    {
      termino: 'Norma administrativa',
      significado:
        'Regla establecida por una organización, para regular la conducta de sus miembros y garantizar el funcionamiento institucional.',
    },
    {
      termino: 'Participación',
      significado:
        'Involucramiento activo de los miembros de una organización, en la toma de decisiones que los afectan.',
    },
    {
      termino: 'Responsabilidad social',
      significado:
        'Compromiso voluntario de una organización con el desarrollo sostenible y el bienestar de la sociedad.',
    },
    {
      termino: 'Transparencia',
      significado:
        'Principio que exige claridad, honestidad y accesibilidad en la información y acciones de una institución.',
    },
    {
      termino: 'Valores institucionales',
      significado:
        'Principios éticos que orientan la misión, visión y prácticas de una organización.',
    },
  ],
}
