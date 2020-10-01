<template>
  <v-card flat>
    <v-card-title>InternShip Students Registation</v-card-title>
    <v-card-text>
      <v-container fluid>
        <v-row>
          <v-switch label="Close Registration" />
        </v-row>
        <v-row class="d-flex align-center">
          <v-text-field class="pr-2" label="Student Name" />
          <v-btn color="primary">Register</v-btn>
        </v-row>
        <v-row>
          <ClassRoom />
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import ClassRoom from "@/components/ClassRoom";

export default {
  name: "Home",

  components: {
    ClassRoom
  }
};
</script>
