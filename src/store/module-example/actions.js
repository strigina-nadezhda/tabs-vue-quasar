import axios from "axios";
import { tabIndex } from "./getters";

export async function getOrderList({ commit }) {
  try {
    const response = await axios.get(
      "https://my-json-server.typicode.com/plushevy/demo/list"
    );
    commit("saveOrderListResponse", response.data);
  } catch (e) {
    alert("Ошибка", e);
    console.log(e);
  }
}

export async function getAccounts({ commit }) {
  try {
    const response = await axios.get(
      "https://my-json-server.typicode.com/plushevy/demo/meetings"
    );
    commit("saveAccountsResponse", response.data);
  } catch (e) {
    alert("Ошибка", e);
    console.log(e);
  }
}

export async function getOrderData(
  { state: { orders }, commit, dispatch },
  id
) {
  const order = orders.find((e) => e.id == id);
  const isLocallyCreated = order?.is_new ?? false;

  try {
    const orderData = isLocallyCreated
      ? order
      : await axios
          .get(`https://my-json-server.typicode.com/plushevy/demo/orders/${id}`)
          .then((response) => response.data);

    commit("saveOrderData", orderData);
  } catch (e) {
    console.log(e);
    alert(`Заявление ${id} не найдено`, e);
    dispatch("closeTab", { id });
  }
}

export async function closeTab({ state, commit }, { id }) {
  const index = tabIndex(state)(id);
  commit("deleteTab", index);
  const lastTab = state.tabs[index - 1];
  this.$router.push(lastTab.route);
}
