<template>
  <header aria-label="Site Header" class=" absolute w-full z-10">
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-center md:justify-between">
        <div class="md:flex md:items-center md:gap-12 hidden">
          <a class="block" href="/">
            <span class="sr-only">Home</span>
            <span class="italic font-serif text-3xl">Indi</span>
          </a>
        </div>
        <div>
          <nav aria-label="Site Nav" class="md:block flex items-center justify-center mx-auto">
            <ul class="flex items-center gap-6 text-sm">
              <li>
                <a class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                  href="/">
                  Home
                </a>
              </li>
              <li>
                <router-link
                  class=" text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                  to="/about">
                  About
                </router-link>
              </li>
              <li>
                <router-link
                  class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                  to="/contact">
                  Contact
                </router-link>
              </li>
            </ul>
          </nav>
        </div>


      </div>
    </div>
  </header>

  <div class="min-h-50">
    <!-- <transition name="fade" mode="out-in"> -->
      <router-view> </router-view>
    <!-- </transition> -->
  </div>


  <footer class="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-12 text-center">
    <div class="flex flex-col sm:flex-row items-end sm:justify-between">
      <div class="mb-4 sm:mb-0">
        <span class="italic font-serif text-3xl">Indi</span>
      </div>
      <div class="flex justify-end">
        <ul class="text-right">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/mypocketskill">Project: MyPocketSkill</router-link></li>
          <li><router-link to="/reach">Project: Reach</router-link></li>
          <li><router-link to="/dot-iam">Project: DotIam</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
// import { createApp } from 'vue'
import router from './router'
// const app = new Vue({})

export default {
  name: 'App',
  router,
  // Other component options
}
</script>

<style lang="scss">

@import "@/assets/css/tailwind.css"
@import "@/assets/css/animate.min.css"
</style>
