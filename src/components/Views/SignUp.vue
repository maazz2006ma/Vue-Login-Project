<template>
    <v-sheet class="mx-auto" width="300">
      <form @submit.prevent="submit">
        <v-container>
          <v-col>
            <v-text-field v-model="name.value.value" :counter="10" :error-messages="name.errorMessage.value"
              label="Name"></v-text-field>

            <v-text-field v-model="password.value.value" :counter="7" :error-messages="password.errorMessage.value"
              label="Phone Number"></v-text-field>

            <v-text-field v-model="email.value.value" :error-messages="email.errorMessage.value"
              label="E-mail"></v-text-field>

            <v-btn class="me-4" type="submit">
              submit
            </v-btn>
          </v-col>
        </v-container>
      </form>
    </v-sheet>
</template>

<script setup lang="ts">
import { useField, useForm } from 'vee-validate'

const { handleSubmit } = useForm({
  validationSchema: {
    name(value: string) {
      if (value?.length >= 2) return true

      return 'Name needs to be at least 2 characters.'
    },
    password(value: string) {
      if (value?.length > 9 && /[0-9-]+/.test(value)) return true

      return 'Phone number needs to be at least 9 digits.'
    },
    email(value: string) {
      if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

      return 'Must be a valid e-mail.'
    },
  },
})
const name = useField('name')
const password = useField('password')
const email = useField('email')

const submit = handleSubmit(values => {
  alert(JSON.stringify(values, null, 2))
})
</script>