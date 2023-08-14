<template>
  <!-- Contact -->
  <Transition name="fade-in-up">
    <section class="fixed w-full z-[100] h-[100vh] flex justify-center" v-if="$store.state.showContact">
      <div class="w-full h-full absolute top-0 right-0 bg-white/20" @click="$store.commit('displayContact')">
      </div>
      <div
        class="mx-auto max-w-screen-sm px-4 sm:px-6 lg:px-8 w-full py-14 bg-black  mt-20  rounded-xl z-1 flex items-center flex-col bg-[#040712] fixed bottom-0 md:absolute md:bottom-auto">
        <h1 class="mb-3 text-5xl md:text-6xl italic text-center">Get in contact</h1>
        <p class="text-base text-center mb-12 max-w-sm text-gray-400">I'm open to new connections and work opportunities </p>

        <a class="w-[400px] rounded-xl border bg-black/20 border-gray-800 p-8 shadow-xl transition hover:border-slate-300/10 hover:shadow-slate-300/10 mb-4 flex justify-between items-center"
          href="https://www.linkedin.com/in/indi-sofyar/">
          <div class="flex items-center">
            <i class="bi bi-linkedin text-xl "></i>
            <h2 class="text-xl font-sans text-white ml-3">LinkedIn</h2>
          </div>
          <i class="bi bi-arrow-right text-xl"></i>
        </a>
        <button @click="copyEmail"
          class="w-[400px] rounded-xl max-w-md border border-gray-800 p-8 shadow-xl transition hover:border-slate-500/10 hover:shadow-slate-500/10 mb-4 flex justify-between items-center cursor-pointer w-72 bg-black/20">
          <div class="flex gap-4 w-full">

            <div class="w-full">
              <div class="flex">
                <i class="bi bi-envelope text-xl"></i>
                <h2 class="text-xl font-sans text-white ml-3">Email</h2>
              </div>

              <div class="bg-slate-800 p-3 rounded-xl mt-3 flex justify-between w-full" >{{email}}<div><i v-if="!copied"
                    class="bi bi-clipboard"></i><i class="bi bi-check-lg text-green-400" v-else></i></div></div>
            </div>
          </div>
          <!-- <i class="bi bi-arrow-right text-xl"></i> -->
        </button>

      </div>

    </section>
  </Transition>
</template>

<script>
export default {
  name: 'ContactForm',
  data(){
    return {
      email: 'indisofyar@gmail.com',
      copied: false,
    }
  },
  methods: {
    copyEmail(){
      this.copied = true;
      navigator.clipboard.writeText(this.email);
    }
  },
  computed:{
    showContact(){
      return this.$store.state.showContact
    }
  }, 
  watch: {
    showContact(state){
      if(state){
        document.querySelector('body').style.overflow = 'hidden'
      } else {
        document.querySelector('body').style.overflow = 'auto'
      }
    }
  },
  mounted(){
    this.copied =false
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
.fade-in-up-enter-active,
.fade-in-up-leave-active {
  transition: 0.3s ease-in-out;
}

.fade-in-up-enter-from,
.fade-in-up-leave-to {
  opacity: 0;
  filter: blur(7px);
  /* transform: translateY(20px); */
}
</style>
