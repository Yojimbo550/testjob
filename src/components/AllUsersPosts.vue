<template>
<div>
    <div v-for="post in posts">
        {{ post }} 
     </div> 
</div>
</template>

<script>
    
    export default {
        
       
             
            props: {
                posts: Array
            }
        }
    
</script>

<style lang="scss">

</style>     