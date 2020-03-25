<template>
	<view>
		<view class="eidt-details">
			<view class="eidt-details-first">
				<view class="uni-input-boder">
					<text style="font-size: 12px; padding-right: 5px; color:#777777;">{{username}}</text>
				</view>
				<view class="eidt-details-right" style="padding-left: 6px;">
					<text style="font-size: 12px; color:#777777;">{{phone}}</text>
				</view>
			</view>
			<view class="eidt-details-first">
				<text style="font-size: 12px; color:#777777;">{{home}}</text>

			</view>
			<view class="eidt-details-first">
				<text style="font-size: 12px; color:#777777;">{{address}}</text>
			</view>
			<view class="eidt-details-first">
				<view style=" margin-right: 5px; display:flex; align-items: center;">
					<text style="font-size: 12px; color:#777777;">发货冻库：{{addr}}</text>
				</view>
			</view>

		</view>
		<view class="eidt-details">
			<view class="eidt-details-first edit-footer">
				<text>票数：
				</text>
				<uni-number-box v-model="Pvalue" :min="0" :max="99999"></uni-number-box>
			</view>
			<view class="eidt-details-first edit-footer">
				<text>件数：
				</text>
				<uni-number-box v-model="Jvalue" :min="0" :max="99999"></uni-number-box>
			</view>
		</view>
		<view class="eidt-details">
			<view class=" edit-footer">
				<text style="margin-left: 10px;">备注：</text>
				<view>
					<textarea style="text-indent: 15px; width: 95%; padding: 10px;" :value="remark" placeholder="请输入备注" />
					</view>
			</view>
			
		</view>
		<view style=" padding: 20px 15px 10px 20px ">
			<button type="primary" @click="submit">提交</button>
		</view>
	</view>
</template>

<script>
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	import uniNumberBox from "@/components/uni-number-box/uni-number-box.vue"

	export default {
		data() {
			return {
				addr:'东北冻库',
				username:'刘佳佳',
				phone:'13213132321',
				remark:'e2123312312312312123dasdsaadsdas',
				home:'胖子烧烤',
				address:'湖北省三门路254号',
				Pvalue:0,
				Jvalue:0,
				userId:''
				
			}
		},
		onLoad(Option) {
		   this.userId = Option.id 
		},
		onShow() {
			this.getCustomerInfo()
		},
		methods: {
			getCustomerInfo(){
				uni.request({
					url:this.$utils.apiurl+'/api/user/client/'+this.userId,
					method:'GET',
					header: {
					'Authorization': uni.getStorageSync('token')
					},
					success :(res)=> {
						if(res.data.success){
							this.username = res.data.data.Name
							this.phone = res.data.data.Phone,
							this.home = res.data.data.Shop,
							this.address = res.data.data.Address
							this.addr = res.data.data.Store
						}else{
							uni.showToast({
								title: '系统出错',
								duration: 2000,
								icon: 'none'
							});
						}
					}
				})
			},
			submit(){
				if(this.Pvalue!=0&&this.Jvalue!=0){
					uni.request({
						url:this.$utils.apiurl+'/api/user/order',
						method:'POST',
						data:{
							clientID:Number(this.userId),
							remark:this.remark,
							many:Number(this.Jvalue),
							batch:Number(this.Pvalue)
						},
						header: {
						'Authorization': uni.getStorageSync('token')
						},
						success :(res)=> {
							if(res.data.success){
								uni.switchTab({
									url:'../tabBar/orderHistory'
								})
							}else{
								uni.showToast({
									title: '系统出错',
									duration: 2000,
									icon: 'none'
								});
							}
						}
					})
				}else{
					uni.showToast({
						title: '票数和件数不能为0',
						duration: 2000,
						icon: 'none'
					});
				}
				
			}
		},
		components: {
			uniIcons,
			uniNumberBox
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
	.edit-footer text{
		font-size: 14px; color:#777777;
	}
</style>
