<template>
	<view>
		<view>
			<uni-search-bar placeholder="输入姓名/手机号/店名" @input="search" v-model="searchValue"></uni-search-bar>
		</view>
		<section class="Index-Page">
			<s-tabs :effect="true" v-model="activeTab" @change="change" :nav-per-view="2">
				<s-tab title="派送中">
					派送中
				</s-tab>
				<s-tab title="已完成">
					已完成
				</s-tab>
			</s-tabs>
		</section>
	</view>
</template>

<script>
	import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
	import sTabs from '@/components/s-ui/s-tabs';
	import sTab from '@/components/s-ui/s-tab';
	export default {
		components: {
			sTabs,
			sTab,
			uniSearchBar
		},
		data() {
			return {
				activeTab: 0,
				searchValue:''
			}
		},
		methods: {
			change(index) {
				console.log(index)
			},
			search(e) {
				console.log(e.value)
			},
		}
	}
</script>

<style>

</style>
