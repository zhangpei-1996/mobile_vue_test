<template>
    <div v-infinite-scroll="loadMore">
        <div class="grid" v-for="item in arr" :key="item.id">
            <div class="picbox">
                <img :src="`http://127.0.0.1:3000/images/${item.picUrl}`" alt="">
            </div>
            <div class="wordbox">
                <p>
                    {{item.name}}
                </p>
                <p>
                    {{item.address}}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import { Indicator } from 'mint-ui';
import http from '../../http/http';

export default {
    data() {
        return {
            arr: [],
            page: 1,
            lock: true
        };
    },
    created() {
        this.loadData();
    },
    methods: {
        loadData() {
            // 确保节流锁开着
            if (this.lock) {
                // 菊花图
                Indicator.open({
                    text: '正在加载，请稍后...',
                    spinnerType: 'fading-circle'
                });
                // 关掉节流锁
                this.lock = false;
                http.get('getGenjinzhong', { page: this.page }, (data) => {
                    this.arr = [...this.arr, ...data.data.arr];
                    // 打开节流锁
                    this.lock = true;
                    // 菊花图
                    Indicator.close();
                });
            }
        },
        loadMore() {
            this.page += 1;
            this.loadData();
            console.log('到底了');
        }
    }
};
</script>

<style lang="less" scoped>
    .grid{
        display: flex;
        padding:0 10px;
        margin-top: 20px;
        .picbox{
            width: 120px;
            height: 80px;
            background-color: #eee;
            margin-right: 10px;
            img{
                width: 120px;
                height: 80px;
            }
        }
        .wordbox{
            flex:1;
        }
    }
</style>
