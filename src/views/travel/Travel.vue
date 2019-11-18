<template>
    <div class="wrap">
        <div class="swiper-container" id="swiper-container">
            <div class="swiper-wrapper" ref="sw" :style="{'height': wh + 'px'}">
                <div
                    :class="['swiper-slide', {'cur': leibiebianhao == i - 1}]"
                    @click="cHan(i - 1)"
                    v-for="i in 61"
                    :key="i"
                >
                    Slide{{i - 1}}
                    <mt-badge v-show="jishu(i - 1) !== 0">
                        {{jishu(i - 1)}}
                    </mt-badge>
                </div>
            </div>
        </div>
        <div class="bodycontainer">
            <div class="grid" v-for="(item, index) in arr" :key="index">
                <div class="inner">
                    {{item.id}}
                    <div>
                        <button
                            @click="jian(item.id)"
                            :disabled="getNumber(item.id) === 0"
                        >-</button>
                        {{getNumber(item.id)}}
                        <button @click="jia(item.id)">+</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="barbar">
            已点：{{$store.state.cart.yigou.length}}
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper';

import http from '../../http/http';

export default {
    data() {
        return {
            wh: 0,
            arr: [],
            leibiebianhao: 0
        };
    },
    created() {
        this.wh = document.documentElement.clientHeight;
        this.loadData();
    },
    mounted() {
        new Swiper('#swiper-container', {
            cancelable: false,
            direction: 'vertical',
            freeMode: true,
            height: 40,
            freeModeMomentumBounce: false
        });
    },
    methods: {
        jishu(i) {
            let number = 0;
            const { yigou } = this.$store.state.cart;
            yigou.forEach((item) => {
                const shu = item.id.match(/^(\d+)-/)[1];
                if (Number(shu) === i) {
                    number += 1;
                }
            });
            return number;
        },
        jia(id) {
            this.$store.dispatch('cart/gaibian', { id, n: 1 });
        },
        jian(id) {
            this.$store.dispatch('cart/gaibian', { id, n: -1 });
        },
        cHan(i) {
            this.leibiebianhao = i;
            this.loadData();
            // this.$refs.sw.style.transform = 'translateY(' + -40 * i + 'px)';
        },
        loadData() {
            http.get('getdongxi', { leibiebianhao: this.leibiebianhao }, (data) => {
                console.log(data.data);
                this.arr = data.data.arr;
                document.documentElement.scrollTop = 0;
            });
        },
        getNumber(id) {
            const item = this.$store.state.cart.yigou.filter(_item => _item.id === id);
            if (item.length !== 0) {
                return item[0].number;
            }
            return 0;
        }
    }
};
</script>

<style lang="less">
    .swiper-container{
        border-right:1px solid #333;
        width: 80px;
        position: fixed;
        left:0;
        top:0;
        overflow: visible !important;
        .swiper-wrapper{
            .swiper-slide{
                height: 40px;
                border-bottom: 1px solid #000;
                position: relative;
                &.cur{
                    background: gold;
                }
                .mint-badge{
                    position: absolute;
                    right:-10px;
                    top:0px;
                }
            }
        }
    }
    .bodycontainer{
        padding-left:100px;
        padding-bottom:60px;
        overflow: hidden;
        .grid{
            float:left;
            width:50%;
            height:120px;
            box-sizing: border-box;
            border-right: 10px solid transparent;
            margin-bottom: 10px;
            .inner{
                height:120px;
                border:1px solid #333;
                text-align: center;
                padding:10px;
                box-sizing: border-box;
            }
        }
    }
    .barbar{
        position: fixed;
        bottom:60px;
        left:0;
        width:100%;
        height:40px;
        z-index: 9999;
        background:goldenrod;
    }
</style>
