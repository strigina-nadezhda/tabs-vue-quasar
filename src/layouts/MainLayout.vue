<template>
  <q-layout view="lHh Lpr lFf">
    <q-header bordered class="bg-grey-1 text-primary q-mt-sm">
      <q-toolbar>
        <q-avatar rounded size="40px" class="q-pl-xs">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz17l-3EsOtm8-Znyuj0otU2BLDz0OnY4MEvI3ojbUCJO-e9ANZ-8RRJGcYfuKIEXzoSk&usqp=CAU"
          />
        </q-avatar>
        <q-space />
        <q-btn flat round dense icon="menu" @click="showNotif" />
      </q-toolbar>

      <q-tabs dense indicator-color="primary" narrow-indicator inline-label>
        <q-route-tab
          v-for="tab in tabs"
          :key="tab.name"
          :to="tab.route"
          :label="tab.label"
        >
          <q-icon
            name="close"
            size="1.2rem"
            class="tab-icon"
            v-if="!tab.main"
            @click.prevent="closeTab(tab)"
          />
        </q-route-tab>
      </q-tabs>
    </q-header>

    <DialogForm />
    <q-page-container animated>
      <router-view :key="$route.fullPath" @close="closeTab" />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import { mapState, mapActions } from "vuex";
import DialogForm from "src/components/DialogForm.vue";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "MainLayout",

  components: { DialogForm },

  setup() {
    const $q = useQuasar();
    return {
      activeTab: ref("accounts"),
      showNotif() {
        $q.notify({
          timeout: 2500,
          progress: true,
          message: "Мне жаль, но тут пока ничего нет.",
          color: "primary",
          position: "top-right",
        });
      },
    };
  },

  computed: {
    ...mapState({
      tabs: (state) => state.allTabs.tabs,
    }),
  },

  methods: {
    ...mapActions({
      closeTab: "allTabs/closeTab",
    }),
  },
});
</script>
