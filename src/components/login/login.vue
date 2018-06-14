<template>
	<div class="login">
		<loginHeader></loginHeader>
		<div class="login-main" id="loginMain">
			<div class="main">
				<img src="./img/plws.png" alt="朴新教育">
				<div class="right-con">
					<router-view></router-view>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
  import loginHeader from '@/components/common/loginHeader'
	export default{
		name: "login",
		data () {
			return {

			}
		},
		components: {
			loginHeader
		},
		// document.body.clientHeight
		mounted: function() {
			// var a = document.body.clientHeight-100;
			// document.getElementById("loginMain").style="min-height:"+ a+'px';
		},
		methods: {

		}
	}
</script>
<style lang="scss" scoped>
  .login {
  	height: 100%;
  	min-height: 590px;
  	background: url(./img/bg.png) top center no-repeat;
  }
	.login-main {
		.main {
			margin: 60px auto 0 auto;
			width: 750px;
			height: 460px;
			background: #fff;
			box-shadow: 0 2px 10px 0 rgba(0,98,172,0.10);
			border-radius: 4px;
			overflow: hidden;
			img {
				float: left;
				margin: 92px 80px 106px 80px;
			}
			.right-con {
				float: left;
				width: 240px;
			}
		}
	}

</style>
<!-- sign-in sign-up 公用样式 -->
<style lang="scss">
	/*form表单的样式*/
	.right-con {
		h3 {
			margin-top: 40px;
			margin-bottom: 22px;
			font-size: 30px;
			color: #333;
			text-align: center;
		}
		nav {
			line-height: 42px;
			margin-bottom: 10px;
			font-size: 14px;
			border-bottom: 1px solid #e1e2e6;
			overflow: hidden;
			text-align: center;
			span {
				width: 50%;
				display: inline-block;
				border-bottom: 4px solid #4db2ff;
				color: #4db2ff;
			}
			a {
				width: 50%;
				color: #333;
			}
			.msg-login {
				float: left;
			}
			.account-login {
				float: right;
			}
		}
		.phone-login {
			position: relative;
			input {
		    position: absolute;
		    left: 50px;
				width: 170px;
		    height: 38px;
		    margin: 0;
		    border: 0 none;

			}
			p {
				position: absolute;
				left: 20px;
				top: 0;
				margin-top: 0;
				color: #c0c0c0;
			}
		}

		input,.phone-login,.verfity-code {
			width: 220px;
			height: 40px;
			line-height: 40px;
			margin-top: 10px;
			padding-left: 10px;
			padding-right: 10px;
			border: 1px solid #e1e2e6;
			border-radius: 4px;
			font-size: 14px;
			color: #333;
			// color: #c0c0c0;
			background: #fafafa;
			-webkit-appearance: none;
			-moz-appearance: none;
			outline: none;
		}
		.cue-con {
			margin-top: 8px;
			font-size: 14px;
			color: #c0c0c0;
		}
		.warning-cue {
			font-size: 14px;
			color: red; // todo
		}
		button {
			width: 240px;
			height: 40px;
			color: #fff;
			font-size: 16px;
			background: #4db2ff;
			border-radius: 4px;
			border: 0;
		}
		.login-ul {
			overflow: hidden;
			li {
				font-size: 14px;
				
				&:first-child {
					float: left;
				}
				&:last-child {
					float: right;
				}
				a {
					color: #4db2ff;
				}
			}
		}
		.verfity-code {
			position: relative;
			input {
		    position: absolute;
		    left: 0;
				width: 100px;
		    height: 38px;
		    margin: 0;
		    border: 0 none;
			}
			button {
				background: #fff;
				border: 0 none;
				width: 110px;
				position: absolute;
				right: 0;
				top: 0;
				margin-top: 0;
				font-size: 14px;
				color: #4db2ff;
			}
		}
	}
</style>