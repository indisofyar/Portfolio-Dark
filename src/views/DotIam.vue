<template>
  <section class="bg-gray-950 text-white">
    <div class="max-w-screen-lg mx-auto container  px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 ">
      <div class="banner-float animate__animated animate__fadeIn pt-[100px] max-w-2xl">
        <h1 class="mb-4 text-5xl md:text-6xl italic">DotIAM</h1>
        <p class="mb-14 text-xl font-extralight">Decentralised identity management platform</p>
        <p class="text-gray-400">DotIAM is a decentralised identity management platform that allows users to store and
          manage their personal identities securely. This case study aims to highlight the user experience (UX)
          considerations and improvements made to enhance the usability and effectiveness of DotIAM.
        </p>
      </div>
      <div class="columns-2 md:columns-4 gap-2 banner-float animate__animated animate__fadeIn pt-20 max-w-3xl text-sm ">
        <div>Role<br>
          <span class="text-gray-400">Sole designer in a team with 3 other engineers</span>
        </div>
        <div class="mt-3 md:mt-0">Purpose<br>
          <span class="text-gray-400">Commercial greenfield project</span>
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
      <img src="assets/images/dotiam-cover.png" alt="platform screencap"
        class="w-full max-w-5xl max-h-[520px] rounded-xl object-cover" />

    </div>
  </section>

  <section class="bg-gray-950 text-white">
    <div class="max-w-screen-lg mx-auto container  px-4 sm:px-6">
      <div class="banner-float animate__animated animate__fadeIn  max-w-2xl  pt-14">
        <h2 class="mb-4 text-3xl italic">Introduction</h2>
        <p class="text-gray-400">After winning the Easy A x Polkadot hackathon over 36 hours, which included creating a
          basic MVP of the product and product demo, further research and design was needed to begin introducing the
          product to market and landing grants and acquiring funding to further the development of the project. I was the
          sole ux designer working in a team of software engineers. This case study outlines how
          I explored how to improve our current offering and validate product-market fit.
        </p>
        <img src="assets/images/tweet.png" alt="Shift management features"
          class="w-full  max-h-[520px] rounded-xl object-contain  mt-14" />

      </div>
      <div class="banner-float animate__animated animate__fadeIn  max-w-2xl mt-14">
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
    <div class="max-w-screen-xl mx-auto container  px-4  sm:px-6 lg:px-8 mt-14">
      <div
        class="grid-cols-1 md:grid-cols-3 grid w-full max-w-5xl  rounded-xl object-contain gap-3 bg-gray-800 p-3 items-center">
        <img src="assets/images/dotiam-landing-initial.png" class="rounded">
        <video width="100%" height="auto" controls class="col-span-2 rounded">
          <source src="assets/images/IAM.mp4" type="video/mp4">

          Your browser does not support the video tag.
        </video>
      </div>
    </div>

    <div class="max-w-screen-lg mx-auto container  px-4 sm:py-12 sm:px-6 lg:py-14 lg:px-8">
    <div class="banner-float animate__animated animate__fadeIn  max-w-2xl  ">
      <RouterLink to="/projects">
        <button class="button w-full mt-12 flex items-center justify-center gap-3  max-w-5xl ">Back to projects <svg
            xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right"
            viewBox="0 0 16 16">
            <path fill-rule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
          </svg></button>
      </RouterLink>
    </div>
  </div>

  </section>

</template>

<script>
// @ is an alias to /src


export default {
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
