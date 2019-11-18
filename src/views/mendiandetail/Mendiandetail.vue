<template>
    <div class='wrap'>
        <h1 @click="goback">返回</h1>
        <div id="container"></div>
        <p class="pp1">
            {{name}}
        </p>
        <p class="pp1">
            {{address}}
        </p>
    </div>
</template>

<script>
import http from '../../http/http';

export default {
    data() {
        return {
            name: '',
            address: ''
        };
    },
    methods: {
        goback() {
            this.$router.go(-1);
        }
    },
    created() {
    },
    mounted() {
        const { id } = this.$route.params;
        http.get('mdxq', { id }, (data) => {
            this.name = data.data.info.name;
            this.address = data.data.info.address;

            const center = new window.TMap.LatLng(data.data.info.la, data.data.info.lo);
            const map = new window.TMap.Map('container', {
                rotation: 0,
                pitch: 0,
                zoom: 12,
                center
            });

            new window.TMap.MultiMarker({
                map,
                styles: {
                    myStyle: new window.TMap.MarkerStyle({
                        width: 25,
                        height: 35,
                        anchor: { x: 16, y: 32 }
                    })
                },
                geometries: [{
                    id: '1',
                    styleId: 'myStyle',
                    position: new window.TMap.LatLng(data.data.info.la, data.data.info.lo),
                    properties: {
                        title: data.data.info.name
                    }
                }]
            });
        });
    }
};
</script>

<style lang='less' scoped>
    #container {
        width: 100%;
        height: 300px;
    }
</style>
