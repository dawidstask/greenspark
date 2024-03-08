<script setup lang="ts">
import Widget from "./components/Widget.vue";

import axios from "axios";
import {onMounted, ref} from "vue";
import {Product} from "./types/Product.ts";
const response = ref()

onMounted(async () => {
	response.value = await axios.get<Product[]>('https://api.mocki.io/v2/016d11e8/product-widgets')
})
</script>

<template>
  <div class="main">
		<div class="box">
			<h3>Per product widgets</h3>
			<hr />
			<div class="widget-container" v-if="response?.data">
				<template v-for="widgetData in response.data">
					<Widget :product="widgetData"/>
				</template>
			</div>
		</div>
  </div>
</template>

<style scoped>
.main {
	width: 331px;
	height: 697px;
	border-radius: 8px;
	background-color: var(--white);
	box-shadow: 0 10px 76px 0 rgba(0, 0, 0, 0.15);
	@media (min-width: 800px) {
		width: 851px;
		height: 419px;
	}
}
.box {
	padding: 36px;
}
hr {
	max-width: 779px;
}
.widget-container {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	@media (min-width: 800px) {
		flex-direction: row;
	}
}
</style>
