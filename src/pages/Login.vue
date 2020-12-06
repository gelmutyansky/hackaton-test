<template>
    <div class="row justify-center">
        <q-form class="col-5" @submit="onSubmit">
            <q-input v-model="login" label="Логин"/>
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
            <a href="/#/register">Регистрация</a>
        </q-form>

        <q-dialog v-model="alert">
            <q-card>
            <q-card-section>
                <div class="text-h6">Ошибка</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
                Неправильные данные для входа!
            </q-card-section>

            <q-card-actions align="right">
            <q-btn flat label="OK" color="primary" v-close-popup />
            </q-card-actions>
            </q-card>
        </q-dialog>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data () {
        return {
            login: '',
            password: '',
            isPwd: true,
            alert: false,
        }
    },
    methods: {
        onSubmit() {
            // логин
            // получаем success и тип входа
            // если тренер, то страничка для тренеров с загрузкой файла
            // если глав секретарь, то её страничка
            const infoToSend = {
                login: this.login,
                password: this.password
            }

            axios.post(`http://192.168.1.228:8000/auth`, infoToSend).then(response => {
                // this.user = response.data.results[0]
                console.log(response)
                if(response.data.login === "")
                {
                    this.alert = true
                    console.log(`Login Failed`)
                } else {
                    console.log(`Succ`)
                    this.$router.push({ name: 'participants'})
                }
            }).catch(e => {
                console.log(e)
            })
        }
    }
}
</script>