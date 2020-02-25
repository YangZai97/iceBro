<template>
	<view>
		<view class="order-details">
			<view class="order-details-top">
				<text class="font-color-gray">订单号:128927489</text>
			</view>
			<view class="order-details-top">
				<text class="font-color-gray">车牌号:229868878</text>
			</view>
			<view class="order-details-footer">
				<view>
					<uni-icons type="checkbox" size="30"></uni-icons>
				</view>
				<view>
					<text class="font-color">东边库存</text>
				</view>
			</view>
			<view class="order-details-footer">
				<view>
					<uni-icons type="checkbox-filled" size="30"></uni-icons>
				</view>
				<view class="order-details-footer-right">
					<view>
						<text class="font-color">刘佳佳 123132156465 胖子烧烤</text>
					</view>
					<view>
						<text class="font-color-gray">地址：乱七八糟的地址1232131</text>
					</view>
				</view>
			</view>
		</view>
		<view class="order-details">
			<view class="order-details-font">
				<text class="font-color">票数: 12票</text>
			</view>
			<view class="order-details-font">
				<text class="font-color">件数: 12件</text>
			</view>
		</view>
		<view class="order-details">
			<view class="order-details-font">
				<text class="font-color">备注:</text>
			</view>
			<view class="order-details-font">
				<text class="font-color-gray">技术开发快捷u你难道v额积极暗示搜集微软是就让我如i世界人均哦i技术的覅i人家覅发技术开发快捷u你难道v额积极暗示搜集微软是就让我如i世界人均哦i技术的覅i人家覅发技术开发快捷u你难道v额积极暗示搜集微软是就让我如i世界人均哦i技术的覅i人家覅发</text>
			</view>
		</view>
		<view class="order-details">
			<view class="order-details-footer">
				<view>
					<uni-icons type="checkbox" size="30" style="color: #9c9c9c;"></uni-icons>
				</view>
				<view>
					<text class="font-color-gray">2020-02-23 13:12</text>
				</view>
			</view>
			<view class="order-details-footer">
				<view>
					<uni-icons type="checkbox-filled" size="30" style="color: #9c9c9c;"></uni-icons>
				</view>
				<view>
					<text class="font-color-gray">2020-02-23 13:12</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		components: {uniIcons}
	}
</script>

<style>
page{
		background-color: #eef2f8;
}
.order-details{
	background-color: #FFFFFF;
	margin: 8px 10px;
	padding: 10px;
	border-radius: 5px;
}

.order-details-footer{
	display: flex; //flex 布局 ,弹性布局
	justify-content: flex-start; //从开始(左边)放心排列
	align-items: center;  //垂直
}
text{
	font-size: 16px;
}
.order-details-font{
	padding: 3px;
}
.font-color{
	color: #000000;
}
.font-color-gray{
	color: #9c9c9c;
}
</style>
