<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p El Sistema General de Seguridad Social en Colombia, tiene la función de garantizar a toda la población el acceso a una seguridad social, entendida esta según el artículo 48 de la Constitución Política, como un servicio público de carácter obligatorio que se presta bajo el control del estado, basado en los principios de universalidad, eficiencia y solidaridad, actualmente este sistema se encuentra a cargo del Ministerio de Salud y Protección Social. 

    p.mb-5 Por lo anterior es importante reconocer y manejar las obligaciones que tiene el estado para con este sistema, las políticas que se implementan, de igual manera conocer los diferentes modelos de atención en salud, sus clientes, estrategias de mercadeo, entre otros temas que fueron abordados en este componente y que se esquematizan en el mapa que se expone a continuación:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Muesetra mapa conceptual donde resume contenidos del Sistema general de seguridad social,  mostrando  la función de garantizar a toda la población el acceso a una seguridad social, entendida esta según el artículo 48 de la Constitución Política, como un servicio público de carácter obligatorio que se presta bajo el control del estado, basado en los principios de universalidad, eficiencia y solidaridad, actualmente este sistema se encuentra a cargo del Ministerio de Salud y Protección Social.")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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

<style lang="sass"></style>
