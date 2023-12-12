<template>
    <div v-if="message.status == 'success'" class="success">{{ message.text }}</div>
    <div v-else-if="message.status == 'error'" class="error">{{ message.text }}</div>
</template>

<script>
export default {
    props: {
        message: {
            type: Object,
            default() {
                return {
                    status: "success",
                    text: "Успешно",
                }
            }
        },
        success: {
            type: String,
            default: "Сохранения применены"
        },
        error: {
            type: String,
            default: "Ошибка"
        },
    },
    methods: {

    },
}
</script>

<style scoped>
.success {
    background-color: #BAFFB9;
    display: inline-flex;
    padding: 12px 20px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

}

.error {
    background-color: #FFCBBF;
    display: inline-flex;
    padding: 12px 20px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
}
</style>