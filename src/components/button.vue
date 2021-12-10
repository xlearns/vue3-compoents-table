<template>
	<div>
		<button>
			<slot></slot>
		</button>
	</div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	props: {},
	setup() {},
});
</script>
<style scoped>
button {
	display: inline-block;
	line-height: 1;
	min-height: 40px;
	white-space: nowrap;
	cursor: pointer;
	/* border: black; */
	color: black;
	-webkit-appearance: none;
	text-align: center;
	box-sizing: border-box;
	outline: none;
	margin: 0;
	transition: 0.1s;
	user-select: none;
	padding: 12px 20px;
	border-radius: 4px;
}
</style>
