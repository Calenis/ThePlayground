<template>
        <v-list v-for="list in productList" :key="list">
            <v-card  v-for="product in list" :key="product" outline>
                <v-card-title> 
                    {{ product.store_name }} 
                </v-card-title>
                <v-card-subtitle>
                    {{ product.p_weight }} {{ product.p_weight_type }}
                </v-card-subtitle>
                <v-card-text>
                    ${{ product.p_price }} - {{ product.p_name }} : {{ product.p_brand }}
                    <br/> {{ product.p_description }}
                </v-card-text>
                <v-card-text>
                    
                </v-card-text>
        </v-card>
    </v-list>
    <v-btn @click.prevent="dialog=true" >
        Submit
    </v-btn>
    <v-dialog v-model="dialog" width="80%">
        <v-card>
            <v-select label="Region" v-model="form.region" type="text" 
            :items="['CANADA', 'UK', 'USA']"
            ></v-select>
            <v-text-field label="Store Name" v-model="form.store_name" type='text'></v-text-field>
            <v-text-field label="Product Brand" v-model="form.p_brand" type='text'></v-text-field>
            <v-text-field label="Product Name" v-model="form.p_name" type='text'></v-text-field>
            <v-text-field label="Product Description" v-model="form.p_description" type='text'></v-text-field>
            <v-text-field label="Product Price" v-model="form.p_price" type='text'></v-text-field>
            <v-select label="Weight Type" v-model="form.p_weight_type" type="text" 
            :items="['oz', 'lb', 'm', 'L', 'mg', 'g', 'kg']"
            ></v-select>
            <v-text-field label="Product Weight" v-model="form.p_weight" type='text'></v-text-field>
            <v-btn @click.prevent="products.addProduct(form)">
                        Input a bunch of useless data </v-btn>   
        </v-card>
    </v-dialog>
</template>



<script setup>
/*

<v-text-field label="Product Weight Type" v-model="form.p_weight_type" type='text'></v-text-field>
    button
    <v-btn @click.prevent="products.setProduct(form)">
                        Input a bunch of useless data
            </v-btn>
                        <v-btn @click.prevent="submitProduct(form)">
                        Input a bunch of useless data
*/
    import { useProductStore } from '@/store/products'
    

    definePageMeta({layout: 'app-header'})

    const products = useProductStore()
    
    const productList = products.getProducts

    /* const whateverTheFuckIWantToDisplay() {

    } */


    /* const submitProduct = (form) => {
            form={...form}
            products.setProduct(form)
        } */
    //const addProduct = products.setProduct
    //console.log('index log 1: ', productList)



</script>


<script>


export default {
    data() {
        return {
            dialog: false, 
            form:{region: '',
                store_name: '',
                  p_brand:'',
                  p_name:'',
                  p_description: '',
                  p_price: 0,
                  p_weight_type: '',
                  p_weight: 0
            }
        }
    },
    methods: {
        /* submitProduct(form) {
            debugger
            this.form={...form}
            //this.products.setProduct(this.form)
        } */
    }
}

</script>
