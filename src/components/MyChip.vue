<template>
  <div>
    <v-combobox
      v-model="selectedChips"
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
    data: () => ({
      selectedChips: [
        'Unreal', 
        'Untreal Tournament 2004',
      ],
      availableChips: [
        'Unreal', 
        'Unreal II', 
        'Unreal Tournament', 
        'Unreal Tournament 2003',
        'Unreal Tournament 3', 
        'Untreal Tournament 2004',        
      ],
    }),
    methods: {
      remove (item) {
        this.selectedChips.splice(this.selectedChips.indexOf(item), 1);
        this.selectedChips = [...this.selectedChips];
      },
    },
  };
</script>
