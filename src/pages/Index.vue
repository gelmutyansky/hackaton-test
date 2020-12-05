<template>
  <q-page >
    <div class="column q-gutter-md">
      <q-form 
          class="row q-gutter-md"
          greedy
          @submit="onSubmit"
      >
        <!-- <q-input 
              v-model.number="atheleteNumber"
              type="number"
              label="№"
              style="max-width: 50px"
        /> -->
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
              :rules="[ val => val && val.length > 0 || 'Обязательное поле']"
        />
        <q-select
              v-model="athleteGradeToClaim"
              label="Разряд претендуемый"
              :options="optionsGrade"
              style="width: 190px"
              :rules="[ val => val && val.length > 0 || 'Обязательное поле']"
        />
        <q-select
              v-model="athleteCity"
              label="Город"
              style="width: 200px"
              :options="optionsCity"
              :rules="[ val => val && val.length > 0 || 'Обязательное поле']"
        />
        <q-select
              v-model="athleteSchool"
              label="Спорт школа"
              style="width: 200px"
              :options="optionsSchools"
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
            :data="dataTable"
            :columns="columnsTable"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
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
        {
          name: 'Гизбрехт Арина',
          birthYear: 2006,
          grade: 'I сп.',
          city: 'Екатеринбург',
          school: 'СШ "Виктория"',
          coaches: 'бригада Пастуховой В.С.'
        },
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
            gradeToClaim: this.atheleGradeToClaim,
            city: this.athleteCity,
            school: this.athleteSchool,
            coaches: this.atheleteCoaches
        }
        this.dataTable = [...this.dataTable, addRow]
     }
   }
}
</script>
