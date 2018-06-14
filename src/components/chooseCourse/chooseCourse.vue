<template>
	<div class="choose-course">
		<div class="search-condition">
			<ul class="condition-ul">
				<li>
					<label>年级:</label>
					<div class="condition-div">
						<label value="">全部</label>
						<label v-for="item in gradeCondition" value=item.code>{{item.name}}</label>
					</div>
				</li>
				<li>
					<label>科目:</label>
					<div class="condition-div">
						<label value="" class="active">全部</label>
						<label v-for="item in subjectCondition"  value=item.code >{{item.name}}</label>
					</div>
				</li>
			</ul>		
		</div>
		<!-- common-1 -->
		<ul class="course-list">
			<li v-for="">
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
		name: "chooseCourse",
		components: {},
		data() {
			return {
				gradeCondition:[{name:"一年级",code:"1"},{name:"一年级",code:"1"},{name:"一年级",code:"1"},{name:"一年级",code:"1"}],
				subjectCondition:[{name:"语文",code:"1"},{name:"语文",code:"1"},{name:"语文",code:"1"},{name:"语文",code:"1"}],
				semesterCondition: [{name:"秋季",code:"0"},{name:"秋季",code:"0"},{name:"秋季",code:"0"}],
				timeCondition: [{name:"上午",code:"01"},{name:"下午",code:"22"}],
				courseInfo: [
					{
						id:"1",
						imgUrl:'./img/courseImg.png',
						semester:'0',
						grade:'01',
						subject: '1',
						name:'初一英语暑假双师直播课暑假双师直播啊书记大家来上课',
						remainHour: '223',
						classNum: 'ajdakdjkd',
						times:'2018.07.22-2018.08.31 上午9:00-10:30|15课时 共9次课',
						oldPrice: '450',
						newPrice: '40',
						teacher: [
							{ 
								code:'01',
								name:'zcy',
								imgUrl: "./img/d.png",
								careerName: '授课教师'
							},
							{ 
								code:'01',
								name:'zcy',
								imgUrl: "./img/d.png",
								careerName: '授课教师'
							}
						]
					},
					{
						id:"1",
						imgUrl:'./img/courseImg.png',
						semester:'0',
						grade:'01',
						subject: '1',
						name:'初一英语暑假双师直播课暑假双师直播啊书记大家来上课',
						remainHour: '223',
						classNum: 'ajdakdjkd',
						times:'2018.07.22-2018.08.31 上午9:00-10:30|15课时 共9次课',
						oldPrice: '450',
						newPrice: '40',
						teacher: [
							{ 
								code:'01',
								name:'zcy',
								imgUrl: "./img/d.png",
								careerName: '授课教师'
							},
							{ 
								code:'01',
								name:'zcy',
								imgUrl: "./img/d.png",
								careerName: '授课教师'
							}
						]
					},
					{
						id:"1",
						imgUrl:'./img/courseImg.png',
						semester:'0',
						grade:'01',
						subject: '1',
						name:'初一英语暑假双师直播课暑假双师直播啊书记大家来上课',
						remainHour: '223',
						classNum: 'ajdakdjkd',
						times:'2018.07.22-2018.08.31 上午9:00-10:30|15课时 共9次课',
						oldPrice: '450',
						newPrice: '40',
						teacher: [
							{ 
								code:'01',
								name:'zcy',
								imgUrl: "./img/d.png",
								careerName: '授课教师'
							},
							{ 
								code:'01',
								name:'zcy',
								imgUrl: "./img/d.png",
								careerName: '授课教师'
							}
						]
					}
				]
			}
		},
		// mounted: function() {
		// 	var that = this;
		// 	that.axios.post(url,Qs.stringify({param1:param1})).then(function(response) {
		// 		// 正常请求之后
		// 		// 返回数据
		// 	}).catch(function (error) {
		// 		// 报错 请求不成功
		// 	})
		// },
	}
</script>
<style lang="scss" scoped>
	.condition-ul {
		border: 1px solid #e1e2e6;
		li {
			display: flex;
			padding-left: 30px;
			line-height: 62px;
			border-bottom: 1px dashed #e1e2e6;
			font-size: 14px;

			>label {
				margin-right: 20px;
				color: #bcbcbc;
			}
			.condition-div {
				label {
					display: inline-block;
					width: 50px;
					height: 26px;
					line-height: 26px;
					margin-right: 14px;
					color: #6b798e; 
					text-align: center;
					cursor: pointer;
				}
				.active {
					background: #4db2ff;
					border-radius: 4px;
					color: #fff;
				}
			}
			&:last-child {
				border-bottom: 0 none;
			}
		}
	}
</style>