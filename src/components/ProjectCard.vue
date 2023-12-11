<script>
export default {
    name: 'ProjectCard',
    props: ['img', 'heading', 'paragraph', 'type'],
    methods: {
        methods: {
            scrollToTop() {
                window.scrollTo(0, 0);
            }
        }
    }
}
</script>
<template>
    <div class="items-stretch md:max-h-[325px] rounded-3xl p-5 dark:bg-slate-50/10 bg-slate-100 flex-col sm:flex-row-reverse flex sm:p-0 overflow-hidden"
        @click="scrollToTop">
        <img :src="img"
            class="rounded-3xl sm:rounded-none max-h-63 sm:max-h-full w-full object-cover mb-5 sm:mb-0 sm:max-w-[50%] items-center sm:h-full ">
        <div class="sm:p-5 md:p-8">
            <span class="dark:text-gray-400 text-gray-500"><i class="bi bi-book mr-1"></i>
                {{ type }}</span>
            <h2 class="text-2xl  md:text-3xl leading-relaxed mt-2 dark:text-gray-200 mb-2 md:mb-8">{{ heading }}</h2>
            <p class="dark:text-gray-400 mb-4 sm:mb-0">{{ paragraph }}</p>
        </div>

    </div>
</template>