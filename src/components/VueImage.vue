<template>
  <div class="overflow-hidden">
  
    <img :src="img" @click="showSingle" style="cursor: zoom-in;" class="max-h-full  w-full h-full" :class="imageClass">
    <vue-easy-lightbox
      :visible="visibleRef"
      :imgs="imgsRef"
      :index="indexRef"
      @hide="onHide"
    ></vue-easy-lightbox>
  </div>
</template>

<script>
// If VueApp is already registered with VueEasyLightbox, there is no need to register it here.
import VueEasyLightbox from 'vue-easy-lightbox'
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'VueImage',
  components: {
    VueEasyLightbox
  },
  props: ['img', 'imageClass'],
  setup(props) {
    const visibleRef = ref(false)
    const indexRef = ref(0) // default 0
    const imgsRef = ref([])
    const onShow = () => {
      visibleRef.value = true
    }
    const showSingle = () => {
      console.log(this)
      imgsRef.value = [props.img]
      onShow()
    }
    const showMultiple = () => {
      imgsRef.value = [
        'http://via.placeholder.com/350x150',
        'http://via.placeholder.com/350x150'
      ]
      // or
      // imgsRef.value = [
      //   { title: 'test img', src: 'http://via.placeholder.com/350x150' },
      //   'http://via.placeholder.com/350x150'
      // ]
      indexRef.value = 0 // index of imgList
      onShow()
    }
    const onHide = () => (visibleRef.value = false)

    return {
      visibleRef,
      indexRef,
      imgsRef,
      showSingle,
      showMultiple,
      onHide
    }
  }
})
</script>