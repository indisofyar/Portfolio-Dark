<template>
  <div class="w-full h-full relative overflow-hidden pt-20">
    <img src="assets/images/background.svg" class=" animate__fadeIn object-cover w-full absolute opacity-[5%]"
      id="backgroundElement">
    <section
      class="pt-12 pb-24 px-3 flex items-center min-h-50 justify-center align-center min-h-[50vh] relative overflow-hidden ">

      <div class="mx-auto max-w-[43rem] relative z-10">
        <div class="text-center banner-float animate__animated animate__fadeInUp">
          <p class="text-base font-medium leading-8 text-white text-shadow">A London based UX Designer</p>
          <h1 class="mt-3 text-[3.75rem] leading-[4rem] tracking-tight italic text-shadow mb-5"
            style="font-style: italic;">
            Indi Sofyar
          </h1>
          <p class="mt-3 text-lg leading-relaxed text-shadow text-slate-400">I'm interested in pursuing the intersection
            of usability, feasibility & joy in digital design. I have 1.5 years design experience, a Bachelor of Design
            and I'm currently working at MyPocketSkill.</p>
        </div>
      </div>
    </section>
  </div>


  <section class="bg-gray-950 text-white min-h-[100vh] ">
    <div class="max-w-screen-xl mx-auto container  px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 ">
      <div class="banner-float animate__animated animate__fadeIn">
        <h2 class=" uppercase tracking-widest text-xl  mb-3 font-sans">Projects</h2>
        <transition name="fade" mode="out-in">
          <div data-aos="fade-up" data-aos-duration="1200" class="md:columns-2 gap-10 mx-auto mb-10">
            <div class="col-md-5 w-full" data-aos="fade-up" data-aos-duration="1600">
              <h3 class="mb-2 text-3xl">MyPocketSkill</h3>
              <p class="mb-5"> MyPocketSkill connects young people to money earning tasks. I helped to consistently
                improve UX through a combination of minor visual improvements and longer term redesigns. </p>
              <div class="mb-5">
                <div class="tag">UX</div>
                <div class="tag">UI</div>
                <div class="tag">Design</div>
                <div class="tag">Usability testing</div>
                <div class="tag">User interviews</div>
                <div class="tag">Double diamond</div>
              </div><a href="#/mypocketskill" class=""><button class="button"> View project <i
                    class="bi bi-arrow-right"></i></button></a>
            </div>
            <div style="display: flex; justify-content: center;">
              <div class="image-container"><img src="assets/images/mps-cover2.png" class="rounded"
                  alt="platform screencap" style="width: 100%;"></div>
            </div>
          </div>
        </transition>
        <transition name="fade" mode="out-in">
          <div data-aos="fade-up" data-aos-duration="1200" class="md:columns-2 gap-10 mx-auto mb-10"
            v-if="projects != 'fsd'">
            <div class="col-md-5 w-full" data-aos="fade-up" data-aos-duration="1600">
              <h3 class="mb-2 text-3xl">Reach App</h3>

              <p class="mb-5">
                Reach app is intended to help increase operational efficiency for organisations which provide outreach by
                providing
                outreach workers with increased access to training, information sharing as well as all-in-one shift
                management.
              </p>
              <div class="mb-5">
                <div class="tag">UX</div>
                <div class="tag">UI</div>
                <div class="tag">Design</div>
                <div class="tag">Usability testing</div>
                <div class="tag">User interviews</div>
                <div class="tag">Double diamond</div>
              </div>
              <router-link to="/reach" @click="scrollToTop">
                <button class="button">
                  View project <i class="bi bi-arrow-right"></i>
                </button>
              </router-link>
            </div>
            <div style="display: flex; justify-content: center;">

              <div class="image-container">
                <img src="assets/images/reach.png" style="width: 100%;" class="rounded" alt="platform screencap" />
              </div>
            </div>
          </div>
        </transition>
        <transition name="fade" mode="out-in">
          <div data-aos="fade-up" data-aos-duration="1200" class="md:columns-2 gap-10 mx-auto mb-10"
            v-if="projects != 'fsd'">
            <div class="col-md-5 w-full" data-aos="fade-up" data-aos-duration="1600">
              <h3 class="mb-2 text-3xl">DotIAM <span class="italic text-blue-300">Work in progress</span></h3>

              <p class="mb-5">
                Dot IAM is a decentralised identity management platform. It enables users to store and manage their
                personal IDs & provide proof-based authentication.

              </p>
              <div class="mb-5">
                <div class="tag">UX</div>
                <div class="tag">UI</div>
                <div class="tag">Design</div>
                <div class="tag">Usability testing</div>
                <div class="tag">User interviews</div>
                <div class="tag">Double diamond</div>
              </div>
              <router-link to="/dot-iam" @click="scrollToTop">
                <button class="button">
                  View project <i class="bi bi-arrow-right"></i>
                </button>
              </router-link>
            </div>
            <div style="display: flex; justify-content: center;">

              <div class="image-container">
                <img src="assets/images/dotiam-cover.png" style="width: 100%;" class="rounded" alt="platform screencap" />
              </div>
            </div>
          </div>
        </transition>


      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  data() {
    return {
      projects: 'all',
    }
  },
  mounted() {
    const backgroundElement = document.getElementById('backgroundElement');
    const vm = this;
    // let prevScrollPosition = window.pageYOffset;

    window.addEventListener('scroll', function () {
      const currentScrollPosition = window.pageYOffset;
      if (currentScrollPosition > 15) {
        // Downwards scroll
        backgroundElement.classList.add('scroll-down');
      } else {
        // Upwards scroll
        backgroundElement.classList.remove('scroll-down');
      }

      // prevScrollPosition = currentScrollPosition;
    });
    if (this.$route.path == '/ux-design') {
      vm.projects = 'ux'
      // vm.$store.
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  }
}
</script>
<style  >
#backgroundElement {
  transition: 5s ease;
  top: -100px;
  min-width: calc(100% + 200px);
  right: -200px;
  /* left: 0px; */
  min-height: calc(100% + 100px);
}

#backgroundElement.scroll-down {
  top: 0px;
  /* left: -100px; */
  right: 0px;
  opacity: 0.6;
  transform: scale(1.1);
}

.image-container {
  display: flex;
  align-items: center;
  position: relative;
  height: 400px;
  width: 515px;
}

.platform-screencap {
  width: 379px;
  height: 220px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  max-width: 100%;
  max-height: 100%;
}

.platform-screencap.right {
  position: absolute;
  right: 0px;
  bottom: 0px;
}

.walkthrough {
  height: auto;
  width: 300px;
  border-radius: 4px;

}

.fade-enter-active,
.fade-leave-active {
  transition: ease 0.25s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave {
  opacity: 1;
}

.fade-enter img,
.fade-leave-to img {
  opacity: 0;
  /* Exclude images from the opacity transition */
}</style>
