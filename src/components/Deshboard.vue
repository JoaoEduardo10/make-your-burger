<template>
  <div class="conteiner">
    <table class="burger-table">
      <Message :msg="msg" v-show="msg" />
      <thead class="heading-table">
        <tr>
          <th class="order-id">#</th>
          <th>Cliente:</th>
          <th>Pão:</th>
          <th>Carbe:</th>
          <th>Opcionais</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr class="burger-table-row" v-for="burger in burgers" :key="burger.id">
          <td class="number">{{ burger.id }}</td>
          <td class="name">{{ burger.nome }}</td>
          <td class="bread">{{ burger.pao }}</td>
          <td class="meat">{{ burger.carne }}</td>
          <td class="options">
            <ul class="list-options">
              <li v-for="(option, index) in burger.opcionais" :key="index">
                {{ option }}
              </li>
            </ul>
          </td>
          <td class="select">
            <select name="status" @change="updateBurger($event, burger.id)">
              <option value="">Selecione</option>
              <option
                :value="s.tipo"
                v-for="s in status"
                :key="s.id"
                :selected="burger.status == s.tipo"
              >
                {{ s.tipo }}
              </option>
            </select>
            <button @click="deleteBurger(burger.id)">Cancelar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import type {
  IBurgers,
  IPropsDeshboard,
  TStatus,
} from "../interfaces/interfaces-Deshboard";
import Message from "./Message.vue";

const variablesDeshboard: IPropsDeshboard = {
  burger_Id: 0,
  burgers: [],
  status: [],
  msg: "",
};

export default {
  name: "Deshboard",
  data() {
    return {
      ...variablesDeshboard,
    };
  },

  components: {
    Message,
  },

  methods: {
    async getPedidos() {
      const response = await fetch("http://localhost:3000/burgers");

      const data: IBurgers[] = await response.json();

      this.burgers = data;
    },

    async getStatus() {
      const response = await fetch("http://localhost:3000/status");

      const data: TStatus[] = await response.json();

      this.status = data;
    },

    async deleteBurger(id: number) {
      await fetch(`http://localhost:3000/burgers/${id}`, {
        method: "DELETE",
      });

      this.msg = `Pedido N° ${id} foi deletado com sucesso`;

      setTimeout(() => {
        this.msg = "";
      }, 2000);

      this.getPedidos();
    },

    async updateBurger(event: any, id: number) {
      const option: string = event.target.value;

      await fetch(`http://localhost:3000/burgers/${id}`, {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ status: option }),
      });

      this.msg = `Pedido N° ${id} foi atualizado com sucesso`;

      setTimeout(() => {
        this.msg = "";
      }, 2000);
    },
  },

  mounted() {
    this.getPedidos();
    this.getStatus();
  },
};
</script>

<style scoped>
.conteiner {
  max-width: 1200px;
  overflow-x: auto;
}

table {
  width: 100%;
  margin: 0 auto;
}

tbody {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

tbody tr {
  display: flex;
  justify-content: space-between;
}

.heading-table {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  font-weight: bold;
  padding: 12px;
  border-bottom: 3px solid #333;
}

.heading-table tr {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

th {
  text-align: left;
}

.heading-table th,
.burger-table-row td {
  width: 19%;
}

.burger-table-row {
  width: 100%;
  padding: 12px;
  border-bottom: 1px solid #ccc;
}

.order-id,
.number {
  width: 5%;
}

.meat {
  transform: translateX(4%);
}

.list-options {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  gap: 5px;
}

.select > select {
  margin-bottom: 12px;
  margin-right: 12px;
  padding: 10px 0;
}

button {
  background-color: #222;
  color: #fcba03;
  font-weight: bold;
  border: 2px solid #222;
  font-size: 12px;
  padding: 10px;
  margin: 0% auto;
  cursor: pointer;
  transition: all 300ms ease-in-out;
}

button:hover {
  background-color: transparent;
  color: #222;
}

@media (max-width: 417px) {
  table {
    width: 600px;
    overflow-x: scroll;
  }
}
</style>
