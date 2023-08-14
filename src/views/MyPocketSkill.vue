<template>
  <div v-if="!$store.state.unlocked">
    <section class="bg-gray-950 text-white">
      <div class="max-w-screen-lg mx-auto container  px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-">
        <div class="banner-float animate__animated animate__fadeIn pt-[100px] max-w-3xl mx-auto boder">
          <h1 class="mb-4 text-5xl md:text-6xl italic">MyPocketSkill</h1>
          <p class="mb-14 text-xl font-extralight">Improving MyPocketSkill's navigation experience</p>
          <p class="text-gray-400">MyPocketSkill UI had previously been bootstrapped with minimal design input. I joined
            the platform as a UX designer/developer to improve the UX and visual style of the platform. I worked as 1 of 2
            developers and cultivated a process whereby we could attack larger redesigns of the features on the platform,
            whilst regularly releasing easy-wins which would benefit users. I prioritised these through regular
            user-testing, user interviews and within-team discussions.
          </p>
        </div>
        <div class="columns-2 md:columns-3 banner-float animate__animated animate__fadeIn pt-20 max-w-3xl mx-auto text-sm ">
          <div>Role<br>
            <span class="text-gray-400">UX Designer</span><br>
            <span class="text-gray-400">Front-end developer</span>
          </div>
          <div class="mt-3 md:mt-0"> Purpose<br>
            <span class="text-gray-400">Commercial</span><br>
            <span class="text-gray-400">project</span>

          </div>
          <div>Tools<br>
            <span class="text-gray-400">Figma</span><br>
            <span class="text-gray-400">Google Analytics</span>
          </div>
 
        </div>
      </div>
      <div class="max-w-screen-xl mx-auto container  px-4  sm:px-6 lg:px-8 ">

        <vue-image img="assets/images/mps-cover2.png" alt="platform screencap"
          class="w-full max-w-5xl rounded-xl object-contain mx-auto" />
      </div>
      <div class="max-w-screen-lg mx-auto container  px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 ">
        <div class="mx-auto banner-float animate__animated animate__fadeIn  max-w-3xl  ">
          <h2 class="mb-4 text-3xl italic">Impact</h2>
          <p class="text-gray-400">A combination of incremental improvements and larger redesigns created a big impact.
          </p>

        </div>
      </div>
      <div class="max-w-screen-xl mx-auto container  px-4  sm:px-6 lg:px-8 ">
        <div class="gap-4 max-w-5xl grid md:grid-cols-3 mx-auto">
          <div
            class="relative flex items-start justify-between rounded-xl border border-gray-100 p-4 shadow-xl sm:p-6 lg:p-8 lg:min-h-[300px]">
            <div class="pt-4 text-gray-500"><span class="text-3xl">💷</span>
              <h3 class="mt-4 text-2xl font-bold text-white  "> 104% increase in monthly bookings</h3>
              <p class="text-gray-400">Improvements in navigatability helped to double bookings as users found the site
                easier to navigate and easier on the eyes.
              </p>
            </div>
          </div>
          <div
            class="relative flex items-start justify-between rounded-xl border border-gray-100 p-4 shadow-xl sm:p-6 lg:p-8 lg:min-h-[300px]">
            <div class="pt-4 text-gray-500"><span class="text-3xl">👤</span>
              <h3 class="mt-4 text-2xl font-bold text-white  "> 274% user growth</h3>
              <p class="text-gray-400">Over a year (July 2022-July 2023), we experienced a growth in user base compared to
                the previous year.
              </p>
            </div>
          </div>
          <div
            class="relative flex items-start justify-between rounded-xl border border-gray-100 p-4 shadow-xl sm:p-6 lg:p-8 lg:min-h-[300px]">
            <div class="pt-4 text-gray-500"><span class="text-3xl">🏝</span>
              <h3 class="mt-4 text-2xl font-bold text-white  "> Better vibes</h3>
              <p class="text-gray-400">Although there was no data, our customer support reported a general improvement in
                energy on the platform, and less people seeming confused.
              </p>
            </div>
          </div>
          <!-- <div
            class="relative flex items-start justify-between rounded-xl border border-gray-100 p-4 shadow-xl sm:p-6 lg:p-8 lg:min-h-[300px]">
            <div class="pt-4 text-gray-500"><span class="text-3xl">💷</span>
              <h3 class="mt-4 text-2xl font-bold text-white  "> 104% increase in monthly bookings</h3>
              <p class="text-gray-400">Improvements in navigatability helped to double bookings as users found the site easier to navigate and easier on the eyes.
              </p>
            </div>
          </div> -->
        </div>
      </div>
      <div class="max-w-screen-lg mx-auto container  px-4 py-8 sm:py-12 sm:px-6 lg:py-14 lg:px-8">
        <div class="banner-float animate__animated animate__fadeIn  max-w-3xl  mx-auto">
          <vue-image img="assets/images/google-analytics.png" alt="platform screencap"
            class="w-full max-w-5xl rounded-xl object-contain" />
          <h2 class="mb-4 text-3xl italic mt-12">Research</h2>
          <p class="text-gray-400">Research was conducted through regular user-testing and user interviews. The focus was
            to ensure that the core features of the site were easy to use and to discover unknowns. Over the time there, I
            conducted around 40 user interviews and/or usability tests.
          </p>
        </div>
      </div>
      <div class="max-w-screen-xl mx-auto container  px-4  sm:px-6 lg:px-8 mt-4 grid ">
        <div class="md:grid-cols-3 gap-4 grid  overflow-hidden max-w-5xl mx-auto ">
          <vue-image img="assets/images/interview-1.png" alt="platform screencap"
            class="w-full max-w-5xl  rounded-xl object-cover h-[380px]" />
          <vue-image img="assets/images/interview-2.png" alt="platform screencap"
            class="w-full max-w-5xl  rounded-xl max-h-[380px]" />
          <vue-image img="assets/images/sticky-notes.png" alt="ux artifacts"
            class="w-full max-w-5xl  rounded-xl object-cover h-[380px]" />
        </div>
        <p class="text-gray-400 text-center max-w-5xl mt-4 mx-auto">Different UX artifacts collected
        </p>
      </div>
      <div class="max-w-screen-lg mx-auto container  px-4 py-8 sm:py-12 sm:px-6 lg:py-14 lg:px-8 mt-4">
        <div class="banner-float animate__animated animate__fadeIn  max-w-3xl  mx-auto">

          <h2 class="mb-4 text-3xl italic ">Identifying trends and prioritising</h2>
          <p class="text-gray-400">It was common for to take the results of ux research, identify trends within them, and
            prioritise ways of improving them. Through this I could work the team to push out 'quick-wins' each week which
            would create immediate value for users, whilst helping them identify what to prioritise and
          </p>
        </div>
      </div>
      <div class="max-w-screen-xl mx-auto container  px-4  sm:px-6 lg:px-8 mt-4 ">

        <vue-image img="assets/images/prioritisation-matrix.png" alt="platform screencap"
          class="w-full max-w-5xl  rounded-xl object-contain mx-auto" />
      </div>
      <div class="max-w-screen-lg mx-auto container  px-4 py-8 sm:py-12 sm:px-6 lg:py-14 lg:px-8 mt-6">
        <div class="banner-float animate__animated animate__fadeIn  max-w-3xl mx-auto ">

          <h2 class="mb-4 text-3xl italic ">Proceeding to design</h2>
          <p class="text-gray-400">Finally, after receiving sign off from the team and categorising and sorting acquiring
            user feedback, I would proceed to design.
          </p>
          <h3 class="mb-4 text-2xl italic mt-6">Objectives</h3>
          <ol class="list-decimal text-gray-400">
            <li class=" text-lg mb-6">Improve mobile friendliness of components
              <br>
              <span class="text-base italic">Adjusted sizing, improved consistency and visual style. </span>
            </li>
            <li class=" text-lg mb-6">Improve ease of navigation
              <br>
              <span class="text-base italic">Added sorting categories for search filter and personalised user journeys
                more. </span>
            </li>
            <li class=" text-lg mb-6">Reduce disruption and annoyances for users
              <br>
              <span class="text-base italic">Removed chatbot which would popup at unwanted times & reduced cumulative
                layout shift. </span>
            </li>
          </ol>
        </div>
      </div>

      <div class="max-w-5xl mx-auto container mt-2">
        <h2 class="mb-4 text-2xl italic">Pre-redesign</h2>
        <vue-image img="assets/images/old-screens.png" alt="platform screencap"
          class="w-full max-w-5xl rounded-xl object-contain" />
      </div>
      <div class="max-w-5xl mx-auto container mt-4">
        <h2 class="mb-4 text-2xl italic">Post-redesign</h2>
        <vue-image img="assets/images/new-screens.png" alt="platform screencap"
          class="w-full max-w-5xl  rounded-xl object-contain" />

      </div>
      <div class="max-w-screen-lg mx-auto container  px-4 sm:py-12 sm:px-6 lg:py-14 lg:px-8">
        <div class="banner-float animate__animated animate__fadeIn  max-w-3xl mx-auto  ">
          <RouterLink to="/projects">
            <button class="button w-full mt-12 flex items-center justify-center gap-3  max-w-5xl ">Back to projects</button>
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
  <div v-else class="min-h-[100vh] flex items-center justify-center w-full p-3">
    <div>
      <p class="mb-6">This project is confidential. Please enter the passkey to read it.</p>
      <div class="relative">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" v-if="!showPassword"
          @click="showPassword = !showPassword; type = 'text'" class="bi bi-eye-slash absolute right-[10px] top-[10px]"
          viewBox="0 0 16 16">
          <path
            d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
          <path
            d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
          <path
            d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" v-else
          @click="showPassword = !showPassword; type = 'password'"
          class="bi bi-eye-slash absolute right-[10px] top-[10px]" viewBox="0 0 16 16">
          <path
            d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
          <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
        </svg>
        <input v-model="input" :type="type"
          class="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm h-10 p-1 text-black" />

      </div>
    </div>



  </div>
</template>

<script>
// @ is an alias to /img
import VueImage from '@/components/VueImage.vue';
import sha256 from 'crypto-js/sha256';
export default {
  name: "MyPocketSkill",
  components: {VueImage},
  data() {
    return {
      projects: "all",
      input: '',
      hashedPassword: '52a76a09ec2254bb5b72ffe8b88ded78bc735c2cdd8868c0469bf4034088a5fa',
      showPassword: false,
      type: 'password',
    };
  },
  mounted() {
    // window.scrollTo(0, 0);
  },
  methods: {
    hashInput(input) {
      return sha256(input).toString();
    },
    unlockStore() {
      this.$store.commit('unlock');
    },
  },
  watch: {
    input(newInput) {
      const hashedInput = this.hashInput(newInput);
      if (hashedInput === this.hashedPassword) {
        this.unlockStore();
      }
    },
  },
}
</script>
<style  ></style>
