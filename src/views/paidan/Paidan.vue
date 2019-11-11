<template>
    <div>
        <header>
            <ul>
                <li v-tap="'maoxiansuo'" :class="{'cur': nowColumnName == 'maoxiansuo'}">毛线索</li>
                <li v-tap="'genjinzhong'" :class="{'cur': nowColumnName == 'genjinzhong'}">跟进中</li>
            </ul>
        </header>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    created() {
        this.nowColumnName = this.$route.name;
    },
    updated() {
        this.nowColumnName = this.$route.name;
    },
    data() {
        return {
            nowColumnName: ''
        };
    }
};
</script>

<style lang="less" scoped>
    @import url(../../less/var.less);
    header{
        width: 100%;
        height: 40px;
        ul{
            display: flex;
            height: 40px;
            text-align: center;

            @h: 40px;
            li{
                flex:1;
                height: @h;
                line-height: @h;
                box-sizing: border-box;
                font-size: 14px;
                &.cur{
                    border-bottom: 2px solid @cur-color;
                }
            }
        }
    }
</style>
