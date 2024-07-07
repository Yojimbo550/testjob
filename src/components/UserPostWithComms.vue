<template>
    <div>
        <div>{{ $store.state.globalAllUsers[this.currentPostId].post[this.currentPostInArray].dateTime }}</div>
        <!-- <div :title="title">{{ $store.state.globalAllUsers[this.currentPostId].post[this.currentPostInArray].title }}</div> -->
        <div :title="title">{{ title }}</div>
        <div :briefDescription="briefDescription">{{ briefDescription }}</div>
        <div :fullDescription="fullDescription">{{ fullDescription }}</div>
        <input @click="toggle" type="submit" value="Change post">
        <input :title="title" @input="title = $event.target.value" v-show="isVisible" type="text" :value="title">
        <input :briefDescription="briefDescription" @input="briefDescription = $event.target.value" v-show="isVisible" type="text" :value="briefDescription">
        <input :fullDescription="fullDescription" @input="fullDescription = $event.target.value" v-show="isVisible" type="text" :value="fullDescription">
        
        <input v-show="isVisible" @click="sendChangedPost" type="submit" value="Send changed post">
        <div>{{ $store.state.globalAllUsers[this.currentPostId].post[this.currentPostInArray].comments }}</div>
        <div>{{ $store.state.globalAllUsers[this.currentPostId].post[this.currentPostInArray].id }}</div>
        <!-- <div>{{ $store.state.globalAllUsers[this.currentPostId].post[this.currentPostInArray] }}</div> -->
        <input @click="log" type="submit" value="log">
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
                currentPostId:0,
                currentUserId:0,
                currentPostInArray:0,
                isVisible:false,
                briefDescription:'',
                fullDescription:'',
                title:'',
                // inputValue:this.$store.state.globalAllUsers[this.currentPostId].post[this.currentPostInArray].fullDescription 
            }
        },
        methods: {
            log() {
                console.log(this.$route.params.postId)
            },
            toggle() {
                if(this.isVisible)
                this.isVisible = false
                else {
                    this.isVisible = true
                }
            },
           async  sendChangedPost() {
               await axios.put("http://localhost:8080/FrontTestingService-0.0.1/post", {
                    briefDescription: this.briefDescription,
                    fullDescription: this.fullDescription,
                    id:this.$route.params.postId,
                    title: this.title
                })
                this.toggle()
            },
            getPosts() {
                
                this.currentUserId = this.$route.params.id
                 for(let i = 0; i < this.$store.state.globalAllUsers.length ; i++) {
                    if(this.currentUserId == this.$store.state.globalAllUsers[i].id) {
                        this.currentPostId = i
                    }                    
                 }
                 this.currentPostInArray = this.$route.params.postId
                 for(let i = 0; i < this.$store.state.globalAllUsers[this.currentPostId].post.length ; i++) {
                    if(this.currentPostInArray == this.$store.state.globalAllUsers[this.currentPostId].post[i].id) {
                        this.currentPostInArray = i
                    }                    
                 }
                  this.fullDescription = this.$store.state.globalAllUsers[this.currentPostId].post[this.currentPostInArray].fullDescription
                 this.title = this.$store.state.globalAllUsers[this.currentPostId].post[this.currentPostInArray].title
                 this.briefDescription = this.$store.state.globalAllUsers[this.currentPostId].post[this.currentPostInArray].briefDescription
                //  this.inputFull = this.$store.state.globalAllUsers[this.currentPostId].post[this.currentPostInArray].fullDescription
                //  this.inputTitle = this.$store.state.globalAllUsers[this.currentPostId].post[this.currentPostInArray].title
                //  this.inputBrief = this.$store.state.globalAllUsers[this.currentPostId].post[this.currentPostInArray].briefDescription
                 
                // console.log( this.$store.state.globalAllUsers.includes(this.currentId))
                console.log(this.currentPostId)
                    console.log(this.currentUserId)
                    console.log(this.currentPostInArray)
                //     console.log(this.$store.state.globalAllUsers[0].post[0].id)
                //     console.log(this.$store.state.globalAllUsers[0].post)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>