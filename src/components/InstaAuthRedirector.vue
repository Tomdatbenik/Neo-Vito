<template>
  <div class="authenticate">
    <button @click="redirect()">Redirect</button>
  </div>
</template>

<script lang="ts">
import { InstagramService } from "@/logic/instagram.service";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class InstaAuthRedirector extends Vue {
  redirect(): void {
    InstagramService.authenticate(
      process.env.VUE_APP_INSTAGRAM_ID,
      process.env.VUE_APP_INSTAGRAM_REDIRECT_URL
    );
  }

  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
