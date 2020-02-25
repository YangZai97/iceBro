<template>
	<view>
		<view>
			<uni-search-bar placeholder="输入姓名/手机号/店名" @input="search" v-model="searchValue"></uni-search-bar>
		</view>
		<section class="Index-Page">
			<s-tabs :effect="true" v-model="activeTab" @change="change" :nav-per-view="3">
				<s-tab title="派送中">
					<view class="lists" v-for="(item,index) in list"  :key='index'>
						<view class="list" >
							<view class="list-top">
								<view >
									<text class="number-text">{{item.number}}件</text>
								</view>
								<view>
									<button type="primary" size="mini">确认派送</button>
								</view>
							</view>
							<view @click="goDeatalis(item.number)">
								<view >
									<uni-icons type="contact" size="13" class="ma-right"></uni-icons><text class="ma-right">{{item.username}}</text><text>{{item.phone}}</text>
								</view>
								<view>
									<uni-icons type="home" size="13" class="ma-right"></uni-icons><text>{{item.home}}}</text>
								</view>
								<view>
									<uni-icons type="location-filled" size="13" class="ma-right"></uni-icons><text>{{item.addres}}</text>
								</view>
							</view>
							<view class="footer">
								<view class="footer-left">
									<text class="footer-text">订单号: {{item.order}}</text>
								</view>
								<view class="footer-right">
									<view>
										<uni-icons type="redo" size="11" class="ma-right"></uni-icons><text>滞留</text>
									</view>
									<view>
										<uni-icons type="trash" size="11" class="ma-right"></uni-icons><text>删除</text>
									</view>
								</view>
							</view>
						</view>
					</view>
				</s-tab>
				<s-tab title="已完成">
					<view class="lists" v-for="(item,index) in list"  :key='index'>
						<view class="list">
							<view class="list-top">
								<view >
									<text class="number-text">{{item.number}}件</text>
								</view>
								<view>
									<text class="finish-text">已完成</text>
								</view>
							</view>
							<view @click="goDeatalis(item.number)">
								<view>
									<uni-icons type="contact" size="13" class="ma-right"></uni-icons><text class="ma-right">{{item.username}}</text><text>{{item.phone}}</text>
								</view>
								<view>
									<uni-icons type="home" size="13" class="ma-right"></uni-icons><text>{{item.home}}}</text>
								</view>
								<view>
									<uni-icons type="location-filled" size="13" class="ma-right"></uni-icons><text>{{item.addres}}</text>
								</view>
							</view>
							<view class="footer">
								<view class="footer-left">
									<text class="footer-text">订单号: {{item.order}}</text>
								</view>
								<view class="footer-right">
									<view>
										<uni-icons type="trash" size="11" class="ma-right"></uni-icons><text>删除</text>
									</view>
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
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
	import sTabs from '@/components/s-ui/s-tabs';
	import sTab from '@/components/s-ui/s-tab';
	export default {
		components: {
			sTabs,
			sTab,
			uniSearchBar,
			uniIcons
		},
		data() {
			return {
				activeTab: 0,
				searchValue:'',
				list:[
					{
						number:7,
						username:'刘佳佳',
						phone:'136448798711',
						addres:'河南省三门市义务晨业路33号',
						home:'刘佳佳烧烤',
						order:10001
					},
					{
						number:1,
						username:'刘佳佳',
						phone:'136448798711',
						addres:'河南省三门市义务晨业路33号',
						home:'刘佳佳烧烤',
						order:10001
					},
					{
						number:4,
						username:'刘佳佳',
						phone:'136448798711',
						addres:'河南省三门市义务晨业路33号',
						home:'刘佳佳烧烤',
						order:10001
					},
					{
						number:20,
						username:'刘佳佳',
						phone:'136448798711',
						addres:'河南省三门市义务晨业路33号',
						home:'刘佳佳烧烤',
						order:10001
					},
					{
						number:52,
						username:'刘佳佳',
						phone:'136448798711',
						addres:'河南省三门市义务晨业路33号',
						home:'刘佳佳烧烤',
						order:10001
					},
					{
						number:6,
						username:'刘佳佳',
						phone:'136448798711',
						addres:'河南省三门市义务晨业路33号',
						home:'刘佳佳烧烤',
						order:10001
					},
					{
						number:1,
						username:'刘佳佳',
						phone:'136448798711',
						addres:'河南省三门市义务晨业路33号',
						home:'刘佳佳烧烤',
						order:10001
					},
					{
						number:12,
						username:'刘佳佳',
						phone:'136448798711',
						addres:'河南省三门市义务晨业路33号',
						home:'刘佳佳烧烤',
						order:10001
					}
					
				]
			}
		},
		methods: {
			change(index) {
				console.log(index)
			},
			search(e) {
				console.log(e.value)
			},
			goDeatalis(id){
				console.log(id)
				uni.navigateTo({
					url:'../order/orderDetalis/orderDetalis?id='+id
				})
			}
		}
	}
</script>

<style>
page{
		background-color: #eef2f8;
}
.list{
	background-color: #FFFFFF;
	padding: 10px 10px 4px 10px;
	border-radius: 5px;
}
.list view{
	margin-top: 3px;
}
.lists{
	padding: 5px 10px;
	
}
.list-top{
	display: flex;
	justify-content: space-between;
}
.finish-text{
	color: #666666 ;
	font-size: 16px;
}
.ma-right{
	margin-right: 5px;
}
text{
	font-size: 12px;
	color: #333333;
}
.number-text{
	color: #5D61FC;
	font-size: 16px;
	
}
.footer-text{
	color: #999999;
}
.footer{
	display: flex;
	padding: 3px;
	justify-content: space-between;
	align-items: center;
	border-top: 1px solid #eef2f8;
}
.footer-right text{
	color: #666666;
	font-size: 10px;
}
.footer-right{
	display: flex;
}
.footer-right view {
	margin-right: 10px;
}
</style>
