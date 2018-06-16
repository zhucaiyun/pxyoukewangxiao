<template>
  <transition name="fade">
	<div class="service-div" v-show="isShow">
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
				<p class="normal-p">1.1 学员自主报名；</p>
				<p class="normal-p">1.2 优课学费将通过 “支付宝”或“微信”向天津朴兴教育科技有限公司进行支付，暂不支持现金及银行卡支付。</p>
				<p class="strong-p">二. 朴新优课上课</p>
				<p class="normal-p">2.1 优课课程学习可在网校WEB端进行，登录账号只限本人使用，不得转借他人。</p>
				<p class="normal-p">2.2 优课的课程形式为“视频课+社群内教学”，其中视频课包含直播和录播两种形式。</p>
				<p class="normal-p">2.3 优课会按照报名时上课时间安排进行上课，若因为学员自身原因导致缺课，学校不承担责任。</p>
				<p class="normal-p">2.4 优课的视频课在课次开始后即可观看，在课程有效期内可反复观看（直播课结束后24小时将生成可反复观看的回放视频），超期后不能继续观看。</p>
				<p class="strong-p">三. 转班、倒班</p>
				<p class="normal-p">优课为线上学习课程，暂不支持转班和倒班。</p>
				<p class="normal-p">转班：调整以后全部的上课时间与班次，并在新班级继续就读至课程结束。</p>
				<p class="normal-p">倒班：需临时到原班课程相同的平行班听课1次，当次课结束后仍回原班就读。</p>
				<p class="strong-p">四. 退费</p>
				<p class="normal-p">4.1 特价班报名后不支持退费，请斟酌确认。</p>
				<p class="normal-p">4.2 正价班第二次课开课前，可退全部学费。正价班第二次课开课后，则不予退费。请斟酌确认后购买。</p>
				<p class="normal-p">4.3 退费需向客服老师提出申请，所退费用，将在15个工作日内退回至原付款账户。</p>
				<p class="normal-p">4.4 退费申请发起后学员将不能继续优课课程的学习，退费完成后优课课程将不再提供学习服务，并不再显示在学员个人课程列表中。</p>
				<p class="strong-p">五.知识产权</p>
				<p class="normal-p">优课所有知识产权内容为天津朴兴教育科技有限公司所有。学员不得对外出售甲方内部学习资料，不得进行课堂录音录像，不得向第三方提供或透露甲方的授课教材或教学方法。</p>
				<p class="strong-p">六.其他</p>
				<p class="normal-p">6.1 学校根据实际情况享有课程时间、任课教师的更改权</p>
				<p class="normal-p">6.2 上述规定在法律允许范围内的解释权归天津朴兴教育科技有限公司所有</p>
			</div>
		</div>
	</div>
	</transition>
</template>
<script>
	export default {
		name:'service',
		data() {
			return {
				isShow: false
			}
		},
		created() {
			this.bus.$on('isShow',(data)=>{
				this.isShow = data;
			})
		},
		methods:{
			closeService:function() {
				this.isShow=false;
			}
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
			margin: 30px auto 0 auto;
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
				color: #ADB5BF;
			}
		}
		.modal-header {
			position: relative;
			height: 80px;
			line-height: 80px;
			color: #333;
			border-bottom: 1px solid #e1e2e6;
			h3 {
				text-align: center;
			}
			img {
				position: absolute;
				top:15px;
				right: 15px;
				cursor: pointer;
			}
		}
	}
</style>