<template>
	<div class="service-div">
		<div class="cover-all"></div>
		<div class="service-main">
			<div class="modal-header">
				<h3></h3>
				<img src="./img/closeGrey.png" alt="" @click="closeService">
			</div>
			<div class="modal-main">
			¥ÛÀ’¥Ú
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name:'service',
		methods:{
			
		}
	}
</script>
<style lang="scss" scoped>
	.service-div {
		position: fixed;
		left: 0;
		top: 0;
		z-index: 999;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.4);
		.service-main {
			width: 700px;
			margin: 0 auto;
			background: #fff;
			padding-bottom: 1px;
		}
		.modal-main {
			width: 604px;
			height: 507px;
			border: 1px solid #e1e2e6;
			margin: 30px;
			padding: 18px;
			overflow-y: auto;
			p {
				line-height: 24px;
				font-size: 14px;
			}
			.strong-p {
				color: #6B798E;
			}
			.normal-p {
				color: #e1e2e6;
			}
		}
		.modal-header {
			height: 80px;
			line-height: 80px;
			color: #333;
			border-bottom: 1px solid #e1e2e6;
			h3 {
				float:left;
				text-align: center;
			}
			img {
				float:right;
			}
		}
		
	}
</style>