<template>
  <li
    v-if="htmlType === 'select'"
    class="flex-row"
  >
    <label :for="'select-'+id" class="select-label">
      <slot></slot><span v-if="required" class="required-field">*</span>
    </label>
    <select
      :id="'select-'+id"
      :required="required"
      :readonly="readonly"
      :name="name"
      :multiple="multiple"
    >
      <option :value="null"></option>
      <option v-for="option in items" :value="option.value" :name="option.name">{{option.name}}</option>
    </select>

  </li>

  <li
    v-else
  >
    <legend class="radio-label"><slot></slot></legend>
    <label v-for="option in items" :for="'select-'+option.value">
      <input
        :type="htmlType"
        :id="'select-'+option.value"
        :name="name"
        :value="option.value"
        :required="required"
      >
      {{option.name}}
    </label>
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import BaseInputInterface from "~/components/Atoms/Input/BaseInputInterface";
import BaseSelectInputInterface from "~/components/Atoms/Input/SelectInput/BaseSelectInputInterface";

@Component
export default class BaseSelectInput extends Vue implements BaseSelectInputInterface{
  @Prop({required:true, type:String}) id!: string;
  @Prop({required:true, type:String}) name!: string;
  @Prop({
    required:false,
    type:String,
    default:"select",
    validator(value: string): boolean {
      let expectedHtmlType = ['checkbox', 'radio', 'select'];
      return expectedHtmlType.includes(value);
    }
  }) htmlType!: string;
  @Prop({required:false, type:Boolean, default:false}) required!: boolean;
  @Prop({required:false, type:Boolean, default:false}) readonly!: boolean;
  @Prop({required:false, type:Array, default:[]}) items!: Array<object>;
  @Prop({required:false, type:Boolean, default:false}) multiple!: boolean;
  @Prop({required:false, default:null}) value!: any;

}
</script>

<style scoped>
li{
  padding: .5em;
  align-items: normal;
}

li > .select-label{
  flex: 1;
  padding: .5em 1em .5em 0;
}

li > select{
  flex: 2;
}

label span.required-field{
  margin-left: 6px;
  color: var(--danger_text);
}

@media screen and (max-width:760px) {
  .flex-row {
    flex-direction: column;
  }
}

</style>
