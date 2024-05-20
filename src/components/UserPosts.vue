<template>
    <div class="PostList">
    <input  :title="title"  @input="title = $event.target.value" type="text" placeholder="enter the title">
    <input :fullDescription="fullDescription" @input="fullDescription = $event.target.value" type="text" placeholder="enter full description">
    <input :briefDescription="briefDescription" @input="briefDescription = $event.target.value" type="text" placeholder="enter brief description">
    <input type="submit" value="add new post">
    <input @click="postIt" type="submit" value="postIt">
        <!-- <input  @click="getPosts" class="inputField__submit" type="submit" value="getPosts"> -->
        <input  @click="postTitle" class="inputField__submit" type="submit" value="postTitle">
    <div>{{ $store.state.globalAllUsers[this.currentPostId].fullName }}</div>
    <div class="postForm" v-for="post in $store.state.globalAllUsers[this.currentPostId].post">
        
                    <div class="postSection_1">
                            <div class="postItem">{{ 'title ' +  post.title }}</div>
                        
                    </div>
                    <div class="postSection_2">
                            <div class="postItem">{{ 'briefDesc ' +  post.briefDescription }}</div>
                            <div class="postItem">{{ 'full ' +  post.fullDescription }}</div>
                        </div>
                    <div class="postSection_3">
                            <div class="postItem">{{ 'num of comments ' + post.comments }}</div>
                            <div class="postItem">{{ 'last update ' + post.dateTime }}</div>
                    </div>
     </div>  
    </div>
</template>

<script>
import axios from 'axios'


    export default {
        mounted() {
            this.getPosts()
        },
        
        data() {
            return {
                title:'',
                fullDescription:'',
                briefDescription:'',
                // currentUserPosts:[],
                currentUserId:0,
                currentName:'',
                currentPostId:0
            }
        },
        
        methods: {
            postTitle() {
            console.log("http://localhost:8080/FrontTestingService-0.0.1/post?userInfoId=" + this.currentUserId)
                // console.log(this.$store.state.globalAllUsers)
                // console.log(JSON.stringify(this.$store.state.globalAllUsers))n          
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
            },
            postIt() {
                axios.post("http://localhost:8080/FrontTestingService-0.0.1/post?userInfoId=" + this.currentUserId, {
                    briefDescription: this.briefDescription,
                    fullDescription: this.fullDescription,
                    title: this.title
                })
                console.log("globalAllPosts")
                console.log(this.$store.state.globalAllPosts)
                console.log("globalAllUsers")
        console.log(this.$store.state.globalAllUsers)
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
    display:flex;
    justify-content: space-between;
}
</style>