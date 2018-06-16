<template>
	<div class="index">
		<!-- banner -->
	  <div class="slide">
		</div>
		<!-- 教师团队 -->
		<div class="teamAndClass">
			<div class="teamGroup center">
				<div class="teamText">
					<div class="chineseText">优秀的教师团队</div>
					<div class="englishText">Excellent team of teachers</div>					
				</div>
				<div class="teacherTeam">
					<ul class="teacherPro">
						<li v-for="item in items" class="proText">
							<span class="proNum">{{item.number}}<strong class="per">{{item.per}}</strong></span>
							<span class="proPoint">{{item.text}}</span>
						</li>
					</ul>
					<div class="teacherGroup">
						<img src="./images/teacherGroup.png" alt="">
					</div>
				</div>
			</div>
		</div>
		<!-- 课程设置 -->
		<div class="classPro">
			<div class="class center">
					<div class="classImg"></div>
					<div class="classText">
						<div class="chineseText">最科学的课程设置</div>
						<div class="englishText">The most scientific curriculum</div>	
					</div>
					<div class="classBorder">
						<div class="studyTime">
							<div class="timeImg">
								<img src="./images/review.png" alt="">
							</div>
							<div class="timeText">
								<p>经过上万名上课学生的科学实验</p>
								<p>每节课1.5小时为学生学习效率最高的在线学习时间</p>
							</div>
						</div>
						<div class="studyRes">
							<div class="studyImg">
								<img src="./images/clock.png" alt="">
							</div>
							<div class="studyText">
								<p>为了保证学生的学习效果，直播结束后，学生可观看回放</p>
							</div>
						</div>
					</div>
			</div>
		</div>
		<!-- 教学理念 -->
		<div class="teachProject">
		  <div class="blueBg"></div>
			<div class="teachLeft">
				<div class="teachBook">
					<div class="teachText">
							<div class="chineseText">教学理念倾注在每一章节</div>
							<div class="englishText">Teaching philosophy is poured into every</div>				
					</div>
					<div class="bookText">
							<p>朴新优课所有教材均有朴新研发中心统一研发、设计</p>
							<p>符合各地学生的学习特点，让学生学习更高效</p>
					</div>
				</div>
				<div class="teachRight">
					<!-- <div class="rightLeft"></div> -->
					<img src="./images/chinese.png" alt="">
					<img src="./images/math.png" alt="">
					<img src="./images/english.png" alt="">
				</div>
			</div>
		</div>
		<!-- 答疑解惑 -->
		<div class="answerAndQuestion">
				<div class="question center">
					<div class="answerLeft">
							<img src="./images/question.png" alt="">
					</div>
			</div>
		</div>
		<!-- 线上线下 -->
		<div class="onlineAndOffline">
				<div class="lineText">
					<div class="chineseText">线上、线下互动</div>
					<div class="englishText">Online and offline interaction</div>					
				</div>
		</div>
	<!-- 在线观看 -->
		<div class="line">
			<div class="live center">
				<div class="computer">
					<img src="./images/computer.png" alt="">
				</div>
			</div>
		</div>
	</div>
</template>
<script>

	export default {
		name:'index',
		data(){
			return {
				items:[
					{number:'100', text:'全职教师队伍',per:'%'},
					{number:'50',text:'以上的硕士学历',per:'%'},
					{number:'500',text:'所带学生均超过500人',per: '人'},
					{number:'1000',text:'授课小时数均超过1000小时',per:'h'},
				]
			}
		},
		methods:{
		},
		components:{

		}
	}
</script>
<style lang="scss" scoped>
	*{
		.center{
			width: 1120px;
			margin: 0 auto;
		}
		margin:0;
		padding:0;
	}
	.slide{
		width: 100%;
		height: 470px;
		min-width: 1120px;
		background:#008FF5 url(/static/img/banner.png) top center no-repeat;
	}
// 教师团队
	.teamAndClass{
		width: 100%;
		background: url(/static/img/teacherBgc.png) top center no-repeat;
		.teamGroup{
			// 上方文字
			.teamText{
				width: 400px;
				height: 80px;
				margin-top:80px;
				background: url(/static/img/teachers.png) top right no-repeat;
				position: relative;
				.chineseText{
					// width: 210px;
					height: 38px;
					position: absolute;
					top:11px;
					font: bold 30px/38px MicrosoftYaHei;
					color: #172B4D;	
				}
				.englishText{
					width: 210px;
					height: 31px;
					color: #64768E;
					font: normal 16px/31px MicrosoftYaHei;
					position: absolute;
					top: 49px;
				}
			}
			// 下方
			.teacherTeam{
				width: 100%;
				height: 423px;
				// position: relative;
				display: flex;
				flex-direction: row;
				-webkit-flex-direction:row;  
				flex-wrap:wrap;  
				-webkit-flex-wrap:wrap;  
				justify-content:space-between;  
				-webkit-justify-content:space-between; 
				// 左边文字
				.teacherPro{
					margin-top: 90px;
					.proText{
						margin-bottom:40px;
						.proPoint{
							color: #838FA1;
							font: normal 16px/18px MicrosoftYaHei;  
						}
					}
					.per {
						font-size: 18px;
					}
					.proText:nth-child(odd){
						.proNum{
							color: #4DB2FF;
							height: 36px;
							font:bold 36px/36px Arial;
						}
					}
					.proText:nth-child(even){
						.proNum{
							color: #FF5E2F;
							height: 36px;
							font:bold 36px/36px Arial;
						}
					}	
				}
			}
		}
	}
