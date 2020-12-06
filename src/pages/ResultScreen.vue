<template>
    <div>
        <q-table
            title="Участники Тагильские встречи"
            separator="cell"
            :data="dataTable"
            :columns="columnsTable"
            :rows-per-page-options="[0]"
            style="height: 400px"
        />
        <a href="/#/participants">Добавление участников на соревнование</a>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            myJson: null,

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
            dataTable: [
                {
                    name:           "Мотивилова Анжелика",
                    birthYear:      2006,
                    grade:          'I сп.',
                    gradeToClaim:   'КМС',
                    city:           'Екатеринбург',
                    school:         'СШ "Виктория"',
                    coaches:        'бригада Пастуховой В.С.',
                    firstType:      '10',
                    secondType:      '10',
                    thirdType:      '10',
                    fourthType:      '10',
                    sumOfPoints:      '10',
                    placement:      '10',
                },
                {
                    name:           "Куликова Екатерина",
                    birthYear:      2005,
                    grade:          'КМС',
                    gradeToClaim:   'МС',
                    city:           'Екатеринбург',
                    school:         'СШОР №1',
                    coaches:        'Китайская Н.А.',
                    firstType:      '10',
                    secondType:      '10',
                    thirdType:      '10',
                    fourthType:      '10',
                    sumOfPoints:      '10',
                    placement:      '10',
                }
            ],
        }
    },
    methods: {
        getData() {
            //console.log(`hi`)
            //по идее должен быть параметр соревнования?
            axios.get("http://192.168.1.228:8000/finalResult").then(response => {
                console.log(response)
                // this.dataTable = response
            }).catch(e => {
                console.log(e)
            })
        }
    },
    mounted() {
        this.getData()
    }
}
</script>