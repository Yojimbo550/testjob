<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>
<script>
import axios   from 'axios' 

export default {
  data() {
    return{
      postArr:[]
    }
    
  },
    mounted() {
      this.logMovies();
    },
  methods: {
      getPost() {
        
       axios.post("http://91.220.155.235:8080/auth-service/login?username=RonaldWeasley&password=4C1iTdXDpN")
      .then((response) =>console.log(response))
      .catch((error)=> console.log(error))
//       axios.get('http://91.220.155.235:8080/auth-service/', {
//     auth: {
//         login: 'RonaldWeasley',
//         password: '4C1iTdXDpN'
//     }
// })
// .then(response => {
//     console.log('Response:', response.data);
// })
// .catch(error => {
//     console.error('Error:', error);
// });
      //  axios.get("http://91.220.155.235:8080/FrontTestingService-0.0.1/userInfo/findAll")
      // .then((response) =>console.log(response))
      // .catch((error)=> console.log(error))
    },
    async logMovies() {
  
}
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
