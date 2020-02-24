<template>
	<view>
		<section class="Index-Page">
			<s-tabs :effect="true" v-model="activeTab" @change="change" :nav-per-view="2">
				<s-tab title="账单">
					<view>
						<uni-search-bar placeholder="输入姓名/手机号/店名" @input="search"></uni-search-bar>
						<view class="timePicker">
							<dyDatePicker placeholder="选择月份" timeType="month" :childValue="from" :minSelect="from_minSelect" :maxSelect="from_maxSelect"
							 @getData="getFromData"></dyDatePicker>
						</view>
					</view>
					<view class="lists" v-for="(item,index) in list" :key='index'>
						<view class="list">
							<view class="content-left">
								<view>
									<text>{{item.name}}</text> <text>{{item.phone}}</text>
								</view>
								<view>
									订单号 {{item.order}}
								</view>
								<view>
									今天 {{item.date}}
								</view>
							</view>
							<view class="content-right">
								{{item|moneyFilters}}
							</view>
						</view>
					</view>
				</s-tab>
				<s-tab title="统计">
					<view>
						<view class="timePicker">
							<dyDatePicker placeholder="选择月份" timeType="month" :childValue="from" :minSelect="from_minSelect" :maxSelect="from_maxSelect"
							 @getData="getFromData"></dyDatePicker>
						</view>
						<view class="statistics-s" >
							<view class="statistics">
								<view>
									待配送订单
								</view>
								<view>
									15
								</view>
							</view>
							<view class="statistics">
								<view>
									待配送订单
								</view>
								<view>
									15
								</view>
							</view>
						</view>
						<view class="statistics-s" >
							<view class="statistics">
								<view>
									待配送订单
								</view>
								<view>
									15
								</view>
							</view>
							<view class="statistics">
								<view>
									待配送订单
								</view>
								<view>
									15
								</view>
							</view>
						</view>
						<view class="statistics-s" >
							<view class="statistics">
								<view>
									待配送订单
								</view>
								<view>
									15
								</view>
							</view>
							<view class="statistics">
								<view>
									待配送订单
								</view>
								<view>
									15
								</view>
							</view>
						</view>
						<view class="statistics-s" >
							<view class="statistics">
								<view>
									待配送订单
								</view>
								<view>
									15
								</view>
							</view>
							<view class="statistics">
								<view>
									待配送订单
								</view>
								<view>
									15
								</view>
							</view>
						</view>
						
					</view>
				</s-tab>
			</s-tabs>
		</section>
	</view>
</template>

<script>
	import dyDatePicker from '@/components/dy-Date/dy-Date.vue'
	import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
	import sTabs from '@/components/s-ui/s-tabs';
	import sTab from '@/components/s-ui/s-tab';
	export default {
		components: {
			sTabs,
			sTab,
			dyDatePicker,
			uniSearchBar,
		},
		filters: {
			moneyFilters(value) {
				if (value.type) {
					return '+' + value.money
				} else {
					return '-' + value.money
				}
			}
		},
		data() {
			return {
				list: [{
						name: '东边库存-刘佳佳',
						phone: '132313211',
						order: '111321',
						date: '2019-4-1',
						money: '24.00',
						type: true
					},
					{
						name: '东边库存-刘佳佳',
						phone: '132313211',
						order: '111321',
						date: '2019-4-1',
						money: '24.00',
						type: true
					},
					{
						name: '东边库存-刘佳佳',
						phone: '132313211',
						order: '111321',
						date: '2019-4-1',
						money: '24.00',
						type: true
					},
					{
						name: '东边库存-刘佳佳',
						phone: '132313211',
						order: '111321',
						date: '2019-4-1',
						money: '24.00',
						type: true
					},
					{
						name: '东边库存-刘佳佳',
						phone: '132313211',
						order: '111321',
						date: '2019-4-1',
						money: '24.00',
						type: true
					}
				],
				activeTab: 0,
				from_minSelect: '2020/01/01',
				from_maxSelect: '2050/12/31',
				from: '',
			};
		},
		onLoad() {
			let date = new Date()
			let year = date.getFullYear()
			let month = date.getMonth() + 1
			this.from_maxSelect = year + '/' + month
			console.log(this.from_maxSelect)

		},
		methods: {
			change(index) {
				console.log(this.search.value)
				console.log(index);
				this.from = ''
			},
			search(e) {
				console.log(e.value)
			},
			getFromData(time) {
				this.to_minSelect = time
				this.from = time
				console.log(time)
			}
		}
	};
</script>

<style>
	page {
		background-color: #eef2f8;
	}

	.timePicker {
		background-color: #FFFFFF;
		text-align: center;
		padding: 5px;
		color: #8F8F94;
	}

	.lists {
		display: flex;
		justify-content: center;
	}

	.list {
		padding: 8px;
		margin-top: 6px;
		background-color: #FFFFFF;
		width: 95%;
		border-radius: 5px;
		display: flex;
		justify-content: space-between;
	}
	.statistics-s{
		display: flex;
		justify-content: space-between;
		padding: 0 10px;
	}
	.statistics{
		background-color: #FFFFFF;
		width: 49%;
		margin-top: 10px;
		border-radius: 7px;
		text-align: center;
		padding: 28px 0;
	}
</style>
