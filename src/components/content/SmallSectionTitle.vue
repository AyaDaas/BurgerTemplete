<template>
    <div class=" items-center lg:mx-56 mx-10	  justify-between	text-center align-center">
        <h3 class="titels-font text-3xl mb-7 font-bold text-yellow-700">{{ title }}</h3>
        <p class="text-gray-700">{{ desc }}</p>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        desc: String
    }
}
</script>
