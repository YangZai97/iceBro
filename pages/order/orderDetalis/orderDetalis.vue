<template>
	<view>
		<view class="order-details">
			<view class="order-details-top">
				<text class="font-color-gray">订单号:{{orderId}}</text>
			</view>
			<view class="order-details-top">
				<text class="font-color-gray">车牌号:{{CarNumber}}</text>
			</view>
			
			<view class="order-details-footer">
			
				<uni-icons class="order-icons" style="color: #9c9c9c;" type="contact" size="18"></uni-icons>
			
				<view class="order-details-footer-right">
					<text class="font-color-gray">{{ClientName}} {{PhoneNumber}} </text>
					
				</view>
			</view>
			
			<view class="order-details-footer">
			
				<uni-icons class="order-icons" style="color: #9c9c9c;" type="shop" size="18"></uni-icons>
			
				<view class="order-details-footer-right">
			<text class="font-color-gray" style="display: block;">店铺：{{Shop}}</text>					
				</view>
			</view>
			<view class="order-details-footer">
			
				<uni-icons class="order-icons" style="color: #9c9c9c;" type="location" size="18"></uni-icons>
			
				<view class="order-details-footer-right">
			<text class="font-color-gray" style="display: block;">地址：{{Address}}</text>					
				</view>
			</view>
			<view class="order-details-footer" style="margin-top: 5px;">
				<uni-icons class="order-icons" type="map-pin-ellipse" style="color: #9c9c9c;" size="18"></uni-icons>
				<text class="font-color-gray">{{store}}</text>
			
			</view>
		</view>
		<view class="order-details">
			<view class="order-details-font">
				<text class="font-color-gray">票数: {{Batch}}票</text>
			</view>
			<view class="order-details-font">
				<text class="font-color-gray">件数: {{Many}}件</text>
			</view>
		</view>
		<view class="order-details">
			<view class="order-details-font">
				<text class="font-color-gray">备注:</text>
			</view>
			<view class="order-details-font" style="text-indent:10px;">
				<text class="font-color-gray" >{{remark}}</text>
			</view>
		</view>
		<view class="order-details">
			<view class="order-details-footer" style="margin-bottom: 5px;">
				<view style="display: flex;">
					<uni-icons type="redo-filled" class="order-icons" size="22" style="color: #9c9c9c;"></uni-icons>
				</view>
				<view>
					<text class="font-color-gray">创建时间：{{CreatedAt}}</text>
				</view>
			</view>
			<view class="order-details-footer" v-if="Status=='已完成'">
				<uni-icons type="checkbox-filled" class="order-icons" size="22" style="color: #9c9c9c;"></uni-icons>
				<text class="font-color-gray">完成时间：{{UpdatedAt}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	export default {
		data() {
			return {
				orderId:'',
				store:'',
				Shop:'',
				ClientName:'',
				Many:'',
				Batch:'',
				CarNumber:'',
				Status:'',
				Address:'',
				PhoneNumber:'',
				remark:'',
				CreatedAt:'',
				UpdatedAt:''
			}
		},
		methods: {
			getDeatalis(){
					uni.request({
						url:this.$utils.apiurl+'/api/user/order/'+this.orderId,
						method:'GET',
						header: {
						'Authorization': uni.getStorageSync('token')
						},
						success :(res)=> {
							if(res.data.success){
								console.log(res.data)
								this.store = res.data.data.Store
								this.ClientName = res.data.data.ClientName
								this.PhoneNumber = res.data.data.PhoneNumber
								this.CarNumber = res.data.data.Staff.CarNumber
								this.Shop = res.data.data.Shop
								this.Address = res.data.data.Address
								this.Status = res.data.data.Status
								this.Many = res.data.data.Many
								this.Batch = res.data.data.Batch
								this.remark= res.data.data.Remark
								this.UpdatedAt = res.data.data.UpdatedAt
								this.CreatedAt = res.data.data.CreatedAt
							}else{
								uni.showToast({
									title: '系统出错,获取订单详情失败',
									duration: 2000,
									icon: 'none'
								});
							}
						}
					})
			}
		},
		onShow(){
			this.getDeatalis()
		},
		onLoad(Option){
			this.orderId = Option.id
		},
		components: {
			uniIcons
		}
	}
</script>

<style>
	page {
		background-color: #eef2f8;
	}

	.order-details {
		background-color: #FFFFFF;
		margin: 8px 10px;
		padding: 10px;
		border-radius: 5px;
	}

	.order-details-footer {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	text {
		font-size: 16px;
	}

	.order-details-font {
		padding: 0px;
	}

	.font-color {
		color: #000000;
		font-size: 12px;
	}

	.font-color-gray {
		font-size: 12px;
		color: #9c9c9c;
	}

	.order-icons {
		margin-right: 4px;
	}
</style>
