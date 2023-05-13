export default function () {
  return {
    tabs: initial_tabs(),
    orders: [],
    accounts: [],
    isShowForm: false,
    tabForm: {},
    dialog: true,
    optionsState: ["init", "error", "process", "upload_docs"],
    products: ["testtest", "aoo", "test"],
    companyTypes: ["ИП", "ООО"],
    stateColor: {
      error: {
        color: "negative",
      },
      process: {
        color: "positive",
      },
      upload_docs: {
        color: "orange",
      },
    },
  };
}

const initial_tabs = () => {
  const defaultTabs = [
    {
      id: 145678,
      name: "accounts",
      label: "Счета",
      main: "main",
      route: `/`,
    },
    {
      id: 298765,
      name: "orders",
      label: "Заявки",
      main: "main",
      route: `/appl`,
    },
  ];

  // Восстановление вкладок из локального хранилища либо создание двух дефолтных и сохранение их в локальном хранилище
  const current_tabs = JSON.parse(localStorage.getItem("tabs"));
  if (current_tabs == null || current_tabs?.length < 2) {
    localStorage.setItem("tabs", JSON.stringify(defaultTabs));
    return defaultTabs;
  } else {
    return current_tabs;
  }
};
