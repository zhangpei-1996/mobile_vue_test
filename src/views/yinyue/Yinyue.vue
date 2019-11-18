<template>
  <div class="wrap">
    <div class="">
        <div class="btn_s">
            <img src="/images/sx.png" alt="">
        </div>
    </div>
    <div class="carbox" v-infinite-scroll="loadMore" infinite-scroll-distance="100">
        <div v-for="item in arr" :key="item.id" class="grid">
            <div class="tu">
                <img :src="`http://aiqianduan.com:7897/images/carimages_small/${item.id}/view/${item.img}`" >
            </div>
            <div class="wen">
                <p><b>{{item.brand}}{{item.series}}[{{item.id}}]</b></p>
                <p>颜色：{{item.color}} 排放：{{item.exhaust}}</p>
                <p>发动机：{{item.engine}}</p>
                <p>燃料：{{item.fuel}}</p>
                <p></p>
            </div>
        </div>
    </div>
    <div class="drawer"></div>
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
            lock: true,
            color: ['红', '蓝']
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
                http.get('getCar', { page: this.page, color: this.color }, (data) => {
                    this.arr = [...this.arr, ...data.data.results];
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
            console.log('请求更多数据');
        }
    }
};
</script>

<style lang="less" scoped>
.carbox {
    padding: 10px;
    padding-bottom: 60px;
    .grid {
        display: flex;
        .tu {
            width: 150px;
            height: 100px;
            margin-bottom: 10px;
            img{
                width: 150px;
                height: 100px;
            }
        }
        .wen {
            flex: 1;
            margin-left:10px;
        }
    }
}
</style>
