<template>
    
    <div  class="PostList">
        <!-- <h2>{{ $store.state.globalAllUsers }}</h2> -->
        
        <input @click="toggle"  class="inputField__submit" type="submit" value="findPost">
        <input  v-show="isVisible"  @input="currentPostId = $event.target.value"  type="number" :placeholder=placeholder>
        
        <router-link :to="'/postID/' + currentPostId">
            <input @click="getPost" v-show="isVisible" type="submit" value="getPost">
        </router-link>
        
        <input @click="setInfo"  class="inputField__submit" type="submit" value="deletePost">
        <input  @click="sort" class="inputField__submit" type="submit" value="sort">
        
            
                 
                <div @click="log" class="postForm" v-for="post in $store.state.globalAllPosts">
                    
                    <div class="postSection_1">
                            <div class="postItem">{{ 'title ' +  post.title }}</div>
                        <div v-for="(user,index) in $store.state.globalAllUsers" :key="index">   
                            <router-link  :to="'/userPosts/' + post.user.id" >
                                <div v-if="index === 0">{{ 'userName ' + post.user.fullName }}</div>
                            </router-link>
                            
                        </div>
                    </div>
                    <div class="postSection_2">
                        <router-link :to="'/userPostWithComms/' + post.user.id + '/' + post.id">
                            <div class="postItem">{{ 'briefDesc ' +  post.briefDescription }}</div></router-link>
                            
                        </div>
                    <div class="postSection_3">
                            <div class="postItem">{{ 'num of comments ' + post.comments }}</div>
                            <div class="postItem">{{ 'last update ' + post.dateTime }}</div>
                            <div class="postItem">{{ 'postID ' + post.id }}</div>
                    </div>
                
                </div>  
                
                
               
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        mounted() {
                this.getLogin();
                this.findAll();
                this.sort();
                
        },
        
        data() {
            return {
            currentPostId:0,   
            isVisible:false,
            
            placeholder:'enter post id'           
        }
        },

        methods: {
            toggle() {
                if(this.isVisible)
                this.isVisible = false
                else {
                    this.isVisible = true
                }
            },
            getLogin() {
        
        axios.post("http://localhost:8080/auth-service/login?username=RonaldWeasley&password=4C1iTdXDpN")
       .then((response) =>console.log('logged in'))
       .catch((error)=> console.log(error))
 
       
     },
            async getPost() {
              await  axios.get('http://localhost:8080/FrontTestingService-0.0.1/post/' + this.currentPostId)
                .then((response) => {
                    // this.$store.state.currentPost = response.data
                    this.$store.state.currentPost = response.data
                })
                .catch((error) => {
                    
                    this.placeholder = 'enter correct post ID'
                })
                
                // console.log(this.placeholder)
                
                
     },
            deletePost() {
               axios.delete("http://localhost:8080/FrontTestingService-0.0.1/userInfo/8") 
            },
            setPost() {
                axios.post('http://localhost:8080/FrontTestingService-0.0.1/post?userInfoId=9',{
                    briefDescription: "string",
                    fullDescription: "string",
                    title: "string"
                 }
                
            )
            },
             async findAll() {
                 await axios.get("http://localhost:8080/FrontTestingService-0.0.1/userInfo/findAll"
    
    ).then((response) => {
        this.$store.state.globalAllUsers = response.data
        
        this.$store.state.globalAllPosts = this.$store.state.globalAllUsers.reduce((acc,user) => [...acc,...user.post.map(post=>({
            user: {
                id:user.id,
                blogName:user.blogName,
                fullName:user.fullName
            },
            ...post,
        }))],[])
        
    })
      .catch((error)=> console.log(error))
        
        console.log("globalAllPosts")
        console.log(this.$store.state.globalAllPosts)
        console.log("globalAllUsers")
        console.log(this.$store.state.globalAllUsers)
        // console.log(JSON.stringify(this.$store.state.globalAllPosts[0].user))
        
    },

    async sort() {
      this.$store.state.globalAllPosts = this.$store.state.globalAllPosts.sort(function (a, b) {
      if (b.dateTime > a.dateTime) {
        return 1;
      }
      if (b.dateTime < a.dateTime) {
        return -1;
      }
      return 0;
    });
    
    }
        },
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