<template>
  <h3 class="titels-font" :class="[variant]">{{ title }}</h3>
  <p :class="[variantDesc]">{{ desc }}</p>
</template>
<script>
export default {
  props: {
    title: String,
    desc: String,
    variant: {
      default: 'text-2xl ',
      validator(value) {
        return [
          'text-2xl text-yellow-700 text-center',
          'text-4xl  text-yellow-600 text-center',
          'text-6xl  text-gray-700 text-center',
          'text-6xl  text-yellow-700 text-center'
        ].includes(value)
      }
    },
    variantDesc: {
      default: 'text-2xl text-center ',
      validator(value) {
        return [
          'text-2xl text-yellow-700 text-center',
          'text-3xl  text-yellow-600 text-center',
          'text-2xl  text-gray-700 text-center',
          'text-2xl  text-yellow-700'
        ].includes(value)
      }
    }
  }
}
</script>
