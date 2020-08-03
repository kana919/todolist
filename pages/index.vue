<template>
  <section class="container">
    <h1 class="title">
      TODO LIST
    </h1>  
    <div class="list" id="todolist">
        <ul v-for="(user,userIdx) in users" :key="user.userId">
          <li class="list-item">
            <div class="item-wrapper">
              <button class="add-button" v-on:click="clickAddItem(userIdx)">
              +
              </button>
              <div class="todo">
                <input class="textarea" v-model="text" placeholder="やることを入力してね">
              </div>
            </div>
          </li>
          <li class="list-item" v-for="(data,dataIdx) in user.tododata" :key="data.data">
            <div class="item-wrapper">
              <input class="check" type="checkbox" v-model=data.check @input="clickCheck(userIdx,dataIdx)">
              <div class="todo">
                {{ data.data }}
              </div>
              <button class="delete-button" v-on:click="clickDeleteItem(userIdx,dataIdx)"> 
              −
              </button>
            </div>
          </li>
        </ul>
    </div>
  </section>
</template>

<script>
import { db } from '~/plugins/firebase.js'
import { mapGetters } from 'vuex'

export default
{
  created: function () {
    this.$store.dispatch('setUsersRef', db.collection('users'))
  },
  computed: {
    ...mapGetters({ users: 'getUsers' })
  },
  data: () =>({ 
    index:0,
    text: ''
  }),

  methods: {
    clickAddItem: function(usrIndex) {
      if( 0 < this.text.length )
      {
        this.users[usrIndex].tododata.push({data:this.text,check:false});
        this.$store.dispatch('updateUsers',this.users[usrIndex])
      }
    },
    clickDeleteItem: function(usrIndex,index) {
      this.users[usrIndex].tododata.splice(index,1);
      this.$store.dispatch('updateUsers',this.users[usrIndex])
    },
    clickCheck: function(usrIndex,index){
      this.users[usrIndex].tododata[index].check = !(this.users[usrIndex].tododata[index].check);
      this.$store.dispatch('updateUsers',this.users[usrIndex])
    }
  }
}
</script>


<style>
.container {
  min-height: 100vh;
  min-width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
}

/*****************/
/*     タイトル   */
/*****************/

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  margin-top: 20px;
  margin-bottom: 30px;
  font-size: 70px;
  color: #35495e;
  font-weight: normal;
  text-align: center;
}

/************************/
/*　　TODOリストアイテム   */
/************************/

.list ul
{
  list-style-type:none;
  display: block;
  align-items: center;
}

.list-item{
  margin-top: 10px;
}

.list-item .item-wrapper{
  display: flex;
}

.item-wrapper .add-button,
.item-wrapper .delete-button
{
  font-size: 40px;
  width: 50px;
  height: 50px;
  background-color:#ffffff;
  color: #35495e;
  border: 0px solid transparent;
}

.list-item .todo
{
  display: flex;
  margin-left: 50px;
  width: 80%;
  height: 50px;
  font-size: 30px;
  color: #35495e;
  border-width: 3px;
  border-color:#35495e;
  border-left-color: transparent;
  border-right-color: transparent;
  border-style: solid;
  text-align: left;
  margin-left: 10px;
}

.list-item .textarea{
  display: inline-block;
  width: 80%;
  border-color: transparent;
}

.list-item .check
{
  display: inline-block;
  width: 50px;
  height: 50px;
  
}
</style>

