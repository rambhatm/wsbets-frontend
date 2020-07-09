<template>
  <div>
    <div class="row">
      <stockSearch></stockSearch>
    </div>
  </div>
</template>
<script>
import login from "./components/Login";
import stockCard from "./components/StockCard";
import stockSearch from "./components/StockSearch";
export default {
  name: "app",
  components: {
    // login,
    //stockCard,
    stockSearch
  },
  data() {
    return {};
  }
};
</script>
<style></style>
