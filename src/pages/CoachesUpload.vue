<template>
    <div>
        <h5>Здравствуйте, тренер!</h5>
        <q-form class="row" @submit="onSubmit">
            <q-file
                v-model="file"
                label="Прикрепить заявку"
                accept="application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel.sheet.macroEnabled.12"
                hint="Файл Excel"
                style="max-width: 300px"
                :rules="[val => !!val || 'Обязательное поле']"
            />
            <q-btn label="Отправить" type="submit"/>
        </q-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            file: null
        }
    },
    methods: {
        onSubmit() {
            console.log('ok')
        }
    }
}
</script>