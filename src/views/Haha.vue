<template>
    <div>
        我是一个哈哈组件
        <router-view></router-view>
    </div>
</template>

<script>
import http from '../http/http';

export default {
    created() {
        http.get('getNews', (data) => {
            console.log(data.data);
        });
    }
};
</script>

<style lang="less" scoped>

</style>
