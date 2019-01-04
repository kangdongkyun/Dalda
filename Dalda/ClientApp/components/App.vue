<template>
    <div id="app">
        {{ info.data.items[0].snippet.title }}<br>
        {{ info.data.items[1].snippet.thumbnails.default.url }}<br>

        <img :src="info.data.items[1].snippet.thumbnails.high.url" alt="">
        {{ info.data.items[2].snippet.title }}<br>
        <!-- {{info}} -->

    </div>
</template>

<script>
import axios from "axios"
    export default {
        name:"#app",
        data(){
            return {
                info:null
            }
        },
        mounted(){
            axios.get('https://www.googleapis.com/youtube/v3/search',{
                params:{
                    key:'AIzaSyCB_2pJ3ijOUyxYxMXlqcEmFjOeMSeNhjM',
                    part:'snippet',
                    q:'오버워치',
                    type:'video',
                    maxResult:3,
                    regionCode:"KR"
                }
            }).then(response => (this.info = response))
        }
    }

</script>

<style scoped>

</style>