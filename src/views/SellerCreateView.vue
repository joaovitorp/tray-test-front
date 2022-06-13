<template>
  <div class="sale-create">
    <div class="mx-auto container mt-7 px-4 py-2 text-left bg-white shadow">
      <div class="mb-4">
        <h2 class="font-bold text-lg">Novo Vendedor</h2>
      </div>
      <form action="" method="post" @submit.prevent="doCreateSale" class="flex flex-nowrap mb-4">
        <input v-model="name" type="text" class=" bg-gray-100 rounded p-2 mr-4" placeholder="Nome" />
        <input v-model="email" type="email" class=" bg-gray-100 rounded p-2 mr-4" placeholder="Email" />
        <button type="submit" class="rounded bg-emerald-500 hover:bg-emerald-600 text-white px-4 ">
          Cadastrar Vendedor
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { useToast } from "vue-toastification";

export default {
  name: 'SaleCreateView',
  components: {
  },
  data() {
    return {
      name: '',
      email: ''
    }
  },
  methods: {
    async doCreateSale() {
       const toast = useToast();
      try {
        await this.$axios.post(`/sellers`, {
          name: this.name,
          email: this.email
        })
        toast.success(`Vendedor ${this.name} foi adicionado`)
        this.$router.push({ name: 'sellers' })
      } catch (error) {
        if (error.response.status === 422) {
            const msg = Object.values(error.response.data.errors)
            msg.forEach((item, i) => {
             toast.error(`Error: ${item}`)
            })
          }
      }

    }
  }
}
</script>
