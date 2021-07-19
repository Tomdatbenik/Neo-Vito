<template>
  <div class="instaAuth"></div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import InstaAuthRedirector from "@/components/InstaAuthRedirector.vue"; // @ is an alias to /src
import { InstagramService } from "@/logic/instagram.service";
import { InstagramUser } from "@/logic/models/instagramUser";

@Component({
  components: {
    InstaAuthRedirector,
  },
})
export default class InstaAuth extends Vue {
  service: InstagramService = new InstagramService();

  async mounted() {
    //TODO redirect to post managar.
    //TODO remove code below its testing code.
    const user: InstagramUser = await this.service.getToken(
      this.$route.query.code.toString()
    );

    const posts = await this.service.getPosts(user);

    console.log(posts);
    console.log(user);
  }
}
</script>
