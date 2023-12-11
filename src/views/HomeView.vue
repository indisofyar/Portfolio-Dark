<template>
  <div class="w-full h-full relative overflow-hidden pt-20 bg-slate-300 dark:bg-black">
    <img src="assets/images/background.svg" alt="#"
      class=" animate__fadeIn object-cover w-full absolute opacity-[5%] invert dark:filter-none" id="backgroundElement">
    <section
      class="pt-12 pb-24 px-3 flex items-center min-h-50 justify-center align-center min-h-[50vh] relative overflow-hidden text-black dark:text-white">

      <div class="mx-auto max-w-[43rem] relative z-10">
        <div class="text-center banner-float animate__animated animate__fadeInUp">
          <p class="text-base font-medium leading-8 dark:text-white text-shadow">A London based UX Designer </p>
          <h1 class="mt-3 text-[3.75rem] leading-[4rem] tracking-tight italic text-shadow mb-5"
            style="font-style: italic;">
            Indi Sofyar
          </h1>
          <p class="mt-3 text-lg leading-relaxed text-shadow dark:text-slate-400">Passionate about finding the overlap
            between
            usability, accessibility, feasibility & joy</p>
        </div>
      </div>
    </section>
  </div>

  <section class="bg-slate-200 dark:bg-gray-950 text-black dark:text-white min-h-[100vh]  relative z-20" id="projects">
    <div class="max-w-screen-xl mx-auto container  px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 ">
      <div class="banner-float animate__animated animate__fadeIn">
        <h2 class=" uppercase tracking-widest text-xl  mb-10 font-light font-sans">Projects</h2>
        <div class="flex-col gap-10 flex">

          <transition-group name="fade" mode="out-in">
            <router-link to="/mypocketskill">
              <project-card img="assets/images/mps-cover2.png" heading="Improving the chat experience at MyPocketSkill"
                @click="scrollToTop" paragraph="MyPocketSkill connects young people to money earning tasks. I helped to
                consistently
                improve UX through a combination of minor visual improvements and longer term redesigns. "
                type="Case Study" />
            </router-link>
            <router-link to="/reach">
              <project-card img="assets/images/reach.png" heading="Improving outreach efficiency with Reach App"
                @click="scrollToTop" paragraph="Reach app is intended to help increase operational efficiency for organisations which provide outreach by
                providing
                outreach workers with increased access to training, information sharing as well as all-in-one shift
                management." type="Case Study" />
            </router-link>
            <router-link to="/dot-iam">
              <project-card img="assets/images/dotiam-cover.png" heading="Designing an effective website for DOTIAM"
                @click="scrollToTop" paragraph=" DOTIAM is a decentralised identity management platform. It enables users to store and manage their
                personal IDs & provide proof-based authentication. " type="Case Study"></project-card>
            </router-link>

          </transition-group>
        </div>



      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import ProjectCard from '@/components/ProjectCard.vue';


export default {
  name: 'HomeView',
  components: { ProjectCard },
  data() {
    return {
      projects: 'all',
    }
  },
  mounted() {
    const backgroundElement = document.getElementById('backgroundElement');
    const vm = this;
    // let prevScrollPosition = window.pageYOffset;
    const isDesktopSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (!isDesktopSafari) {
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
    }

    if (this.$route.path == '/ux-design') {
      vm.projects = 'ux'
      // vm.$store.
    }
    if (this.$route.path == '/projects') {
      const div = document.getElementById("projects");
      console.log(div)
      if (div) {
        div.scrollIntoView();
      }

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
  transform: translateZ(0);
  transition-timing-function: ease;
  transition-duration: 2.2s;
  top: -100px;
  min-width: calc(100% + 200px);
  right: -200px;
  /* left: 0px; */
  min-height: calc(100% + 100px);
}

#backgroundElement.scroll-down {
  will-change: transform, opacity;
  top: 0px;
  /* left: -100px; */
  right: 0px;
  opacity: 1;
  transform: scale(1.1);
}

.image-container {
  display: flex;
  align-items: center;
  position: relative;
  height: 350px;
  width: 515px;
}

@media (max-width: 767px) {
  .image-container {
    width: 275px;
  }
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
}
</style>
