<template>
	<div class="footer-div">
		<div class="footer-main">
			<div class="pxlogo">
				<img src="./img/logo-footer.png" alt="朴新优课">
				<p>Copyright © 2014-2017 朴新教育科技集团 版权所有京ICP备14061840号</p>
			</div>
			<ul>
				<li><h3>帮助中心</h3></li>
				<li  @click="contactUs">服务协议</li>
			</ul>
			<ul>
				<li><h3>联系我们</h3></li>
				<li>电话咨询:400-111-1111</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default {
		name:'vfooter',
		methods: {
			contactUs:function() {
				this.bus.$emit('isShow',{
					isShow: true
				})
			}
		}
	}
</script>
<style lang="scss" scoped>
  .footer-div {
  	width: 100%;
  	min-width: 1120px;
  	background: #404F69;
  	height: 200px;
		.footer-main {
			display: flex;
			justify-content: space-between;
			width: 1120px;
			margin: 0 auto;
			padding-top: 62px;
			.pxlogo {
				p {
					margin-top: 24px;
					color: #6B798E;
					font-size: 14px;
				}
			}
			ul {
				li {
					font-size: 14px;
					color: rgba(255,255,255,0.40);
					line-height: 24px;
					h3 {
						margin-bottom: 4px;
						font-weight: 500;
						font-size: 16px;
						color: #FFFFFF;
					}
				}
			}
		}
  }
</style>

