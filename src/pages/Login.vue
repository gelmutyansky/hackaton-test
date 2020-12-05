<template>
    <div class="row justify-center">
        <q-form class="col-5" @submit="onSubmit">
        <q-input label="Логин"/>
        <q-input 
            v-model="password" 
            :type="isPwd ? 'password' : 'text'" 
            label="Пароль">
            <template v-slot:append>
            <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
            />
            </template>
        </q-input>
        <q-btn class="full-width" label="Войти" type="submit"/>
        </q-form>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data () {
        return {
            password: '',
            isPwd: true
        }
    },
    methods: {
        onSubmit() {
            // логин
            // получаем success и тип входа
            // если тренер, то страничка для тренеров с загрузкой файла
            // если глав секретарь, то её страничка
            axios.get(`http://192.168.1.228:8000/results`).then(response => {
                // this.user = response.data.results[0]
                console.log(response)
            }).catch(e => {
                console.log(e)
            })
            this.$router.push({ name: 'index'})
        }
    }
}
</script>