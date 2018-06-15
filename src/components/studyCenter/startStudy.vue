<template>
	<div class="start-study"> 
		<div class="course-detail-info">
			<ul class="course-list detail-list">
				<li>
					<div class="course-info-div">
						<div class="course-tips">
							<label class="sem-style" for="">暑</label>
							<label class="grade-style">初一</label>
							<label class="sub-style">英</label>
							<label class="press-style">人教版</label>
						</div>
						<h3>这是一门课成的名称别问我大的对不对我只想管考多少分无所谓如果人生可以重来就好了</h3>
						<div class="time-price">
							<div class="time-div">
								<p class="orange-c"><span>定期家长会</span> <span>考试检测</span> <span>及时答疑</span> <span>随他的咖啡机</span></p>
								<p>时间：2018-09-01 09:00</p>
								<p>有效期：2018.01.01-2020.02.12</p>
							</div>
							<!-- <div class="price-div">
								<span class="old-price">￥450</span>
								<span class="new-price">￥90</span>
							</div> -->
						</div>
						<div class="teacher-div">
							<ul>
								<li>
								  <div class="teacher-tit">
										<img src="./img/teacher.jpg" alt="zcy">
								  </div>
									<div class="teacher-info">
										<p>助教</p>
										<p>zcy</p>
									</div>
								</li>
								<li>
									<div class="teacher-tit">
										<img src="./img/teacher.jpg" alt="zcy">
								  </div>
									<div class="teacher-info">
										<p>助教</p>
										<p>zcy</p>
									</div>
								</li>
							</ul>
							<!-- <div class="operation-btn">
								<router-link :to="{name:'courseDetail',params:{id:'1'}}" class="course-detail">课程详情</router-link>
								<router-link :to="{name:'settlement',params:{id:'1'}}" class="enrol">立即报名</router-link>
							</div> -->
						</div>
					</div>
					<div class="detail-right">
						<ul class="download-ul">
							<li>
								<div><img src="./img/resource.png" alt=""></div>
								<button class="src-download">资料下载</button>
							</li>
							<li>
								<div><img src="./img/final.png" alt=""></div>
								<button class="app-download">直播客户端下载</button>
							</li>
						</ul>
					</div>
				</li>
			</ul>
		</div>
		<div class="course-instr">
			<nav class="course-instr-nav">
				<a class="active" href="#introduce">课程介绍</a>
				<a href="#catalog">课程目录</a>
				<a href="#instruction">课程说明</a>
				<a href="#timeInstruct">课程到期说明</a>
			</nav>
			<h3><a name="introduce">课程介绍</a></h3>
			<div class="course-intr">
				<video src=""></video>
			</div>

		  <h3><a name="catalog">课程目录</a></h3>
			<div class="today-course">
				<ul>
					<li>
					  <div class="sec-num">1</div>
					  <div class="sec-main">
							<div class="sec-one">
								<p>2018-09-08</p>
								<p>初一语文暑假双师直播课 <span>往哪</span></p>
							</div>
							<div class="sec-two"> <span>数学</span> <span>11:20-12:30</span> </div>
							<div class="sec-three">
								<button>查看回放</button>
							</div>
					  </div>
					</li>
					<li>
					  <div class="sec-num">1</div>

					  <div class="sec-main">
							<div class="sec-one">
								<p>2018-09-08</p>
								<p>初一语文暑假双师直播课 <span>往哪</span></p>
							</div>
							<div class="sec-two"> <span>数学</span> <span>11:20-12:30</span> </div>
							<div class="sec-three">
								<button>查看回放</button>
							</div>
					  </div>
					</li>
					<li>
					  <div class="sec-num">1</div>
					  <div class="sec-main">
							<div class="sec-one">
								<p>2018-09-08</p>
								<p>初一语文暑假双师直播课 <span>往哪</span></p>
							</div>
							<div class="sec-two"> <span>数学</span> <span>11:20-12:30</span> </div>
							<div class="sec-three">
								<button>查看回放</button>
							</div>
					  </div>
					</li>
					<li>
					  <div class="sec-num">1</div>
					  <div class="sec-main">
							<div class="sec-one">
								<p>2018-09-08</p>
								<p>初一语文暑假双师直播课 <span>往哪</span></p>
							</div>
							<div class="sec-two"> <span>数学</span> <span>11:20-12:30</span> </div>
							<div class="sec-three">
								<button>查看回放</button>
							</div>
					  </div>
					</li>
					<li>
					  <div class="sec-num">1</div>
					  <div class="sec-main">
							<div class="sec-one">
								<p>2018-09-08</p>
								<p>初一语文暑假双师直播课 <span>往哪</span></p>
							</div>
							<div class="sec-two"> <span>数学</span> <span>11:20-12:30</span> </div>
							<div class="sec-three">
								<button>查看回放</button>
							</div>
					  </div>
					</li>
				</ul>
			</div>

			<h3><a name="instruction">课程说明</a></h3>
			<ol class="course-instruction">
				<li>1. 特价班报名后不支持退费。</li>
				<li>2. 正价班第二次课开课前，可退全部学费。</li>
				<li>3. 所退费用，将在15个工作日内退回至原付款账户。</li>
				<li>4. 退费申请发起后学员将不能继续优课课程的学习。</li>
			</ol>
			<h3><a name="timeInstruct">课程到期说明</a></h3>
			<ol class="course-instruction">
				<li>1. 特价班报名后不支持退费。</li>
				<li>2. 正价班第二次课开课前，可退全部学费。</li>
				<li>3. 所退费用，将在15个工作日内退回至原付款账户。</li>
				<li>4. 退费申请发起后学员将不能继续优课课程的学习。</li>
			</ol>
		</div>
		<!-- 右侧 扫码 报名等固定信息 -->
		<ul class="course-campain">
			<!-- <li><button class="enrol-btn">立即报名</button></li> -->
			<li class="second-li">
				<h3><img src="./img/qq.png" alt="">服务QQ群</h3>
				<p>获取最新学习资料，定期发布线下活动通知</p>
				<button class="addQQGroup">加入QQ群</button>
			</li>
			<li>
				<h3><img src="./img/wechat.png" alt="">服务微信号</h3>
				<p>课程咨询、学习方法指导</p>
				<div class="qrcode-div">
					<img src="./img/qrcode.jpg" alt="服务微信号">
				</div>
			</li>
		</ul>
		<p class="orange-c cue-style">* 朴新优课产品及其相关服务由朴新集团控股子公司——天津朴兴教育科技有限公司提供。</p>
	</div>
</template>
<style lang="scss" scoped>
	.course-campain {
		.second-li {
			border-bottom: 1px dashed #e1e2e6;
		}
		li {
			h3 {
				margin-top: 30px;
				line-height: 18px;
				font-size: 16px;
				color: #333; 
				img {
					margin-right: 5px;
				}
			}
			p {
				margin-top: 10px;
				font-size: 12px;
				color: #A6AFBB;
			}
			button {
				width: 240px;
				height: 40px;
				color: #fff;
				font-size: 14px;
				border: 0 none;
				border-radius: 4px;
			}
			.enrol-btn {
				background: #ff5e2f;
				margin-bottom: 50px;
			}
			.addQQGroup {
				background: #4DB2FF;
				margin-bottom: 30px;
				margin-top: 24px;
			}
			.qrcode-div {
				width: 200px;
				height: 200px;
				margin-top: 24px;
				padding: 20px;
				border: 1px solid #e1e2e6;
				img {
					width: 100%;
				}
			}
		}
	}
</style>