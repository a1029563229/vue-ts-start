<template>
  <section>
    <div>Home</div>
    <div>Home</div>
    <div>Home</div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  data() {
    return {

    }
  },

  components: {
    
  }
})
export default class Home extends Vue {}
</script>
<style lang="less" scoped>
  @import url(~assets/style/style.less);
  section {
    .flex-between;
  }
</style>

