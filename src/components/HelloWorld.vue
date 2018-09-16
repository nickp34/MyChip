<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <MyChip
          :label="label"
        />
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import MyChip from './MyChip';
import { mapActions } from 'vuex';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    MyChip,
  },
  data() {
    return {
      selectedTitles: [
        'Unreal',
        'Untreal Tournament 2004',
      ],
      availableTitles: [
        'Unreal',
        'Unreal II',
        'Unreal Tournament',
        'Unreal Tournament 2003',
        'Unreal Tournament 3',
        'Untreal Tournament 2004',
      ],
      label: "Best UT Titles",
    }
  },
  methods: {
    ...mapActions('game', [
      'setAvailable',
    ]),
    ...mapActions('game', {
      setSelectedTitles: 'setSelected',
    }),
  },
  mounted() {
    this.setAvailable(this.availableTitles);
    this.setSelectedTitles(this.selectedTitles);
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
