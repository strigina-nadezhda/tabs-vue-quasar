export const hasItem = (state) => (item) =>
  state.tabForm.some((value) => value.id === item.id);

export const hasNewTab = (state) => (tab) =>
  state.tabs.some((value) => value.id == tab.id);

export const tabIndex = (state) => (tabId) =>
  state.tabs.findIndex((value) => value.id == tabId);

export const orderIndex = (state) => (tabId) =>
  state.orders.findIndex((value) => value.id == tabId);

export const itemIndex = (state) => (tabId) =>
  state.tabForm.findIndex((value) => value.id == tabId);

export const tabForm = (state) => state.tabForm;
