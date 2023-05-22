<template>
  <q-table
    title="Счета"
    :rows="accs"
    :columns="columns"
    row-key="client_name"
    rows-per-page-label="Заявок на странице"
    flat
    bordered
    card-class="grid-mobile__card"
    :pagination="initialPagination"
  >
    <template v-slot:body-cell-meeting_state="props">
      <q-td :props="props">
        <q-badge :color="getColor(props.value)" :label="props.value"></q-badge>
      </q-td>
    </template>

    <template v-slot:body-cell-stg="props">
      <q-td :props="props">
        <span v-for="(item, i) in props.row.stg" :key="i">
          {{ item }}
        </span>
      </q-td>
    </template>

    <template v-slot:body-cell-meeting_date="props">
      <q-td :props="props" class="d-flex wrap">
        {{ formatDateTime(props.row.meeting_date) }}
      </q-td>
    </template>

    <template v-slot:body-cell-person_phone="props">
      <q-td :props="props"> + {{ props.row.person_phone }} </q-td>
    </template>
  </q-table>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";
import { date } from "quasar";
import { useQuasar } from "quasar";
const { formatDate } = date;

const columns = [
  {
    name: "client_name",
    label: "Клиент",
    required: true,
    align: "left",
    field: (row) => row.client_name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "client_city",
    label: "Город",
    field: "client_city",
    sortable: true,
    sort: (a, b) => a.localeCompare(b),
    align: "centre",
  },
  {
    name: "stg",
    label: "Продукт",
    field: "stg",
    align: "centre",
  },
  {
    name: "meeting_date",
    label: "Дата встречи",
    field: "meeting_date",
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
    align: "centre",
  },
  {
    name: "meeting_place",
    label: "Место встречи",
    field: "meeting_place",
  },
  {
    name: "meeting_state",
    label: "Статус встречи",
    field: "meeting_state",
  },
  {
    name: "person_phone",
    label: "Номер телефона",
    field: "person_phone",
  },
  {
    name: "bank_name",
    label: "Банк",
    field: "bank_name",
  },
];

export default defineComponent({
  name: "AccountsGrid",

  setup() {
    const $q = useQuasar();
    return {
      columns,

      initialPagination: {
        rowsPerPage: 10,
      },
      showLoading() {
        $q.loading.show({
          message: "Загрузка...",
        });
      },
      hideLoading() {
        $q.loading.hide();
      },
    };
  },
  computed: {
    ...mapState({
      accs: (state) => state.allTabs.accounts,
      stateColor: (state) => state.allTabs.stateColor,
    }),
  },
  methods: {
    ...mapActions({
      getAccounts: "allTabs/getAccounts",
    }),
    formatDateTime(dadd) {
      return formatDate(dadd, "DD.MM.YYYY HH:mm");
    },
    getColor(state) {
      const res = this.stateColor[state];
      return res ? res.color : "#FB8C00";
    },
  },
  mounted() {
    if (this.accs.length === 0) {
      this.showLoading();
      this.getAccounts().then(() => this.hideLoading());
    }
  },
});
</script>
