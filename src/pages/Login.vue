<template>
    <q-form class="col-8" @submit="onSubmit">
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
        <q-btn label="Войти" type="submit"/>
    </q-form>
</template>

<script>
export default {
    data () {
        return {
            password: '',
            isPwd: true
        }
    },
    methods: {
        onSubmit() {
            this.$router.push({ name: 'index'})
        }
    }
}
</script>