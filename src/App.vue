<template>
  
  <div>
    <input  @click="getPost" class="inputField__submit" type="submit" value="Post">
    <!-- <all-users-posts :posts="posts"/> -->
    <user-info/>
</div>
<RouterView></RouterView>
</template>
<script>
import axios   from 'axios' 
import AllUsersPosts from "@/components/AllUsersPosts.vue"
import UserInfo from "@/components/UserInfo.vue"

export default {
  components: {
    AllUsersPosts,UserInfo
    
  },
  data() {
    return{
      posts : {
                    briefDescription : '',
                    comments : [ 
                        {
                        comment : {
                            dateTime :'',
                            email:'',
                            id:0,
                            textComment:'',
                            userInfo:''
                        }
                        }
                    ],
                    dateTime:'',
                    fullDescription:'',
                    id:'',
                    title:'',
                    userInfoId:0
                },
      users:{
                blogName:'',
                fullName:'',
                id:this.id,
                post : {
                    briefDescription : '',
                    comments : [ 
                        {
                        comment : {
                            dateTime :Number,
                            email:'',
                            id:this.id,
                            textComment:'',
                            userInfo:''
                        }
                        }
                    ],
                    dateTime:Number,
                    fullDescription:'',
                    id:this.id,
                    title:''
                }
            }           

      
    }
    
  },
    mounted() {
      this.getLogin();
      this.getPost()
    },
  methods: {
      getLogin() {
        
       axios.post("http://localhost:8080/auth-service/login?username=RonaldWeasley&password=4C1iTdXDpN")
      .then((response) =>console.log('login'))
      .catch((error)=> console.log(error))

      //  axios.get("http://localhost:8080/FrontTestingService-0.0.1/post/3")
      // .then((response) =>console.log(response))
      // .catch((error)=> console.log(error))
    },
    getPost() {
      
      axios.get("http://localhost:8080/FrontTestingService-0.0.1/post/4")
      .then((response) =>console.log(response))
      .catch((error)=> console.log(error))
    },
    // setInfo() {
    //   axios.get("http://localhost:8080/FrontTestingService-0.0.1/userInfo/findAll"
    // ).then((response) =>console.log(response.data))
    //   .catch((error)=> console.log(error))

      
    // }
    
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,500;1,500&display=swap');
* {
    box-sizing: border-box;}
html {
    width: 1820px;
    width: 100%;

}
body {

    margin: 0;
    padding: 0;
    width: 1820px;
    margin-left: auto;
    margin-right: auto;
    font-family:'Nunito',sans-serif;
    
}
</style>
