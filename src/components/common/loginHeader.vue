<template>
	<div class="header-div">
		<div class="loginHeader">
			<router-link :to="{name:'index'}"><img src="../login/img/logo.png" alt="朴新优课"></router-link>
		</div>
		<!-- todo 下一版 -->
		<!-- <div class="places">
			<label @click="showPla"> <span>山西</span> <span>dd</span></label>
			<ul v-if="dataPlace">
				<li @click="hidePla" v-for="item in dataCity" code="item.code" v-bind:class="{active:(item.state==1)}">{{item.name}}</li>
			</ul>
		</div> -->
	</div>
</template>
<script>
	export default {
		name: "loginHeader",
		data(){
			return {
				dataPlace: false,
				// todo 下一版
				// dataCity: [
				// 	{code:"01",name:"shanxi",state:1},
				// 	{code:"02",name:"beijing"},
				// 	{code:"03",name:"dd"},
				// 	{code:"04",name:"ss"},
				// 	{code:"05",name:"222"}
				// ]
			}
		},
		methods:{
			// todo 下一版
			// showPla: function() {
			// 	this.dataPlace = this.dataPlace?false:true;
			// },
			// hidePla: function() {
			// 	this.dataPlace = false;
			// }
 		}
	}
</script>
<style lang="scss" scoped> 
  .header-div {
  	width: 100%;
  	background: #fff;
  }
	.loginHeader {
		width: 1120px;
		height: 70px;
		line-height: 86px;
		margin: 0 auto;
		// img {
		// 	// vertical-align: middle;
		// }
		// .places {
		// 	position: relative;
		// 	display: inline-block;
		// 	margin-left: 20px;
		// 	ul {
		// 		width: 340px;
		// 		height: 178px;
		// 		line-height: 34px;
		// 		position: absolute;
		// 		left: -170px;
		// 		padding-left: 0;
		// 		padding-top: 24px;
		// 		padding-right: 18px;
		// 		border: 1px solid #e1e2e6;
		// 		border-radius: 4px;
		// 		background: #fff;
		// 		li {
		// 			display: inline;
		// 			margin-left: 28px;
		// 			list-style-type: none;
		// 		}
					// .active {
					// 	color: #ff5e2f;
					// }
		// 	}
		// }
	}
</style>

 