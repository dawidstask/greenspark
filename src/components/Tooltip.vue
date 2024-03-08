<script setup lang="ts">

</script>

<template>
	<div class="tooltip">
		<img src="/info_outline.svg" class="tooltip__info" alt="Info" />
		<div class="tooltip__text">
			<span>This widget links directly to your public profile so that you can easily share your impact with your customers.
				Turn it off here if you do not want the badge to link to it.</span>
			<p>View Public Profile</p>
		</div>
	</div>
</template>

<style scoped>
.tooltip {
	position: relative;
	display: flex;
}

.tooltip__info {
	width: 12px;
	height: 12px;
}

.tooltip .tooltip__text {
	visibility: hidden;
	width: 208px;
	height: 142px;
	background-color: #fff;
	text-align: center;
	border-radius: 4px;
	position: absolute;
	z-index: 1;
	box-shadow: 0 10px 76px 0 rgba(0, 0, 0, 0.15);
	font-size: 14px;
	font-weight: 400;
	line-height: 17.01px;
	color: var(--black);
	padding: 20px 20px 0 20px;

	span {
		position: relative;
	}

	p {
		font-weight: 700;
		color: var(--green);
		cursor: pointer;
	}
}

.tooltip:hover .tooltip__text {
	visibility: visible;
	width: 248px;
	bottom: 100%;
	left: 0;
	margin-left: -140px;
}
</style>
