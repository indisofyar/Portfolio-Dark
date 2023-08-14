<template>
  <section class="bg-gray-950 text-white">
    <div class="max-w-screen-lg mx-auto container  px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
      <div class="banner-float animate__animated animate__fadeIn pt-[100px] max-w-3xl mx-auto">
        <h1 class="mb-4 text-5xl md:text-6xl italic">DotIAM</h1>
        <p class="mb-14 text-xl font-extralight">Decentralised identity management platform</p>
        <p class="text-gray-400">DotIAM is a decentralised identity management platform that allows users to store and
          manage their personal identities securely. This case study aims to highlight the user experience (UX)
          considerations and improvements made to enhance the usability and effectiveness of DotIAM.
        </p>
      </div>
      <div class="columns-2 md:columns-4 gap-2 banner-float animate__animated animate__fadeIn pt-20 max-w-3xl mx-auto text-sm">
        <div>Role<br>
          <span class="text-gray-400">Sole designer in a team with 3 other engineers</span>
        </div>
        <div class="mt-3 md:mt-0">Purpose<br>
          <span class="text-gray-400">Commercial project</span>
        </div>
        <div>Tools<br>
          <span class="text-gray-400">Figma & React</span>
        </div>
        <div class="mt-3 md:mt-0">Duration<br>
          <span class="text-gray-400">3 months</span>
        </div>
      </div>
    </div>
    <div class="max-w-screen-xl mx-auto container  px-4  sm:px-6 lg:px-8 ">
      <vue-image img="assets/images/dotiam-cover.png" alt="platform screencap"
        class="w-full max-w-5xl max-h-[520px] rounded-xl object-cover mx-auto" />

    </div>
  </section>

  <section class="bg-gray-950 text-white">
    <div class="max-w-screen-lg mx-auto container  px-4 sm:px-6">
      <div class="banner-float animate__animated animate__fadeIn  max-w-3xl  pt-14 mx-auto">
        <h2 class="mb-4 text-3xl italic">Introduction</h2>
        <p class="text-gray-400">After winning the Easy A x Polkadot hackathon over 36 hours, which included creating a
          basic MVP of the product and product demo, further research and design was needed to begin introducing the
          product to market and landing grants and acquiring funding to further the development of the project. I was the
          sole ux designer working in a team of software engineers. This case study outlines how
          I explored how to improve our current offering and validate product-market fit.
        </p>
        <vue-image img="assets/images/tweet.png" alt="Shift management features"
          class="w-full  rounded-xl object-contain  mt-14" />

      </div>
      <div class="banner-float animate__animated animate__fadeIn  max-w-3xl mt-14 mx-auto">
        <h2 class="mb-4 text-3xl italic">Design sprint objectives</h2>
        <p class="text-gray-400 mb-8">
          To begin with, I established objectives:
        </p>
        <ol class="list-decimal text-gray-400 px-4 sm:px-6">
          <li class="  mb-6"><strong>Validate demand for the product</strong><br>
            As to discover whether there was a need to pivot
          </li>
          <li class="  mb-6">
            <strong>Improve the current prototype and website</strong><br>
            This would help us land grants and gain funding
          </li>
        </ol>
        <p class="text-gray-400 mb-8">
          The easiest way to achieve both of these at once, would be to produce a decent landing page and demo from what
          we had, and then gauge interest through discussions to potential partners. We could then also validate through
          placing the page on google ads, and determining whether there was demand for the product through covnersion
          rates and engagement.
        </p>
        <p class="text-gray-400 mb-8">
          The below demo displays the landing page at the beginning of the design sprint, although it was passable and
          fairly good for a hackathon, there was room to improve it as to improve the authority and UX of the site.
        </p>
      </div>
    </div>
    <div class="max-w-screen-xl mx-auto container  px-4  sm:px-6 lg:px-8 mt-14 ">
      <div
        class="grid-cols-1 md:grid-cols-3 grid w-full max-w-5xl  rounded-xl object-contain gap-3 bg-gray-800 p-3 items-center mx-auto">
        <vue-image img="assets/images/dotiam-landing-initial.png" class="rounded" />
        <video width="100%" height="auto" controls class="col-span-2 rounded">
          <source src="assets/images/IAM.mp4" type="video/mp4">

          Your browser does not support the video tag.
        </video>
      </div>
    </div>

    <div class="max-w-screen-lg mx-auto container  px-4 sm:py-12 sm:px-6 lg:py-14 lg:px-8">
    <div class="banner-float animate__animated animate__fadeIn  max-w-3xl  mx-auto">
      <RouterLink to="/projects">
        <button class="button w-full mt-12 flex items-center justify-center gap-3  max-w-5xl ">Back to projects </button>
      </RouterLink>
    </div>
  </div>

  </section>

</template>

<script>
// @ is an alias to /img
import VueImage from '@/components/VueImage.vue';

export default {
  components: {
    VueImage
  },
  name: "DotIam",
  data() {
    return {
      projects: "all",
    };
  },
  mounted() {
    // window.scrollTo(0, 0);
  },
  methods: {


  },

}
</script>
<style  ></style>
