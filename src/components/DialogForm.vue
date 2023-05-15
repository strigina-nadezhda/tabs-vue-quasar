<template>
  <q-dialog v-model="showForm" transition-show="scale" transition-hide="scale">
    <q-card class="dialogForm" style="width: 100%; max-width: 800px">
      <q-card-section class="row items-center bg-primary text-white">
        <div class="text-h6">Новая заявка</div>
        <q-space />
        <q-btn icon="close" flat round dense @click="closeDialog" />
      </q-card-section>

      <q-card-section class="q-pa-lg">
        <q-form @submit="addNewApplication" @reset="clearForm" class="q-ma-0">
          <div class="row q-col-gutter-x-md q-col-gutter-y-xs">
            <q-input
              outlined
              dense
              v-model="person_fullname"
              label="Имя клиента *"
              lazy-rules
              class="col-xs-12 col-sm-12 col-md-12 col-lg-6"
              :rules="rules"
            />

            <q-input
              outlined
              dense
              v-model="person_phone"
              label="Номер телефона *"
              lazy-rules
              fill-mask
              mask="7 (###) ### - ####"
              class="col-xs-12 col-sm-12 col-md-12 col-lg-6"
              :rules="rules"
            />

            <q-input
              label="E-mail *"
              v-model="person_email"
              type="email"
              outlined
              dense
              lazy-rules
              :rules="rules"
              class="col-xs-12 col-sm-12 col-md-12 col-lg-6"
            />

            <q-input
              label="Название компании *"
              v-model="company_name"
              outlined
              dense
              lazy-rules
              :rules="rules"
              class="col-xs-12 col-sm-12 col-md-12 col-lg-6"
            />

            <q-select
              v-model="company_type"
              :options="companyTypes"
              label="Организационно-правовая форма"
              outlined
              dense
              style="padding-bottom: 20px"
              class="col-xs-12 col-sm-12 col-md-12 col-lg-6"
            />

            <q-input
              outlined
              dense
              v-model="inn"
              label="ИНН клиента*"
              lazy-rules
              :rules="rules"
              mask="## ## ### ### ##"
              class="col-xs-12 col-sm-12 col-md-12 col-lg-6"
            />

            <q-select
              v-model="stg"
              multiple
              :options="products"
              label="Продукт *"
              outlined
              dense
              lazy-rules
              :rules="rules"
              class="col-xs-12 col-sm-12 col-md-12 col-lg-6"
            />

            <q-select
              v-model="state"
              :options="optionsState"
              label="Статус заявки *"
              outlined
              dense
              lazy-rules
              :rules="rules"
              class="col-xs-12 col-sm-12 col-md-12 col-lg-6"
            />
          </div>

          <h6 class="q-ma-none text-bold q-my-md">
            Дополнительная информация:
          </h6>
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

          <q-card-actions
            align="left"
            class="bg-white text-teal q-pa-none q-pt-md"
          >
            <q-btn label="Сохранить" color="primary" type="submit" />
            <q-btn
              label="Отмена"
              type="reset"
              color="primary"
              flat
              class="q-ml-sm"
            />
          </q-card-actions>

          <div class="self-end q-pt-md">
            <div class="text-caption text-right text-grey-8">
              Заявка принята {{ formatDateTime(new Date()) }} в
              {{ formatDateOnlyTime(new Date()) }}.
            </div>
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { defineComponent } from "vue";
import { mapMutations, mapState } from "vuex";
import { ref } from "vue";
import { date } from "quasar";
const { formatDate } = date;

export default defineComponent({
  name: "DialogForm",

  setup() {
    return {
      num: ref(null),
      id: new Date().getTime() * Math.random() * 100000,
      dadd: new Date(),
      profile_id: new Date().getTime() * Math.random() * 1000000000,
      state: ref(null),
      stg: ref(null),
      inn: ref(null),
      company_name: ref(null),
      person_phone: ref(null),
      company_type: ref(null),
      person_email: ref(null),
      lastUpd: new Date(),
      person_fullname: ref(null),

      type: ref("partner"),
      user_id: new Date().getTime() * Math.random() * 1000000000,
      client_name: ref(null),
      partnerInn: ref(null),

      crm_source_type: ref(null),

      rules: [(v) => !!v || "Обязательное поле!"],
    };
  },

  computed: {
    ...mapState({
      showForm: (state) => state.allTabs.isShowForm,
      optionsState: (state) => state.allTabs.optionsState,
      products: (state) => state.allTabs.products,
      companyTypes: (state) => state.allTabs.companyTypes,
    }),
  },

  methods: {
    ...mapMutations({
      closeDialog: "allTabs/closeDialog",
      addOrder: "allTabs/addOrder",
    }),
    formatDateOnlyTime(dadd) {
      return formatDate(dadd, "HH:mm");
    },
    formatDateTime(dadd) {
      return formatDate(dadd, "DD.MM.YYYY");
    },
    getColor(state) {
      const res = this.status[state];
      return res ? res.color : "#FB8C00";
    },
    addNewApplication() {
      const form = {
        id: this.id,
        num: Math.floor(Math.random() * 666) + 1,
        dadd: this.dadd,
        profile_id: this.profile_id,
        state: this.state,
        lastUpd: this.lastUpd,
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

      console.log("FORM", form);

      this.addOrder(form);

      this.clearForm();
    },
    clearForm() {
      this.num = "";
      this.id = "";
      this.dadd = "";
      this.profile_id = "";
      this.state = "";
      this.stg = "";
      this.inn = "";
      this.company_name = "";
      this.person_phone = "";
      this.company_type = "";
      this.person_email = "";
      this.lastUpd = new Date();
      this.person_fullname = "";
      this.extra = {};
      this.closeDialog();
    },
  },
});
</script>
