<template>
	<view class="eidt-details">
		<view class="eidt-details-first">
			<view>
				<input v-model="input" placeholder="姓名" />
			</view>
			<view class="eidt-details-right">
				<input v-model="information" placeholder="联系方式" />
			</view>
		</view>
		<view class="eidt-details-first">
			<input v-model="ShopName" placeholder="店名" />
		</view>
		<view class="eidt-details-first">
			<input v-model="ProvinceCity" placeholder="省市区" />
		</view>
		<view class="eidt-details-first">
			<input v-model="address" placeholder="详细地址(精确到门牌号)" />
		</view>
		<view class="eidt-details-first">
			<view>
				<uni-icons type="checkbox" size="30"></uni-icons>
			</view>
			<view>
				<input v-model="pickerText" @tap="openAddres" placeholder="点击请选择发货冻库" />
				<simple-address ref="simpleAddress" :pickerValueDefault="cityPickerValueDefault" @onConfirm="onConfirm" themeColor='#007AFF'></simple-address>
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	import simpleAddress from "@/components/simple-address/simple-address.nvue"
	export default {
		data() {
			return {
				input: '',
				information: '',
				ShopName: '',
				ProvinceCity: '',
				address: '',
				cityPickerValueDefault: [0, 0, 1],
				pickerText: ''
			}
		},
		methods: {
			openAddres() {
				this.$refs.simpleAddress.open();
			},
			onConfirm(e) {
				this.pickerText = JSON.stringify(e)
			}
		},
		components: {
			uniIcons,
			simpleAddress
		}
	}
</script>

<style>
	page {
		background-color: #eef2f8;
	}

	.eidt-details {
		background-color: #FFFFFF;
		margin-top: 8px;
	}

	.eidt-details-first {
		display: flex;
		justify-content: flex-start;
		width: 70%;
		padding: 5px;
		/* border-bottom: 1px solid #969ba1; */
	}

	.eidt-details-right {
		/* border-left: 1px solid #969ba1; */
	}
</style>
