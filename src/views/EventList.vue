<template>
  <h1>Mission Events</h1>
  <div class="events">
    <img alt="Vue logo" src="../assets/logo.png" />
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";

export default {
  name: "EventList",
  components: {
    EventCard
  },
  data() {
    return {
      events: [
        {
          id: 5928101,
          category: "mission class",
          title: "Basic Strength Test",
          description: "Find out what your limits are",
          location: "Ft Lauderdale",
          date: "July 11, 2021",
          time: "4:30",
          organizer: "Gabe Sage"
        },
        {
          id: 4539076,
          category: "mission kids",
          title: "Beginning Kids",
          description: "Kids learn the fundamentals",
          location: "Miami",
          date: "July 11, 2021",
          time: "5:30",
          organizer: "Gabe Sage"
        },
        {
          id: 5829047,
          category: "mission intermediate",
          title: "Intermediate Training",
          description: "Learn new levels of endurance",
          location: "Ft Lauderdale",
          date: "July 18, 2021",
          time: "4:30",
          organizer: "Gabe Sage"
        },
        {
          id: 9923100,
          category: "mission advanced",
          title: "Advanced Training",
          description: "Find out what your limits are",
          location: "Ft Lauderdale",
          date: "June 18, 2021",
          time: "5:30",
          organizer: "Gabe Sage"
        }
      ]
    };
  }
};
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
