<template>
    <!-- <div id="app">
        Hello {{ name }}
    </div> -->

    <div id="app">
        <v-title title="Vue组件化"></v-title>
        <v-button @click="handleClick">点击按钮</v-button>
        <p>
            <img src="/src/images/ai.png" style="width: 200px;">
        </p>
    </div>

</template>

<script>
    // export default {
    //     data: function () {
    //         return {
    //             name: 'Vue.js'
    //         }
    //     }
    // };

    // 导入组件
    import vTitle from './title.vue';
    import vButton from './button.vue';

    export default {
        components: {
            vTitle,
            vButton
        },

        methods: {
            handleClick(e) {
                console.log(e);
            }
        }
    }

</script>

<style scoped>
div {
    color: #f60;
    font-size: 24px;
}
</style>
