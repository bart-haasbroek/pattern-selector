<template>
  <div class="patterns__container wrapper-content">
    <div class="patterns__preview"
      v-for="pattern in patterns"
      :key="pattern.id"
      :style="{ backgroundImage: 'url(' + pattern.image + ')' }"
    >
        <button
          v-if="!currentPattern || currentPattern.id !== pattern.id"
          @click="changeBackground(pattern)"
        >
          Preview
        </button>
        <button
          v-else
          @click="resetPattern(pattern)"
        >
          Reset
        </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
      ...mapGetters({
        patterns: 'patterns/getPatterns',
        currentPattern: 'patterns/getCurrentPattern',
    }),
  },
  data() {
    return {
      images: [],
    };
  },
  methods: {
    changeBackground(pattern) {
      this.$store.commit('patterns/setCurrentPattern', pattern);
    },
    resetPattern(pattern) {
      this.$store.commit('patterns/resetCurrentPattern');
    },
  }
}
</script>

<style lang="scss">
button {
  margin: 0;
  padding: 14px 20px;
  border-radius: 10px;
  border: none;
  font-size: 15px;
  background: white;

  &:focus {
    outline: none;
  }
}
.patterns {
  &__container {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  &__preview {
    width: 80%;
    margin: 0 auto;
    border-radius: 20px;
    padding: 20px 10px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: contain;
    margin-bottom: 20px;

    &:last-child{
      margin-bottom: 0;
    }
  }
}
</style>
