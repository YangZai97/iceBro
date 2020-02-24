<template>
	<view>
		<view class="order-deatali">
			<view class="order-deatali-top">
				1
			</view>
			<view class="order-deatali-center">
				2
			</view>
			<view class="order-deatali-footer">
				<view>
					收
				</view>
				<view class="order-deatali-footer-right">
					<view>
						<text>东边库存-刘佳佳</text> <text>123132156465</text> <text>胖子烧烤</text>
					</view>
					<view>
						<text>地址：乱七八糟的地址1232131</text>
					</view>
				</view>
			</view>
		</view>
		<view class="order-deatali">
			第二个
		</view>
		<view class="order-deatali">
			第三个
		</view>
		<view class="order-deatali">
			第四个
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
page{
		background-color: #eef2f8;
}
.order-deatali{
	background-color: #FFFFFF;
	margin-top: 8px;
	padding: 10px;
}
.order-deatali-footer{
	display: flex; //flex 布局 ,弹性布局
	justify-content: flex-start; //从开始(左边)放心排列
	align-items: center;  //垂直
}
text{
	font-size: 12px;
}
</style>
