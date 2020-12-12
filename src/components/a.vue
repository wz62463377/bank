<template>
<div>
  
<div>
  
</div>
<div >
    <el-form :model="ruleForm" ref="ruleForm" label-width="500px" class="demo-ruleForm">
      
  <el-form-item label="账号" prop="mname">
    <el-input v-model="ruleForm.mname"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="password">
    <el-input v-model="ruleForm.password"></el-input>
  </el-form-item>
  
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
  </el-form-item>
</el-form>
</div>
 </div>
</template>
<script>
import axios from 'axios'
  export default {
    data() {
      return {
        ruleForm: {
          mname: '',
          password: ''
        }
      };
    },
    methods: {
      submitForm(formName) {
        
        this.$refs[formName].validate((valid) => {
          if (valid) {
            var a=this.$store;
            axios.get('api/login?username='+this.ruleForm.mname+"&password="+this.ruleForm.password).then(res =>{
              if(res.data==""){
                this.$message('账号或密码错误');
              }else{
                for(let i = 0 ; i < res.data.length; i++) {
                  if(res.data[i].rname=="老板"){
                    this.$store.commit('setAa',true);
                    this.$store.commit('setBb',true);
                    this.$store.commit('setCc',true);
                    this.$store.commit('setDd',true)
                  }else{
                    this.$store.commit('setBb',true);
                    this.$store.commit('setCc',true);
                    this.$store.commit('setDd',true);
                  }
                }
                this.$router.push({name:"index"})
              }
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>
