<template>
	<view class="login">
		<!-- <cover-image src="/static/haihuidai/bg.png"></cover-image> -->
		<view class="content">
			<view class="login-form">
				<view class="login-text">
					登录
				</view>
				<view class="item phone">
					<image class="icon left" src="/static/haihuidai/input.png" mode="widthFix"></image>
					<input class="uni-input" v-model="username" focus placeholder="用户名" placeholder-class="input-placeholder"/>
					<image class="icon right" @click="removeInput('username')" src="/static/haihuidai/delete_input.png" mode="widthFix"></image>
				</view>
				<view class="item password">
					<image class="icon left" src="/static/haihuidai/password.png" mode="widthFix"></image>
					<input class="uni-input" v-model="password" placeholder="密码" placeholder-class="input-placeholder"/>
					<image class="icon right"  @click="removeInput('password')" src="/static/haihuidai/delete_input.png" mode="widthFix"></image>
				</view>
				<view class="btn">
					<text @click="login">登录</text>
				</view>
				<view style="text-align: center;padding-bottom: 15rpx;"><text  style="font-size: 10rpx;color: #6ea0f8;font-weight: 400;">无账号用户请联系客服（QQ33215006）</text></view>
			</view>
			
		</view>
	</view>
</template>

<script>
	import uniIcons from "@/components/uni-ui/uni-icons/uni-icons.vue"
	export default {
		data() {
			return {
				 username:"",
				 password:""
			}
		},
		onLoad() {
		},
		components: {uniIcons},
		methods: {
			removeInput(value){
				if(value == 'password'){
					this.password = ''
				}else{
					this.username = ''
				}
			},
			login(){
				uni.switchTab({
					url:"/pages/tabBar/userCenter"
				})
			}
		}
	}
</script>

<style scoped>
	page{
		background: url(../../static/haihuidai/logo.png) no-repeat top;
	}
	.login-text{
		padding-top: 20rpx;
		text-align: center;
		font-weight: 400;
		margin-top: 500rpx;
		margin-bottom: 40rpx;
	}
	.content {position: absolute; top: 0;width: 100%;}
	.logo {text-align: center; margin: 96rpx auto 73rpx auto;}
	.logo image {width: 50%;}
	.login-form {width: 630rpx; margin: auto; background-color: #FFFFFF; padding:0 20rpx 0rpx 20rpx ;  box-shadow: 10px 10px 20px 10px #C8C8CD, -10px 10px 10px 10px rgba(255,255,255,0.5);border-radius: 20rpx; 
}	
	.login-form .item:nth-child(1){
		margin-top: 500rpx;
	}
	.login-form .item {
		width: 630rpx;
		height: 84rpx;
		border-radius: 6rpx;
		margin-bottom: 33rpx;
		display: flex;
		justify-content: space-around;
		align-items: center;
		background-color: #FFFFFF;
	}
	.login-form input { height: 84rpx; line-height: 84rpx;}
	.login-form .item .icon{width: 36rpx; height: 40rpx;}
	.input-placeholder { line-height: 84rpx; height: 84rpx; margin: auto;}
	.login-form .btn{ margin: 43rpx auto 22rpx auto;
		text-align: center;
		height: 84rpx;
		line-height: 84rpx;
		border-radius: 6rpx;
		background-color: #6ea0f8;
	}
	.forgot-pwd {text-align: right;}
	.login-third .text{margin: 137rpx auto 106rpx auto; text-align: center; }
	
	.login-third .flex{text-align: center; display: flex; justify-content: space-around; }
	.login-third .flex image {width: 88rpx; height: 88rpx;}
	text{
		height: 30rpx;
		font-family: PingFang-SC-Regular;
		font-size: 32rpx;
		font-weight: bold;
		font-stretch: normal;
		line-height: 40rpx;
		letter-spacing: 3rpx;
		color: #ffffff;
	}
</style>
