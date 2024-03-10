<script setup lang="ts">
const props = defineProps<{
	id: number
	isChecked: boolean
}>()
const emit = defineEmits(['onLinkStatusChange'])
const onChange = () => emit('onLinkStatusChange', props.id)
</script>

<template>
	<label class="container">
		<input type="checkbox" :checked="isChecked" @change="onChange">
		<span class="checkmark"></span>
	</label>
</template>

<style scoped>

/* The container */
.container {
	display: block;
	position: relative;
	padding-left: 35px;
	margin-bottom: 12px;
	cursor: pointer;
	font-size: 22px;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
	position: absolute;
	opacity: 0;
	cursor: pointer;
	height: 0;
	width: 0;
}

/* Create a custom checkbox */
.checkmark {
	position: absolute;
	top: 0;
	right: 0;
	height: 16px;
	width: 16px;
	border: 1px solid var(--black);
	border-radius: 3px;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
	background-color: #AFC6BD;
	border: 1px solid gray;

}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
	background-color: var(--green);
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
	content: "";
	position: absolute;
	display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
	display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
	left: 5px;
	top: 0;
	width: 5px;
	height: 10px;
	border: solid white;
	border-width: 0 3px 3px 0;
	-webkit-transform: rotate(45deg);
	-ms-transform: rotate(45deg);
	transform: rotate(45deg);
}
</style>
