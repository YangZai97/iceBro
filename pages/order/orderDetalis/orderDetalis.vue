<template>
	<view>
		<view class="order-details">
			<view class="order-details-top">
				<text class="font-color-gray">订单号:128927489</text>
			</view>
			<view class="order-details-top">
				<text class="font-color-gray">车牌号:229868878</text>
			</view>
			<view class="order-details-footer" style="margin-top: 5px;">

				<uni-icons class="order-icons" type="checkbox" size="22"></uni-icons>


				<text class="font-color">东边库存</text>

			</view>
			<view class="order-details-footer">

				<uni-icons class="order-icons" type="checkbox-filled" size="22"></uni-icons>

				<view class="order-details-footer-right">
					<text class="font-color">刘佳佳 123132156465 胖子烧烤</text>
						<text class="font-color-gray" style="display: block;">地址：乱七八糟的地址1232131</text>
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
			<view class="order-details-footer" style="margin-bottom: 5px;">
				<view>
					<uni-icons type="checkbox" class="order-icons" size="22" style="color: #9c9c9c;"></uni-icons>
				</view>
				<view>
					<text class="font-color-gray">2020-02-23 13:12</text>
				</view>
			</view>
			<view class="order-details-footer">
				<uni-icons type="checkbox-filled" class="order-icons" size="22" style="color: #9c9c9c;"></uni-icons>
				<text class="font-color-gray">2020-02-23 13:12</text>
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
		onLoad(Option){
			console.log(Option.id)
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
