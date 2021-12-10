<template>
	<my-table :data="data" :columns="columns"></my-table>
</template>
<script lang="ts">
import { defineComponent, h } from "vue";
import myTable from "@/components/table.vue";
import myButton from "@/components/button.vue";
import { reactive, toRefs } from "vue";
export default defineComponent({
	components: {
		myTable,
		myButton,
	},
	setup() {
		let state = reactive({
			columns: [
				{
					title: "姓名",
					key: "name",
				},
				{
					title: "年龄",
					key: "age",
				},
				{
					title: "出生日期",
					key: "birthday",
					render: (h: any, { row, column, index }) => {
						const date = new Date(parseInt(row.birthday));
						const year = date.getFullYear();
						const month = date.getMonth() + 1;
						const day = date.getDate();
						const birthday = `${year}-${month}-${day}`;
						return h("span", birthday);
					},
				},
				{
					title: "地址",
					key: "address",
				},
				{
					title: "操作",
					render: (h: any, data: any) => {
						return h(
							myButton,
							{
								onClick: clickfn(data),
							},
							//组件插槽所插入的是插槽内容，而非函数值。Vue3 推荐使用函数式插槽，以便获得更佳的性能。
							() => "hello"
						);
					},
				},
			],
			data: [
				{
					name: "王小明",
					age: 18,
					birthday: "919526400000",
					address: "北京市朝阳区芍药居",
				},
				{
					name: "张小刚",
					age: 25,
					birthday: "696096000000",
					address: "北京市海淀区西二旗",
				},
				{
					name: "李小红",
					age: 30,
					birthday: "563472000000",
					address: "上海市浦东新区世纪大道",
				},
				{
					name: "周小伟",
					age: 26,
					birthday: "687024000000",
					address: "深圳市南山区深南大道",
				},
			],
		});
		return {
			...toRefs(state),
		};
	},
});

function clickfn(data: any) {
	return function () {
		console.log(data);
	};
}
</script>
