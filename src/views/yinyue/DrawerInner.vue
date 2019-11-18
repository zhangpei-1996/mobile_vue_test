<template>
    <div class="di_wrap">
        <div class="inner_di">
            <mt-checklist
                title="颜色"
                v-model="my_color"
                :options="['红', '黄', '蓝', '绿', '黑', '白', '灰', '银灰', '咖啡', '香槟', '橙']">
            </mt-checklist>
            <mt-checklist
                title="燃料"
                v-model="my_fuel"
                :options="['汽油', '柴油', '纯电动', '油电混合']">
            </mt-checklist>
            <mt-checklist
                title="发动机"
                v-model="my_engine"
                :options="['1.2L', '1.2T', '1.4L', '1.4T', '1.6L', '1.6T', '1.8L', '1.8T', '2.0L', '2.0T', '3.0L']">
            </mt-checklist>
            <mt-checklist
                title="排放"
                v-model="my_exhaust"
                :options="['国一', '国二', '国三', '国四', '国五']">
            </mt-checklist>
            <div>
                <mt-button size="normal" type="primary" @click="okHan">确定</mt-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['color', 'exhaust', 'fuel', 'engine'],
    data() {
        return {
            my_color: this.color,
            my_fuel: this.fuel,
            my_engine: this.engine,
            my_exhaust: this.exhaust
        };
    },
    created() {
    },
    methods: {
        okHan() {
            this.$emit('ok', {
                my_color: this.my_color,
                my_fuel: this.my_fuel,
                my_exhaust: this.my_exhaust,
                my_engine: this.my_engine
            });
        }
    }
};
</script>

<style lang="less">
    .di_wrap{
        padding: 10px;
        height:100%;
        overflow-y: scroll;
        .mint-checklist{
            clear:both;
            overflow: hidden;
        }
        .inner_di{
            height:2000px;
        }
        .mint-cell{
            float: left;
            width:120px;
        }
    }
</style>
