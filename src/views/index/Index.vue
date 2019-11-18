<template>
    <div class='wrap'>
        <h1>离您最近的门店：</h1>
        <div v-if="arr.length !== 0">
            <div class="grid" @click="gogogo(arr[0].id)">
                <div class="zuo">
                    <p class="p1">{{arr[0].name}}</p>
                    <p class="p2">{{arr[0].address}}</p>
                </div>
                <div class="you">
                    {{Math.round(arr[0].distance * 1000) / 100}}公里
                </div>
            </div>
        </div>
        <h1>其他门店：</h1>
        <div v-for="item in arr.slice(1)" :key="item.id" class="grid"  @click="gogogo(item.id)">
            <div class="zuo">
                <p class="p1">{{item.name}}</p>
                <p class="p2">{{item.address}}</p>
            </div>
            <div class="you">
                {{Math.round(item.distance * 1000) / 100}}公里
            </div>
        </div>
    </div>
</template>

<script>
import http from '../../http/http';

export default {
    data() {
        return {
            la: 40.102452,
            lo: -116.358086,
            arr: []
        };
    },
    mounted() {
        // navigator.geolocation.getCurrentPosition((position) => {
        //     this.la = position.coords.latitude;
        //     this.lo = position.coords.longitude;
        // });

        http.get('zuijin', { la: this.la, lo: this.lo }, (data) => {
            // console.log(data.data);
            this.arr = data.data.arr;
        });
    },
    methods: {
        gogogo(id) {
            this.$router.push({
                name: 'mendiandetail',
                params: {
                    id
                }
            });
        }
    }
};
</script>

<style lang='less' scoped>
    .wrap{
        padding:0 10px;
        padding-bottom: 60px;
        .grid{
            height: 60px;
            border:1px solid #ccc;
            border-radius:10px;
            padding:4px 6px;
            display: flex;
            margin: 10px auto;
            .zuo{
                flex:3;
                display: flex;
                flex-direction: column;
                text-align: left;
                padding: 10px 0;
                .p1{
                    font-weight: bold;
                }
            }
            .you{
                flex:1;
                display: flex;
                align-items: center;
            }
        }
    }
</style>
