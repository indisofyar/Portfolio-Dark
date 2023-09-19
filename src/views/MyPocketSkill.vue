<template>
  <div v-if="$store.state.unlocked">
    <section class="bg-gray-950  text-white">
      <div class="max-w-screen-lg mx-auto container  px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-">
        <div class="banner-float animate__animated animate__fadeIn pt-[100px] max-w-3xl mx-auto boder">
          <h1 class="mb-4 text-5xl md:text-6xl italic">MyPocketSkill</h1>
          <p class="mb-14 text-xl font-extralight">Improving MyPocketSkill's chat experience</p>
          <p class="text-gray-400">MyPocketSkill UI had previously been bootstrapped with minimal design input. I joined
            the platform as a UX designer/developer to improve the UX and visual style of the platform. I worked as the
            sole designer and cultivated a process whereby we could attack larger redesigns of the features on the
            platform,
            whilst regularly releasing easy-wins which would benefit users. I prioritised these through regular
            user-testing, user interviews and within-team discussions. This particular case study, describes my process
            for redesigning our on-platform chat across several sprints.
          </p>
        </div>
        <div
          class="columns-2 md:columns-3 banner-float animate__animated animate__fadeIn pt-20 max-w-3xl mx-auto text-sm ">
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
          <h2 class="mb-4 text-3xl italic">Incidental discovery</h2>
          <p class="text-gray-400  mb-8">
            As part of my day-to-day design process, I conducted regular usability testing and interviews with our brand
            ambassadors and users of the platform. A question
            asked at the end of these interviews was “What’s the biggest problem your encountering with the platform at
            the moment?”
          </p>
          <p class="text-gray-400 mb-3">
            This lead to discovery that <strong class="bold underline">our chat system</strong> was a major pain point for
            users and I began to
            document the different issues which users encountered through interviews, self-testing.
          </p>
        </div>
      </div>
      <div class="max-w-screen-xl mx-auto container  px-4  sm:px-6 lg:px-8 bg-gray-800 xl:rounded-xl p-4">
        <vue-image img="assets/images/usability-testing.png" alt="Screengrabs from different usability tests"
          class="w-full max-w-5xl rounded-xl object-contain mx-auto" />
      </div>
      <div class="max-w-screen-lg mx-auto container  px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 ">
        <div class="mx-auto banner-float animate__animated animate__fadeIn  max-w-3xl  ">
          <h2 class="mb-4 text-3xl italic">Further discovery</h2>
          <p class="text-gray-400  mb-8">
            Working closely with the customer service team, I discussed with them what issues they observed in different
            users' chat conversations. I also tested the chat myself. The issues discovered can be summarised by the below
            4 categories.
          </p>
        </div>
        <div class="grid  md:grid-cols-4 gap-6">
          <div
            class="relative flex items-start justify-between rounded-xl border border-gray-100 p-4 shadow-xl sm:p-6 lg:p-8 ">
            <div class="pt-4 text-gray-500"><span class="text-3xl">🎞</span>
              <h3 class="mt-4 text-2xl font-bold text-white  ">Media issues</h3>
              <p class="text-gray-400 text-sm">The existing chat lacked the capability to display images in chat
              </p>
            </div>
          </div>
          <div
            class="relative flex items-start justify-between rounded-xl border border-gray-100 p-4 shadow-xl sm:p-6 lg:p-8 ">
            <div class="pt-4 text-gray-500"><span class="text-3xl">💷</span>
              <h3 class="mt-4 text-2xl font-bold text-white  ">Issues booking</h3>
              <p class="text-gray-400 text-sm">Customers didn't know where to navigate to book from the chat screen.
              </p>
            </div>
          </div>
          <div
            class="relative flex items-start justify-between rounded-xl border border-gray-100 p-4 shadow-xl sm:p-6 lg:p-8 ">
            <div class="pt-4 text-gray-500"><span class="text-3xl">🛠</span>
              <h3 class="mt-4 text-2xl font-bold text-white  ">Usability</h3>
              <p class="text-gray-400 text-sm">
                Textarea not resizing properly, inability to search through chat, etc.
              </p>
            </div>
          </div>
          <div
            class="relative flex items-start justify-between rounded-xl border border-gray-100 p-4 shadow-xl sm:p-6 lg:p-8 ">
            <div class="pt-4 text-gray-500"><span class="text-3xl">🎨</span>
              <h3 class="mt-4 text-2xl font-bold text-white  ">Visuals</h3>
              <p class="text-gray-400 text-sm">The chat lacked visual consistency which was disruptive to UX.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="max-w-screen-lg mx-auto container  px-4 sm:px-6 lg:px-8 ">
        <div class="mx-auto banner-float animate__animated animate__fadeIn  max-w-3xl  ">
          <h2 class="mb-4 text-3xl italic">Presenting this research</h2>
          <p class="text-gray-400  mb-8">
            Through relaying this back to the team, I was able to get it added to the roadmap.
          </p>
        </div>
      </div>
      <div class="max-w-screen-xl mx-auto container  px-4  sm:px-6 lg:px-8 ">
        <vue-image img="assets/images/chat-screen-improvements.png" alt="platform screencap"
          class="w-full max-w-5xl rounded-xl object-contain mx-auto" />
      </div>
      <div class="max-w-screen-lg mx-auto container  px-4 sm:py-12 sm:px-6 lg:py-14 lg:px-8">
        <div class="banner-float animate__animated animate__fadeIn  max-w-3xl mx-auto  ">
          <RouterLink to="/projects">
            <button class="button w-full mt-12 flex items-center justify-center gap-3  max-w-5xl ">Back to
              projects</button>
          </RouterLink>
        </div>
      </div>
    </section>

  </div>
  <div v-else class="min-h-[80vh] flex items-center justify-center w-full p-3">
    <div>
      <p class="mb-6">This project is confidential. Please enter the passkey to read it.</p>
      <div class="relative">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" v-if="!showPassword"
          @click="showPassword = !showPassword; type = 'text'" class="bi bi-eye-slash absolute right-[10px] top-[10px]"
          viewBox="0 0 16 16">
          <path
            d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
          <path
            d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
          <path
            d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" v-else
          @click="showPassword = !showPassword; type = 'password'"
          class="bi bi-eye-slash absolute right-[10px] top-[10px]" viewBox="0 0 16 16">
          <path
            d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
          <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
        </svg>
        <input v-model="input" :type="type"
          class="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm h-10 p-1 dark:text-white" />

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
  components: { VueImage },
  data() {
    return {
      projects: "all",
      input: '',
      hashedPassword: '52a76a09ec2254bb5b72ffe8b88ded78bc735c2cdd8868c0469bf4034088a5fa',
      showPassword: true,
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
