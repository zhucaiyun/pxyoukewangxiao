<template>
	<div class="sign-in">
		<h3>忘记密码</h3>
		<div>
			<input type="text" placeholder="请输入手机号码">
			<input type="pwd" placeholder="请输入密码">
		</div>
		<p class="cue-con">朴新师生用户可使用同一账号登录</p>
		<p class="warning-cue" v-if="true">密码显示不对</p>
		<button>修改密码</button>
		<ul class="login-ul">
			<li><router-link :to="{name:'signIn'}">立即登录</router-link></li>
			<li><router-link :to="{name:'signUp'}">免费注册</router-link></li>
		</ul>
	</div>
</template>
<script>
	export default {
		name: "forgetPwd"
	}
</script>
<style lang="scss" scoped>
	
</style>