<template>
<div>
    <input  @click="getPost" class="inputField__submit" type="submit" value="getpost">
     </div> 

</template>
<script>
import axios from 'axios' 

import UserInfo from "@/components/UserInfo.vue"

export default {
  components: {
    UserInfo
    
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

      
    },
    getPost() {
      
      axios.get("http://localhost:8080/FrontTestingService-0.0.1/post/21")
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

</style>     