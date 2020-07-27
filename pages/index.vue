<template>
  <section class="container">
    <h1 class="title">
      TODO LIST
    </h1>  
    <div class="list" id="todolist">
        <ul>
          <li class="list-item">
            <div class="item-wrapper">
              <button class="add-button" v-on:click="clickAddItem">
              +
              </button>
              <div class="todo">
                <input class="textarea" v-model="text" placeholder="やることを入力してね">
              </div>
            </div>
          </li>
          <li class="list-item" v-for="(item, index) in list" :key="item.data">
            <div class="item-wrapper">
              <input class="check" type="checkbox">
              <div class="todo">
                {{ item.data }}
              </div>
              <button class="delete-button" v-on:click="clickDeleteItem(index)"> 
              −
              </button>
            </div>
          </li>
        </ul>
    </div>
  </section>
</template>

<script>
export default
{
  data: () =>({   
    index:0,
    text: '',
    list:[
      { data:'やることその1' },
      { data:'やることその2' },
      { data:'やることその3' }
      ]
  }),

  methods: {
    clickAddItem: function() {
      if( 0 < this.text.length )
      {
        this.list.push({data:this.text});
      }
    },
    clickDeleteItem: function(index) {
      console.log(index);
      this.list.splice(index,1);
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

