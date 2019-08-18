<template>
  <div class="todos__container">
    <div class="loading" v-if="loading">Loading...</div>
    <el-table v-else :data="todos" empty-text="No Items" class="wrapper" :row-class-name="tableRowClassName" row-key="id" @select="updateTodo" ref="todoTable">
        <el-table-column type="selection"></el-table-column>
        <el-table-column prop="title">
            <template v-slot:header>
                <div class="wrapInput">
                    <el-input v-model="newTodo" placeholder="Todo name" size="small" style="width: 80%; marginRight: 40px'" @keyup.enter="addTodo"></el-input>
                    <el-button type="primary" size="small" @click="addTodo" :disabled="newTodo.trim().length === 0">Add</el-button>
                </div>
            </template>
        </el-table-column>
        <el-table-column>
            <template v-slot="del">
                <span class="delete" @click="deleteTodo(del.$index, todos)"></span>
            </template>
        </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'todos',
  data: function () {
    return {
      newTodo: ''
    }
  },
  created () {
    this.$store.dispatch('loadTodos')
  },
  updated () {
    let todos = this.$store.getters.todos
    todos.forEach(todo => {
      this.$refs.todoTable.toggleRowSelection(todo, todo.completed)
    })
  },
  computed: {
    todos () {
      return this.$store.getters.todos
    },
    loading () {
      return this.$store.state.loading
    }
  },
  methods: {
    tableRowClassName ({ row, rowIndex }) {
      if (row.completed) {
        return 'el-table__row--selected'
      }
    },
    addTodo () {
      let value = this.newTodo && this.newTodo.trim()
      if (!value) {
        return
      }
      this.$store.dispatch('addTodo', this.newTodo)
      this.$store.dispatch('clearNewTodo')
      this.newTodo = ''
    },
    deleteTodo (index, rows) {
      this.$store.dispatch('deleteTodo', rows[index])
    },
    updateTodo (selection, todo) {
      this.$store.dispatch('updateTodo', todo)
    }
  }
}
</script>

<style>
  .loading {
    background: url("/loading.gif") center center no-repeat;
    background-size: cover;
    display: block;
    width: 120px;
    height: 120px;
    margin: 0 auto;
    text-indent: -9999px;
    overflow: hidden;
  }
  .delete {
    display: none;
    position: absolute;
    top: 15px;
    right: 5px;
    bottom: 0;
    width: 40px;
    height: 40px;
    margin: auto 0;
    font-size: 30px;
    color: #409eff;
    transition: color 0.2s ease-out;
    align-content: center;
  }
  .delete:hover {
    color: #007dff;
    cursor: pointer;
  }
  .delete:after {
    content: '×';
  }
  tr:hover .delete {
    display: block;
  }
  .wrapper {
    border: 1px solid #ebeef5;
  }
  .wrapInput {
    width: 100%;
  }
  .el-table__row--selected > td {
    background-color: #F5F7FA;
  }
  .el-table.cell, .el-table th div {
    padding-right: 10px;
    overflow: visible !important;
    text-overflow: ellipsis;
  }
  .el-table {
    border-radius: 0.3rem;
  }
  .el-table_1_column_1.el-table-column--selection.is-leaf .cell {
    display: none;
  }
  .el-table_2_column_4.el-table-column--selection.is-leaf .cell {
    display: none;
  }
</style>
