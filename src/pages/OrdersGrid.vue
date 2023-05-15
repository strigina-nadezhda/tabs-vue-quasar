<template>
  <q-table
    title="Заявки"
    :rows="orders"
    :columns="columns"
    row-key="client_name"
    rows-per-page-label="Заявок на странице"
    flat
    bordered
    :pagination="initialPagination"
  >
    <template v-slot:top-right>
      <q-btn
        color="primary"
        icon-right="add"
        label="Добавить"
        no-caps
        @click="openDialog"
      />
    </template>
    <template v-slot:body-cell-state="props">
      <q-td :props="props">
        <q-badge :color="getColor(props.value)" :label="props.value"></q-badge>
      </q-td>
    </template>

    <template v-slot:body-cell-dadd="props">
      <q-td :props="props">
        {{ formatDate(props.row.dadd) }}
      </q-td>
    </template>

    <template v-slot:body-cell-stg="props">
      <q-td :props="props">
        <span v-for="(item, i) in props.row.stg" :key="i" class="q-mr-sm">
          {{ item }}
        </span>
      </q-td>
    </template>

    <template v-slot:body-cell-person_phone="props">
      <q-td :props="props"> + {{ props.row.person_phone }} </q-td>
    </template>
    <template v-slot:body-cell-delete="props">
      <q-td :props="props" class="icon-btn">
        <q-icon
          name="delete"
          size="1.2rem"
          @click="deleteOrderData(props.row.id)"
        />
      </q-td>
    </template>
    <template v-slot:body-cell-more="props">
      <q-td :props="props" class="icon-btn">
        <q-icon
          name="arrow_forward_ios"
          size="1.2rem"
          class="text-gray"
          @click.prevent="openTab(props.row)"
        />
      </q-td>
    </template>
  </q-table>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
import { useQuasar } from "quasar";

const columns = [
  {
    name: "client_name",
    label: "Клиент",
    required: true,
    align: "left",
    field: (row) =>
      row.client_name
        ? row.client_name
        : row.company_name
        ? row.company_name
        : row.extra?.partner?.client_name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "num",
    label: "№ Заявки",
    field: "num",
    sortable: true,
    sort: (a, b) => a - b,
    align: "centre",
  },
  {
    name: "stg",
    label: "Продукт",
    field: "stg",
    align: "centre",
  },
  {
    name: "dadd",
    label: "Дата",
    field: "dadd",
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
    align: "centre",
  },
  {
    name: "state",
    label: "Статус",
    field: "state",
  },
  {
    name: "person_phone",
    label: "Номер телефона",
    field: "person_phone",
  },
  {
    name: "delete",
    label: "Удалить",
    field: "id",
  },
  {
    name: "more",
    label: "Подробнее",
    field: "id",
    sortable: false,
  },
];

export default defineComponent({
  name: "OrdersGrid",

  setup() {
    const $q = useQuasar();
    return {
      columns,
      dialogForm: true,

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
      orders: (state) => state.allTabs.orders,
      tabForm: (state) => state.allTabs.tabForm,
      stateColor: (state) => state.allTabs.stateColor,
    }),
    ...mapGetters({
      hasNewTab: "allTabs/hasNewTab",
      orderIndex: "allTabs/orderIndex",
      hasItem: "allTabs/hasItem",
      tabIndex: "allTabs/tabIndex",
    }),
  },

  methods: {
    ...mapActions({
      getOrderList: "allTabs/getOrderList",
      getOrderData: "allTabs/getOrderData",
    }),
    ...mapMutations({
      openDialog: "allTabs/openDialog",
      deleteOrder: "allTabs/deleteOrder",
      addNewTab: "allTabs/addNewTab",
      deleteTab: "allTabs/deleteTab",
    }),
    formatDate(dadd) {
      return new Date(dadd).toLocaleDateString();
    },
    getColor(state) {
      const res = this.stateColor[state];
      return res ? res.color : "#FB8C00";
    },
    deleteOrderData(itemId) {
      const orderIndex = this.orderIndex(itemId);
      const openTabInex = this.tabIndex(itemId);
      if (openTabInex !== -1) {
        this.deleteTab(openTabInex);
      }
      this.deleteOrder(orderIndex);
    },

    async openTab(item) {
      let newTab = {
        name: `application ${item.num}`,
        label: `Заявка ${item.num}`,
        id: item.id,
        route: "/appl/" + item.id,
      };

      if (!this.hasNewTab(newTab)) {
        this.addNewTab(newTab);
        this.$router.push("/appl/" + item.id);
      } else {
        this.$router.push("/appl/" + item.id);
      }
    },
  },
  mounted() {
    if (this.orders.length < 1) {
      this.showLoading();
      this.getOrderList().then(() => this.hideLoading());
    }
  },
});
</script>
