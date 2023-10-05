export default {
  global: {
    componenteFormativo: 'Sistema General de Seguridad Social',
    descripcionCurso:
      'En este componente formativo se abordan los conocimientos de la competencia orientar al usuario, referentes a la normatividad legal vigente del Sistema General de Seguridad Social, la cual está regida por el Gobierno colombiano y por intermediarios como el Ministerio de Salud y Protección Social, con el fin que los aprendices se enfoquen en identificar las necesidades y expectativas de los usuarios que asisten al servicio de salud.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Sistema General de Seguridad Social Integral',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Obligaciones del Estado',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Evaluación de indicadores',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Sujetos de especial protección constitucional',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo:
              'Mecanismos de protección del derecho fundamental a la salud',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Política de Atención Integral en Salud (PAIS)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Modelo de Atención Integral en Salud (MIAS)',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Modelo de Acción Integral Territorial (MAITE)',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Plan Nacional de Desarrollo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Mercado y mercadeo en salud ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Estrategias de mercadeo en salud',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Cliente',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/material.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Corte Constitucional. (2017). Sentencia T-293 del 2017 Sujetos de especial protección.',
      link:
        'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=74261&dt=S',
    },
    {
      referencia: 'Komiya, A. (2015). CreceNegocios. ',
      link:
        'https://www.crecenegocios.com/que-es-el-servicio-al-cliente-y-cual-es-su-importancia/',
    },
    {
      referencia:
        'Larraín Cortés, A. (2012). Diseño de una propuesta de mejoramiento de la calidad de servicio en una empresa del rubro automotriz.',
      link: 'http://repositorio.uchile.cl/handle/2250/104405',
    },
    {
      referencia:
        'Ministerio de Salud (2015). Ley 1751. Por medio de la cual se regula el derecho fundamental a la salud y se dictan otras disposiciones. ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/INEC/IGUB/ley-1751-de-2015.pdf',
    },
    {
      referencia:
        'Ministerio de Salud. (2016). Por medio de la cual se adopta la Política de Atención Integral en Salud. Resolución 0429.',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%C3%B3n%200429%20de%202016.pdf',
    },
    {
      referencia:
        'Ministerio de salud, Por la cual se modifica la Política de Atención Integral en Salud -PAIS y se adopta el Modelo de Acción Integral Territorial-MAITE. Resolución 2626. Colombia 2019.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-2626-de-2019.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social, Por la cual se crea el Sistema de Seguridad Social Integral y se dictan otras disposiciones. Ley 100. Colombia 1993. ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/ley-100-de-1993.pdf',
    },
    {
      referencia:
        'Werner, Palma, Echavarría y Rosales, (s.f.). Modelo de Atención Integral en Salud. Ministerio de Salud y Asistencia Social.',
      link:
        'https://docs.bvsalud.org/biblioref/2019/06/998258/modelo-de-atencion-integral-en-salud.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Atención personalizada',
      significado:
        'la atención personalizada es la atención directa o personal que toma en cuenta las necesidades, gustos y preferencias particulares del cliente. Se da, por ejemplo, cuando un mismo trabajador atiende a un cliente durante todo el proceso de compra, cuando se le brinda al cliente un producto diseñado especialmente, de acuerdo con sus necesidades, gustos y preferencias particulares, etc.',
    },
    {
      termino: 'Cliente externo',
      significado:
        'es la persona que se puede denominar consumidor y que busca satisfacer una necesidad.',
    },
    {
      termino: 'Cliente interno',
      significado:
        'es aquella persona que se desempeña como colaborador de la organización.',
    },
    {
      termino: 'Cliente',
      significado:
        'es aquella persona que adquiere un bien o servicio por medio de una transacción financiera.',
    },
    {
      termino: 'EPS',
      significado: ' Empresa Promotora de Salud.',
    },
    {
      termino: 'IPS',
      significado: ' Instituto Prestador de Salud.',
    },
    {
      termino: 'Maite',
      significado: ' Modelo de Acción Integral Territorial.',
    },
    {
      termino: 'Misión',
      significado:
        'es lo que se realiza para alcanzar el propósito en un periodo de tiempo.',
    },
    {
      termino: 'PAIS',
      significado: ' Política de Atención Integral en Salud.',
    },
    {
      termino: 'Servicio al cliente',
      significado:
        'se entiende por servicio al cliente o servicio de atención al cliente, a los métodos que emplea una empresa para ponerse en contacto con su clientela, para garantizar, entre otras cosas, que el bien o servicio ofrecido llegue a sus consumidores y sea empleado de manera correcta.',
    },
    {
      termino: 'Seguridad',
      significado:
        'hace referencia a la seguridad que existe en el local y que, por lo tanto, se le da al cliente al momento de visitarlo. Por ejemplo, cuando se cuenta con suficiente personal de seguridad, cuando se tienen claramente marcadas las zonas de seguridad, cuando se tienen claramente señalizadas las vías de escape, cuando se cuenta con botiquines médicos, etc.',
    },
    {
      termino: 'Visión',
      significado:
        'es la realidad que le gustaría ver a la empresa en torno al mundo, sus clientes y ella misma.',
    },
  ],
  complementario: [
    {
      tema: 'Sistema General de Seguridad Social Integral',
      referencia:
        'Fucsalud. (2018). <i>Sistema General de Seguridad Social.</i>',
      tipo: 'Video',
      link: 'https://vimeo.com/228217305',
    },
    {
      tema: 'Evaluación de indicadores',
      referencia:
        'Sistema Integral de Información de la Protección Social (SISPRO). (s.f.). <i>¿Qué es SISPRO?</i>',
      tipo: 'Página web',
      link: 'https://www.sispro.gov.co/Pages/Home.aspx',
    },
    {
      tema: 'Evaluación de indicadores',
      referencia:
        'Superintendencia Financiera de Colombia. (s.f.). <i>Superintendencia Financiera de Colombia.</i>',
      tipo: 'Página web',
      link: 'https://www.superfinanciera.gov.co/jsp/index.jsf',
    },
    {
      tema: 'Evaluación de indicadores',
      referencia:
        'Serranosqui Plus. (2018). <i>Constitución Política de Colombia - (Fundamentos de Administración Pública).</i>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=tDUOKWTeoYs',
    },
    {
      tema: 'Mecanismos de protección del derecho fundamental a la salud',
      referencia: 'Lenis, M. (2016). <i>Ley estatutaria en salud.</i>',
      tipo: 'Artículo - presentacion',
      link: 'https://prezi.com/jvfvnkn0zd1p/ley-1751-de-2015/',
    },
    {
      tema: 'Mecanismos de protección del derecho fundamental a la salud',
      referencia: 'Rueda, J. (2017). <i>Ley 1751 de 2015.</i>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=WBXc_GZLEa0',
    },
    {
      tema: 'Mecanismos de protección del derecho fundamental a la salud',
      referencia:
        'Ámbito Jurídico. (2015). <i>Lo que usted debe saber sobre la Ley Estatutaria de Salud.</i>',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=8OTicDh_JYc&ab_channel=%C3%81mbitoJur%C3%ADdico',
    },
    {
      tema: 'Política de Atención Integral en Salud',
      referencia:
        'MinSaludCol. (2018). <i>Presentación de la Política de Atención Integral en Salud.</i>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=AD9GoqohIuQ',
    },
    {
      tema: 'Modelo de Acción Integral Territorial',
      referencia: 'Vargas, L. (2020). <i>Resolución 2626 e 2019.</i>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=n6bE2uy_Dr0',
    },
    {
      tema: 'Tipos de clientes',
      referencia: 'Jaime, D. (2013). <i>Tipos de clientes.</i>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=hixQG0y7nuI',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Gloria Amparo López Escudero',
          cargo: 'Adecuación instruccional - 2023',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Metodología para la formación virtual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lina Marcela Ayala Pardo',
          cargo: 'Experta temática - 2021',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Oscar Meza',
          cargo: 'Experto temático - 2021',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo:
            'Diseñadora instruccional - Revisora metodológica y pedagógica - 2021',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Rafael Neftali Lizcano Reyes',
          cargo: 'Asesor pedagógico - 2021',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jesús Antonio Vecino Valero',
          cargo: 'Diseño web - 2023',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Manuel Felipe Echavarria Orozco',
          cargo: 'Desarrollo fullstack - 2023',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo:
            'Validación de recursos educativos digitales y vinculación al LMS',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Leyson Fabian Castaño Pérez',
          cargo:
            'Validación de recursos educativos digitales y vinculación al LMS',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
