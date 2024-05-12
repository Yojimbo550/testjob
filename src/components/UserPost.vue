<template>
    
    
    <div class="postForm" v-for="post in $store.state.globalAllUsers[this.currentPostId].post">
        <input  @click="getPosts" class="inputField__submit" type="submit" value="getPosts">
        <!-- <h2>{{ $store.state.globalAllUsers }}</h2> -->
        <input  @click="postTitle" class="inputField__submit" type="submit" value="postTitle">
                    <div class="postSection_1">
                            <div class="postItem">{{ 'title ' +  post.title }}</div>
                        
                    </div>
                    <div class="postSection_2">
                            <div class="postItem">{{ 'briefDesc ' +  post.briefDescription }}</div>
                        </div>
                    <div class="postSection_3">
                            <div class="postItem">{{ 'num of comments ' + post.comments }}</div>
                            <div class="postItem">{{ 'last update ' + post.dateTime }}</div>
                    </div>
     </div>  
</template>

<script>


    export default {
        mounted() {
            this.getPosts()
        },
        
        data() {
            return {
                currentUserPosts:[],
                currentUserId:0,
                currentName:'',
                currentPostId:1
            }
        },
        
        methods: {
            postTitle() {
                // console.log(this.$store.state.globalAllUsers)
                // console.log(JSON.stringify(this.$store.state.globalAllUsers))
                // console.log(this.$store.state.globalAllPosts)
                // console.log(this.currentUserPosts)
                // console.log(this.$store.state.globalAllUsers[this.currentPostId].id )
                // console.log(this.$store.state.globalAllUsers[this.currentPostId].post)
                // console.log(this.currentUserId)
            },
            getPosts() {
                
                this.currentUserId = this.$route.params.id
                 for(let i = 0; i < this.$store.state.globalAllUsers.length ; i++) {
                    if(this.currentUserId == this.$store.state.globalAllUsers[i].id) {
                        this.currentPostId = i
                    }
                    
                 }
                // console.log( this.$store.state.globalAllUsers.includes(this.currentId))
                console.log(this.currentPostId)
                    console.log(this.currentUserId)
            }
        }
    }
</script>

<style lang="scss" scoped>
.PostList {
    display: flex;
flex-direction: column;
gap: 10px;
    .postForm {
    display: flex;
    flex-direction: column;
    border: solid blue 3px;
    border-radius: 10px;
    gap: 10px;
    cursor: pointer;
        .postItem {
            
        }
    }
}
.postSection_1 {
    display:flex;
    justify-content: space-between;
}
.postSection_2 {
    display:flex
}
.postSection_3 {
    display:flex
}
</style>