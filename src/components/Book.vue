<template>
  <div>
    <v-model:contents @input="$emit('update:contents', $event.target.value)">{{contents}}</v-model:contents>
  </div>
</template>
<script>
export default {
  name: "Book",
  props: ["contents"]
};
</script>
