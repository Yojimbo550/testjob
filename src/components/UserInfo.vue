<template>
    <div class="PostList">
        <input @submit.prevent="setInfo"  @click="setInfo" class="inputField__submit" type="submit" value="setInfo">
        <!-- <input  @click="deletePost" class="inputField__submit" type="submit" value="deletePost"> -->
        <input  @click="sort" class="inputField__submit" type="submit" value="sort">
        
            
                      
                <div @click="log" class="postForm" v-for="post in allPosts">
                    <div class="postSection_1">
                            <div class="postItem">{{ 'title ' +  post.title }}</div>
                        <div v-for="(user,index) in allUsersArray" :key="index">
                            <router-link :to="'/userPost/' + post.user.fullName"><div v-if="index === 0">{{ 'userName ' + post.user.fullName }}</div></router-link>
                            
                        </div>
                    </div>
                    <div class="postSection_2">
                            <div class="postItem">{{ 'briefDesc ' +  post.briefDescription }}</div>
                        </div>
                    <div class="postSection_3">
                            <div class="postItem">{{ 'num of comments ' + post.comments }}</div>
                            <div class="postItem">{{ 'last update ' + post.dateTime }}</div>
                    </div>
                </div>  
            
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        mounted() {
                this.setInfo();
                this.sort();
                
        },
        props:  {
            users: Array
        },
        data() {
            return {
                    allUsersArray:[]
                    ,
                    allPosts:[ {
                        fullName:'',
                        blogName:'',
                        title:'',
                        briefDescription:'',
                        id:0,
                        dateTime:Number
                    }
             ]
            }
        },

        methods: {
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
            setInfo() {
                  axios.get("http://localhost:8080/FrontTestingService-0.0.1/userInfo/findAll"
    
    ).then((response) => {
        
        this.allUsersArray = response.data
        this.allPosts = this.allUsersArray.reduce((acc,user) => [...acc,...user.post.map(post=>({
            user: {
                id:user.id,
                blogName:user.blogName,
                fullName:user.fullName
            },
            ...post,
        }))],[])
        
    })
      .catch((error)=> console.log(error))
      console.log(this.allPosts)
    
     
    
      
      console.log(this.allUsersArray)
        console.log(this.allPosts)
        
    },
    log(){
console.log("click")
    },
    sort() {
        this.allPosts = this.allPosts.sort(function (a, b) {
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