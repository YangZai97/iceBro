<template>
	<view>
		<view>
			<uni-search-bar placeholder="输入姓名/手机号/店名" @input="search" v-model="searchValue"></uni-search-bar>
		</view>
		<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" style-type="button" active-color="#007aff"></uni-segmented-control>
		<view class="content">
			<view v-show="current === 0">
				<view class="lists" v-for="(item,index) in list" :key='index'>
					<view class="list">
						<view class="list-top">
							<view>
								<text class="number-text">{{item.Many}}件</text>
							</view>
							<view>
								<button type="primary" size="mini" @click="send(item.ID,item)">确认派送</button>
							</view>
						</view>
						<view @click="goDeatalis(item.ID)">
							<view>
								<uni-icons type="person-filled" size="13" style="color: #9c9c9c;" class="ma-right"></uni-icons><text class="ma-right">{{item.ClientName}}</text><text>{{item.PhoneNumber}}</text>
							</view>
							<view>
								<uni-icons type="home" size="13" style="color: #9c9c9c;" class="ma-right"></uni-icons><text>{{item.Shop}}</text>
							</view>
							<view>
								<uni-icons type="location-filled" size="13" style="color: #9c9c9c;" class="ma-right"></uni-icons><text>{{item.Address}}</text>
							</view>
						</view>
						<view class="footer">
							<view class="footer-left">
								<text class="footer-text">订单号: {{item.ID}}</text>
							</view>
							<view class="footer-right">
								<view @click="retention(item.ID,item)">
									<uni-icons type="redo" size="15" class="ma-right"></uni-icons><text style="font-size: 16px;">滞留</text>
								</view>
								<view @click="deleteOrder(item.ID)">
									<uni-icons type="trash" size="15" class="ma-right"></uni-icons><text style="font-size: 16px;">删除</text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view v-show="current === 1">
				<view class="lists" v-for="(item,index) in list" :key='index'>
					<view class="list">
						<view class="list-top">
							<view>
								<text class="number-text">{{item.Many}}件</text>
							</view>
							<view>
								<text class="finish-text">已完成</text>
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
							<!-- <view class="footer-right">
								<view @click="deleteOrder(item.ID)">
									<uni-icons type="trash" size="15" class="ma-right"></uni-icons><text style="font-size: 16px;">删除</text>
								</view>
							</view> -->
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
	import uniSegmentedControl from "@/components/tab-ss/tab-ss.vue"

	export default {
		components: {
			uniSegmentedControl,
			uniSearchBar,
			uniIcons
		},
		computed:{
			status(){
				if(this.current==0){
					return '派送中'
				}else{
					return '已完成'
				}
			}
		},
		data() {
			return {
				items: ['派送中', '已完成'],
				current:0,
				searchValue: '',
				list: []
			}
		},
		onShow() {
		  if(uni.getStorageSync('current')===true){
			  this.current = 1
			  this.getList()
		  }else{
			    this.current = 0
				this.getList()
		  }
		},
		onHide() {
			uni.removeStorageSync('current');
		},
		methods: {
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
						status:this.status,
						search:this.searchValue.value
					}
				}else{
					data={
						page:1,
						status:this.status,
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
			onClickItem(index) {
				console.log(index)
				if (this.current != index.currentIndex) {
					this.current = index.currentIndex;
				}
				this.getList()
			},
			
			search(e) {
				console.log(e.value)
				this.getList()
			},
			send(id,item) {
				uni.request({
					url:this.$utils.apiurl+'/api/user/order/'+id,
					method:'put',
					data:{
						status:'已完成',
						Many:item.Many,
						Amount:item.Amount
					},
					header: {
					'Authorization': uni.getStorageSync('token')
					},
					success :(res)=> {
						if(res.data.success){
							this.current = 1
							this.getList()
						}else{
							uni.showToast({
								title: '系统出错',
								duration: 2000,
								icon: 'none'
							});
						}
					}
				})
			},
			retention(id,item) {
				uni.request({
					url:this.$utils.apiurl+'/api/user/order/'+id,
					method:'put',
					data:{
						status:'滞留中',
						Many:item.Many,
						Amount:item.Amount
					},
					header: {
					'Authorization': uni.getStorageSync('token')
					},
					success :(res)=> {
						if(res.data.success){
							uni.navigateTo({
								url: '../order/retention/retention'
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
				
			},
			goDeatalis(id) {
				console.log(id)
				uni.navigateTo({
					url: '../order/orderDetalis/orderDetalis?id=' + id
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
		font-size: 15px;
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
		font-size: 14px;
	}

	.footer-right {
		display: flex;
	}

	.footer-right view {
		margin-right: 10px;
	}
</style>
