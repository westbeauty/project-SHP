<template>
  <div class="pagination">
    <button @click="backOnePage(pageNo - 1)" :disabled="pageNo === 1">
      上一页
    </button>
    <button
      v-if="startNumendNum.start > 1"
      @click="currentOne(1)"
      :class="{ active: pageNo === 1 }"
    >
      1
    </button>
    <button v-if="startNumendNum.start > 2">···</button>

    <button
      v-for="(page, index) in startNumendNum.end"
      :key="index"
      v-if="page >= startNumendNum.start"
      @click="currentPage(page)"
      :class="{ active: pageNo === page }"
    >
      {{ page }}
    </button>

    <button v-if="startNumendNum.end < totalPage - 1">···</button>
    <button
      v-if="startNumendNum.end < totalPage"
      @click="gettotalPage(totalPage)"
      :class="{ active: pageNo === totalPage }"
    >
      {{ totalPage }}
    </button>
    <button @click="nextOnePage(pageNo + 1)" :disabled="pageNo === totalPage">
      下一页
    </button>

    <button style="margin-left: 30px">共 {{ total }} 条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ["pageNo", "pageSize", "total", "continues"],
  computed: {
    totalPage() {
      return Math.ceil(this.total / this.pageSize);
    },
    startNumendNum() {
      let start = 1;
      let end = this.totalPage;
      //连续页码数字5【至少五页】，如果出现不正常的现象【就是不够五页】
      //不正常现象【总页数没有连续页码多】
      if (this.continues > this.totalPage) {
        start = 1;
        end = this.totalPage;
      } else {
        //其他都是正常现象
        start = this.pageNo - parseInt(this.continues / 2);
        end = this.pageNo + parseInt(this.continues / 2);
        //把不正常的现象【start数字出现0或负数纠正】
        if (start < 1) {
          start = 1;
          end = this.continues;
        }
        //把不正常的现象【end数字大于总页码纠正】
        if (end > this.totalPage) {
          end = this.totalPage;
          start = this.totalPage - this.continues;
        }
      }
      return { start, end };
    },
  },
  methods: {
    backOnePage(page) {
      this.$emit("getPageInfo", page);
    },
    currentOne(page) {
      this.$emit("getPageInfo", page);
    },
    nextOnePage(page) {
      this.$emit("getPageInfo", page);
    },
    currentPage(page) {
      this.$emit("getPageInfo", page);
    },
    gettotalPage(page) {
      this.$emit("getPageInfo", page);
    },
  },
};
</script>

<style scoped lang='less'>
.pagination {
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #ff4040;
      color: #fff;
    }
  }
}
</style>