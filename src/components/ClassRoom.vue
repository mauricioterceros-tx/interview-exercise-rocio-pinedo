<template>
  <v-card flat>
    <v-card-title v-if="registrationState" class="pa-0">
      <span>Registration in progress</span>
    </v-card-title>
    <v-card-title v-else class="pa-0">
      <span>Registration was closed</span>
    </v-card-title>
    <v-card-text>
      <v-list>
        <v-list-item :key="student.name" v-for="student in registeredStudents">
          <v-list-item-content>{{ student.name }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "ClassRoom",
  props:{
    registrationState: {
      value: Boolean,
      default: false
    }  
  },
  data: () => ({
    registeredStudents: []
  })
};
</script>
