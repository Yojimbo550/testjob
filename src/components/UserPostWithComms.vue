<template>
    <div>
        <div>{{ $store.state.globalAllUsers[this.currentPostId].post[this.currentPostInArray] }}</div>
        
    </div>
</template>

<script>
    export default {
        mounted() {
            this.getPosts()
        },
        data() {
            return {
                currentPostId:0,
                currentUserId:0,
                currentPostInArray:0,
            }
        },
        methods: {
            getPosts() {
                
                this.currentUserId = this.$route.params.id
                 for(let i = 0; i < this.$store.state.globalAllUsers.length ; i++) {
                    if(this.currentUserId == this.$store.state.globalAllUsers[i].id) {
                        this.currentPostId = i
                    }                    
                 }
                 this.currentPostInArray = this.$route.params.postId
                 for(let i = 0; i < this.$store.state.globalAllUsers.length ; i++) {
                    if(this.currentPostInArray == this.$store.state.globalAllUsers[i].id) {
                        this.currentPostInArray = i
                    }                    
                 }
                 
                 
                // console.log( this.$store.state.globalAllUsers.includes(this.currentId))
                console.log(this.currentPostId)
                    console.log(this.currentUserId)
                    console.log(this.currentPostInArray)
                    console.log(this.$store.state.globalAllUsers[0].post)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>