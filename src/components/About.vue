<template>
  <div>
    <p>
      Create a Single-page application (SPA) in Vue.js implementing a simple Todo list. The application should follow
      the Flux/Redux architecture principles in terms of app state management and uni-directional data flow. A
      sample Vue.js project can be created via vue-cli as explained here:
    </p>
    <a href="https://github.com/vuejs/vue-cli" target="_blank">https://github.com/vuejs/vue-cli</a>
    <p>
      Add the dependencies to enable routing inside the SPA, state management (vuex, https://vuex.vuejs.org/en/ )
      and API calls (axios, <a href="https://alligator.io/vuejs/rest-api-axios/" target="_blank">https://alligator.io/vuejs/rest-api-axios/</a> ), install all other dependencies and launch the dev
      server.
      Your application should be able to maintain a Todo list of activities:
    </p>
    <ul>
      <li>- adding an activity (item to the list),</li>
      <li>- updating the activity (toggle status between completed/not completed),</li>
      <li>- delete an activity, and</li>
      <li>- list all the activities when the page is first loaded or reloaded*.</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'about'
}
</script>
