<template>
  <div class="container-fluid">
    <card>
      <form @submit="doSearch">
        <base-input
          v-model="query"
          addon-left-icon="tim-icons icon-zoom-split"
          placeholder="SEARCH STOCK"
        ></base-input>
      </form>
    </card>
    <StockCard v-if="result" v-bind:stock="this.result"></StockCard>
  </div>
</template>

<script>
import axios from "axios";
import StockCard from "./StockCard";
export default {
  name: "stockSearch",
  components: {
    StockCard
  },
  data() {
    return {
      query: "",
      result: null
    };
  },
  methods: {
    doSearch() {
      axios
        .get(`/api/stock/search?query=${this.query}`)
        .then(response => {
          this.result = response.data;
        })
        .catch(err => {
          err.stack;
        });
    }
  }
};
</script>


<style>
</style>