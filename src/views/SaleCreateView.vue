<template>
  <div class="sale-create">
    <div class="mx-auto container mt-7 px-4 py-2 text-left bg-white shadow">
      <div class="mb-4">
        <h2 class="font-bold text-lg">Adicionando nova venda</h2>
        <small>Código do vendedor: {{ this.$route.params.seller_id }} </small>
      </div>
      <form action="" method="post" @submit.prevent="doCreateSale" class="flex flex-nowrap mb-4">
        <currency-input v-model="total" :options="{
          currency: 'BRL',
          locale: 'pt-BR'
        }" />
        <button type="submit" class="rounded bg-emerald-500 hover:bg-emerald-600 text-white px-4 ">
          Nova Venda
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { useToast } from "vue-toastification";
import CurrencyInput from '@/components/CurrencyInput'

export default {
  name: 'SaleCreateView',
  components: {
    CurrencyInput
  },
  data() {
    return {
      total: ''
    }
  },
  methods: {
    async doCreateSale() {
      const toast = useToast();
      try {
        await this.$axios.post(`/sellers/${this.$route.params.seller_id}/sales`, {
          total: this.total
        })
        toast.success('Venda adicionada com sucesso!')
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
