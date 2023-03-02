import {defineStore} from 'pinia'
import {reactive} from 'vue'

const client = useSupabaseClient()

const { data: products, error } = reactive(
    await useAsyncData( async () => { 
      const { data: products  } = await client.from('products').select('*')
      return { 
        products
      }
    }))
  
const state = () => ({
    products

})

const getters = {
    getProductByID: (state) => (id) => {
        return state.products.find(row => row.id === id)
    },
    getProducts: (state) => {
        return state.products
    }

}


const actions = {
    async addProduct(form) {
            await useAsyncData( async () => {
                await client.from('products').insert(JSON.parse(JSON.stringify(form)))
                .select('*')
                .then( (data) => {
                    //console.log(data.data[0])
                    this.products[Object.keys(this.products)].push(data.data[0])
                    console.log(this.products)
                    }
                )
            }
        ) 
    },
    DeleteProduct() {
        //do stuff
    }

}

export const useProductStore = defineStore('products', {
    state,
    getters,
    actions    
})