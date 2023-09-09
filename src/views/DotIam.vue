<template>
  <section class="bg-gray-950 text-white">
    <div class="max-w-screen-lg mx-auto container  px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
      <div class="banner-float animate__animated animate__fadeIn pt-[100px] max-w-3xl mx-auto">
        <div class="flex items-end mb-4">
          <h1 class=" text-5xl md:text-6xl  italic">DOT I AM</h1>
          <a href="https://dotiam.com">
            <div
              class="flex items-center gap-2 bg-slate-900 text-gray-300 rounded-xl p-2 text-sm ml-4 hover:underline cursor-pointer">
              View <svg xmlns="http://www.w3.org/2000/svg" height="1em" fill="currentColor"
                viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
              </svg></div>
          </a>
        </div>
        <p class="mb-14 text-xl font-extralight">Decentralised identity management platform</p>
        <p class="text-gray-400">DotIAM is a decentralised identity management platform that allows users to store and
          manage their personal identities securely. This case study aims to highlight the user experience (UX)
          considerations and improvements made to enhance the usability and effectiveness of DotIAM.
        </p>
      </div>
      <div
        class="columns-2 md:columns-4 gap-2 banner-float animate__animated animate__fadeIn pt-20 max-w-3xl mx-auto text-sm">
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
        <vue-image img="assets/images/tweet.png" alt="Hackathon twitter post"
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
        <video width="100%" height="auto" controls class="col-span-2 rounded w-full overflow-hidden">
          <source src="assets/images/IAM.mp4" type="video/mp4">

          Your browser does not support the video tag.
        </video>
      </div>
    </div>
    <div class="banner-float animate__animated animate__fadeIn  max-w-3xl mt-14 mx-auto">
      <h2 class="mb-4 text-3xl italic">Research</h2>
      <p class="text-gray-400 mb-8">
        For the intial research, I began with a 5 second test of our current mockup as well as follow-up questions to
        determine initial interest in the product.
      </p>
      <vue-image img="assets/images/dotiam-ux-research.png" alt="5 second test"
        class="w-full  rounded-xl object-contain mt-14" />
      <p class="text-gray-400 text-center max-w-5xl mt-4 mx-auto">Interview notes example, I like to share these with the
        team to create greater alignment
      </p>

      <p class="text-gray-400 mb-8 mt-10">
        This initial research helped me to create the initial copy on the website.
      </p>
      <h2 class="mb-4 text-3xl italic">Mapping out how it all works</h2>
      <p class="text-gray-400 mb-8 mt-10">
        Through collaborating with the team, we began to map out how it works and how we would structure the website based
        on this.
      </p>
      <vue-image img="assets/images/dotiam-flow-diagram.svg" alt="5 second test"
        class="w-full  rounded-xl object-contain mt-14" />
      <vue-image img="assets/images/information-architecture.png" alt="5 second test"
        class="w-full  rounded-xl object-contain mt-14" />
      <h2 class="mb-4 text-3xl italic mt-8">Further design</h2>
      <p class="text-gray-400 mb-8 mt-10">
        Based on team feedback and user findings, I continued to iterate on the website.
      </p>
    </div>
    <div class="max-w-screen-xl mx-auto container  px-4  sm:px-6 lg:px-8 mt-14 ">
      <div class=" w-full max-w-5xl  rounded-xl object-contain mx-auto">
        <vue-image img="assets/images/dotiam-figma.png" class="rounded" />
      </div>
    </div>
    <div class="banner-float animate__animated animate__fadeIn  max-w-3xl mt-14 mx-auto">
      <h2 class="mb-4 text-3xl italic">Research</h2>
      <p class="text-gray-400 mb-8">
        For the intial research, I began with a 5 second test of our current mockup as well as follow-up questions to
        determine initial interest in the product. I created 2 maze remote studies, to begin collecting insights on the
        design of the business landing page and the home page.
      </p>
    </div>
    <div class="max-w-screen-xl mx-auto container  px-4  sm:px-6 lg:px-8 mt-14 ">
      <div class=" w-full max-w-5xl  rounded-xl object-contain mx-auto">
        <vue-image img="assets/images/dotiam-maze-responses.png" class="rounded mb-14" />
        <vue-image img="assets/images/dotiam-maze.png" class="rounded" />
      </div>
    </div>


    <div class="banner-float animate__animated animate__fadeIn  max-w-3xl mt-14 mx-auto">
      <h2 class="mb-4 text-3xl italic">Research insights</h2>
      <p class="text-gray-400 mb-8">
        Several research insights were uncovered through this includingpm:
      </p>
      <ol class="list-decimal text-gray-400 px-4 sm:px-6">
        <li class="  mb-6"><strong>Simplify the copy</strong><br>
          To users which weren't familiar with zero-knowledge proofs, the benefits weren't immediately obvious
        </li>
        <li class="  mb-6">
          <strong>Make the homepage visuals clearer</strong><br>
          People seemed to understand the visuals on the business page much more easily as their were visual cues.
        </li>
        <li class="  mb-6">
          <strong>Communicate how we keep data private more effectively</strong><br>
          One of the more interesting questions from the research which I asked was "Having heard the concept, what more would you like to know about it". Answers to this question indicated that users most interested in knowing <em>exactly how</em> we we're going to keep their data private.
        </li>
      </ol>
      <p class="text-gray-400 mb-8">
        
      </p>
    </div>

    <div class="max-w-screen-lg mx-auto container  px-4 sm:py-12 sm:px-6 lg:py-14 lg:px-8">
      <div class="banner-float animate__animated animate__fadeIn  max-w-3xl  mx-auto">
        <RouterLink to="/projects">
          <button class="button w-full mt-12 flex items-center justify-center gap-3  max-w-5xl ">Back to projects
          </button>
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
