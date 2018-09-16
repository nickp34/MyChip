<template>
  <div>
    <v-combobox
      :value="getSelected"
      :items="getAvailable"
      :label="label"
      chips
      clearable
      prepend-icon="filter_list"
      solo
      multiple
      dark
      @change="onChange"
    >
      <template slot="selection" slot-scope="data">
        <v-chip
          :selected="data.selected"
          close
          @input="remove(data.item)"
        >
          {{ data.item }}&nbsp;
        </v-chip>
      </template>
    </v-combobox>

    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
      color="red"
      vertical
    >
      {{ text }}
      <v-btn
        dark
        flat
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    props: {
      label: String,
    },
    computed: {
      ...mapGetters('game', ['getSelected', 'getAvailable']),
    },
    data () {
      return {
        snackbar: false,
        timeout: 6000,
        text: 'Chip Removed'
      }
    },
    methods: {
      ...mapActions('game', ['setSelected']),
      remove (item) {
        const selected = Object.assign([], this.getSelected);
        this.setSelected(selected.splice(selected.indexOf(item), 1));
        this.snackbar = true;
      },
      onChange (titles) {
        this.setSelected(titles);
      }
    },
  };
</script>
