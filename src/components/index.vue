<template>
<div>
      <el-button size="mini" type="primary" plain  @click="tui()">退出</el-button>
  <div>
  <el-row class="tac">
    <el-col :span="12">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>业务模块</span>
          </template>
            <el-menu-item index="/a" @click="goTo('/a')">查询业务</el-menu-item>
            <el-menu-item index="/addBusiness" @click="goTo('/addBusiness')">新增业务</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>生活</span>
          </template>
            <el-menu-item index="/selUser" @click="goTo('/selUser')">银行公告</el-menu-item>
            <el-menu-item index="/addUser" @click="goTo('/addUser')">网点查询</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>银行</span>
          </template>
            <el-menu-item index="/addUser" @click="goTo('/addUser')">移动银行</el-menu-item>
            <el-menu-item index="/selUser" @click="goTo('/selUser')">账号信息查询</el-menu-item>
            <el-menu-item index="/addUser" @click="goTo('/addUser')">交易明细查询</el-menu-item>
            <el-menu-item index="/addUser" @click="goTo('/addUser')">账户挂失</el-menu-item>
            <el-menu-item index="/addUser" @click="goTo('/addUser')">关联账户管理</el-menu-item>
            <el-menu-item index="/addUser" @click="goTo('/addUser')">资产负债查询</el-menu-item>
            <el-menu-item index="/addUser" @click="goTo('/addUser')">贷款查询列表</el-menu-item>
            <el-menu-item index="/addUser" @click="goTo('/addUser')">历史还款明细</el-menu-item>
        </el-submenu>

       <el-menu-item index="/selSetMeal" @click="goTo('/selSetMeal')">
          <i class="el-icon-setting"></i>
          <span slot="title">消费记录</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    <router-view></router-view>
  </el-row>
  </div>
</div>
</template>

<script>
  export default {
  data() {
    return {
      
    };
  },
  methods: {
    goTo(path) {
      this.$router.replace(path);
    }
  }
};
</script>

<style scoped>
.el-col-12{
  width: 13%;
}
</style>