// 课程设置
	.classPro{
		width:100%;
		height: 627px;
		position: relative;
		.classImg{
			width: 614px;
			height: 453px;
			background: url(/static/img/child.png) top center no-repeat;
			position: absolute;
			top:112px;
		}
		// 右上方文字
		.classText{
			width: 503px;
			height: 80px;
			position: relative;
			top: 160px;
			right:-617px;
			background: url(/static/img/Curriculum.png) top center no-repeat;
			.chineseText{
				width: 250px;
				height: 38px;
				position: absolute;
				top:8px;
				right:0;
				font: bold 30px/38px MicrosoftYaHei;
				color: #172B4D;	
			}
			.englishText{
				width: 248px;
				height: 31px;
				color: #64768E;
				font: normal 16px/31px MicrosoftYaHei;
				position: absolute;
				top:38px;
				right: 0;
			}
		}
		// 下方边框
			.classBorder{
				width: 1120px;
				height: 242px;
				border: 1px solid #EFF4F8;
				position: absolute;
				bottom: 62px;
				z-index:-1;
				.studyTime,.studyRes{
						width: 436px;
						margin-left: 601px;
						margin-top:44px;
						z-index: 10;
						.timeImg,.studyImg{
						width: 55px;
						height: 55px;
						display: inline-block;
					}
				.timeText{
					display: inline-block;
					width: 400px;
					height: 55px;
					position: absolute;
					top:44px;
					margin-left: 22px;
					p{
						// height: 25px;
						line-height: 28px;
						padding: 0;
						margin: 0;
						
					}
				}
				.studyText{
					display: inline-block;
					width: 400px;
					height: 55px;
					line-height:55px;
					position: absolute;
					top:148px;
					margin-left: 22px;
				}
			}	
		}
	}
//教学理念  
	.teachProject{
		position: relative;
		width:100%;
		height: 500px;
		background-color: #F8FAFE;
		padding-top: 50px;
		.blueBg {
			position:absolute;
			width: 1080px;
			height: 450px;
			background-color: #4DB2FF;
		}
		// 左边蓝色背景
		.teachLeft{
			display: flex;
  		align-items: center;
			width: 1120px;
			height: 100%;
			margin: 0 auto;
			justify-content: space-between;
		
			.teachBook{
				width: 388px;
				.teachText{
					width: 308px;
					height: 80px;
					color: #FFFFFF;
					background: url(/static/img/concept.png) top center no-repeat;
					position: relative;
					.chineseText{
						width: 340px;
						height: 38px;
						position: absolute;
						top:11px;
						font: bold 30px/38px MicrosoftYaHei;
					}
					.englishText{
						width: 322px;
						height: 31px;
						font: normal 16px/31px MicrosoftYaHei;
						position: absolute;
						top: 49px;
					}
				}
				.bookText{
					width: 384px;
					height: 52px;
					margin-top:57px;
					position: relative;
					p{
						line-height: 25px;
						color: #FFFFFF;
					}
				}
			}
		}
		.teachRight{
			position: relative;
			z-index:99;
			width: 520px;
			height: 180px;
			background: #fff;
    	border-radius: 4px;
			img{
				margin-right:20px;
			}
		}
	}
// 答疑解惑
	.answerAndQuestion{
		  width:100%;
			height: 582px;
			position: relative;
			.question{
				.answerLeft{
					// margin-left: 400px;
					min-width: 1120px;
					height: 467px;
					float: left;
					margin-top:82x;
					img{
						width:100%;
					}
				}
			}
	}
	// 在线观看
	.onlineAndOffline{
		width:100%;
		min-width:1120px;
		height: 500px;
		background:#6FBFFD url(/static/img/onlineandoffline.png) top center no-repeat;
		position: relative;
		.lineText{
				width: 440px;
				height: 80px;
				margin-top:-40px;
				position: absolute;
				margin-left:-220px;
				top:50%;
				left: 50%;
				color: #FFFFFF;
				background: url(/static/img/interactive.png) top center no-repeat;
				.chineseText{
					width: 340px;
					height: 38px;
					position: absolute;
					top:11px;
					left: 50%;
					margin-left:-110px;
					font: bold 30px/38px MicrosoftYaHei;
				}
				.englishText{
					height: 31px;
					font: normal 16px/31px MicrosoftYaHei;
					position: absolute;
					top: 49px;
					left: 50%;
					margin-left:-113px;
				}
			}
	}
	.live{
		.computer{
			width: 978px;
			height: 605px;
			margin: 0 auto;
		}
	}
</style>