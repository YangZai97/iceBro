<template>
	<view class="bg">
		<view class="t2" style="text-align: center;">
			<image src="../../static/haihuidai/input.png" style="width: 80px; height: 80px;"></image>
			<view >
				<text >{{username}}</text>
			</view>
		</view>
		<view class="t2">
			<view class="D-flex line ">
				<uni-icons type="bars" size="30" class="icons"  style="color: #6a7fff;"></uni-icons><text class="fl">滞留订单</text>
			</view>
			<view class="D-flex">
				<uni-icons type="personadd" size="30"  class="icons" style="color: #6a7fff;"></uni-icons><text class="fl">我的客户</text>
			</view>
		</view>
		<view class="t2">
			<view class="D-flex line">
				<uni-icons type="phone" size="30" class="icons" style="color: #6a7fff;"></uni-icons>
				<text class="fl">手机号</text>
				<input class="uni-input" v-model="phone" />
			</view>
			<view class="D-flex">
				<uni-icons type="paperplane" size="30" class="icons" style="color: #6a7fff;"></uni-icons>
				<text class="fl">昵称</text><input class="uni-input" v-model="username" />
			</view>
		</view>
		<view class="btn"><button class="logout" type="primary" >退出登录</button></view>
	</view>
</template>

<script>
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	export default {
		data() {
			return {
				username: 'Jennry',
				phone:'13699999999'
				
			}
		},
		methods: {

		},
		components: {
			uniIcons
		}
	}
</script>

<style scoped>
	.btn{
		width: 90%;
		margin: 0 auto;
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
		background-image: linear-gradient(#55aaff, #FFFFFF);
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
	}

	.icons {
		padding: 0px 10px 0px 0px;
		top: 10px;
	}
</style>
