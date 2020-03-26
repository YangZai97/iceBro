<template>
	<view>
		<view>
			<uni-search-bar placeholder="输入姓名/手机号/店名" @input="search" v-model="searchValue"></uni-search-bar>
		</view>

		<view class="lists" >
			<view class="list" v-for="(item,index) in list" :key='index'>
				<view class="list-top">
					<view>
						<uni-icons type="person-filled" size="18" style="color: #5D61FC;" class="ma-right"></uni-icons>
						<text class="ma-right number-text">{{item.Name}}</text>
						<text class="number-text" style="font-size: 14px;">{{item.Phone}}</text>
					</view>
					<view>
						<button type="primary" size="mini" @click="goRecord(item.ID)">录单</button>
					</view>
				</view>
				<view>
					<view>
						<uni-icons  style="color: #9c9c9c;" type="home" size="13" class="ma-right"></uni-icons><text class="ma-right">{{item.Shop}}</text>
					</view>
					<view>
						<uni-icons  style="color: #9c9c9c;" type="location" size="13" class="ma-right"></uni-icons><text>{{item.Address}}</text>
					</view>
					<view>
						<uni-icons  style="color: #9c9c9c;" type="location-filled" size="13" class="ma-right"></uni-icons><text>{{item.Store}}</text>
					</view>
				</view>
				<view class="footer">
					<view class="footer-right">
						<view @click="goEdit(item.ID)">
							<uni-icons type="compose" size="11" class="ma-right"></uni-icons><text>编辑</text>
						</view>
						<view @click="deleteCustomer(item.ID)">
							<uni-icons type="trash" size="11" class="ma-right"></uni-icons><text>删除</text>
						</view>
					</view>
				</view>
			</view>
			
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
				list: []
			}
		},
		onShow() {
			this.getList()
		},
		methods: {
			deleteCustomer(id){
				uni.request({
					url:this.$utils.apiurl+'/api/user/client/'+id,
					method:'delete',
					header: {
					'Authorization': uni.getStorageSync('token')
					},
					success :(res)=> {
						if(res.data.success){
							console.log(res.data)
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
			getList(){
				let data={}
				if(this.searchValue.value){
					data={
						page:1,
						search:this.searchValue.value,
						page_size:999999
					}
				}else{
					data={
						page:1,
						page_size:999999
					}
				}
				uni.request({
					url:this.$utils.apiurl+'/api/user/client',
					method:'get',
					data:data,
					header: {
					'Authorization': uni.getStorageSync('token')
					},
					success :(res)=> {
						if(res.data.success){
							console.log(res.data)
							this.list= res.data.data
						}else{
							uni.showToast({
								title: '系统出错,获取客户列表失败',
								duration: 2000,
								icon: 'none'
							});
						}
					}
				})
			},
			search(e) {
				console.log(e.value)
				this.getList()
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
		margin-top:10px;
		border-radius: 5px;
	}
	.list:last-child{
		margin-bottom:80px;
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
		color: #666666;
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
		bottom: 0px;
		width: 100%;
		background-color: #FFFFFF;
	}
	.footer-button button{
		border-radius: 10px;
	}
</style>
