<template>
  <div class="stockCard">
    <card style="container">
      <img slot="image" class="card-img-top" v-bind:src="stock.img" alt="Card image cap" />
      <h4 class="card-title">{{stock.Symbol}}</h4>
      <h6 class="card-subtitle mb-2 text-muted">{{stock.Name}}</h6>
      <p class="card-text">{{stock.description}}.</p>
      <badge type="info">{{stock.Sector}}</badge>
      <badge type="success">{{stock.Industry}}</badge>
      <div v-if="stock.owned">
        <div class="dropdown-divider"></div>
        <p class="card-text">You own {{stock.owned.num}} stocks of {{stock.symbol}}</p>
      </div>

      <base-button simple class="animation-on-hover" type="primary">
        <i class="tim-icons icon-simple-add"></i> Buy
      </base-button>
      <base-button v-if="stock.owned" simple class="animation-on-hover" type="primary">
        <i class="tim-icons icon-simple-delete"></i> Sell
      </base-button>
    </card>
  </div>
</template>

<script>
import { Badge } from "src/components";
export default {
  name: "stockCard",
  props: {
    stock: {
      type: Object,
      description: "stock data returned from api"
    }
  },
  components: {
    Badge
  }
};
</script>

<style>
</style>