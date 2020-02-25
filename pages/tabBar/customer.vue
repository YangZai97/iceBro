<template>
	<view>
		<view>
			<uni-search-bar placeholder="输入姓名/手机号/店名" @input="search" v-model="searchValue"></uni-search-bar>
		</view>

		<view class="lists" v-for="(item,index) in list" :key='index'>
			<view class="list">
				<view class="list-top">
					<view>
						<uni-icons type="person-filled" size="18" style="color: #5D61FC;" class="ma-right"></uni-icons>
						<text class="ma-right number-text">{{item.username}}</text>
						<text class="number-text" style="font-size: 14px;">{{item.phone}}</text>
					</view>
					<view>
						<button type="primary" size="mini" @click="goRecord(item.number)">录单</button>
					</view>
				</view>
				<view>
					<view>
						<uni-icons type="home" size="13" class="ma-right"></uni-icons><text class="ma-right">{{item.home}}</text>
					</view>
					<view>
						<uni-icons type="location" size="13" class="ma-right"></uni-icons><text>{{item.addres}}</text>
					</view>
					<view>
						<uni-icons type="location-filled" size="13" class="ma-right"></uni-icons><text>{{item.fromAd}}</text>
					</view>
				</view>
				<view class="footer">
					<view class="footer-right">
						<view @click="goEdit(item.number)">
							<uni-icons type="compose" size="11" class="ma-right"></uni-icons><text>编辑</text>
						</view>
						<view>
							<uni-icons type="trash" size="11" class="ma-right"></uni-icons><text>删除</text>
						</view>
					</view>
				</view>
			</view>
			
		</view>
		<view style="margin-top: 100px;">
		</view>
		<view class="footer-button">
			<view >
				<button type="primary" @click="goCreate()">新增客户</button>
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
	export default {
		components: {
			uniSearchBar,
			uniIcons
		},
		data() {
			return {
				searchValue: '',
				list: [{
						number: 7,
						username: '刘佳佳',
						phone: '136448798711',
						addres: '河南省三门市义务晨业路33号',
						home: '刘佳佳烧烤',
						order: 10001,
						fromAd: '东北冻库'
					},
					{
						number: 1,
						username: '刘佳佳',
						phone: '136448798711',
						addres: '河南省三门市义务晨业路33号',
						home: '刘佳佳烧烤',
						order: 10001,
						fromAd: '东北冻库'
					},
					{
						number: 4,
						username: '刘佳佳',
						phone: '136448798711',
						addres: '河南省三门市义务晨业路33号',
						home: '刘佳佳烧烤',
						order: 10001,
						fromAd: '东北冻库'
					},
					{
						number: 20,
						username: '刘佳佳',
						phone: '136448798711',
						addres: '河南省三门市义务晨业路33号',
						home: '刘佳佳烧烤',
						order: 10001,
						fromAd: '东北冻库'
					},
					{
						number: 52,
						username: '刘佳佳',
						phone: '136448798711',
						addres: '河南省三门市义务晨业路33号',
						home: '刘佳佳烧烤',
						order: 10001,
						fromAd: '东北冻库'
					},
					{
						number: 6,
						username: '刘佳佳',
						phone: '136448798711',
						addres: '河南省三门市义务晨业路33号',
						home: '刘佳佳烧烤',
						order: 10001,
						fromAd: '东北冻库'
					},
					{
						number: 1,
						username: '刘佳佳',
						phone: '136448798711',
						addres: '河南省三门市义务晨业路33号',
						home: '刘佳佳烧烤',
						order: 10001,
						fromAd: '东北冻库'
					},
					{
						number: 12,
						username: '刘佳佳',
						phone: '136448798711',
						addres: '河南省三门市义务晨业路33号',
						home: '刘佳佳烧烤',
						order: 10001,
						fromAd: '东北冻库'
					}

				]
			}
		},
		methods: {
			search(e) {
				console.log(e.value)
			},
			goEdit(id){
				uni.navigateTo({
					url:'../customer/eidtCustomer?id='+id
				})
			},
			goCreate(){
				uni.navigateTo({
					url:'../customer/createCustomer'
				})
			},
			goRecord(id){
				uni.navigateTo({
					url:'../customer/recordOrder?id='+id
				})
			}
		}
	}
</script>

<style>
	page {
		background-color: #eef2f8;
	}

	.list {
		background-color: #FFFFFF;
		padding: 10px 10px 4px 10px;
		border-radius: 5px;
	}

	.list view {
		margin-top: 3px;
	}

	.lists {
		padding: 5px 10px;

	}

	.list-top {
		display: flex;
		justify-content: space-between;
	}

	.finish-text {
		color: #666666;
		font-size: 16px;
	}

	.ma-right {
		margin-right: 5px;
	}

	text {
		font-size: 12px;
		color: #333333;
	}

	.number-text {
		color: #5D61FC;
		font-size: 16px;

	}

	.footer-text {
		color: #999999;
	}

	.footer {
		display: flex;
		padding: 3px;
		justify-content: flex-end;
		align-items: center;
		border-top: 1px solid #eef2f8;
	}

	.footer-right text {
		color: #666666;
		font-size: 10px;
	}

	.footer-right {
		display: flex;
	}
	.footer-right view {
		margin-right: 10px;
	}
	.footer-button{
		position: fixed;
		bottom: 52px;
		width: 100%;
		background-color: #FFFFFF;
	}
	.footer-button button{
		border-radius: 10px;
	}
</style>
