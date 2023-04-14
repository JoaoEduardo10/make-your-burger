<template>
  <section>
    <Message :msg="msg" v-show="msg" />
    <Loading v-show="show" />
    <div>
      <form @submit.prevent="createBurger">
        <div class="input-conteiner">
          <label for="name"> Nome do Cliente </label>
          <input
            type="text"
            name="name"
            id="name"
            v-model="name"
            placeholder="digite o seu nome"
          />
        </div>
        <div class="input-conteiner">
          <label for="bread"> Escolha o pão </label>
          <select name="bread" id="bread" v-model="bread">
            <option value="">Selecione o seu pâo</option>
            <option v-for="bread in breads" :key="bread.id" :value="bread.tipo">
              {{ bread.tipo }}
            </option>
          </select>
        </div>
        <div class="input-conteiner">
          <label for="meat"> Escolha a carne do seu Burger </label>
          <select name="meat" id="meat" v-model="meat">
            <option value="">Selecione o tipo de carne</option>
            <option v-for="meat in meats" :key="meat.id" :value="meat.tipo">
              {{ meat.tipo }}
            </option>
          </select>
        </div>
        <div id="options-conteiner" class="input-conteiner">
          <label id="label-title" for="options">
            Selecione os opcionais:
          </label>
          <div
            class="checkbox-conteiner"
            v-for="options in optionsData"
            :key="options.id"
          >
            <input
              type="checkbox"
              name="options"
              id="options"
              v-model="option"
              :value="options.tipo"
            />
            <span>{{ options.tipo }}</span>
          </div>
        </div>

        <div class="input-conteiner">
          <button type="submit">Criar meu Burger</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script lang="ts">
import type {
  IIngredientes,
  IPropsBurgerForms,
} from "../interfaces/interfaces-BurgerForms";
import Message from "./Message.vue";
import Loading from "./Loading.vue";

const variablesBurgs: IPropsBurgerForms = {
  name: "",
  bread: "",
  meat: "",
  option: [],
  breads: [],
  meats: [],
  optionsData: [],
  status: "solicitado",
  msg: "",
};

export default {
  name: "BurgerForm",
  components: {
    Message,
    Loading,
  },
  data() {
    return {
      ...variablesBurgs,
      show: false,
    };
  },

  methods: {
    async getIngredientes() {
      const response = await fetch("http://localhost:3000/ingredientes");
      const data: IIngredientes = await response.json();

      this.breads = data.paes;
      this.meats = data.carnes;
      this.optionsData = data.opcionais;
    },

    async createBurger() {
      const data = {
        name: this.name,
        bread: this.bread,
        meat: this.meat,
        option: Array.from(this.option),
        status: "Solicitado",
      };

      this.show = true;

      await fetch("http://localhost:3000/burgers", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });
      this.show = false;

      this.msg = "Pedido realizado com sucesso";

      setTimeout(() => {
        this.msg = "";
      }, 3000);

      this.name = "";
      this.meat = "";
      this.bread = "";
      this.option = [];
      ("");
    },
  },

  mounted() {
    this.getIngredientes();
  },
};
</script>

<style scoped>
form {
  max-width: 370px;
  margin: 0% auto;
}

.input-conteiner {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
label {
  font-weight: bold;
  margin-bottom: 15px;
  color: #222;
  padding: 5px 10px;
  border-left: 4px solid #fcba03;
}

input,
select {
  padding: 5px 10px;
  width: 300px;
}
#options-conteiner {
  flex-direction: row;
  flex-wrap: wrap;
}

#label-title {
  width: 100%;
}
.checkbox-conteiner {
  display: flex;
  align-items: flex-start;
  width: 50%;
  height: 100%;
  margin-bottom: 20px;
}

.checkbox-conteiner span,
.checkbox-conteiner input {
  margin-left: 6px;
  font-weight: bold;
}

button {
  background-color: #222;
  color: #fcba03;
  font-weight: bold;
  border: 2px solid #222;
  padding: 10px;
  font-size: 16px;
  margin: 0 auto;
  cursor: pointer;
  transition: all 300ms ease-in-out;
  width: 50%;
}

button:hover {
  background-color: transparent;
  color: #222;
}

@media (max-width: 416px) {
  button {
    width: 70%;
  }
}
</style>
