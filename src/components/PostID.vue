<template>
    <div>
        {{ $store.state.currentPost }}
        <!-- {{ $store.state.currentPost.id }} -->
    </div>
    <router-link :to="'/'">
    <input @click="deletePost" value="deletePost" type="submit">
</router-link>
</template>

<script>
import axios from 'axios'
    export default {
        data() {
            return {
                currentPost:this.$route.params.id
            }
            
        },
        methods: {
          async  deletePost() {
            await axios.delete("http://localhost:8080/FrontTestingService-0.0.1/post/" + this.currentPost)
                // await axios.delete("http://localhost:8080/FrontTestingService-0.0.1/post/" + $store.state.currentPost.id , {
                //     briefDescription: this.briefDescription,
                //     fullDescription: this.fullDescription,
                //     id:this.$route.params.postId,
                //     title: this.title
                // })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>