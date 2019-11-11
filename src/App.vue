<template>
    <div>
        <h1>{{a}}</h1>
        <img :src="'/images/1.jpg'" />
        <button @click="add">按我加1</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            a: 10,
            arr: [1, 2, 3],
        };
    },
    methods: {
        add() {
            this.a += 1;
        },
    },
};
</script>

<style lang="scss" scoped>

</style>
