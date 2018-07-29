<template>
  <div>
    <v-combobox
      v-model="value"
      :items="available"
      :label="label"
      chips
      clearable
      prepend-icon="filter_list"
      solo
      multiple
      dark
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
  export default {
    props: {
      value: Array,
      available: Array,
      label: String,
    },
    data () {
      return {
        snackbar: false,
        timeout: 6000,
        text: 'Chip Removed'
      }
    },
    methods: {
      remove (item) {
        let selected = Object.assign([], this.value);
        selected.splice(selected.indexOf(item), 1);
        selected = [...selected];

        this.$emit('input', selected);

        this.snackbar = true;
      },
    },
  };
</script>
