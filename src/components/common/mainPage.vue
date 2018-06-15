<template>
	<div class="main-page">
		<div class="normal-header">
			<router-link :to="{name:'index'}" class="logo"><img src="../login/img/logo.png" alt="朴新优课"></router-link>
			<ul>
				<li>
					<router-link :to="{name:'index'}" class="active-nav">首页</router-link>
					<router-link :to="{name:'chooseCourse'}">选课报班</router-link>
					<router-link :to="{name:'publicCourse'}">公开课</router-link>
					<router-link :to="{name:'studyCenter'}">学习中心</router-link>
				</li>
			</ul>
			<div class="loginOrInfo">
				<router-link :to="{name:'signIn'}" class="signInBtn btn btn-light">登录</router-link>
				<router-link :to="{name:'signUp'}" class="signUpBtn btn btn-default">注册</router-link>
			</div>
			<img src="./img/search.png" alt="" @click="search" class="search">
		</div>
		<div class="content">
			<router-view></router-view>
		</div>
		<vfooter></vfooter>
	</div>
</template>
<script>
  import vfooter from '@/components/common/footer'
	export default {
		name:'normalHeader',
		data(){
			return {
				
			}
		},
		methods:{
			search: function() {
				console.log("you clicked search");
			}
		},
		components: {vfooter}
	}
</script>

