<template>
  <nav style="background: #272624" :class="{ 'bg-white': isScrolled }"
    class="bg-transparent transition-all duration-300 ease-in-out  w-full    ">
    <div class="max-w-screen-full flex flex-wrap items-center justify-between  mx-auto p-4">
      <a href="https://flowbite.com/" class="flex  text-white  items-center">
        <PhFillForkKnife class="h-9 mr-3  text-4xl text-white  " />
        <span class="self-center text-white	 text-2xl font-semibold whitespace-nowrap titels-font dark:text-white">logo
          here</span>
      </a>
      <button data-collapse-toggle="navbar-default" typse="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>
      <div class="hidden  mt-3 bg-yellow-600 md:bg-transparent w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="font-medium text-white flex flex-col p-4 md:p-0 m-6   border border-gray-100 rounded-lg md:hover:bg-transparent  bg-transparent  md:flex-row md:space-x-8 md:mt-0 md:border-0   dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li v-for="item in dataNav" :key="item.label">
            <router-link :to="item.to" @click="setActive(item)"
              :class="{ 'text-yellow-600  md:bg-transparent bg-white': item.active }"
              class="block py-2 pl-3 pr-4  hover:bg-white m-1 hover:text-yellow-600   md:hover:bg-transparent  rounded  md:hover:text-yellow-600  md:p- dark:text-white md:dark:text-blue-500"
              aria-current="page">{{ item.label }}</router-link>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              class="m-1 mt-2  bi bi-search md:hover:text-yellow-600 block my-1    mx-3   " viewBox="0 0 16 16">
              <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </li>
        </ul>

      </div>
    </div>
  </nav>
</template>


<script>

import { PhFillForkKnife } from "@kalimahapps/vue-icons";
document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.querySelector('[data-collapse-toggle="navbar-default"]');
  const navbar = document.getElementById('navbar-default');

  toggleButton.addEventListener('click', function () {
    const expanded = navbar.getAttribute('aria-expanded') === 'true' || false;
    navbar.setAttribute('aria-expanded', !expanded);
    navbar.classList.toggle('hidden');
  });

  document.addEventListener('click', function (event) {
    const isClickInsideNavbar = navbar.contains(event.target);
    const isToggleButton = toggleButton.contains(event.target);

    if (!isClickInsideNavbar && !isToggleButton) {
      navbar.setAttribute('aria-expanded', 'false');
      navbar.classList.add('hidden');
    }
  });
});


export default {
  components: {
    PhFillForkKnife,
  },
  data() {
    return {
      isScrollrd: false,
      dataNav: [{ label: 'Home', to: '/', active: false },
      { label: 'About', to: '//', active: false },
      { label: 'Services', to: '/#', active: false },
      { label: 'Pricing', to: '#/', active: false },
      { label: 'Contact', to: '#//', active: false },
      ]
    }
  },

  methods: {
    setActive(selectedItem) {
      this.dataNav.forEach(item => {
        item.active = (item.to === selectedItem.to);
      });
    },

    handleScroll() {
      this.isScrollrd = window.scrollY > 300,
        console.log(this.isScrollrd);

    }
  },

  mounted() {
    console.log('Component mounted');
    window.addEventListener('scroll', this.handleScroll)
    console.log(this.isScrollrd)

  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
<style scoped>
.bg-white {
  background: white !important;

}
</style>


