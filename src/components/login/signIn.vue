<template>
	<div class="sign-in">
		<h3>用户登录</h3>
		<nav>
		  <span class="msg-login">短信认证登录</span>
			<router-link :to="{name:'signInAccount'}" class="account-login">账号密码登录</router-link>
		</nav>
		<div>
			<div class="phone-login">
				<input type="text" placeholder="请输入手机号码">
				<p> +86 |</p>
			</div>
			<div class="verfity-code">
				<input type="text" placeholder="请输入验证码">
				<button @click="verification" v-bind:disabled='isDisabled'>{{verificatCon}}</button>
			</div>
		</div>
		<p class="cue-con">朴新师生用户可使用同一账号登录</p>
		<p class="warning-cue" v-if="true">密码显示不对</p>
		<button>立即登录</button>
		<ul class="login-ul">
			<!-- <li><router-link :to="{name:'forgetPwd'}">忘记密码</router-link></li> -->
			<li><router-link :to="{name:'signUp'}">免费注册</router-link></li>
		</ul>
	</div>
</template>
<script>
	export default {
		name: "signIn",
		data() {
			return {
				isDisabled: false,
				verificatCon: '发送验证码',
			}
		},
		methods: {
			verification: function() {
				var self = this,
						remainTime = 60;
				self.isDisabled = true;
				var timer = setInterval(function() {
					if(remainTime<0) {
						self.isDisabled = false;
						self.verificatCon = '发送验证码';
					} else {
						remainTime --;
						self.verificatCon = remainTime+'s,后重新获取';
					}
				},1000)

			}
		}
	}
</script>
<style lang="scss" scoped>
	
</style>