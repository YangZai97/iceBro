<template>
	<view class="bg">
		<view class="t1">
			<uni-icons type="contact" size="70" class="icon1" style="color: #00CCFF;"></uni-icons>
			<text style="display: block;margin-left: 135px;">Jennry</text>
		</view>
		<view class="t2">
			<view class="t2-l">
				<uni-icons type="bars" size="30" class="icon" style="color: #00CCFF;"></uni-icons><text class="fs">滞留订单</text>
				<uni-icons type="forward" size="20"></uni-icons>
			</view>
			<view class="t2-r">
				<uni-icons type="personadd" size="30" class="icon" style="color: #00CCFF;"></uni-icons><text class="fl">我的客户</text>
			</view>
		</view>
		<view class="t2">
			<view class="t2-l">
				<uni-icons type="phone" size="30" class="icon" style="color: #00CCFF;"></uni-icons><text class="fs">手机号</text>
			</view>
			<view class="flex">
				<view >
					<uni-icons type="paperplane" size="30" class="icon" style="color: #00CCFF;"></uni-icons>
				</view>
				<view >
					<text class="fl">昵称</text><input class="uni-input" v-model="username" />
				</view>
			</view>
		</view>
		<view><text>退出登录</text></view>
	</view>
</template>

<script>
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	export default {
		data() {
			return {
				username:'jjj'
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
	.flex{
		display: flex;
	}
	.bg {
		background-image: linear-gradient(#55aaff, #FFFFFF);
		/* height: 100rpx; */
	}

	.t1 {
		/* border: 1px solid #CCCCCC; */
		margin: 10px;
		border-radius: 25px;
		box-shadow: 1px 1px 1px #FFFFFF;
		background-color: #FFFFFF;
		height: 150px;
	}

	.t2 {
		box-shadow: 1px 1px 1px #FFFFFF;
		background-color: #FFFFFF;
		margin: 10px;
		padding: 10px;
	}

	.t2-l {
		/* height:50px; */
		padding: 10px;
		display: inline-block;
	}

	.t2-r {
		/* height:50px; */
		padding: 10px;
		display: inline-block;
	}

	.fs {
		font-size: 20px;
		padding-bottom: 13px;
		padding-right: 170px;
		border-bottom: 1px solid #ededed;
	}

	.fl {
		font-size: 20px;
		padding-right: 70px;
	}

	.icon1 {
		padding-left: 135px;
		top: 10px;
	}

	.icon {
		margin: 10px 10px 10px 0px;
		vertical-align: middle;
	}
</style>
