<template>
    <v-app id="project"> 
        <div>
            <v-btn to="/">Home</v-btn>
            <v-btn to="/products">Products</v-btn>
        </div>
        <main> 
            <slot />
        </main> 
    </v-app>
</template>



<script setup>

    //viewport: 
    //import { IonApp } from "@ionic/vue"

</script>