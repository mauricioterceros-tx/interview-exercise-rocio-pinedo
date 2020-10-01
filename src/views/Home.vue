<template>
  <v-card flat>
    <v-card-title>InternShip Students Registation</v-card-title>
    <v-card-text>
      <v-container fluid>
        <v-row>
          <v-switch label="Close Registration" @click="enableRegistration = !enableRegistration" />
        </v-row>
        <v-row class="d-flex align-center">
          <v-text-field class="pr-2" label="Student Name" v-model="student.name" :disabled="!enableRegistration" />
          <v-btn color="primary" :disabled="!enableRegistration" @click="registerStudent">Register</v-btn>
        </v-row>
        <v-row>
          <ClassRoom :registrationState="enableRegistration"/>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import ClassRoom from "@/components/ClassRoom";

export default {
  name: "Home",

  data (){
    return {
      enableRegistration: true, 
      student: {
        name: ""
      }
    }
  },
  components: {
    ClassRoom
  },
  methods: {
    registerStudent() {
      this.$store.dispatch("addStudent", this.student);
    }
  }
};
</script>
