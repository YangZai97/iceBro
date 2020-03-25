<template>
	<view>
		<view class="login">
			<view class="login-view ">
				<view style="text-align: center;font-size: 18px; color: #000000; font-weight: 400;">
					登录
				</view>
				<view>
					<input v-model="login.userName" placeholder="请输入账号" class="input" />
				</view>
				<view>
					<input v-model="login.password" placeholder="请输入登录密码" class="input" />
				</view>

				<view class=" loginbtn ">
					<button @click="defaultHandlerLogin"> 登录 </button>
				</view>
				<view class="footer-text">
					<text>无账号用户请联系客服（QQ33215006)</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				login: {
					userName: "",
					password: ""
				},

			};
		},
		methods: {
			defaultHandlerLogin() {
				console.log(this.login);
				uni.request({
					url:this.$utils.apiurl+'/api/login',
					method:'POST',
					data:this.login,
					success :(res)=> {
						if(!res.data.success){
							uni.showToast({
								title: '账号密码错误或已被冻结',
								duration: 2000,
								icon: 'none'
							});
						}else{
							uni.setStorageSync('token', 'Bearer ' + res.data.data);
							uni.switchTab({
								url:'../tabBar/userCenter'
							})
						}
					}
				})
			},
		
		}
	}
</script>

<style>
	.login {
		background-image:url('~@/static/haihuidai/logo.jpg') ;
		background-repeat: no-repeat;
		background-size:100%;
	}
	view{
		display: uni-view;
	}
	.input {
		padding: 10px;
		background-color: #F6F6F6;
		border-radius: 5px;
		color: #333333;
		font-size: 14px;
	}

	.loginbtn button {
		color: #F6F6F6;
		font-size: 32rpx;
		border-radius: 20rpx;
		outline: 0;
		background: #5D61FC;
	}
	.login{
		display: flex;
		justify-content: center;
	}
	.login-view {
		margin-top: 60%;
		width: 80%;
		border-radius: 10px;
		border: 1px solid #FFFFFF;
		padding: 20px;
		background-color: #FFFFFF;
		box-shadow: 3px 5px 3px  #e3dde2;

	}

	.login-view view {
		margin-top: 15px;
	}
	.footer-text{
		text-align: center;
		color: #4a31ff;
		font-size: 12px;
	}
</style>
