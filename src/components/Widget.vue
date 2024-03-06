<script setup lang="ts">
import {Product} from "../types/Product.ts";
import {Type} from "../types/Type.ts";
import Tooltip from "./Tooltip.vue";

const props = defineProps<{
	product: Product
}>()

const getValue = () => {
	return `${props.product.amount}${props.product.type === Type.CARBON ? 'kgs of' : ''} ${props.product.type}`
}

</script>

<template>
	<div class="widget">
		<pre>{{ product }}</pre>
		<div class="widget__header">
			<span>This product {{ product.action }}</span>
			<span>{{ getValue() }}</span>
		</div>
		<div class="widget__content">
			<p class="flex justify-content-between">
				<span class="flex">Link to Public Profile<Tooltip class="align-content-start" /></span><input type="checkbox" id="profile" name="profile" value="selected">
			</p>
			<p>
				<span>Badge colour</span>
			</p>
			<p>
				<span>Activate badge</span>
				<label class="switch">
					<input type="checkbox">
					<span class="slider round"></span>
				</label>
			</p>
		</div>
	</div>
</template>

<style scoped>
.widget {
	width: 221.32px;
	height: auto;
}
</style>
