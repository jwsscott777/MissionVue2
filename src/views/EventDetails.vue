<template>
  <div class="container" v-if="event">
    <img alt="Vue logo" src="../assets/logo3.png" />
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
    <button @click="eventReg()">Register for Event</button>
  </div>
</template>

<script>
import EventService from "@/services/EventService.js";
export default {
  props: ["id"],
  data() {
    return {
      event: null
    };
  },
  created() {
    EventService.getEvent(this.id)
      .then(response => {
        this.event = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    eventReg() {
      console.log("clicked");
      this.$router.push("/FormPage");
    }
  }
};
</script>

<style scoped>
.container {
  height: 80vh;
}
</style>
