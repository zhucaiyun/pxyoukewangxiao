<template>
	<div class="settlement">
		<div class="pay-path">
			<div class="path-name">
				<p>确认信息</p>
				<span>1</span>
			</div>
			<span class="normal-line"></span>
			<div class="path-name">
				<p>提交订单</p>
				<span>2</span>
			</div>
			<span class="normal-line"> </span>
			<div class="path-name">
				<p>支付成功</p>
				<span>3</span>
			</div>
		</div>
		<div class="order-status">
			订单状态
		</div>
		<div class="order-detail">
			订单详情
		</div>
		<div class="order-pay">
			订单状态
		</div>
		<button>提交订单</button>
	</div>
</template>
<script>
	
</script>
<style lang="scss" scoped>
	.pay-path {
		display: flex;
		margin: 0 auto;
		.path-name {
			p {
				font-size: 18px;
				color: #4db2ff;
			}
			span {
				display: inline-block;
				width: 30px;
				height: 30px;
				line-height: 30px;
				text-align: center;
				border-radius: 50%;
				background: #4db2ff;
				color: #fff;
			}
		}
		.normal-line {
			display: inline-block;
			width: 285px;
			height: 18px;
			border-radius: 9px;
			background: #4db2ff;
		}
	}
</style>