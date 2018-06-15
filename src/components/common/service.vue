<template>
	<div class="service-div">
		<div class="cover-all"></div>
		<div class="service-main">
			<div class="modal-header">
				<h3>朴新在线学员须知</h3>
				<img src="./img/closeGrey.png" alt="" @click="closeService">
			</div>
			<div class="modal-main">
				<p class="strong-p">
					朴新教育科技集团由教育培训行业资深人士创办，主营业务包含K12培训、出国留学考试培训、留学申请、在线教育产品开发等领域。朴新在线为朴新教育科技集团新兴业务，现已推出优课、双师课堂和朴新外教三大在线课程产品。朴新在线教育产品及其相关服务由集团控股子公司——天津朴兴教育科技有限公司提供。
				</p>
				<p class="strong-p">一. 朴新优课报名</p>
				<p class="normal-p"></p>
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