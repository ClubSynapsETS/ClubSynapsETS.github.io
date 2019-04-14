<template>
    <div>
        {{msg}}
    </div>

</template>

<script>
    export default {
            data() {
                return {
                    messages: ['hello', 'vue', 'js'],
                    msg: "Hello World! toto",
                    shoppingItems: [
                        { name: 'apple', price: '10' },
                        { name: 'orange', price: '12' }
                    ]
                }
            }
        };
</script>

<style scoped>

</style>