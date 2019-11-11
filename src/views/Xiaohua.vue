<template>
    <div>
        <h1>你要看第{{id}}号消化啊</h1>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: 0
        };
    },
    created() {
        const { id } = this.$route.params;
        this.id = id;
    }
};
</script>

<style lang="less" scoped>

</style>
