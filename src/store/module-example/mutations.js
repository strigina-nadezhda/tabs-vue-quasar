export function saveOrderListResponse(state, payload) {
  state.orders = payload;
}

export function saveAccountsResponse(state, payload) {
  state.accounts = payload;
}

export function saveOrderData(state, payload) {
  state.tabForm = { ...payload };
}

export function addNewTab(state, newTab) {
  state.tabs.push(newTab);
  localStorage.setItem(
    "tabs",
    JSON.stringify(state.tabs.filter((tab) => tab.temp !== true))
  );
}

export function openDialog(state) {
  state.isShowForm = true;
}

export function closeDialog(state) {
  state.isShowForm = false;
}

export function addOrder(state, payload) {
  state.orders.push(payload);
}

export function deleteOrder(state, itemIndex) {
  state.orders.splice(itemIndex, 1);
}

export function deleteTab(state, tabIndex) {
  state.tabs.splice(tabIndex, 1);
  localStorage.setItem(
    "tabs",
    JSON.stringify(state.tabs.filter((tab) => tab.temp !== true))
  );
}

export function editOrder(state, tab) {
  state.orders.splice(tab.index, 1, tab.form);
}
