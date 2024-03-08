<script setup lang="ts">
import {SelectedColor} from "../types/SelectedColor.ts";

defineProps<{
	id: number
	selectedColor: string
}>()
const emit = defineEmits(['onBadgeChange'])

const onChange = (e) => emit('onBadgeChange', e.target.value)
const colors = [SelectedColor.BLUE, SelectedColor.GREEN, SelectedColor.BEIGE, SelectedColor.WHITE, SelectedColor.BLACK]
</script>

<template>
	<template v-for="color in colors">
		<input
			:class="color"
			:name="`badge-${id}`"
			:checked="selectedColor === color"
			:value="color"
			type="radio"
			@change="onChange">
	</template>
</template>

<style scoped>
input[type='radio'] {
	box-sizing: border-box;
	appearance: none;
	background: white;
	width: 16px;
	height: 16px;
	margin-top: 0;
	margin-right: 0;
	cursor: pointer;
}

input[type='radio'].blue {
	background: var(--blue);
}
input[type='radio'].green {
	background: var(--green);
}
input[type='radio'].beige {
	background: var(--beige);
}
input[type='radio'].white {
	background: var(--white);
}
input[type='radio'].black {
	background: var(--black);
}
input[type='radio']:checked {
	border: 1.5px solid rgba(176, 176, 176, 1)
}
</style>
