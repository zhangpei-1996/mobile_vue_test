<template>
    <div>
        <h1>我是首页啊</h1>
        <router-link :to="{'name': 'xiaohua', 'params': {'id': 45}}">去看45消化</router-link>
        <router-link to="/xixi/45">去看45消化</router-link>
        <button v-for="i in 99" :key="i" @click="gogogo(i)">按我看{{i}}号消化</button>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    methods: {
        gogogo(n) {
            this.$router.push({
                name: 'xiaohua',
                params: {
                    id: n
                }
            });
        }
    }
};
</script>

<style lang="less" scoped>

</style>
