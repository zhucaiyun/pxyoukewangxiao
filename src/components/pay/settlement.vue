<template>
	<div class="settlement content">
		<div class="pay-path">
			<div class="path-name">
				<p>确认信息</p>
				<span class="active-path">1</span>
			</div>
			<span class="normal-line"></span>
			<div class="path-name">
				<p>提交订单</p>
				<span class="disabled-path">2</span>
			</div>
			<span class="normal-line"> </span>
			<div class="path-name">
				<p>支付成功</p>
				<span class="disabled-path">3</span>
			</div>
		</div>
		<div class="order-status">
			<div class="status-left">
				<img src="./img/paySuccess.png" alt="支付成功">
				<div class="status-info">
					<p>订单提交成功，请您尽快付款！</p>
					<p>订单编号：201821349123900412</p>
					<p>订单将为你保留 29:59 , 请抓紧时间支付</p>
				</div>
			</div>
		  <div class="status-right">
		  	<span>应支付：</span>
		  	<span>￥520</span>
		  </div>
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
		align-items: flex-end;
		width: 732px;
		margin: 66px auto 0 auto;
		.path-name {
			text-align: center;
			p {
				font-size: 18px;
				color: #4db2ff;
				margin-bottom: 16px;
			}
			span {
				display: inline-block;
				width: 30px;
				height: 30px;
				line-height: 30px;
				text-align: center;
				border-radius: 50%;
			}
			.active-path {
				background: #4db2ff;
				color: #fff;
			}
			.disabled-path {
				background:  rgba(107,121,142,0.18);
				color: #6B798E;
			}
		}
		.normal-line {
			display: inline-block;
			width: 285px;
			height: 18px;
			margin-bottom: 5px;
			margin-left: -14px;
			margin-right: -14px;
			border-radius: 9px;
			background: #4db2ff;
		}
	}
	.order-status {
		
		background: #f8fafe;
	}
</style>