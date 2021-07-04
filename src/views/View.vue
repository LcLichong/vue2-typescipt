<template>
    <div id="ViewA">
        <ViewB></ViewB>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ViewB from './View';

@Component({
    components: {
        ViewB,
    },
})
export default class ViewA extends Vue {}
</script>

<style lang="less">
#ViewA {
    height: 100vh;
}
</style>