<template>
	<div class="course-detail"> 
		<div class="course-detail-info">
			<ul class="course-list">
				<li v-for="">
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
							</div>
							<div class="price-div">
								<span class="old-price">￥450</span>
								<span class="new-price">￥90</span>
							</div>
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
							<div class="operation-btn">
								<router-link :to="{name:'courseDetail',params:{id:'1'}}" class="course-detail">课程详情</router-link>
								<router-link :to="{name:'settlement',params:{id:'1'}}" class="enrol">立即报名</router-link>
							</div>
						</div>
					</div>
					<div class="course-img-div">
						<img src="./img/courseImg.png" alt="">
					</div>
				</li>
			</ul>
		</div>
		<div class="course-instr">
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
		</div>
		<div class="course-campain"></div>
	</div>
</template>