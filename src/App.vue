<template>
    <div>
        <router-view></router-view>
        <nav class="fixed_nav">
            <ul>
                <li class="no1">
                    <b></b>
                </li>
                <li class="no2">
                    <b></b>
                </li>
                <li class="no3">
                    <b></b>
                </li>
                <li class="no4">
                    <b></b>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
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
            }
        }
    }
</style>
