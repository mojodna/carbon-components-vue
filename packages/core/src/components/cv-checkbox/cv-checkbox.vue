<template>
  <div class="cv-checkbox bx--form-item bx--checkbox-wrapper">
    <label
      :class="[
        'bx--checkbox-label',
        {
          'bx--label--disabled': $attrs.disabled !== undefined && $attrs.disabled,
          'bx--checkbox-label__focus': hasFocus,
        },
      ]"
      :data-contained-checkbox-state="isChecked"
      :data-contained-checkbox-disabled="$attrs.disabled"
    >
      <input
        ref="input"
        v-bind="$attrs"
        v-on="inputListeners"
        class="bx--checkbox"
        type="checkbox"
        :checked="isChecked === true"
        :aria-checked="`${isChecked}`"
        @focus="onFocus"
        @blur="onBlur"
        :value="value"
      />
      {{ label }}
    </label>
  </div>
</template>

<script>
import checkMixin from '../../mixins/check-mixin';

export default {
  name: 'CvCheckbox',
  mixins: [checkMixin],
  inheritAttrs: false,
  props: {
    label: String,
    mixed: Boolean,
  },
  watch: {
    mixed() {
      this.dataMixed = this.mixed;
      if (this.dataMixed && this.checked !== true) {
        this.isChecked = false; // reset check state so mixed takes
      }
    },
  },
  data() {
    return {
      hasFocus: false,
      dataMixed: this.mixed,
    };
  },
  methods: {
    onFocus() {
      this.hasFocus = true;
    },
    onBlur() {
      this.hasFocus = false;
    },
  },
};
</script>

<style lang="scss"></style>
