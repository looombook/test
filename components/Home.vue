<template>
  <div style=" padding:10px">
    <div style="margin: 10px 0">
      <el-button type="primary" @click="add">新增</el-button>
      <el-button type="primary">导入</el-button>
      <el-button type="primary">导出</el-button>
    </div>
    <div style="margin: 10px 0">
      <el-input v-model="search" placeholder="请输入关键字" style="width :20%"/>
      <el-button type="primary" style="margin-left: 5px;">查询</el-button>
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column fixed prop="scenicname" label="景区名称" width="400" />
      <el-table-column prop="sceniclcn" label="景区北纬" width="400" />
      <el-table-column prop="sceniclce" label="景区东经" width="400" />
      <el-table-column fixed="right" label="Operations" width="120">
        <template #default>
          <el-button link type="primary"  @click="handleEdit"
          >Detail</el-button
          >
          <el-popconfirm title="确认删除吗？">
            <template #reference>
              <el-button type="text">Delete</el-button>
            </template>
          </el-popconfirm>

        </template>
      </el-table-column>
    </el-table>
    <div style="margin: 10px 0">
      <div class="demonstration">All combined</div>
      <el-pagination
          v-model:current-page="currentPage"
          v-model:page-size="pageSize4"
          :page-sizes="[5, 10, 20]"
          :small="small"
          :disabled="disabled"
          :background="background"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
      />

      <el-button text @click="dialogVisible = true">
        click to open the Dialog
      </el-button>

      <el-dialog
          v-model="dialogVisible"
          title="Tips"
          width="30%"
      >
        <el-form :model="form" label-width="120px">
          <el-form-item label="景区名称">
            <el-input v-model="form.scenicName" style="width: 80%" />
          </el-form-item>
          <el-form-item label="景区北纬">
            <el-input v-model="form.scenicLcn" style="width: 80%" />
          </el-form-item>
          <el-form-item label="景区东经">
            <el-input v-model="form.scenicLce" style="width: 80%" />
          </el-form-item>

        </el-form>
        <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="save">
          Confirm
        </el-button>
      </span>
        </template>
      </el-dialog>
    </div>
  </div>
</template>

<script>



import request from "@/utils/request";

export default {
  name: `Home`,
  components: {},
  data() {
    return {
      form:{},
      dialogVisible:false,
      /*tableData:[{
        scenicname:113.16,
        sceniclcn:"汕头大学",
        sceniclce:"汕头"

      }],*/
      search:'',
      currentPage:1,
      total:10,

  }

  },
  methods:{
    add(){
      this.dialogVisible = true
      this.form = {}
    },
    save(){
      request.post("/scenic", this.form).then(res =>{
        console.log(res)
      })

    },

    handleEdit(){

    },
    handleSizeChange(){

    },
    handleCurrentChange(){

    },

  }

}

</script>

<style scoped>

</style>