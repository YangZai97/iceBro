<template>
	<view class="eidt-details">
		<view class="eidt-details-first">
			<view class="uni-input-boder">
				<input v-model="input" placeholder="姓名" />
			</view>
			<view class="eidt-details-right" style="padding-left: 6px;">
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
			<view style=" margin-right: 5px; display:flex; align-items: center;" >
				<text style="font-size: 12px; color:#777777;">选择发货冻库：</text>
			</view>
			<view>
				<view class="uni-list-cell-db">
					<picker @change="bindPickerChange" :value="index" :range="array">
						<view class="uni-input" style="font-size: 12px; color:#007AFF;">{{array[index]}}</view>
					</picker>
				</view>
			</view>
		</view>
		<view style=" padding: 20px 15px 10px 20px ">
			<button type="primary" @click="go">确认</button>
		</view>
	</view>
</template>

<script>
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	export default {
		data() {
			return {
				input: '',
				information: '',
				ShopName: '',
				ProvinceCity: '',
				address: '',
				array: ['中国', '美国', '巴西', '日本'],
				index: 0,
			}
		},
		methods: {
			bindPickerChange(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index = e.target.value
			},
			go(){
				uni.switchTab({
					url:'../tabBar/customer'
				})
			}
		},
		components: {
			uniIcons,
		}
	}
</script>

<style scoped>
	page {
		background-color: #eef2f8;
	}
	.uni-input-boder{
		border-right: 2px solid #F4F4F4;
	}
	.eidt-details {
		background-color: #FFFFFF;
		/* margin-top: 8px; */
		margin: 5px 3px;
		border-radius: 3px;
	}

	.eidt-details-first {
		display: flex;
		justify-content: flex-start;
		width: 100%;
		padding: 10px;
		align-items: center;
		border-bottom: 1px solid #eef2f8;
	}
	input{
		font-size: 15px;
		color: #3B4144;
	}
	.eidt-details-right {
		/* border-left: 1px solid #969ba1; */
	}
</style>
