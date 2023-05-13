<template>
  <div class="editeForm">
    <h6 class="form-title q-ma-none text-bold q-mb-md">
      Редактирование заявки <span class="text-primary"> #{{ num }} </span>
    </h6>

    <q-form @submit="onSubmit" @reset="onReset($route.params.id)" class="form">
      <div class="row q-col-gutter-md">
        <q-input
          outlined
          dense
          v-model="person_fullname"
          label="Имя клиента *"
          lazy-rules
          :rules="rules"
          class="col-xs-12 col-sm-6 col-md-6"
        />

        <q-input
          outlined
          dense
          v-model="person_phone"
          label="Номер телефона *"
          lazy-rules
          :rules="rules"
          fill-mask
          mask="7 (###) ### - ####"
          class="col-xs-12 col-sm-6 col-md-6"
        />

        <q-input
          label="E-mail *"
          v-model="person_email"
          type="email"
          outlined
          dense
          lazy-rules
          :rules="rules"
          class="col-xs-12 col-sm-6 col-md-6"
        />

        <q-input
          label="Название компании *"
          v-model="company_name"
          outlined
          dense
          lazy-rules
          :rules="rules"
          class="col-xs-12 col-sm-6 col-md-6"
        />

        <q-select
          v-model="company_type"
          :options="companyTypes"
          label="Организационно-правовая форма *"
          outlined
          dense
          class="col-xs-12 col-sm-6 col-md-6"
        />

        <q-input
          outlined
          dense
          v-model="inn"
          label="ИНН клиента*"
          lazy-rules
          :rules="rules"
          mask="## ## ### ### ##"
          class="col-xs-12 col-sm-6 col-md-6"
        />

        <q-select
          v-model="stg"
          multiple
          :options="products"
          label="Продукт"
          outlined
          dense
          class="col-xs-12 col-sm-6 col-md-6"
        />

        <q-select
          v-model="state"
          :options="optionsState"
          label="Статус заявки *"
          outlined
          dense
          lazy-rules
          :rules="rules"
          class="col-xs-12 col-sm-6 col-md-6"
        />
      </div>
      <h6 class="q-ma-none text-bold q-my-md">Дополнительная информация:</h6>
      <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-6 q-col-gutter-y-md">
          <q-input
            outlined
            dense
            v-model="client_name"
            label="Партнёр"
            lazy-rules
          />

          <q-input
            outlined
            dense
            v-model="partnerInn"
            label="ИНН партнёра"
            lazy-rules
            mask="## ## ### ### ##"
          />

          <q-input
            outlined
            dense
            v-model="crm_source_type"
            label="Источник заявки"
            lazy-rules
          />
        </div>
      </div>

      <div class="self-end q-pt-md">
        <div class="text-subtitle2 text-right">
          Заявка принята {{ formatDateTime(dadd) }} в
          {{ formatDateOnlyTime(dadd) }}.
        </div>

        <div class="text-subtitle2 text-right">
          Последнее обновление {{ formatDateTime(lastUpd) }} в
          {{ formatDateOnlyTime(lastUpd) }}.
        </div>
      </div>

      <q-card-actions class="form-actions q-px-none">
        <q-btn label="Сохранить" color="primary" type="submit" />
        <q-btn
          label="Отмена"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </q-card-actions>
    </q-form>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapMutations, mapState, mapGetters, mapActions } from "vuex";
import { ref } from "vue";
import { date } from "quasar";
import { useQuasar } from "quasar";
const { formatDate } = date;

export default defineComponent({
  name: "OrderForm",

  setup() {
    const $q = useQuasar();
    return {
      num: ref(null),
      id: ref(null),
      dadd: ref(null),
      profile_id: ref(null),
      state: ref(null),
      stg: ref([]),
      inn: ref(null),
      company_name: ref(null),
      person_phone: ref(null),
      company_type: ref(null),
      person_email: ref(null),
      lastUpd: new Date(),
      person_fullname: ref(null),
      is_new: ref(null),
      type: ref("partner"),
      user_id: ref(null),
      client_name: ref(null),
      partnerInn: ref(null),
      crm_source_type: ref(null),
      rules: [(v) => !!v || "Обязательное поле!"],
      showNotif() {
        $q.notify({
          message: "Изменения успешно сохранены",
          color: "primary",
          type: "positive",
        });
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
  methods: {
    ...mapMutations({
      editOrder: "allTabs/editOrder",
    }),
    ...mapActions({
      getOrderData: "allTabs/getOrderData",
    }),

    onSubmit() {
      const form = {
        id: this.id,
        num: this.num,
        dadd: this.dadd,
        profile_id: this.profile_id,
        state: this.state,
        lastUpd: new Date(),
        stg: Array.from(this.stg),
        inn: this.inn,
        company_name: this.company_name,
        person_phone: this.person_phone,
        company_type: this.company_type,
        person_fullname: this.person_fullname,
        person_email: this.person_email,
        extra: {
          partner: {
            type: this.type,
            user_id: this.user_id,
            client_name: this.client_name,
            inn: this.partnerInn,
          },
          crm_source_type: this.crm_source_type,
        },
        is_new: true,
      };

      const index = this.orderIndex(form.id);

      this.editOrder({ index: index, form: form });
      this.showNotif();
      console.log("edit tab", form);
    },
    onReset(tabId) {
      this.$emit("close", { id: tabId });
    },
    updateForm(e) {
      this.profile_id = e.profile_id;
      this.num = e.num;
      this.stg = e.stg;
      this.inn = e.inn;
      this.partnerInn = e.extra?.partner?.inn;
      this.crm_source_type = e.extra?.crm_source_type;
      this.company_name = e.company_name;
      this.company_type = e.company_type;
      this.person_email = e.person_email;
      this.dadd = e.dadd;
      this.client_name = e.extra?.partner?.client_name;
      this.state = e.state;
      this.person_fullname = e.person_fullname;
      this.person_phone = e.person_phone;
      this.id = e.id;
      this.lastUpd = e.lastUpd;
      this.user_id = e.user_id;
      this.is_new = e.is_new;
    },
    formatDateOnlyTime(dadd) {
      return formatDate(dadd, "HH:mm");
    },
    formatDateTime(dadd) {
      return formatDate(dadd, "DD.MM.YYYY");
    },
  },
  watch: {
    tabForm(e) {
      // если данные подгрузились в tabForm заменяем их на форме
      if (e) {
        this.updateForm(e);
      }
    },
  },
  computed: {
    ...mapState({
      optionsState: (state) => state.allTabs.optionsState,
      products: (state) => state.allTabs.products,
      companyTypes: (state) => state.allTabs.companyTypes,
    }),
    ...mapGetters({
      tabForm: "allTabs/tabForm",
      orderIndex: "allTabs/orderIndex",
    }),

    tabId() {
      return this.$route.params.id;
    },
  },

  mounted() {
    this.showLoading();
    this.getOrderData(this.tabId).then(() => this.hideLoading());
  },
});
</script>