<style lang="scss">
  .content {
  	width: 1120px;
  	margin: 0 auto;
  }
	.normal-header {
		width: 1120px;
		margin: 0 auto;
		height: 70px;
		line-height: 70px;
		// border-bottom: 1px solid #000;
		overflow: hidden;
		.logo {
			float: left;
			line-height: 90px;
		}
		ul {
			float: left;
			margin-left: 166px;
			li {
				a {
					line-height: 61px;
					padding: 0 14px;
					margin-left: 18px;
					font-size: 14px;
					color: #333;
					font-weight: 600;
					// border-bottom: 4px solid red;
					display: inline-block;
				}
			}
		}
		.loginOrInfo {
			margin-left: 160px;
			float: left;
		}
		.search {
			float: right;
			margin-top: 24px;
		}

	}
	.course-list {
		margin-top: 32px;
		>li {
			display: flex;
			padding-top: 40px;
			padding-bottom: 40px;
			border-bottom: 1px solid #e1e2e6;
			.course-img-div {
				width: 200px;
				height: 150px;
				margin-right: 20px;
				img {
					width: 100%;
				}
			}
			.course-info-div {
				.course-tips {
					label {
						border-radius: 2px;
						padding: 1px 2px;
						margin-right: 4px;
						font-size: 14px;
					}
					.sem-style {
						color: #fff;
						background: #4db2ff;
						border: 1px solid #4db2ff;
					}
					.grade-style {
						color: #ff5e2f;
						border: 1px solid #ff5e2f;
					}
					.sub-style {
						color: #4db2ff;
						border: 1px solid #4db2ff;
					}
					.press-style {
						background: #fec902;
						border: 1px solid #fec902;
						color: #a96100;
					}
				}
				>h3 {
					margin-top: 6px;
					margin-bottom: 6px;					
					color: #333;
					font-size: 20px;
					span {
						float: right;
						margin-left: 10px;
						padding: 2px 4px;
						background: #fff1ee;
						color: #ff5e2f;
						font-size: 12px;
					}
				}
				.time-price {
					display: flex;
					justify-content: space-between;
					margin-bottom: 12px;
					.time-div {
						line-height: 18px;
						font-size: 12px;
						color: #a6afbb;
					}
					.old-price {
						font-size: 12px;
						color: #a6afbb;
					}
					.new-price {
						font-size: 30px;
						color: #FF5E2F;
					}
				}

				.teacher-div {
					display: flex;
					justify-content: space-between;
					ul {
						display: flex;
						li {
							overflow: hidden;
							margin-right: 66px;
							.teacher-tit {
								float: left;
								width: 40px;
								height: 40px;
								margin-right: 10px;
								img {
									width: 100%;
									border-radius: 50%;
								}

							}
							.teacher-info {
								float: right;
								font-size: 12px;
								p{
									margin-top: 3px;
									&:first-child {
										color: #a6afbb;
									}
									&:last-child {
										color: #000;
									}
								}
							}
						}
					}
					.operation-btn {
						a {
							display: inline-block;
							width: 150px;
							height: 40px;
							line-height: 40px;
							font-size: 14px;
							border-radius: 4px;
							text-align: center;
						}
						.course-detail {
							margin-right: 20px;
							color: #ff5e2f;
							border: 1px solid #ff5e2f;
							background: #fff;
						}
						.enrol {
							color: #fff;
							border: 1px solid #ff5e2f;
							background: #ff5e2f;
						}
					}
				}
			}
		}
	}

	// 详情课程的样式覆盖
	.detail-list.course-list  {
		> li {
			justify-content: space-between;
			border-bottom: 0 none;
			.course-info-div {
				.time-price {
					.time-div {
						color: #6B798E;
						font-size: 14px;
						p{
							&:first-child {
							  line-height: 36px;
							  span {
							  	margin-right: 18px;
							  }
							}
						}
					}
				}
				.teacher-div {
					margin-top: 30px;
					.teacher-info {
						p {
							&:last-child {
								color: #6B798E!important;
								font-size: 14px;
								font-weight: 600;
							}
						}
					}
				}
			}
			.detail-right {
				height: 140px;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				align-items: flex-end;
				.oldPrice {
					font-size: 12px;
					color: #a6afbb;
				}
				.orange-c {
					margin-left: 22px;
					font-size: 12px;
				}
				.nowPrice {
					font-size: 40px;
					color: #ff5e2f;
				}
				.per-price {
					p {
						text-align: right;
						font-size: 12px;
						color: #6b798e;
					}
				}
				// 开始学习页面download
				.download-ul {
					display: flex;
					li {
						&:first-child {
							border-right: 1px solid #e1e2e6;
							padding-right: 25px;
							margin-right: 25px;
						}
						div {
							width: 100px;
							height: 100px;
							line-height: 132px;
							margin-bottom: 40px;
							border-radius: 50%;
							border: 2px solid #e1e2e6;
							text-align: center;
						}
						button {
							width: 120px;
							height: 30px;
							border-radius: 4px;
							color: #fff;
							font-size: 14px;
							border: 0 none;
						}
						.src-download {
							background: #ff5e2f;
						}
						.app-download {
							background: #4db2ff;
						}
					}
				}
			}
		}
	}
  .start-study .detail-list.course-list > li .detail-right {
		height: 170px;
	}

	// 原今日课程的样式
	.today-course {
		max-height: 450px;
		min-height: 110px;
		margin-top: 30px;
		overflow-y: auto;
		border: 1px solid #e1e2e6;
		ul {
			margin-left: 60px;
			position: relative;
		  &:before {
				content: ' ';
				position: absolute;
				left: 10px;
				width: 2px;
				height: 100%;
				background: #e1e2e6;
				z-index: -1;
		  }
			li {
				height: 60px;
				padding-top: 46px;
				font-size: 14px;
				display: flex;
				.sec-num {
					width: 18px;
					height: 18px;
					line-height: 18px;
					border: 2px solid #4db2ff;
					border-radius: 50%;
					text-align: center;
					background:#fff;
					color: #4db2ff;
				}

				.sec-main {
					display: flex;
					// width: 100%;
					margin-left: 24px;
					border-bottom: 1px dashed #e1e2e6;
					color: #333;
					.sec-one {
						width: 418px;
						line-height: 20px;
						p span {
							margin-left: 12px;
							color: #a6afbb;
						}
					}
					.sec-two {
						width: 400px;
					}
					.sec-three {
						button {
							width: 100px;
							height: 30px;
							border-radius: 4px;
							font-size: 14px;
							color: #ff5e2f;
							border: 1px solid #ff5e2f;
							background: #fff;
						}
					}
				}
				&:last-child {
					.sec-main{
						border-bottom: 0 none;
					}
				}
			}
		}
	}
	// 详情课程的今日课程的样式覆盖
	.course-instr {
		width: 800px;
		.course-instr-nav {
			width: 100%;
			height: 50px;
			background: #78c0ff;
			a {
				display: inline-block;
				line-height: 50px;
				color: #fff;
				font-size: 16px;
				width: 124px;
				text-align: center;
			}
			.active {
				color: #78c0ff;
				background: #fff;
			}
		}
		> h3 {
			padding-left: 26px;
			margin-top: 40px;
			border-left: 4px solid #4db2ff;
			font-size: 20px;
			color: #333;
		}
		.today-course {
		  height: 100%;
		  min-height: 100%;
		  max-height: 100%;
			overflow-y: inherit;
			border: 0 none;
			ul {
				margin-left: 30px;
				li {
					.sec-main {
						.sec-one {
							width: 238px;
						}
						.sec-two {
							width: 370px;
						}
						.sec-three {
							button {
								width: 78px;
							}
						}
					}
					&:last-child {
						.sec-main{
							border-bottom: 0 none;
						}
					}
				}
			}
		}
		.course-instruction,.course-instruction {
			padding-left: 30px;
			color: #6b798e;
			font-size: 14px;
			line-height: 24px;
		}
	}
  // 课程详情中右侧宣传模块
	.course-campain {
		position: fixed;
		top: 300px;
		right: 392px; // todo通过js 控制
		width: 240px;
	}
	.start-study .course-campain {
		top: 372px;
	}
	.cue-style {
		margin-top: 40px;
		margin-bottom: 122px;
		font-size: 14px;
	}
</style>