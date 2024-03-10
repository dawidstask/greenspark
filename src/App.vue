<script setup lang="ts">
import Widget from "./components/Widget.vue";
import {useProductWidgetsStore} from "./store";

const store = useProductWidgetsStore()
store.getProductWidgets()
</script>

<template>
  <div class="main">
		<div class="box">
			<h3>Per product widgets</h3>
			<hr />
			<div class="widget-container" v-if="store.productWidgets?.length">
				<template v-for="widgetData in store.productWidgets">
					<Widget :product="widgetData"/>
				</template>
			</div>
			<div v-else>
				<p>loading widgets...</p>
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
	@media (min-width: 900px) {
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
	@media (min-width: 900px) {
		flex-direction: row;
	}
}
</style>
