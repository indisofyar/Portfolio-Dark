<template>
  <section class="bg-gray-950 text-white">
    <div class="max-w-screen-lg mx-auto container  px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 ">
      <div class="banner-float animate__animated animate__fadeIn pt-[100px] max-w-3xl mx-auto">
        <h1 class="mb-4 text-5xl md:text-6xl italic">Reach App</h1>
        <p class="mb-14 text-xl font-extralight">Shift management and knowledge-sharing for outreach workers</p>
        <p class="text-gray-400">Reach app provides increase operational efficiency for these organisations with outreach
          workers, by providing outreach workers with increased access to training and information sharing and shift
          management. Through this, organisations which conduct outreach can train eachother’s workers and reduce the
          amount of training session’s they’ll have to organise.
        </p>
      </div>
      <div class="columns-2 md:columns-4 gap-2 banner-float animate__animated animate__fadeIn pt-20 max-w-3xl text-sm mx-auto ">
        <div>Role<br>
          <span class="text-gray-400">UX Designer</span>
        </div>
        <div class="mt-3 md:mt-0"> Purpose<br>
          <span class="text-gray-400">Personal Project</span>
        </div>
        <div>Tools<br>
          <span class="text-gray-400">Figma & Figjam</span>
        </div>
        <div class="mt-3 md:mt-0">Duration<br>
          <span class="text-gray-400">1 month</span>
        </div>
      </div>
    </div>
    <div class="max-w-screen-xl mx-auto container  px-4  sm:px-6 lg:px-8 ">
      <vue-image img="assets/images/reach.png" alt="platform screencap" class="w-full max-w-5xl max-h-[520px] rounded-xl object-cover mx-auto"/>

    </div>
  </section>
</template>

<script>
import VueImage from './VueImage.vue';
export default {
  name: 'PortfolioHeader',
  props: {
    msg: String
  },
  components: {VueImage}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
