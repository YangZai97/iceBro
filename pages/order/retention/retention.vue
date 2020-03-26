<template>
	<view>
		<view>
			<uni-search-bar placeholder="输入姓名/手机号/店名" @input="search" v-model="searchValue"></uni-search-bar>
		</view>
		<view class="lists" v-for="(item,index) in list" :key='index'>
			<view class="list">
				<view class="list-top">
					<view>
						<text class="number-text">{{item.Many}}件</text>
					</view>
					<view>
						<button type="primary" size="mini" @click="send(item.ID)">确认派送</button>
					</view>
				</view>
				<view @click="goDeatalis(item.ID)">
					<view>
						<uni-icons type="person-filled" style="color: #9c9c9c;" size="13" class="ma-right"></uni-icons><text class="ma-right">{{item.ClientName}}</text><text>{{item.PhoneNumber}}</text>
					</view>
					<view>
						<uni-icons type="home" size="13" style="color: #9c9c9c;" class="ma-right"></uni-icons><text>{{item.Shop}}</text>
					</view>
					<view>
						<uni-icons type="location-filled" style="color: #9c9c9c;" size="13" class="ma-right"></uni-icons><text>{{item.Address}}</text>
					</view>
				</view>
				<view class="footer">
					<view class="footer-left">
						<text class="footer-text">订单号: {{item.ID}}</text>
					</view>
					<view class="footer-right">
						<view @click="deleteOrder(item.ID)">
							<uni-icons type="trash" size="11" class="ma-right"></uni-icons><text style="font-size: 20px;">删除</text>
						</view>
					</view>
				</view>
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
						order: 10001
					},
					
				
				
				]
			}
		},
		onShow() {
		this.getList()	
		},
		methods: {
			search(e) {
				console.log(e.value)
				this.getList()
			},
			deleteOrder(id){
				uni.request({
					url:this.$utils.apiurl+'/api/user/order/'+id,
					method:'delete',
					header: {
					'Authorization': uni.getStorageSync('token')
					},
					success :(res)=> {
						if(res.data.success){
							uni.showToast({
								title: '删除成功',
								duration: 2000,
								icon: 'none'
							});
							this.getList()
						}else{
							uni.showToast({
								title: '系统出错,获取订单列表失败',
								duration: 2000,
								icon: 'none'
							});
						}
					}
				})
			},
			
			getList(){
				let data={}
				if(this.searchValue.value){
					data = {
						page:1,
						page_size:999999,
						status:'滞留中',
						search:this.searchValue.value
					}
				}else{
					data={
						page:1,
						status:'滞留中',
						page_size:999999
					}
				}
				uni.request({
					url:this.$utils.apiurl+'/api/user/order',
					method:'get',
					data:data,
					header: {
					'Authorization': uni.getStorageSync('token')
					},
					success :(res)=> {
						if(res.data.success){
							console.log(res.data)
							this.list = res.data.data
						}else{
							uni.showToast({
								title: '系统出错,获取订单列表失败',
								duration: 2000,
								icon: 'none'
							});
						}
					}
				})
			},
			goDeatalis(id) {
				console.log(id)
				uni.navigateTo({
					url: '../orderDetalis/orderDetalis?id=' + id
				})
			},
			send(id){
				uni.request({
					url:this.$utils.apiurl+'/api/user/order/'+id,
					method:'put',
					data:{
						status:'已完成'
					},
					header: {
					'Authorization': uni.getStorageSync('token')
					},
					success :(res)=> {
						if(res.data.success){
							try {
							    uni.setStorageSync('current', true);
							} catch (e) {
							    // error
							}
							uni.switchTab({
								url:'../../tabBar/orderHistory'
							})
						}else{
							uni.showToast({
								title: '系统出错',
								duration: 2000,
								icon: 'none'
							});
						}
					}
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
		font-size: 16px;
		color: #666666;
	}

	.number-text {
		color: #5D61FC;
		font-size: 17px;

	}

	.footer-text {
		color: #999999;
	}

	.footer {
		display: flex;
		padding: 3px;
		justify-content: space-between;
		align-items: center;
		border-top: 1px solid #eef2f8;
	}

	.footer-right text {
		color: #666666;
		font-size: 12px;
	}

	.footer-right {
		display: flex;
	}

	.footer-right view {
		margin-right: 10px;
	}
</style>
