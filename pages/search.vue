<template>
    <div class="row player-block">
        <div class="last-video-title preview">
            <h2>关键词搜索「{{this.searchSomething}}」</h2>
            <!-- <h2>关键词搜索「{{this.$store.state.searchSomething}}」</h2> -->
        </div>
        <category-video :item="videos"></category-video>
        <center>
            <el-pagination background @current-change="pageNext" layout="prev, pager, next" :page-size="form.pageSize" :current-page="form.currentPage" :total="form.total" v-if="form.total > form.pageSize">
            </el-pagination>
        </center>
    </div>    
</template>

<script>
import { mapState } from 'vuex'
import CategoryVideo from '@/components/videos/category-video'
import state from '@/store/state'
export default {
    watchQuery: ['page'],
    components: {
        CategoryVideo,
    },
    data () {
        return {
            videos:[],
            form:{
                currentPage:1,
                total:0,
                pageSize:0,
                loading:false
            },
            showTopBtn: false,
            searchSomething: '',
        }
    },    
    async asyncData ({app, params, query}) {
        // 前端輸入
        // http://localhost:3000/search?searchSomething=2&page=1
        // http://localhost:3000/search?searchSomething=2&page=2
        // http://localhost:3000/search?searchSomething=2&page=3

        // 用這個
        // const result = await app.$axios.$get( state.url+'/api/search/' + query.searchSomething ,{params:{page:query.page || 1}} );
        // const result = await app.$axios.$get( state.url+'/api/search/' + ( state.searchSomething || query.searchSomething ) ,{params:{page:query.page || 1}} );
        const result = await app.$axios.$get( state.url+'/api/search/' + ( query.searchSomething ? query.searchSomething : state.searchSomething ) ,{params:{page:query.page || 1}} );

        // 後端跑
        // http://www.zkr.life:8091/api/search/2?page=1
        // http://www.zkr.life:8091/api/search/2?page=2
        // http://www.zkr.life:8091/api/search/2?page=3

        // console.log('111111111');
        // console.log( state.url+'/api/search/' + ( query.searchSomething ? query.searchSomething : state.searchSomething ) ,{params:{page:query.page || 1}} )        
        // console.log(state.searchSomething)
        // console.log(state.url)
        // console.log(query.searchSomething)
        // console.log(this.$store.state.searchSomething)
        // console.log(this.state.searchSomething)
        // console.log(result.links);
        // console.log('2222222222');

        return {
            videos: result.AvVideos,
            searchSomething: query.searchSomething,
            form:{
                total: result.links.total,
                currentPage: result.links.current_page,
                pageSize: result.links.per_page
            }
        }
    },
    methods: {
        pageNext(page) {
            // this.$router.push({ query: { page: page } });
            // 带查询参数，变成 /register?plan=private
            this.$router.push({ path: 'search', query: { searchSomething: this.searchSomething, page: page }});
        },
    },

}
</script>

<style lang="stylus">

</style>
