<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1  Sistema General de Seguridad Social Integral
    p.mb-4(data-aos="fade-right") La Ley 100 de 1993 define el Sistema de Seguridad Social Integral de la siguiente manera:
    .row.mb-4.margen-negativo--derecha
      .col-lg-8.px-5.align-self-center.mb-4.mb-lg-0
        .bloque-texto-d.color-secundario.p-2
          .bloque-texto-d__texto.mb-2.mt-4(data-aos="fade-right")
            i.fas.fa-quote-left
            span.text-regular La Seguridad Social Integral es el conjunto de instituciones, normas y procedimientos, de que disponen la persona y la comunidad para gozar de una calidad de vida, mediante el cumplimiento progresivo de los planes y programas que el Estado y la sociedad desarrollen para proporcionar la cobertura integral de las contingencias, especialmente las que menoscaban la salud y la capacidad económica, de los habitantes del territorio nacional, con el fin de lograr el bienestar individual y la integración de la comunidad (p.2).
            i.fas.fa-quote-right
            br
            br
            .h4.mb-0.d-flex.justify-content-end.mt-2 Ley 100 de 1993
      .col-lg-4.p-0
        figure(data-aos='zoom-out')
          img(src="@/assets/curso/tema1/imgP.jpg", alt="Imágen decorativa", style='width:450px;').m-auto
    p.mb-4(data-aos="fade-up") Además, tiene por #[strong objeto] garantizar los derechos irrenunciables de la persona y la comunidad, para obtener la calidad de vida acorde con la dignidad humana, mediante la protección de las contingencias que las afecten.
    p.mb-5(data-aos="fade-up") Esta ley, en su Artículo 2, presenta los #[strong principios] bajo los cuales se rige la Seguridad Social Integral, estos se presentan en la siguiente imagen.
    .titulo-sexto.color-acento-contenido.mb-5(data-aos="fade-right")
      p.mb-0 #[b Figura 1]. Principios bajo los cuales se rige la Seguridad Social Integral
    .h4.mb-5.text-center(data-aos="fade-left") PRINCIPIOS: LEY 100 DE 1993
    .row.justify-content-center.fondo-tarjeta--tema1(data-aos="fade-down")
      .col-lg-9
        .row.mb-4(style="justify-content:space-around")
          .col-md-3(data-aos="fade-up-right")
            .row.justify-content-center
              .col-auto
                figure.mb-2
                  img(src="@/assets/curso/tema1/icon1.svg", alt="Imágen decorativa", style='width:190px;').mx-auto
            h4.text-center.mb-4 EFICIENCIA
            P Es la mejor utilización social y económica de los recursos administrativos, técnicos y financieros, disponibles para que los beneficios a los que da derecho la seguridad social sean prestados de forma adecuada, oportuna y suficiente.
          .col-md-3(data-aos="fade-up")
            .row.justify-content-center
              .col-auto
                figure.mb-2
                  img(src="@/assets/curso/tema1/icon2.svg", alt="Imágen decorativa", style='width:190px;').mx-auto
            h4.text-center.mb-4 UNIVERSALIDAD 
            P Es la garantía de la protección para todas las personas, sin ninguna discriminación, en todas las etapas de su vida.
          .col-md-3(data-aos="fade-up-left")
            .row.justify-content-center
              .col-auto
                figure.mb-2
                  img(src="@/assets/curso/tema1/icon3.svg", alt="Imágen decorativa", style='width:190px;').mx-auto
            h4.text-center.mb-4 SOLIDARIDAD
            P Es la práctica de la mutua ayuda entre las personas, las generaciones, los sectores económicos, las regiones y las comunidades, bajo el principio del más fuerte hacia el más débil. Los recursos provenientes del erario público en el sistema de seguridad, se aplicarán siempre a los grupos de población más vulnerables.
        .row.mb-5(style="justify-content:space-around")
          .col-md-3(data-aos="fade-up-right")
            .row.justify-content-center
              .col-auto
                figure.mb-2
                  img(src="@/assets/curso/tema1/icon4.svg", alt="Imágen decorativa", style='width:190px;').mx-auto
            h4.text-center.mb-4 INTEGRALIDAD
            P Es la cobertura de todas las contingencias que afectan la salud, la capacidad económica y, en general, las condiciones de vida de toda la población. Para este efecto, cada quien contribuirá según su capacidad y recibirá lo necesario para atender sus contingencias, amparadas por esta ley.
          .col-md-3(data-aos="fade-up")
            .row.justify-content-center
              .col-auto
                figure.mb-2
                  img(src="@/assets/curso/tema1/icon5.svg", alt="Imágen decorativa", style='width:190px;').mx-auto
            h4.text-center.mb-4 UNIDAD 
            P Es la articulación de políticas, instituciones, regímenes, procedimientos y prestaciones, para alcanzar los fines de la seguridad social.
          .col-md-3(data-aos="fade-up-left")
            .row.justify-content-center
              .col-auto
                figure.mb-2
                  img(src="@/assets/curso/tema1/icon6.svg", alt="Imágen decorativa", style='width:190px;').mx-auto
            h4.text-center.mb-4 PARTICIPACIÓN
            P Es la intervención de la comunidad, a través de los beneficiarios de la seguridad social, en la organización, control, gestión y fiscalización de las instituciones y del sistema en su conjunto.
    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 1.1 Obligaciones del Estado
    .row.justify-content-center.mb-3
      .col-lg-11
        .bloque-texto-custom.color-secundario.mb-5(data-aos="flip-down")
          .bloque-texto-custom__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/tema1-1/img1.svg')})`}")(alt="Imágen decorativa")
          .bloque-texto-custom__texto 
            .row.justify-content-center
                .col-10
                  p.mb-0.mt-5
                    b ¿Sabías que la obligación del Estado es la de garantizar a todas las personas habitantes de la nación, el derecho irrenunciable a la seguridad social integral?
    p.mb-5(data-aos="fade-right") Por eso, es responsable de respetar, proteger y garantizar el goce efectivo del derecho fundamental a la salud, y para lograrlo, deberá:
    .tarjeta.tarjeta--gris.p-4.mb-5(data-aos="fade-left")
      LineaTiempoC.color-secundario
        .row.justify-content-center(titulo="")
          .col-lg-4
            figure.mb-3
              img(src='@/assets/curso/tema1/tema1-1/img2.jpg', alt='Imágen decorativa', style='width:400px').mx-auto
          
          .col-lg-6.mb-4.mb-lg-0.align-self-center.linea-pasos--custom
            p Abstenerse de afectar directa o indirectamente en el disfrute del derecho fundamental a la salud, de adoptar decisiones que lleven al deterioro de la salud de la población y de realizar cualquier acción u omisión que pueda resultar en un daño en la salud de las personas. 
        .row.justify-content-center(titulo="")
          .col-lg-4
            figure.mb-3
              img(src='@/assets/curso/tema1/tema1-1/img3.jpg', alt='Imágen decorativa', style='width:420px').mx-auto
          
          .col-lg-6.mb-4.mb-lg-0.align-self-center.linea-pasos--custom
            p Formular y adoptar políticas de salud, dirigidas a garantizar el goce efectivo del derecho en igualdad de trato y oportunidades para toda la población, asegurando para su cumplimiento, la coordinación armónica de las acciones de todos los agentes del Sistema.
        .row.justify-content-center(titulo="")
          .col-lg-4
            figure.mb-3
              img(src='@/assets/curso/tema1/tema1-1/img4.jpg', alt='Imágen decorativa', style='width:416px').mx-auto
          
          .col-lg-6.mb-4.mb-lg-0.align-self-center.linea-pasos--custom
            p Formular y adoptar políticas que propendan hacia la promoción de la salud, prevención y atención de la enfermedad y rehabilitación de sus secuelas, mediante acciones colectivas e individuales.
        .row.justify-content-center(titulo="")
          .col-lg-4
            figure.mb-3
              img(src='@/assets/curso/tema1/tema1-1/img5.jpg', alt='Imágen decorativa', style='width:420px;').mx-auto
          .col-lg-6.mb-4.mb-lg-0.align-self-center.linea-pasos--custom
            p Establecer mecanismos para evitar la violación del derecho fundamental a la salud y determinar su régimen sancionatorio.
        .row.justify-content-center(titulo="")
          .col-lg-4
            figure.mb-3
              img(src='@/assets/curso/tema1/tema1-1/img6.jpg', alt='Imágen decorativa', style='width:420px;').mx-auto
          .col-lg-6.mb-4.mb-lg-0.align-self-center.linea-pasos--custom
            p Ejercer una adecuada inspección, vigilancia y control, mediante un órgano y/o las entidades especializadas que se determinen para tal efecto.
        .row.justify-content-center(titulo="")
          .col-lg-4
            figure.mb-3
              img(src='@/assets/curso/tema1/tema1-1/img7.jpg', alt='Imágen decorativa', style='width:420px;').mx-auto
          .col-lg-6.mb-4.mb-lg-0.align-self-center.linea-pasos--custom
            p Velar por el cumplimiento de los principios del derecho fundamental a la salud, en todo el territorio nacional, según las necesidades de salud de la población.
        .row.justify-content-center(titulo="")
          .col-lg-4
            figure.mb-3
              img(src='@/assets/curso/tema1/tema1-1/img8.jpg', alt='Imágen decorativa', style='width:420px;').mx-auto
          .col-lg-6.mb-4.mb-lg-0.align-self-center.linea-pasos--custom
            p Realizar el seguimiento continuo de la evolución de las condiciones de salud de la población, a lo largo del ciclo de vida de las personas. 
        .row.justify-content-center(titulo="")
          .col-lg-4
            figure.mb-3
              img(src='@/assets/curso/tema1/tema1-1/img9.jpg', alt='Imágen decorativa', style='width:420px;').mx-auto
          .col-lg-6.mb-4.mb-lg-0.align-self-center.linea-pasos--custom
            p Realizar evaluaciones sobre los resultados de goce efectivo del derecho fundamental a la salud, en función de sus principios y sobre la forma como el Sistema avanza, de manera razonable y progresiva, en la garantía al derecho fundamental de la salud.
        .row.justify-content-center(titulo="")
          .col-lg-4
            figure.mb-3
              img(src='@/assets/curso/tema1/tema1-1/img10.jpg', alt='Imágen decorativa', style='width:420px;').mx-auto
          .col-lg-6.mb-4.mb-lg-0.align-self-center.linea-pasos--custom
            p Adoptar la regulación y las políticas indispensables para financiar, de manera sostenible, los servicios de salud y garantizar el flujo de los recursos para atender, de manera oportuna y suficiente, las necesidades en la salud de la población.
        .row.justify-content-center(titulo="")
          .col-lg-4
            figure.mb-3
              img(src='@/assets/curso/tema1/tema1-1/img11.jpg', alt='Imágen decorativa', style='width:420px;').mx-auto
          .col-lg-6.mb-4.mb-lg-0.align-self-center.linea-pasos--custom
            p Intervenir el mercado de medicamentos, dispositivos médicos e insumos en salud, con el fin de optimizar su utilización; evitar las inequidades en el acceso, asegurar la calidad de los mismos o, en general, cuando pueda derivarse una grave afectación de la prestación del servicio.
    p.mb-4(data-aos="fade-right") Aquí entra en juego el artículo 6 de la ley 100 de 1993, el cual deja en claro que el Sistema de Seguridad Social Integral, coordinará las instituciones y los recursos necesarios para alcanzar los siguientes objetivos:
    .row.justify-content-center.mb-4
      .col-lg-8(data-aos="fade-right")
        .row
          .col-lg-12
            .row.justify-content-center.mb-3(data-aos="fade-up-right")
              .col-auto.align-self-center
                ol.lista-ol
                  li 
                    span.h2.span.list_1.m-top  1 
              .col.col-lg-10.align-self-center.py-4(style='border-bottom: 1px solid #70707078')
                p.mb-3  Garantizar las prestaciones económicas y de salud, a quienes tienen una relación laboral o capacidad económica suficiente para afiliarse al sistema.
          .col-lg-12
            .row.justify-content-center.mb-3(data-aos="fade-up-right")
              .col-auto.align-self-center
                ol.lista-ol
                  li 
                    span.h2.span.list_1.m-top  2
              .col.col-lg-10.align-self-center.py-4(style='border-bottom: 1px solid #70707078')
                p.mb-3  Garantizar la prestación de los servicios sociales complementarios, en los términos de la presente ley.
          .col-lg-12
            .row.justify-content-center(data-aos="fade-up-right")
              .col-auto.align-self-center
                ol.lista-ol
                  li 
                    span.h2.span.list_1.m-top  3
              .col.col-lg-10.align-self-center.py-4(style='')
                p Garantizar la ampliación de cobertura hasta lograr que toda la población acceda al sistema, mediante mecanismos que, en desarrollo del principio constitucional de solidaridad, permitan que sectores sin la capacidad económica suficiente, como campesinos, indígenas y trabajadores independientes, artistas, deportistas, madres comunitarias, accedan al sistema y al otorgamiento de las prestaciones de forma integral.
      .col-lg-4.align-self-center(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/tema1-1/img12.png', alt='Imágen decorativa', style='width:287px;').mx-auto
    .row.justify-content-center
      .col-lg-11
        .bloque-texto-custom.color-secundario(data-aos="flip-down")
          .bloque-texto-custom__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/tema1-1/img13.svg')})`}")(alt="Imágen decorativa")
          .bloque-texto-custom__texto
            p.mb-0.mt-5 #[strong Recuerde que:] el Sistema de Seguridad Social Integral ha sido instituido para unificar la normatividad y la planeación de la seguridad social, así como también para coordinar a las entidades prestatarias de las mismas, para obtener las finalidades propuestas en la presente ley.
    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 1.2 Evaluación de indicadores
    p.mb-5(data-aos="fade-right") De acuerdo con la Ley 100 de 1993, el Sistema de Seguridad Social Integral en Colombia se compone de:
    .row.justify-content-center.mb-5.fondo-tarjeta--tema1V2
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-5(data-aos="fade-right")
          p.mb-0 #[b Figura 2]. Composición Sistema de Seguridad Social Integral
        figure(style='margin-bottom:80px;')
          img.mb-3(src='@/assets/curso/tema1/tema1-2/img1.svg', alt='Muestra composición sistema de seguridad social integral:<br>Sistema General de Seguridad Social en Salud<br>Sistema General de Riesgos Profesionales<br>Sistema General de Seguridad Social Integral en Colombia<br>Sistema General de Pensiones<br>Servicios Sociales Complementarios').mx-auto
          p.text-center Nota. Sena (2021).
    p.mb-5(data-aos="fade-right") Estos sistemas son medidos por medio de indicadores, suministrados por las diferentes entidades, como:
    TabsA.color-acento-contenido(style='margin-bottom:80px;')(data-aos="fade-left")
      .tarjeta.color-secundario--borde.p-4(titulo="SISPRO")
        h4.mb-5 Sistema Integrado de Información de la Protección Social
        .row
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/tema1/tema1-2/img2.png', style="width:350px", alt='Muestra logo Sistema Integral de Información de la Protección Social (SISPRO)').m-auto
          .col-xl-6
            p A partir del 2014, el Sistema Integrado de Información de la Protección Social (SISPRO), se encarga de suministrar un archivo que contiene la cantidad de afiliados al sistema de seguridad social en salud, tanto del régimen contributivo como del subsidiado. Además, para el régimen contributivo, se presentan las categorías activo o suspendido y si es cotizante, beneficiario o adicional.
      .tarjeta.color-secundario--borde.p-4(titulo="SuperFinanciera")
        h4.mb-5 Superintendencia Financiera de Colombia 
        .row
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/tema1/tema1-2/img3.png', style="width:350px" ,alt='Muestra logo Superintendencia Financiera de Colombia').m-auto
          .col-xl-6
            p La Superintendencia Financiera de Colombia, se encarga de suministrar un archivo que contiene la cantidad de afiliados y pensionados, tanto al Régimen de Prima Media (RPM) administrado por Colpensiones, como al Régimen de Ahorro Individual con Solidaridad (RAIS), administrado por fondos privados de pensiones.
      .tarjeta.color-secundario--borde.p-4(titulo="MinTrabajo")
        h4.mb-5 Dirección de Riesgos Laborales del Ministerio de Trabajo
        .row
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/tema1/tema1-2/img4.png', style="width:350px" ,alt='Muestra logo: Dirección de Riesgos Laborales del Ministerio de Trabajo').m-auto
          .col-xl-6
            p Suministra un archivo con la cantidad de trabajadores y empresas afiliadas al Sistema General de Riesgos Laborales en Colombia.
      .tarjeta.color-secundario--borde.p-4(titulo="SFC/FNA")
        h4.mb-5 La Superintendencia Financiera de Colombia y el Fondo Nacional del Ahorro 
        .row.justify-content-center
          .col-xl-4.mb-4
            figure.mb-4
              img(src='@/assets/curso/tema1/tema1-2/img5.svg', style="width:350px" ,alt='Muestra logo Fondo Nacional del Ahorro').m-auto
            figure
              img(src='@/assets/curso/tema1/tema1-2/img5-2.svg', style="width:350px" ,alt='Muestra logo Superintendencia Financiera de Colombia').m-auto
          .col-xl-6
            p Suministran un archivo con la cantidad de afiliados a los fondos privados de cesantías, y al Fondo Nacional del Ahorro.
      .tarjeta.color-secundario--borde.p-4(titulo="Subsidio Familiar")
        h4.mb-5 La Superintendencia de Subsidio Familiar
        .row
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/tema1/tema1-2/img6.svg', style="width:350px" ,alt='Muestra logo Superintendencia de Subsidio Familiar').m-auto
          .col-xl-6
            p Suministra un archivo con datos de la cantidad de trabajadores y empresas afiliadas al Sistema de Subsidio Familiar en Colombia.
    .row.align-items-center.justify-content-center
      .col-lg-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema1/tema1-2/img7.svg', alt='Imágen decorativa', style='width:348px').mx-auto
      .col-lg-6(data-aos="fade-left")
        .cajon.color-secundario.p-5.mb-4
          p El Ministerio de Salud y Protección Social, divulgará evaluaciones anuales sobre los resultados del goce efectivo del derecho fundamental a la salud, en función de los elementos esenciales de accesibilidad, disponibilidad, aceptabilidad y calidad y, con base en los resultados de dicha evaluación, se deberán implementar y diseñar políticas públicas tendientes a mejorar las condiciones de salud de la población.    
        p El informe sobre la evolución de los indicadores del goce efectivo del derecho fundamental a la salud, deberá ser presentado a todos los agentes del sistema.
    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 1.3 Sujetos de especial protección constitucional
    p.mb-5(data-aos="fade-right") La Corte Constitucional, bajo la sentencia T-293 del 2017, define la categoría “sujeto de especial protección constitucional”, como:
    .row.justify-content-center.mb-3(data-aos="fade-left")
      .col-lg-11
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/tema1-3/img1.jpg')})`}")(alt="Imágen decorativa")
          .bloque-texto-g__texto.p-4
            i.fas.fa-quote-right.mb-5.mt-4(style="color: #00BCD4 !important ;font-size:35px !important")
            p.mb-0 “Una institución jurídica cuyo propósito fundamental es el de reducir los efectos nocivos de la desigualdad material. Todo lo anterior debe ser entendido como una acción positiva en favor de quienes, por razones particulares, se encuentran en una situación de debilidad manifiesta. No obstante, la condición del sujeto, de especial protección constitucional, no excluye ni elimina el deber de autogestión que tienen todos los individuos para hacer valer sus derechos”
            br
            br
            p.d-flex.justify-content-end.mb-0 #[b Corte Constitucional, sentencia T-293 del 2017]
    .row.justify-content-center(data-aos="fade-right")
      .col-lg-10
        p.mb-4 También se ha señalado que existen unos sujetos de especial protección constitucional, quienes tienen derecho a una protección adicional por parte del Estado. Ellos son:
    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-lg-10(style="background-color: #c4b5f23a; border-radius:20px;")
        .row
          .col-lg-6.ps-5.pt-5
            ul.lista-ul.fa-ul2
              li.mb-4
                i.fas.fa-atom
                | Los adultos mayores.
              li.mb-4
                i.fas.fa-atom
                |Los menores de edad.
              li.mb-4
                i.fas.fa-atom
                | Mujeres embarazadas.
              li.mb-4
                i.fas.fa-atom
                | Personas en situación de desplazamiento.
              li.mb-4
                i.fas.fa-atom
                | Madres cabeza de familia.
              li.mb-4
                i.fas.fa-atom
                | Personas que sufren de enfermedades huérfanas.
              li.mb-4
                i.fas.fa-atom
                | Víctimas del conflicto armado en condición de discapacidad.
              li.mb-4
                i.fas.fa-atom
                | Personas con disminuciones físicas o psíquicas.
          .col.align-self-center
            figure.mb-4
              img(src='@/assets/curso/tema1/tema1-3/img2.png' alt='Imágen decorativa', style='width:350px;').mx-auto
    .row.justify-content-center(data-aos="fade-left")
      .col-lg-10
        .bloque-texto-a.color-primario.ps-3.mb-5.pe-4.pt-3.pb-3
          .row.m-0.align-items-center.justify-content-between
            .col-lg-2.mb-4.mb-lg-0
              figure.py-3
                img(src='@/assets/curso/tema1/tema1-3/img3.svg' alt='Imágen decorativa', style='width: 144px;').mx-auto
            .col-lg-10
              .bloque-texto-a__texto.p-4
                p Su atención en salud no estará limitada por ningún tipo de restricción administrativa o económica. Las instituciones que hagan parte del sector salud, deberán definir procesos de atención intersectoriales e interdisciplinarios que les garanticen las mejores condiciones de atención.
    p.mb-4(data-aos="fade-right") En el caso de las mujeres en estado de embarazo, se adoptarán medidas para garantizar el acceso a los servicios de salud que requieren durante el embarazo y, con posterioridad al mismo y para garantizar que puedan ejercer sus derechos fundamentales, en el marco del acceso a servicios de salud.
    p.mb-4(data-aos="fade-right") En esta sentencia también encontramos:
    .row.justify-content-center(data-aos="fade-left")
      .col-lg-11
        ul.lista-ul.mb-0
          li.mb-4
            i.fas.fa-angle-right
            | #[strong Parágrafo 1º. ] Las víctimas de cualquier tipo de violencia sexual tienen derecho a acceder, de manera prioritaria, a los tratamientos sicológicos y siquiátricos que requieran.
          li
            i.fas.fa-angle-right
            | #[strong Parágrafo 2°. ] En el caso de las personas víctimas de la violencia y del conflicto armado, el Estado desarrollará el programa de atención psicosocial y salud integral, a las víctimas de que trata el artículo 137 de la Ley 1448 de 2011.
    separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 1.4 Mecanismos de protección del derecho fundamental a la salud
    .row.justify-content-center(style='background: linear-gradient(0deg,#F7F6FE,#F7F6FE)')
      .col-lg-10.mb-4
        .row.justify-content-center.p-4
          .col-lg-5.align-self-center.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/tema1/tema1-4/img1.png' alt='Imágen decorativa', style='width: 482px;').mx-auto
          .col-lg-7(data-aos="fade-left")
            p El Ministerio de Salud regula el derecho fundamental a la Salud, basada en unos principios y elementos esenciales que serán los encargados de impactar la prestación de los servicios y tecnologías en salud, con el fin de asegurar una atención acorde con las necesidades de la población. Es la primera ley de su clase para un derecho social y reconoce a la salud como un derecho fundamental.
            p La siguiente figura nos presenta los componentes de la ley:
            .titulo-sexto.color-acento-contenido.mb-4
              p.mb-0 #[b Figura 3]. Ley 1751 de 2015
            a.anexo.enlace-custom(:href="obtenerLink('/downloads/ley_estatutaria.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p.mb-0 Ley 1751 de 2015
      .col-lg-10
        p.mb-4 Para ampliar la información, descargue el PDF de la Ley Estatutaria 1751 de 2015, por medio de la cual se regula el derecho fundamental a la salud y se dictan otras disposiciones.
        .row
          .col-lg-6
            a.anexo.mb-4.enlace-custom(:href="obtenerLink('/downloads/Anexo1_CF1_Ley1751.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p Ley Estatutaria 1751 de 2015.

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
