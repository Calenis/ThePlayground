<template>
    <Modal ref="modal">
        <form class="app-form">
            <div class="form-control">
                <label class="label"> Title </label>
                <input  v-model="form.title" class ="form-input" type="text">
            </div>
            <div class="form-control">
                <label class="label"> Description </label>
                <textarea v-model="form.description" cols="30" rows="5" class ="form-input" />
                <div class="app-error">
                    <div class="form-error">
                        {{ formError }}
                    </div>
                </div>
            </div>
            <button @click="submitForm" type="button" class="app-button is-primary">Confirm</button>
        </form>
    </Modal>
</template>

<script>

import Modal from '@/components/modal'
export default {
    components: {
        Modal
    },
    data() {
            return {
                form: {
                    title: '',
                    description: ''
                },
                formError: ''
            }
        },
    computed: {
        isFormValid() {
            return this.form.title.length >= 8 && this.form.description.length >= 10 ? true: false
        },
        modal() {
            return this.$refs.modal
        }

    },
    methods: {
        submitForm() {
            if(this.isFormValid) {
                this.formError = ''
                this.$emit('formSubmitted', {...this.form})
                this.modal.close()
                this.resetForm() 
            } else {
                this.formError = "Please fill out the form correctly"
            }
        },
        resetForm() {
            this.form.title=''
            this.form.description=''
        }

    }
}

</script>

<style scoped>

.form-error {
    margin: 5px 0px 10px 0;
}

</style>