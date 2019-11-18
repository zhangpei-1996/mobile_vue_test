<template>
  <div class="wrap" @click="isShowDrawer = false">
    <div class="">
        <div class="btn_s">
            <img src="/images/sx.png" @click.stop="isShowDrawer = true">
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
    <div :class="['drawer', {'cur': isShowDrawer}]" @click.stop="">
        <DI :color="color" :exhaust="exhaust" :fuel="fuel" :engine="engine" @ok="okHan" />
    </div>
  </div>
</template>

<script>
import { Indicator } from 'mint-ui';
import DI from './DrawerInner.vue';

import http from '../../http/http';

export default {
    components: {
        DI
    },
    data() {
        return {
            arr: [],
            page: 1,
            lock: true,
            color: [],
            exhaust: ['国三', '国五'],
            fuel: ['汽油'],
            engine: [],
            isShowDrawer: false
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
                http.get('getCar', {
                    page: this.page,
                    color: this.color,
                    exhaust: this.exhaust,
                    fuel: this.fuel,
                    engine: this.engine
                }, (data) => {
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
        },
        okHan(obj) {
            this.page = 1;
            this.color = obj.my_color;
            this.fuel = obj.my_fuel;
            this.engine = obj.my_engine;
            this.exhaust = obj.my_exhaust;
            this.arr = [];
            this.loadData();
            this.isShowDrawer = false;
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
.drawer{
    position: fixed;
    top:0;
    right:-100%;
    width:75%;
    height:100%;
    background:white;
    box-shadow: -1px 0px 10px black;
    transition:all .4s ease 0s;
    &.cur{
        right:0;
    }
}
</style>
