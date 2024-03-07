<script setup lang="ts">
import {Product} from "../types/Product.ts";
import {Type} from "../types/Type.ts";
import Tooltip from "./Tooltip.vue";
import Checkbox from "./Checkbox.vue";

const props = defineProps<{
	product: Product
}>()

const getValue = () => {
	return `${props.product.amount}${props.product.type === Type.CARBON ? 'kgs of' : ''} ${props.product.type}`
}

</script>

<template>
	<div class="widget">
		<div class="widget__header flex align-items-center" :class="`widget__header--${product.action}`">
			<img :src="product.type === Type.CARBON ? '/logo_green.svg' : '/logo_white.svg'" class="widget__logo" alt="logo" />
			<div class="flex flex-column">
				<span class="widget__info">This product {{ product.action }}</span>
				<span class="widget__value">{{ getValue() }}</span>
			</div>
		</div>
		<div class="widget__content">
			<div class="flex justify-content-between">
				<span class="widget__row flex">Link to Public Profile <Tooltip class="align-content-start" /></span>
				<Checkbox />
			</div>
			<div>
				<span class="widget__row">Badge colour</span>
			</div>
			<div class="flex justify-content-between">
				<span class="widget__row">Activate badge</span>
				<label class="switch">
					<input type="checkbox">
					<span class="slider round"></span>
				</label>
			</div>
		</div>
	</div>
</template>

<style scoped>
.widget {
	width: 221.32px;
	height: auto;
}
.widget__header {
	color: white;
	height: 66px;
	border-radius: 5.95px;
}
.widget__logo {
	width: 39.7px;
	height: 45.41px;
	margin: 0 10px
}
.widget__info {
	font-weight: 400;
	font-size: 12.41px;
	line-height: 15.07px;
}
.widget__value {
	font-weight: 700;
	font-size: 17.86px;
	line-height: 21.41px;
}
.widget__row {
	color: var(--green);
	font-weight: 400;
	font-size: 14px;
	line-height: 17.01px;
}
.widget__header--collects {
	background-color: var(--blue);
}
.widget__header--plants {
	background-color: var(--green);
}
.widget__header--offsets {
	background-color: var(--beige);
	color: var(--green);
}
</style>
