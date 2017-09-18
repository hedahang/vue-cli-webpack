<template>
  <div class="manage tc">
    <button v-on:click="add">新增</button>
    <div class="input-area" v-show="showAdd">
      <input type="text" placeholder="请输入人员姓名" v-model="nameValue">
      <button @click="addName">确定</button>
    </div>
    <table>
      <tr>
        <th>姓名</th>
        <th>操作</th>
      </tr>
      <tr v-for="(item,index) in peoples">
        <td>{{item.name}}</td>
        <td :id="index">
          <span @click="edit">编辑</span>
          <span @click="del">删除</span>
        </td>
      </tr>
    </table>
    <div class="wrap" v-show="showEdit">
      <div class="content">
        <input type="text" placeholder="请输入新姓名" v-model="newName">
        <button @click="cancel">取消</button>
        <button @click="editName">确定</button>
      </div>
    </div>
    <footer-nav v-bind:class="{'isManage':isNowPage}"></footer-nav>
  </div>
</template>

<style scoped>
  .manage{  width: 100%;  }
  .manage>button{  width: 200px;  background-color: #41B883;
    color: #fff;height: 40px;line-height: 40px;  border-radius: 3px;
    border: 0;box-shadow: 1px 1px 1px #aaa;
  }
  .manage .input-area{
    width: 80%;margin: 15px auto;max-width: 260px;display: flex;flex-direction: row;flex-wrap: nowrap;
  }
  .manage .input-area input{
    border: 1px solid #666;    flex-grow: 1;
    height: 38px;line-height: 38px;color: #666;text-indent: 5px;
  }
  .manage .input-area button{
    width: 60px;background-color: #41B883;color: #fff;height: 40px;line-height: 40px;  border-radius: 3px;
    border: 0;flex-shrink: 0;margin-left: 5px;
  }
  .manage table{
    width: 90%;border: 1px solid #ddd;
    margin:20px auto 60px;background-color: transparent;
  }
  .manage table tr>th{
    background-color: #d9edf7;  border: 1px solid #ddd;  border-bottom-width: 2px;  padding: 8px;  line-height: 1.42857143;
  }
  .manage table tr>td{
    border: 1px solid #ddd;padding: 8px;  line-height: 1.42857143;text-align: left;
  }
  .manage .wrap{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,.8);
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .manage .wrap .content{
    width: 80%;
    max-width: 260px;
    margin-top: -100px;
  }
  .manage .wrap .content input{
    width: 100%;
    border: 1px solid #666;
    height: 38px;
    line-height: 38px;
    color: #666;
    text-indent: 5px;
  }
  .manage .wrap .content button{
    float: left;
    width: 48%;
    background-color: #41B883;
    color: #fff;
    height: 40px;
    line-height: 40px;
    border-radius: 3px;
    border: 0;
    box-shadow: 1px 1px 1px #aaa;
    margin-top: 5px;;
  }
  .manage .wrap .content button:last-child{
    margin-left: 4%;
  }
</style>

<script>
  import FooterNav from '../../components/footer.vue'
  export default{
    components: {
      FooterNav
    },
    data(){
      return{
        isNowPage: true,
        showAdd: false,
        showEdit: false,
        nameValue: '',
        newName: '',
        editId: 0,
        peoples: [
          {'name':'Jack'},
          {'name':'Joe'},
          {'name':'Tom'},
          {'name':'张三'},
          {'name':'王二'}
        ]
      }
    },
    methods: {
      add(){
        this.showAdd = !this.showAdd;
      },
      addName(){
        var val = this.nameValue;
        if(val.trim() == ''){
          alert('请输入新增人员姓名');
        }else{
          var data = {};
          data.name = val;
          this.peoples.push(data);
          this.nameValue = "";
        }
      },
      del(e){
        var id = e.target.offsetParent.id;
        this.peoples.splice(id,1);
      },
      edit(e){
        var id = e.path[1].id;
        this.showEdit = true;
        this.editId = id;
        console.log(id)
        this.newName = this.peoples[id].name;
      },
      cancel(){
        this.showEdit = false;
      },
      editName(){
        var v=this.newName;
        if(v.trim() == ""){
          alert("请输入姓名");
        }else{
          this.peoples[this.editId].name = v;
          this.showEdit = false;
        }
      }
    }
  }
</script>
