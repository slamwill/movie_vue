<template>


    <div class="row player-block">
        <div class="last-video-title preview">
            <h2>最新{{ videoTypeCategory[this.videoType].name }}</h2>
        </div>
        <ul class="videos-list list-inline list-inline-linking video-item">
            <li v-for="(item, index) in videos" :key="index" class="record-item">
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
                    <a>{{item.name}}</a>
                </div>
            </li>
        </ul>
        <center>
            <el-pagination background @current-change="pageNext" layout="prev, pager, next" :page-size="form.pageSize" :current-page="form.currentPage" :total="form.total" v-if="form.total > form.pageSize">
            </el-pagination>
        </center>
    </div>



    <!-- <div class="video-list-container">
        <div>{{ videoTypeCategory[this.videoType].name }}333</div>
        <div v-for="(item, index) in videos" class="record-item" :key="index" style="border:1px solid red;">
          <div class="title">
            <nuxt-link :to="{name:'video-avkey' ,params:{avkey:item.avkey}}">
              {{item.title}} {{ item.avkey }}
            </nuxt-link>
          </div>
          <div class="content">{{item.content}}</div>
          <div class="content">{{item.name}}</div>
        </div>
        <center>
          <el-pagination background @current-change="pageNext" layout="prev, pager, next" :page-size="form.pageSize" :current-page="form.currentPage" :total="form.total" v-if="form.total > form.pageSize">
          </el-pagination>
        </center>
    </div> -->




</template>

<script>
import { mapState } from 'vuex'

export default {
    watchQuery: ['page'],
    data () {
        return {
            videos:[],
            form:{
              currentPage:1,
              total:0,
              pageSize:0,
              loading:false
            },
            previewURL: 'http://avi-jibamao.cdn.hinet.net/previews/',
            videoElement: null,
            paused: null,

            videoType: '',
            videoTypeCategory: {
                'censored': { name: '有碼' },
                'uncensored': { name: '無碼' },
                'united': { name: '歐美' },
                'cartoon': { name: '動畫' },
                'self': { name: '自拍' }
            },
            
            showTopBtn: false,
            
        }
    },
    async asyncData ({app, params, query, videoType}) {
        console.log('1111111asyncData111')
        const result = await app.$axios.$get( 'http://avtiger.1778mao.com:8092/api/'+(params.videoList || videoType),{params:{page:query.page || 1}});
        // const result = await app.$axios.$get( 'http://avtiger.1778mao.com:8092/api/uncensored',{params:{page:query.page || 1}});
        console.log('1111111111')
        console.log(params)
        console.log('2222222222')

        return {
            videoType : params.videoList,
            videos: result.data,
            form:{
                total: result.total,
                currentPage: result.current_page,
                pageSize: result.per_page
            },
        }
    },
    computed: {
        playing() { return !this.paused; },
    },
    methods: {
        pageNext(page) {
            this.$router.push({ query: { page: page } });
        },
        updatePaused(event) {
            this.videoElement = event.target;
            this.paused = event.target.paused;
        },
        play() {
            this.videoElement.play();
        },
        pause() {
            this.videoElement.pause();
        },	
        mouseover: function(avkey){
            document.getElementById(avkey).pause();
            document.getElementById(avkey).load();
            document.getElementById(avkey).play();
            document.getElementsByClassName(avkey)[1].style.zIndex = 1
            document.getElementsByClassName(avkey)[0].style.zIndex = -1;
        },    
        mouseleave: function(avkey){
            document.getElementById(avkey).pause();
            document.getElementsByClassName(avkey)[1].style.zIndex = -1
            document.getElementsByClassName(avkey)[0].style.zIndex = 1;
        },
    },
    mounted(){
        // console.log(this.$router);
    }
}

</script>

<style lang="stylus">

</style>
