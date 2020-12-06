<template>
  <q-page >
    <div class="column q-gutter-md">
      <q-form 
          ref="atheleteForm"
          class="row q-gutter-md"
          greedy
          @submit="onSubmit"
          @reset="onReset"
      >
        <q-input
              v-model="atheleteName"
              label="Фамилия и имя"
              style="width: 300px"
              :rules="[ val => val && val.length > 0 || 'Обязательное поле']"
        />
        <q-input
              v-model.number="atheleteBirthYear"
              type="number"
              label="Год рождения"
              style="width: 150px"
              :rules="[ val => val || 'Обязательное поле']"
        />
        <q-select
              v-model="athleteGrade"
              label="Разряд"
              :options="optionsGrade"
              style="width: 100px"
              clearable
              :rules="[ val => val && val.length > 0 || 'Обязательное поле']"
        />
        <q-select
              v-model="athleteGradeToClaim"
              label="Разряд претендуемый"
              :options="optionsGrade"
              style="width: 190px"
              clearable
              :rules="[ val => val && val.length > 0 || 'Обязательное поле']"
        />
        <q-select
              v-model="athleteCity"
              label="Город"
              style="width: 200px"
              :options="optionsCity"
              clearable
              :rules="[ val => val && val.length > 0 || 'Обязательное поле']"
        />
        <q-select
              v-model="athleteSchool"
              label="Спорт школа"
              style="width: 200px"
              :options="optionsSchools"
              clearable
              :rules="[ val => val && val.length > 0 || 'Обязательное поле']"
        />
        <q-input
              v-model="atheleteCoaches"
              label="Тренера"
              style="width: 300px"
              :rules="[ val => val && val.length > 0 || 'Обязательное поле']"
        />
        <q-btn label="Добавить участника" type="submit"/>
      </q-form>

      <div class="row">
        <q-table
            title="Участники"
            no-data-label="Участников нет. Добавьте сверху"
            :data="dataTable"
            :columns="columnsTable"
            :rows-per-page-options="[0]"
            style="height: 400px"

        />
      </div>
      <a href="/#/result">Результаты</a>
    </div>
  </q-page>
</template>

<script>
import axios from 'axios'

export default {
  name: 'PageIndex',
  data () {
   return {
      // atheleteNumber: null,
      atheleteName: null,
      atheleteBirthYear: null,
      athleteGrade: null,
      athleteGradeToClaim: null,
      athleteCity: null,
      athleteSchool: null,
      atheleteCoaches: null,

      optionsGrade: [
        'I сп',
        'II сп',
        'III сп',
        'КМС',
        'МС'
      ],
      optionsCity: [
        'Нижний Тагил',
        'Екатеринбург',
        'Каменск-Уральский'
      ],
      optionsSchools: [
        'СШОР №1',
        'СШОР №3',
        'СШ Виктория',
        'СШ ВИР',
        'СШОР'
      ],
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
      ],
      dataTable: [
        // {
        //   name: 'Гизбрехт Арина',
        //   birthYear: 2006,
        //   grade: 'I сп.',
        //   gradeToClaim: 'КМС',
        //   city: 'Екатеринбург',
        //   school: 'СШ "Виктория"',
        //   coaches: 'бригада Пастуховой В.С.'
        // },
      ],
      
    }
  },
  methods: {
     onSubmit () {
        console.log('Hello')
        const addRow = {
            name: this.atheleteName,
            birthYear: this.atheleteBirthYear,
            grade: this.athleteGrade,
            gradeToClaim: this.athleteGradeToClaim,
            city: this.athleteCity,
            school: this.athleteSchool,
            coaches: this.atheleteCoaches
        }
        console.log(JSON.stringify(addRow))
         axios.post(`http://192.168.1.228:8000/sportsmans/createSportsmans`, JSON.stringify(addRow)).then(response => {
                // this.user = response.data.results[0]
                console.log(response)
            }).catch(e => {
                console.log(e)
            })
        this.dataTable = [...this.dataTable, addRow]
        this.$refs.atheleteForm.reset();
     },

     onReset() {
        this.atheleteName = null
        this.atheleteBirthYear = null
        this.athleteGrade = null
        this.athleteGradeToClaim = null
        this.athleteCity = null           // можно это и ниже не очищать, если организатор вносит с одной таблицы (ux мб удобно)
        this.athleteSchool = null
        this.atheleteCoaches = null
     },
   }
}
</script>
