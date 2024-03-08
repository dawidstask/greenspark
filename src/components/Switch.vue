<script setup lang="ts">

</script>

<template>
	<label class="switch">
		<input type="checkbox">
		<span class="slider round"></span>
	</label>
</template>

<style scoped>
/* The switch - the box around the slider */
.switch {
	position: relative;
	display: inline-block;
	width: 44.82px;
	height: 20.05px;
}

/* Hide default HTML checkbox */
.switch input {
	opacity: 0;
	width: 0;
	height: 0;
}

/* The slider */
.slider {
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: var(--white);
	-webkit-transition: .4s;
	transition: .4s;
	border: 0.59px solid #AFC6BD;
	box-shadow: 0 0.88px 5.89px 0 rgba(0, 0, 0, 0.15) inset;

}

.slider:before {
	position: absolute;
	content: "";
	height: 18px;
	width: 20px;
	left: 0px;
	bottom: 0px;
	background-color: rgba(249, 249, 249, 1);
	border: 0.59px solid rgba(242, 235, 219, 1);
	box-shadow: 0px 0px 1.17px 0px rgba(0, 0, 0, 0.35);
	-webkit-transition: .4s;
	transition: .4s;

}

input:checked + .slider {
	background-color: var(--green);
}

input:focus + .slider {
	box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
	-webkit-transform: translateX(26px);
	-ms-transform: translateX(26px);
	transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
	border-radius: 34px;
}

.slider.round:before {
	border-radius: 50%;
}
</style>
