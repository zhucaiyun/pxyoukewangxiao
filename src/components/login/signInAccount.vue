<template>
	<div class="sign-in">
		<h3>用户登录</h3>
		<nav>
		  <router-link :to="{name:'signIn'}" class="msg-login">短信认证登录</router-link>
			<span class="account-login">账号密码登录</span>
		</nav>
		<div>
			<input type="text" placeholder="请输入账号">
			<input type="password" placeholder="请输入密码">
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
		name: "signInAccount"
	}
</script>
<style lang="scss" scoped>
	
</style>