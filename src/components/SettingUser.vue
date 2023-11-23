<template>
    <div class="block">
        <div>
            <div class="b-text">Имя</div>
            <CInput></CInput>
            <div>
                <CButtonExmple></CButtonExmple>
                <CNotify></CNotify>
            </div>
        </div>
    </div>
</template>

<script>
import CButtonExmple from './shared/CButtonExmple.vue';
import CInput from './shared/CInput.vue';
import CNotify from './shared/СNotify.vue';

    export default{
    components: {
        CInput, 
        CButtonExmple,
        CNotify,
    }
}
</script>

<style scoped>
    .block{
        display: flex;
        padding: 32px;
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
        flex: 1 0 0;
        border-radius: 2px;
        background: rgba(107, 119, 233, 0.22);
    }

    .b-text{
        color: #3A3A3A;
        font-weight: 600;
    }
</style>