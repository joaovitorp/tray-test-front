<template>
    <div class="home mt-4">
        <div class="w-full flex flex-nowrap mx-auto container">
            <button @click="$router.push({ name: 'sellers.create' })"
                class="focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 text-sm font-bold leading-none text-blue-600 py-3 px-5 bg-blue-200 rounded hover:bg-blue-200 focus:outline-none">Novo Vendedor</button>
        </div>
        <div class="mx-auto container mt-7 overflow-x-auto bg-white shadow">
            <table v-if="sellers.length > 0" class="w-full whitespace-nowrap">
                <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr>
                        <th class="p-2">
                            <div class="font-semibold text-left">Id</div>
                        </th>
                        <th class="p-2">
                            <div class="font-semibold text-left">Nome</div>
                        </th>
                        <th class="p-2">
                            <div class="font-semibold text-left">Email</div>
                        </th>
                        <th class="p-2">
                            <div class="font-semibold text-center">Comissão</div>
                        </th>
                        <th class="p-2">
                            <div class="font-semibold text-center">Ações</div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="seller in sellers" tabindex="0"
                        class="focus:outline-none h-16 border border-gray-100 rounded">
                        <td class="pl-5">
                            {{ seller.id }}
                        </td>
                        <td class="">
                            <div class="flex items-center pl-5">
                                <p class="text-base font-medium leading-none text-gray-700 mr-2">{{ seller.name }}</p>
                            </div>
                        </td>
                        <td class="pl-5">
                            {{ seller.email }}
                        </td>
                        <td class="pl-5">
                            {{ seller.commission }} %
                        </td>
                        <td class="pl-4">
                            <button
                                @click="$router.push({ name: 'sellers.sales.create', params: { seller_id: seller.id } })"
                                class="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm font-bold leading-none text-green-600 py-3 px-5 bg-green-100 rounded hover:bg-green-200 focus:outline-none">Nova
                                Venda</button>
                            <button
                                 @click="$router.push({ name: 'sellers.sales', params: { seller_id: seller.id } })"
                                class="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm  font-bold leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">Visualizar
                                Vendas</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div v-else class="py-4 px-2">
                <p class="text-sm ">Nenhum vendedor registrado</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'SellerView',
    components: {
    },
    data() {
        return {
            sellers: []
        }
    },
    async mounted() {
        this.$axios.get('sellers').then((response) => {
            this.sellers = response.data
        })
    }
}
</script>
