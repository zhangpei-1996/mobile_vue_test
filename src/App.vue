<template>
    <div>
        <router-view></router-view>
        <nav class="fixed_nav">
            <ul>
                <li :class="['no1', {'cur': A === 'index'}]" @click="gogogo('index')">
                    <b></b>
                </li>
                <li :class="['no2', {'cur': A === 'paidan'}]" @click="gogogo('paidan')">
                    <b></b>
                </li>
                <li :class="['no3', {'cur': A === 'travel'}]" @click="gogogo('travel')">
                    <b></b>
                </li>
                <li :class="['no4', {'cur': A === 'yinyue'}]" @click="gogogo('yinyue')">
                    <b></b>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    computed: {
        A() {
            return this.$route.meta.A;
        }
    },
    methods: {
        gogogo(name) {
            this.$router.push({
                name
            });
        }
    }
};
</script>

<style lang="less" scoped>
    .fixed_nav{
        position: fixed;
        bottom:0;
        left:0;
        width:100%;
        height:60px;
        background:#eee;
        border-top: 1px solid #ccc;
        z-index: 99999;

        ul{
            display: flex;

            li{
                flex:1;
                display: flex;
                justify-content: center;
                align-items: center;
                height:60px;
                b{
                    display: block;
                    width: 45px;
                    height: 45px;
                    background: orange;
                }
                &.cur b{
                    background-color: red;
                }
            }
        }
    }
</style>
