<template>
  <div style="background: #272624" class="bg-bl ack">
    <div class="md:flex justify-center">
      <div class="basis-9/12 md:mt-28">
        <img class="" src="../../public/food.png" />
      </div>

      <div class="text-white container mt-24 basis-2/4 lg:mt-44 p-7">
        <TitleAnddesc
          variant="text-6xl  text-center mb-6 text-yellow-600"
          desc="Lorem ipsum dolor sit, amet consectetur adipisicing sit, amet consectetur adipisicing
          isicing elit. Harum isicing elit. Harum elit. Harum dolore aperiam molliti."
          title="Title Here"
        >
        </TitleAnddesc>
        <br />
        <button class="btn bg-yellow-700 hover:bg-yellow-600 rounded-lg py-2 px-3 m-3">
          Order Now
        </button>
      </div>
    </div>
  </div>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path
      fill="#272624"
      fill-opacity="1"
      d="M0,288L60,266.7C120,245,240,203,360,176C480,149,600,139,720,149.3C840,160,960,192,1080,192C1200,192,1320,160,1380,144L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
    ></path>
  </svg>

  <TitleAnddesc
    variant="text-4xl  text-center mb-6 text-yellow-700"
    desc="Lorem ipsum dolor sit, amet consectetur adipisicing sit, amet consectetur adipisicing
          isicing elit."
    title="Best Seller"
  >
  </TitleAnddesc>

  <div class="md:flex md:flex-row lg:mx-24 mt-10 md:justify-between text-center align-center mx-24">
    <ImageTitleDesc
      class="lg:w-94 md:mx-4 xl:mx-24"
      v-for="item in bestSeller"
      :key="item.title"
      :src="item.src"
      :title="item.title"
      :desc="item.desc"
    ></ImageTitleDesc>
  </div>
  <br /><br />

  <div class="max-w-full" style="position: relative">
    <div
      style="position: absolute; top: 30%; align-items: center"
      class="md:flex inset-0 lg:mx-0 justify-around"
    >
      <image-title-desc class="lg:w-96 w-48" src="../../public/food6.png"></image-title-desc>

      <div class="md:mt-24 mt-9 max-w-full text-center">
        <TitleAnddesc
          variantDesc="text-white mx-9 mb-4"
          variant="text-4xl font-bold lg:mt-8 md:mt-12    text-center mb-6 text-yellow-600"
          desc="Lorem ipsum dolor sit, amet consectetur adipisicing sit, amet consectetur adipisicing
          isicing elit."
          title="Orianted Teste "
        >
        </TitleAnddesc>
        <button class="btn text-white bg-yellow-700 hover:bg-yellow-600 rounded-lg py-2 px-9">
          Order Now
        </button>
      </div>
    </div>

    <svg class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#272624"
        fill-opacity="1"
        d="M0,288L60,266.7C120,245,240,203,360,176C480,149,600,139,720,149.3C840,160,960,192,1080,192C1200,192,1320,160,1380,144L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
      ></path>
    </svg>
  </div>
  <div class="h-80 md:h-0" style="background: #272624"></div>

  <div class="  " style="background: #272624">
    <br /><br /><br />
    <br />
    <br />
    <TitleAnddesc
      variantDesc="text-white mx-12  text-center "
      variant="text-4xl font-bold     text-center mb-6 text-yellow-600"
      desc="Lorem ipsum dolor sit, amet consectetur  consectetur adipisicing sit, amet c consectetur adipisicing sit, amet c adipisicing sit, amet consectetur adipisicing
          isicing elit."
      title="statistics "
    >
    </TitleAnddesc>
    <br />
    <br />
    <div>
      <div class="md:flex justify-around text-center mx-auto items-center md:mx-0">
        <div class="tetx-center inline-block mx-2 h-44 w-44 my-2 rounded-full border">
          <h4 class="text-2xl text-yellow-600 mt-12 font-bold text-center">123</h4>
          <h6 class="text-xl text-white text-center">OUTLETS</h6>
        </div>
        <div class="tetx-center inline-block mx-2 h-44 w-44 rounded-full border">
          <h4 class="text-2xl text-yellow-600 mt-12 font-bold text-center">100</h4>
          <h6 class="text-xl text-white text-center">CHEF</h6>
        </div>
        <div class="tetx-center inline-block mx-2 h-44 w-44 my-2 rounded-full border">
          <h4 class="text-2xl text-yellow-600 mt-12 font-bold text-center">300</h4>
          <h6 class="text-xl text-white text-center">MENU</h6>
        </div>
        <div class="tetx-center inline-block mx-2 h-44 w-44 rounded-full border">
          <h4 class="text-2xl text-yellow-600 mt-12 font-bold text-center">30</h4>
          <h6 class="text-xl text-white text-center">COUNTRY</h6>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>

    <br /><br />
    <br />
    <br />
  </div>

  <div class="max-w-full relative">
    <div
      class="md:flex inset-0 sm:text-center text-start absolute items-center lg:mx-0 justify-around"
    >
      <div class="mx-12 md:mb-44 md:text-start lg:text-center text-center">
        <TitleAnddesc
          variantDesc="text-white     mb-4 "
          variant="text-4xl font-bold   md:text-start  lg:text-center  text-center mb-6 text-yellow-600"
          desc="Lorem ipsum dolor  sit, amet consectetur adipisicing sit, amet consectetur adipisicing
          isicing elit."
          title="Chicken Grill "
        >
        </TitleAnddesc>
        <button class="btn text-white mb-9 bg-yellow-700 hover:bg-yellow-600 rounded-lg py-2 px-9">
          Order Now
        </button>
      </div>
      <br />
      <br />

      <image-title-desc
        class="lg:w-96 absolute right-0 lg:right-9 md:right-0 w-48"
        src="../../public/food5.png"
      ></image-title-desc>
    </div>
    <div class="h-64 md:h-0" style="background: #272624"></div>

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#272624"
        fill-opacity="1"
        d="M0,288L60,266.7C120,245,240,203,360,176C480,149,600,139,720,149.3C840,160,960,192,1080,192C1200,192,1320,160,1380,144L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
      ></path>
    </svg>
  </div>

  <br />
  <br />
  <br />

  <br />
  <br />
  <br />

  <div style="height: 600px" class="relative">
    <img class="w-full h-full" src="../../public/salad.png" />
    <div
      class="absolute bottom-0 lef t-0 righ t-0 top-0 h-full w-full"
      style="background-color: hsla(39, 98%, 37%, 0.562)"
    >
      <div class="mt-44 items-center justify-center">
        <p class="text-black text-center text-2xl md:mx-44">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, ab culpa. Maxime et
          fuga hic voluptatem nisi, maiores aspernatur quidem, eos quasi exercitationem id! Quia
          fugiat illum necessitatibus exercitationem culpa?
        </p>
        <h4 class="text-black titels-font mt-12 font-bold text-center text-6xl md:mx-44 mx-12">
          food feilds
        </h4>
      </div>
    </div>
  </div>

  <br />
  <br />
  <br />

  <br />
  <br />
  <br />

  <TitleAnddesc
    variantDesc="text-black text-xl md:mx-24 mx-2    text-center  mb-4 "
    variant="text-6xl font-bold   text-center  text-center mb-6 text-black "
    desc="Lorem ipsum dolor sit, amet consectetur adipisicing sit, amet consectetur aem ipsum dolor  sit, amet consectetur adipisicing sit, amet consectetur a, amet consectetur adipisicing sit, amet consectetur adipisicing sit, amet consectetur adipisicing
          isicing elit."
    title="Subscribe "
  >
  </TitleAnddesc>

  <br /><br />
  <form>
    <div class="flex mx-24 md:mx-64">
      <div class="relative shadow-xl w-full">
        <input
        placeholder="YOUR EMAIL"
          type="text"
          class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-yellow-50 rounded-r-xl shadow-xl  focus:outline-none dark:bg-gray-700 dark:border-l-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-yellow-500"
          required
        />
        <button
          type="submit"
          class="absolute shadow-xl top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-yellow-700 rounded-r-lg border border-yellow-700 hover:bg-yellow-600 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
        >
          <span>Subscribe</span>
        </button>
      </div>
    </div>
  </form>
  <br /><br /><br /><br />

  <br /><br />
 
</template>
<script>
import ImageTitleDesc from '../components/content/ImageTitleDesc.vue'
export default {
  components: { ImageTitleDesc },
  data() {
    return {
      bestSeller: [
        {
          title: 'Title Photo',
          desc: 'Lorem ipsum dolor maxime nam, enim fuga ducimus explicab',
          src: '../../public/food1.png'
        },
        {
          title: 'Title Photo',
          desc: 'Lorem ipsum dolor maxime nam, enim fuga ducimus explicab',
          src: '../../public/food2.png'
        },
        {
          title: 'Title Photo',
          desc: 'Lorem ipsum dolor maxime nam, enim fuga ducimus explicab',
          src: '../../public/food3.png'
        }
      ]
    }
  }
}
</script>
