<template>
  <div>
    <v-combobox
      v-model="value"
      :items="availableChips"
      label="Best UT Titles"
      chips
      clearable
      prepend-icon="filter_list"
      solo
      multiple
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
  </div>
</template>

<script>
  export default {
    props: {
      value: Array,
      availableChips: Array,
    },
    methods: {
      remove (item) {
        let selected = Object.assign([], this.value);
        selected.splice(selected.indexOf(item), 1);
        selected = [...selected];

        this.$emit('input', selected);
      },
    },
  };
</script>
