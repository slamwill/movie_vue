<template>
	<div class="container">

		<!-- <div class="background1" style=""> -->

		<el-row class="row player-block">
			<el-col :span="20" class="video-left-box">

				<div id="fp-hlsjs" class="fp-full fp-mute is-splash" data-aspect-ratio="12:5" :style="{'background-image': 'url(' + (video.cover_index?video.cover_index:video.cover) + ')'}" style="background-color:#000;"></div>

				<div class="video-action-box">
					<div class="pull-right views-box">
						<span class="view"><i class="fas fa-eye"></i> {{video.views}}</span>
						<span class="view watch-release-date">上映时间：{{video.release_date}}</span>
					</div>
					<a href="javascript:void(0);" onclick="app.downloadConfirm('HMPD-10057')" class="action-button">
						<i class="fas fa-download fas-blue"></i>下载<span class="hidden-xs video-down">影片</span>
					</a>
					<a class="action-button collection-videos " data-title="奴隷少女 完全なる調教 七海ゆあ" data-avkey="HMPD-10057" id="favorite_videos" value="favorite_videos" href="#">
						<i class="fas fa-heart fas-red"></i> 收藏<span class="hidden-xs video-col">影片</span>
					</a>
					<a href="javascript:void(0);" class="action-button report-btn">
						<i class="fas fa-envelope fas-green"></i> <span class="hidden-xs video-issue">问题</span>回报
					</a>
				</div>
				<div class="video-info-box">
					<ul>
						<li style="margin-bottom: 5px;">
							<span class="av-mark-title av-censored" v-if="video.video_type">有码</span>
							<span class="av-mark-title av-uncensored" v-else>无码</span>
							<span class="title">
								{{video.title}}		
							</span>
							<span class="avkey">{{video.avkey}}</span>
						</li>
						<li>
							<label>演出女优：</label>
							<span>
								<span class="badge badge-danger add-actors">
									<a>{{video.actors_name[video.actors]}}</a>
									<!-- <a href="http://avtiger.1778mao.com:8092/actor/%E4%B8%83%E6%B5%B7%E3%82%86%E3%81%82">{{video.actors_name[video.actors]}}</a> -->
									<!-- <a href="javascript:;" class="collection-actors hide" data-actor="七海ゆあ"><i class="fa fa-plus-square" aria-hidden="true" data-toggle="tooltip" data-original-title="加到我的女優"></i></a> -->
								</span> 
							</span>
						</li>
						<li>
							<label>影片标签：</label>
							<span v-for="(tag, index) in video.tags_name">
									<a class="badge badge-secondary">{{tag}}</a>
							</span>
						</li>
					</ul>
				</div>
			</el-col>

			<el-col :span="4" class="video-right-box hidden-xs">
				<div class="list-group">
					<div class="list-group-item video-title">热门相关影片</div>

					<div class="list-group-item scrollbar-dynamic" style="overflow-y: scroll;">
						<div v-for="(item, index) in maybeYouLike" :key="index" class="mtop-dark clearfix">
							<nuxt-link :to="{name:'video-avkey' ,params:{avkey:item.avkey}}">
								<div class="">
									<img v-if="item.origin_cover" :src="item.origin_cover" width="100%" height="100%" :title="item.content">
									<img v-else :src="previewURL+item.avkey+'/preview0s.png'" width="100%" height="100%" :title="item.content">
								</div>
							</nuxt-link>
							<div class="sm-right-box">
								<div class="sm-title">
									<nuxt-link :to="{name:'video-avkey' ,params:{avkey:item.avkey}}">
										{{item.title}}
									</nuxt-link>
								</div>
								<div class="sm-view">
									<i class="fas fa-play-circle"></i> {{item.views}}
								</div>
							</div>
						</div>
					</div>
				</div>
			</el-col>
		</el-row>

		<!-- </div> -->

		<div class="row player-block">
			<div class="last-video-title preview">
				<h2>预览图片</h2>
			</div>
			<ul class="videos-list list-inline list-inline-linking preview">
				<li v-for="n in 10">
					<img :src="previewURL+video.avkey+'/preview'+(n*2-1)+'s.png'" width="100%">
				</li>
			</ul>

			<div class="last-video-title preview">
				<h2>猜你喜欢</h2>
			</div>
			<category-video :item="maybeYouLike"></category-video>

			<!-- <ul class="videos-list list-inline list-inline-linking video-item">
				<li v-for="(item, index) in maybeYouLike" :key="index">
					<nuxt-link :to="{name:'video-avkey' ,params:{avkey:item.avkey}}">
						<div class="a-cover"
								v-on:mouseover="mouseover(item.avkey)"
								v-on:mouseleave="mouseleave(item.avkey)">
							<div class="video-mouse">
								<div v-bind:class="item.avkey" v-bind:style="{ zIndex: 0 }">
									<img width="100%" :src="item.origin_cover" class="preview-img">
								</div>
								<div v-bind:class="item.avkey" v-bind:style="{ zIndex: -1 }" class="preview-child preview-video">
									<video class="preview-video" v-bind:id="item.avkey" muted preload="auto" loop @canplay="updatePaused" @playing="updatePaused" @pause="updatePaused">
										<source :src="previewURL+item.avkey+'/preview.mp4'" type="video/mp4">
									</video>
								</div>
							</div>
							<div class="progress" style="height: 3px; background-color: transparent; --darkreader-inline-bgcolor:transparent; display: none;" data-darkreader-inline-bgcolor="">
								<div class="progress-bar progress-bar-danger" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
							</div>
							<div class="av-mark av-right-top av-forever collection-videos-small" data-title="極射 山中麗子" data-avkey="011118_631" id="favorite_videos-small" value="favorite_videos-small" data-action="add" data-placement="left" data-toggle="tooltip" title="" data-original-title="收藏影片">
								<i class="fa fa-plus" aria-hidden="true"></i>
							</div>
							<div class="video-bottom"></div>
							<div class="av-mark av-right-bottom av-censored" v-if="item.video_type">有码</div>
							<div class="av-mark av-right-bottom av-uncensored" v-else>无码</div>
							<div class="av-mark av-left-bottom av-release-date"> {{item.release_date}}</div>
							<div class="av-mark av-right-top av-duraction"> {{item.duration}}</div>
						</div>
						<a class="title">{{item.title}}</a>
					</nuxt-link>
					<div class="actors-line">
						<a>{{item.actors_name[item.actors]}}</a>
					</div>
				</li>
			</ul> -->


		</div>
  	</div>
