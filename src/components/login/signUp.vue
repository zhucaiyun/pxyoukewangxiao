<template>
	<div class="sign-up">
		<h3>用户注册</h3>
		<div>
			<input type="text" placeholder="请输入手机号码">
			<div class="verfity-code">
				<input type="text" placeholder="请输入验证码">
				<button @click="verification" v-bind:disabled='isDisabled'>{{verificatCon}}</button>
			</div>
			<input type="pwd" placeholder="请输入6-18位登录密码">
			<select name="" id="">
				<option value="">年级</option>
				<option value="1">一年级</option>
			</select>
			<input type="checkbox" id="agree"> 
			<label for="agree">
				我已阅读并同意 
			</label>
			<span class="agreement" @click='serviceAgree'>《朴新优课服务协议》</span>
			<button>立即注册</button>
			<router-link class="sign-in" to='/'>立即登录</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name:'signUp',
		data() {
			return {
				isAgreement:false,
				isDisabled: false,
				verificatCon: '发送验证码'
			}
		},
		methods: {
			serviceAgree: function() {
				alert("dd");
				this.isAgreement = true;
			},
			verification: function() {
				var remainTime = 60,
						self = this;
				self.isDisabled = true;
				var timer = setInterval(function(){
					if(remainTime<0) {
						window.clearInterval(timer);
						self.isDisabled = false;
						self.verificatCon = "发送验证码";
					} else {
						self.verificatCon = (remainTime+'s,后重新获取');
						remainTime--;
					} 
				},1000);
			}
		}
	}
</script>

<style lang="scss" scoped>
	select {
		width: 240px;
		padding-left: 10px;
		height: 40px;
		margin-top: 10px;
		border: 1px solid #e1e2e6;
		border-radius: 4px;
		font-size: 14px;
		color: #333;
		background: #fafafa;
		-webkit-appearance: none;
    -moz-appearance: none;
    outline: none;
	}
	input[type="checkbox"] {
		width: 16px;
    height: 16px;
    margin-top: 15px;
    float: left;
    padding: 0;
		// background: #fff;
		// border: 1px solid #c0c0c0;
	}
	label {
		display: inline-block;
		margin-top: 14px;
		font-size: 12px;
		color: #c0c0c0;
	}
	.agreement {
		cursor: pointer;
		font-size: 12px;
		color: #4db2ff;
	}
	button {
		margin-top: 24px;
	}
	.sign-in {
		float: right;
		margin-top: 16px;
		font-size: 12px;
		color: #4db2ff;
	}
	
</style>