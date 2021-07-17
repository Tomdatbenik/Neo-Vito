<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <InstaAuthRedirector />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import InstaAuthRedirector from "@/components/InstaAuthRedirector.vue"; // @ is an alias to /src

@Component({
  components: {
    InstaAuthRedirector,
  },
})
export default class Home extends Vue {
  mounted() {
    console.log(process.env.VUE_APP_INSTAGRAM_ID);
  }
}
</script>
