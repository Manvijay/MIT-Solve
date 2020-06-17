<template>
  <v-app>
    <TitleBar>
    </TitleBar>
    <router-view>
    </router-view>
  </v-app>
</template>

<script>
import TitleBar from "./components/TitleBar";

export default {
  name: 'App',

  components: {
    TitleBar
  },

  data: () => ({
    //
  }),
};
</script>
