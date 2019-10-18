<template>
    <div class="row player-block">
        <div class="last-video-title preview">
            <h2>最新動畫</h2>
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
        }
    },    
    async asyncData ({app, params, query}) {
        // const result = await app.$axios.$get( 'http://avtiger.1778mao.com:8092/api/cartoon',{params:{page:query.page || 1}});
        const result = await app.$axios.$get( state.url+'/api/cartoon',{params:{page:query.page || 1}});
        return {
            videos: result.data,
            form:{
                total: result.total,
                currentPage: result.current_page,
                pageSize: result.per_page
            }
        }
    },
    methods: {
        pageNext(page) {
            this.$router.push({ query: { page: page } });
        },
    },
}
</script>

<style lang="stylus">

</style>
