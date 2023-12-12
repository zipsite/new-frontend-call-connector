<template>
    <div class="c-input">
        <template v-if="label !== ''">
            <div class="label" :label="label" :disabled="disable">{{ label }}</div>
        </template>
        <input @input="$emit('update:modelValue', $event.target.value)" type="text" placeholder="" :disabled="disable">
        <template v-if="error !== ''">
            <div class="error">
                <div class="place-error">{{ error }}</div>
                <div class="line"></div>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newTask: '',
            tasks: []
        };
    },
    props: {
        label: {
            type: String,
            default: ""
        },
        disable: {
            type: Boolean,
            default: false,
        },
        error: {
            type: String,
            default: ""
        },
        placeholder: {
            type: String,
            default: "",
        },
        modelValue: {
            type: String,
        },
    },
    methods: {
        clearInput() {
            this.newTask = '';
        },
    },
}
</script>

<style scoped>
.c-input {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 712px;
}

.c-input input {
    padding: 12px 24px;
    border-radius: 2px;
    border: 1px solid rgba(0, 0, 0, 0.24);
}

.c-input input:hover {
    border: 1px solid rgba(0, 0, 0, 0.50);
}

.c-input input:focus-visible {
    border: 1px solid rgba(114, 127, 243, 1);
    outline: none;
}

.c-input input:disabled {
    border: 1px solid rgba(0, 0, 0, 0.20);
    color: #C8C8C8;
}

.c-input .label {
    padding: 6px 12px;
    font-size: 14px;
    color: #3A3A3A;
}

.c-input .label:disabled {
    color: #C8C8C8;
}

.c-input .error {
    display: flex;
    flex-direction: column;
    align-items: stretch;
}

.c-input .error .line {
    background-color: #F1856D;
    width: 100%;
    height: 1px;
}

.c-input .error .place-error {
    font-size: 14px;
    padding: 6px 12px;
    color: #F1856D;
}
</style>