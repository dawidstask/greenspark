<script setup lang="ts">
// TODO: add types
defineProps<{
	data: object
}>()
</script>

<template>
	<div class="widget">
		<pre>{{data}}</pre>
	</div>
</template>

<style scoped>
.widget {
	width: 221.32px;
	height: auto;
}
</style>
