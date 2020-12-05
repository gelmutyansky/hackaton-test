<template>
    <div>
        <q-table
            title="Участники"
            :data="dataTable"
            :columns="columnsTable"
            :rows-per-page-options="[0]"
            style="height: 400px"
        />
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            columnsTable: [
                {
                    name: 'name',
                    field: 'name',
                    required: true,
                    label: 'Фамилия и имя',
                    align: 'left',
                },
                {
                    name: 'birthYear',
                    field: 'birthYear',
                    label: 'Год рождения',
                    align: 'left'
                },
                {
                    name: 'grade',
                    field: 'grade',
                    label: 'Разряд',
                    align: 'left'
                },
                {
                    name: 'gradeToClaim',
                    field: 'gradeToClaim',
                    label: 'Разряд претендуемый',
                    align: "left"
                },
                {
                    name: 'city',
                    field: 'city',
                    label: 'Город',
                    align: 'left'
                },
                {
                    name: 'school',
                    field: 'school',
                    label: 'Спорт школа',
                    align: 'left',
                },
                {
                    name: 'coaches',
                    field: 'coaches',
                    label: 'Тренера',
                    align: 'left',
                },
                {
                    name: 'firstType',
                    field: 'firstType',
                    label: '1 вид',
                    align: 'left'
                },
                {
                    name: 'secondType',
                    field: 'secondType',
                    label: '2 вид',
                    align: 'left'
                },
                {
                    name: 'thirdType',
                    field: 'thirdType',
                    label: '3 вид',
                    align: 'left'
                },
                {
                    name: 'fourthType',
                    field: 'fourthType',
                    label: '4 вид',
                    align: 'left'
                },
                {
                    name: 'sumOfPoints',
                    field: 'sumOfPoints',
                    label: 'Сумма',
                    align: 'left'
                },
                {
                    name: 'placement',
                    field: 'placement',
                    label: 'Место',
                    align: 'left'
                },
            ],
            dataTable: [],
        }
    },

    methods :{
        async get(){

        }
    },
    mounted :{
        getData() {
            
        }
    }
}
</script>