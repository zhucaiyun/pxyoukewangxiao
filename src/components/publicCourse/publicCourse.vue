<template>
	<div class="public-course content">
		<ul class="course-list">
			<li>
				<div class="course-img-div">
					<img src="./img/courseImg.png" alt="">
				</div>
				<div class="course-info-div">
					<div class="course-tips">
						<label class="sem-style" for="">暑</label>
						<label class="grade-style">初一</label>
						<label class="sub-style">英</label>
						<label class="press-style">人教版</label>
					</div>
					<h3>这是一门课成的名称别问我大的对不对我只想管考多少分无所谓如果人生可以重来就好了 <span>剩余 235</span></h3>
					<div class="time-price">
						<div class="time-div">
							<p>班号：A street cat named Bob</p>
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
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		name:'publicCourse',
		data(){
			return {
				
			}
		}
	}
</script>
<style lang="scss" scoped>
	.public-course .course-list {
		margin-top: 0;
	} 
</style>