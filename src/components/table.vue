<template>
	<div class="mytable">
		<table>
			<thead>
				<tr>
					<th v-for="col in columns" :key="(col as any).key">
						{{ (col as any).title }}
					</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(row, rowIndex) in data">
					<td v-for="col in columns">
						<template v-if="'render' in (col as any)">
							<Render
								:row="row"
								:col="col"
								:index="rowIndex"
								:render="(col as any).render"
							/>
						</template>
						<template v-else>
							{{ (row as any)[(col as any).key] }}
						</template>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Render from "@/components/render";
export default defineComponent({
	components: {
		Render,
	},
	props: {
		columns: {
			type: Array,
			default() {
				return [];
			},
		},
		data: {
			type: Array,
			default() {
				return [];
			},
		},
	},
	setup() {},
});
</script>

<style scoped>
table {
	width: 100%;
	border-collapse: collapse;
	border-spacing: 0;
	empty-cells: show;
	border: 1px solid #e9e9e9;
}
table th {
	background: #f7f7f7;
	color: #5c6b77;
	font-weight: 600;
	white-space: nowrap;
}
table td,
table th {
	padding: 8px 16px;
	border: 1px solid #e9e9e9;
	text-align: left;
}
</style>
