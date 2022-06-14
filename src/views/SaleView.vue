<template>
    <div class="home mt-4">
        <div class="mb-4">
            <h2 class="font-bold text-lg">Listagem de vendas</h2>
            <small>Código do vendedor: {{ this.$route.params.seller_id }} </small>
        </div>
        <div class="mx-auto container mt-7 overflow-x-auto bg-white shadow">
            <table v-if="sales.length > 0" class="w-full whitespace-nowrap">
                <thead class=" text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr>
                        <th class="p-2">
                            <div class="font-semibold text-left">Id</div>
                        </th>
                        <th class="p-2">
                            <div class="font-semibold text-left">Valor Total da Venda</div>
                        </th>
                        <th class="p-2">
                            <div class="font-semibold text-left">Comissão</div>
                        </th>
                        <th class="p-2">
                            <div class="font-semibold text-center">Data da venda</div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="sale in sales" tabindex="0"
                        class="focus:outline-none h-16 border border-gray-100 rounded">
                        <td class="pl-5">
                            {{ sale.id }}
                        </td>
                        <td class="pl-5">
                            {{ toCurrent(sale.total) }}
                        </td>
                        <td class="pl-5">
                            {{ toCurrent(sale.commission) }}
                        </td>
                        <td class="pl-5">
                            {{ formatDate(sale.created_at) }}
                        </td>
                    </tr>
                </tbody>
            </table>
            <div v-else class="py-4 px-2">
                <p class="text-sm mb-5">Nenhuma venda registrada</p>
                <button
                    @click="$router.push({ name: 'sellers.sales.create', params: { seller_id: $route.params.seller_id } })"
                    class="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm font-bold leading-none text-green-600 py-3 px-5 bg-green-100 rounded hover:bg-green-200 focus:outline-none">Nova
                    Venda</button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'SaleView',
    components: {
    },
    data() {
        return {
            sales: []
        }
    },
    methods: {
        toCurrent(value) {
            if (!value) {
                value = 0
            }
            return parseFloat(value).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            })
        },
        formatDate(dateString) {
            const date = new Date(dateString);
            return new Intl.DateTimeFormat('pt-BR').format(date);
        }
    },
    async mounted() {
        this.$axios.get(`sellers/${this.$route.params.seller_id}/sales`).then((response) => {
            this.sales = response.data
        })
    }
}
</script>
