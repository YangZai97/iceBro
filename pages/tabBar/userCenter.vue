<template>
	<view class="bg">
		<view class="t2" style="text-align: center;">
			<image src="../../static/haihuidai/asset.png" style="width: 80px; height: 80px;"></image>
			<view>
				<text style="color: #FA963C;font-size: 16px; font-weight: 400;">{{phone}}</text>
			</view>
		</view>
		<view class="t2">
			<view class="D-flex line " @click="goRetention">
				<uni-icons type="bars" size="22" class="icons" style="color: #483eff;"></uni-icons><text class="fl">滞留订单</text>
			</view>
			<view class="D-flex" @click="go">
				<uni-icons type="personadd" size="22" class="icons" style="color: #483eff;"></uni-icons><text class="fl">我的客户</text>
			</view>
		</view>
		<view class="t2">
			<view class="D-flex line">
				<uni-icons type="phone" size="22" class="icons" style="color: #483eff;"></uni-icons>
				<text class="fl">手机号 </text>
				<view class="fl">
					{{phone}}
				</view>
			</view>
			<view class="D-flex">
				<uni-icons type="paperplane" size="22" class="icons" style="color: #483eff;"></uni-icons>
				<text class="fl">车牌号 </text>
				<view class="fl">
					{{card}}
				</view>
			</view>
		</view>
		<view class="btn"><button class="logout" @click="logout">退出登录</button></view>
	</view>
	</view>
</template>

<script>
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	export default {
		data() {
			return {
				card: '喻A366D4',
				phone: '13699999999',
			}
		},
		methods: {
			go() {
				uni.switchTab({
					url: '/pages/tabBar/customer',
				})
			},
			goRetention(){
				uni.navigateTo({
					url:'../order/retention/retention'
				})
			},
			logout() {
				uni.navigateTo({
					url: '../account/login'
				})
			},
		},
		components: {
			uniIcons
		}
	}
</script>

<style >
	page{
		background-color: #eef2f8;
	}
	.btn {
		width: 90%;
		margin: 0 auto;
	}
	.btn button{
		background-color: #FFFFFF;
		border-radius: 10px;
		color: #333333;
		font-size: 15px;
	}
	.D-flex {
		padding: 10px;
		display: flex;
		align-items: center;
	}

	.line {
		border-bottom: 1px solid #eef5ff;

	}

	.bg {
		background-image:url('~@/static/haihuidai/usercenterBg.jpg') ;
		background-repeat:no-repeat;
		padding: 20px 0;
	}


	.t2 {
		border-radius: 10px;
		box-shadow: 1px 1px 1px #FFFFFF;
		background-color: #FFFFFF;
		margin: 10px;
		padding: 15px;
	}


	.fl {
		font-size: 20px;
		margin-right: 20px;
		color: #333333;
		font-size: 16px;
		font-weight: 400;
	}

	.icons {
		padding: 0px 10px 0px 0px;
		top: 10px;
	}
</style>
