<template>
  <section>
    <p>Component de messangem</p>
    <div>
      <form>
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
            <option value="">Integral</option>
          </select>
        </div>
        <div class="input-conteiner">
          <label for="meat"> Escolha a carne do seu Burger </label>
          <select name="meat" id="meat" v-model="meat">
            <option value="">Selecione o tipo de carne</option>
            <option value="">Maminha</option>
          </select>
        </div>
        <div id="options-conteiner" class="input-conteiner">
          <label id="label-title" for="options">
            Selecione os opcionais:
          </label>
          <div class="checkbox-conteiner">
            <input
              type="checkbox"
              name="options"
              id="options"
              v-model="options"
              value="salame"
            />
            <span>salame</span>
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
export default {
  name: "BurgerForm",

  data() {
    return {
      name: "",
      bread: "",
      meat: "",
      options: "",
    };
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
</style>