</template>

<script>
import CategoryVideo from '@/components/videos/category-video'
import state from '@/store/state'
export default {
    components: {
        CategoryVideo,
    },
	data () {
		return {
			title:'播放頁',
			video:[],
			maybeYouLike:[],
			RightBoxVideos:[],
			previewURL: 'http://avi-jibamao.cdn.hinet.net/previews/',
			videoElement: null,
			paused: null,
		}
	},
	async asyncData ({app, params}) {
		// const result = await app.$axios.$get('http://avtiger.1778mao.com:8092/api/once/video',{params:{avkey:params.avkey}});
		// const result = await app.$axios.$get('http://www.zkr.life:8091/api/once/video',{params:{avkey:params.avkey}});
		const result = await app.$axios.$get(state.url+'/api/once/video',{params:{avkey:params.avkey}});
		console.log('3333333333322222222');
		console.log(  result.maybeYouLike  );
		console.log('3333333333322222222');
		return {
			video : result,
			title : result.title,
			maybeYouLike : result.maybeYouLike,
			RightBoxVideos : result.RightBoxVideos,
		}
	},
	head () {
		return {
			title: this.title,
			meta: [
				{ hid: 'home custom title', name: 'home', content: 'home custom title description' }
			],
		}
	},
	methods: {
		videoInit() {
			flowplayer(function (api, root) {
				var fsbutton = root.querySelector(".fp-fullscreen");

				var common = flowplayer.common,
					bean = flowplayer.bean,
					bw = common.createElement("strong", {"class": "fas fa-backward fa-lg"}, ""),
					fw = common.createElement("strong", {"class": "fas fa-forward fa-lg"}, "");
				
				bean.on(bw, "click", function () {
				var target = api.video.time - 10;
				if (target >= 0 && !api.seeking) {
					api.seek(target);
				}
				});
				
				bean.on(fw, "click", function () {
				var video = api.video,
					target = video.time + 10;
				if (target <= video.duration && !api.seeking) {
					api.seek(target);
				}
				});
				let playBtn = root.querySelector(".fp-controls .fp-playbtn");
				if (!root.querySelector(".fas.fa-forward.fa-lg")){
					playBtn.after(fw)
				}
				if (!root.querySelector(".fas.fa-backward.fa-lg")){
					playBtn.before(bw)
				}
				//playBtn.before(bw)
				
				//$('.fp-controls .fp-playbtn').before(bw);
				//$('.fp-controls .fp-playbtn').after(fw);

				// append fullscreen button after HD menu is added on ready
				api.on("ready", function () {
					root.querySelector(".fp-controls").appendChild(fsbutton);
				});

				api.on("pause", function(e, api) {
					//$('.goto-unlock').show();
				});
				api.on("resume", function(e, api) {
	//				$('.goto-unlock').hide();
				});
			});
			//console.log(this.$route.params);

			flowplayer("#fp-hlsjs", {
				splash: false,
				ratio: 9/16,
				clip: {
					// sources: [{ type: "application/x-mpegurl",src: "http://avtiger.1778mao.com:8092/api/"+this.$route.params.avkey+"/play.m3u8?token=eyJpdiI6Ikp1N3dXRFp1M1hrQVFjbVFaa0MyTEE9PSIsInZhbHVlIjoiQXNwXC9xWlh0VXhFSk1rdzVDWTJqSGdPcThlUmh5M1RXb3NZT0ZWMjVvS1VOaGU0cG1WcWJ0Y29OMFNUVVZSQ2QiLCJtYWMiOiIxZjk4Y2Y2ZmM3MjMyNzk1MjVmYzU0MDAyN2I4YzhjMTFiNjZkN2JjNTY1YmYxYTY0NzJhYzdmZmU3NDkwZTdiIn0="}]   
					sources: [{ type: "application/x-mpegurl",src: state.url+"/api/"+this.$route.params.avkey+"/play.m3u8?token=eyJpdiI6Ikp1N3dXRFp1M1hrQVFjbVFaa0MyTEE9PSIsInZhbHVlIjoiQXNwXC9xWlh0VXhFSk1rdzVDWTJqSGdPcThlUmh5M1RXb3NZT0ZWMjVvS1VOaGU0cG1WcWJ0Y29OMFNUVVZSQ2QiLCJtYWMiOiIxZjk4Y2Y2ZmM3MjMyNzk1MjVmYzU0MDAyN2I4YzhjMTFiNjZkN2JjNTY1YmYxYTY0NzJhYzdmZmU3NDkwZTdiIn0="}]   
				},
				embed: false
			});
		},
		// updatePaused(event) {
		// 	this.videoElement = event.target;
		// 	this.paused = event.target.paused;
		// },
		// play() {
		// 	this.videoElement.play();
		// },
		// pause() {
		// 	this.videoElement.pause();
		// },	
		// mouseover: function(avkey){
		// 	// console.log('1111111111111');
        //     document.getElementById(avkey).pause();
        //     document.getElementById(avkey).load();
		// 	document.getElementById(avkey).play();
		// 	document.getElementsByClassName(avkey)[1].style.zIndex = 1
		// 	document.getElementsByClassName(avkey)[0].style.zIndex = -1;
		// },    
		// mouseleave: function(avkey){
		// 	document.getElementById(avkey).pause();
		// 	document.getElementsByClassName(avkey)[1].style.zIndex = -1
		// 	document.getElementsByClassName(avkey)[0].style.zIndex = 1;
		// },
	},
	mounted(){
		this.videoInit();
	},
	computed: {
		// playing() { return !this.paused; },
	},
}
</script>

<style lang="stylus">



</style>
