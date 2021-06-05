<template>
  <div class="FormContainer">
    <img alt="Vue logo" src="../assets/logo3.png" />
    <form class="nameForm" @submit.prevent="onSubmit">
      <h3>Enter your name to access the class</h3>
      <label for="text">Name</label>
      <input id="name" v-model="name" />
      <label>Time</label>
      <select v-model="time">
        <option value="first">4:30</option>
        <option value="second">5:30</option>
      </select>
      <input class="button" type="submit" value="Submit" />
      <div v-for="name in regName" :key="name.id" class="pill">
        <span @click="deleteName(name)">{{ name }}</span>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      time: "",
      regName: []
    };
  },
  methods: {
    onSubmit() {
      this.regName.push(this.name);
      console.log(this.regName);
      this.name = "";
    },
    deleteName(name) {
      this.regName = this.regName.filter(item => {
        return name !== item;
      });
    }
  }
};
</script>

<style scoped>
.FormContainer {
  height: 80vh;
}
.nameForm {
  max-width: 420px;
  margin: 30px auto;
  background: #eee;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: blue;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
h3 {
  font-size: 20px;
  color: orange;
}
p {
  color: orange;
}
.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}
</style>
