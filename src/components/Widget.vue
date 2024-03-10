<script setup lang="ts">
import {Product} from "../types/Product.ts";
import {Type} from "../types/Type.ts";
import Tooltip from "./Tooltip.vue";
import Checkbox from "./Checkbox.vue";
import {SelectedColor} from "../types/SelectedColor.ts";
import BadgePicker from "./BadgePicker.vue";
import Switch from "./Switch.vue";
import {useProductWidgetsStore} from "../store";

const props = defineProps<{
	product: Product
}>()
const store = useProductWidgetsStore()
const getValue = () => {
	return `${props.product.amount}${props.product.type === Type.CARBON ? 'kgs of' : ''} ${props.product.type}`
}
const getImgSrc = () => {
	return props.product.selectedColor === SelectedColor.BEIGE || props.product.selectedColor === SelectedColor.WHITE
			? '/logo_green.svg' : '/logo_white.svg'
}
const updateSelectedColor = ({ id, color }: { id: number, color: SelectedColor }) => {
	store.setColor(id, color)
}
const updateLinkStatus = (id: number) => {
	store.setLink(id)
}
const updateState = (id: number) => {
	store.setActive(id)
}
</script>

<template>
	<div class="widget">
		<div class="widget__header flex align-items-center" :class="`widget__header--${product.selectedColor}`">
			<img :src="getImgSrc()" class="widget__logo" alt="logo" />
			<div class="flex flex-column">
				<span class="widget__info">This product {{ product.action }}</span>
				<span class="widget__value">{{ getValue() }}</span>
			</div>
		</div>
		<div class="widget__content">
			<div class="widget__row-container flex justify-content-between">
				<span class="widget__row flex">Link to Public Profile <Tooltip class="align-content-start" /></span>
				<Checkbox :id="product.id" :is-checked="product.linked" @on-link-status-change="updateLinkStatus" />
			</div>
			<div class="widget__row-container flex justify-content-between align-items-center">
				<span class="widget__row">Badge colour</span>
				<div class="flex">
					<BadgePicker
						:id="product.id"
						:selected-color="product.selectedColor"
						@on-badge-color-change="updateSelectedColor"
					/>
				</div>
			</div>
			<div class="widget__row-container flex justify-content-between">
				<span class="widget__row">Activate badge</span>
				<Switch :id="product.id" :is-checked="product.active" @on-badge-state-change="updateState" />
			</div>
		</div>
	</div>
</template>

<style scoped>
.widget {
	width: 221.32px;
	height: auto;
	margin: 15px 0;
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
.widget__row-container {
	margin-top: 10px;
}
.widget__row {
	color: var(--green);
	font-weight: 400;
	font-size: 14px;
	line-height: 17.01px;
}
.widget__header--white {
	background-color: var(--white);
	color: var(--green);
	box-shadow: 0 10px 76px 0 rgba(0, 0, 0, 0.15);
}
.widget__header--black {
	background-color: var(--black);
}
.widget__header--blue {
	background-color: var(--blue);
}
.widget__header--green {
	background-color: var(--green);
}
.widget__header--beige {
	background-color: var(--beige);
	color: var(--green);
}
</style>
