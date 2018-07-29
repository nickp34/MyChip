<template>
  <div>
    <v-combobox
      v-model="mySelected"
      @input="add"
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
        mySelected: this.value,
        snackbar: false,
        timeout: 6000,
        text: 'Chip Removed'
      }
    },
    methods: {
      remove (item) {
        this.mySelected.splice(this.mySelected.indexOf(item), 1);
        this.mySelected = [...this.mySelected];

        this.$emit('input', this.mySelected);

        this.snackbar = true;
      },
      add () {
        this.$emit('input', this.value);
      }
    },
  };
</script>
