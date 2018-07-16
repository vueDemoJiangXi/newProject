<template>
  <div class="header">
    <div class="header-left">
      <a href="#">
        <img src="../assets/headLogo.png" alt="logo">
      </a>
    </div>
    <ul class="header-right">
      <li>
        <span>欢迎登录江西银行固定资产管理系统&nbsp;&nbsp;&nbsp;</span>
        <span>{{time}}</span>
      </li>
      <li class="dropdown nav-profile">
        <a class="dropdown-toggle" data-toggle="dropdown" style="color:#666666">
          <i class="glyphicon glyphicon-user"></i>
          <span ><span v-if="flag">{{name}}</span><i class="fa fa-angle-down"></i></span>
        </a>

        <ul class="dropdown-menu animated littleFadeInRight" role="menu">
          <li>
            <a role="button" tabindex="0" :onclick="loginOut()">
              <i class="fa fa-sign-out"></i>退出
            </a>
          </li>
        </ul>
      </li>

      <li class="toggle-right-sidebar">
        &nbsp;&nbsp;&nbsp;

      </li>
    </ul>
  </div>
</template>

<script>
  export default{
    name: 'Header',
    data(){
      return {
        time: "",
        timer: "",
        flag:true,
        name:'谢俊',
      }
    },
    created(){
      let _this = this;
      _this.getDate();
      _this.timer = setInterval(function () {
        _this.getDate()
      }, 1000)
    },
    methods: {
      loginOut(){

      },
      getDate()
      {
        var mydate = new Date();
        var hour = mydate.getHours();
        var str = "";
        str += "今天是 " + mydate.getFullYear() + "年";
        str += (mydate.getMonth() + 1) + "月";
        str += mydate.getDate() + "日";
        var wednesday = mydate.getDay();
        if (hour < 6) {
          str += " 凌晨"
        }
        else if (hour < 9) {
          str += " 早上"
        }
        else if (hour < 12) {
          str += " 上午"
        }
        else if (hour < 14) {
          str += " 中午"
        }
        else if (hour < 17) {
          str += " 下午"
        }
        else if (hour < 19) {
          str += " 傍晚"
        }
        else if (hour < 22) {
          str += " 晚上"
        }

        str += " " + hour + ":";
        str += mydate.getMinutes() + ":";
        str += mydate.getSeconds();


        switch (wednesday) {
          case 1:
            str += "  星期一";
            break;
          case 2:
            str += "  星期二";
            break;
          case 3:
            str += "  星期三";
            break;
          case 4:
            str += "  星期四";
            break;
          case 5:
            str += "  星期五";
            break;
          case 6:
            str += "  星期六";
            break;
          case 0:
            str += "  星期日";
            break;
          default:
            this.time = "获取星期出错";
            break;
        }
        this.time = str;


      }
    },

      beforeDestroy(){
        let _this = this;
        if (_this.timer) {
          clearInterval(_this.timer);
        }
      }

  }

</script>

<style scoped>
  .header{
    display:flex;
    justify-content: space-between;
    height: 45px;
    font-size: 10px;
    color: #616f77;
    border-bottom: 3px solid #482d74
  }
  .header-left,.header-right{
    flex:0 1 auto;
  }
  .header-right{
    display:flex;
  }

 .header-right > li{
    padding: 0 10px;
   list-style: none;
   margin-top: 3px;
   line-height: 45px;
  }
</style>
