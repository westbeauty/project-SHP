<template>
  <div class="type-nav" >
    <div class="container" @mouseenter="enterShow" @mouseleave="leaveShow">
      <h2 class="all"  >全部商品分类</h2>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
      <div class="sort" v-show="bool">
        <div class="all-sort-list2" @click="goSearch($event)">
          <div class="item" v-for="c1 in categoryList" :key="c1.categoryId">
            <h3>
              <a
                :data-categoryName="c1.categoryName"
                :data-category1Id="c1.categoryId"
                >{{ c1.categoryName }}</a
              >
            </h3>
            <div class="item-list clearfix">
              <div
                class="subitem"
                v-for="c2 in c1.categoryChild"
                :key="c2.categoryId"
              >
                <dl class="fore">
                  <dt>
                    <a
                      :data-categoryName="c2.categoryName"
                      :data-category2Id="c2.categoryId"
                      >{{ c2.categoryName }}</a
                    >
                  </dt>
                  <dd>
                    <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                      <a
                        :data-categoryName="c3.categoryName"
                        :data-category3Id="c3.categoryId"
                        >{{ c3.categoryName }}</a
                      >
                    </em>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TypeNav",
  data() {
      return {
          bool:this.$route.path === '/home'
      }
  },
  mounted() {
    //通知vuex发请求，获取数据，存储于仓库中，在App组件中发请求，性能更好
    
  },
  computed: {
    categoryList() {
      return this.$store.state.home.categoryList;
    },
  },
  methods: {
    goSearch(e) {
      //最好的解决方案：编程式导航+事件委派
      //存在一些问题：事件委派把全部的子节点的事件委派给父节点
      //点击a标签的时候，才会进行路由跳转【怎么确定点击的一定是a标签】
      //存在另一个问题：即使你能确定点击的是a标签，如何区分一级，二级，三级标签

      //第一个问题：把子节点当中a标签，加上自定义属性data-categoryName，其余子节点没有。
      let element = e.target;
      // 获取到当前触发这个事件的所有节点，带有data-categoryName的属性就是a标签
      //节点有一个dataset属性
      let categoryname = element.dataset.categoryname;
      let category1id = element.dataset.category1id;
      let category2id = element.dataset.category2id;
      let category3id = element.dataset.category3id;
      

      //几级分类如何区分
      // 把子节点当中a标签，加上自定义属性data-category几Id
      if (categoryname) {
        //整理路由参数
        let loc = { name: "search" };
        let query = { categoryName: categoryname };
        if (category1id) {
          query.category1Id = category1id;
        } else if (category2id) {
          query.category2Id = category2id;
        } else {
          query.category3Id = category3id;
        }
        loc.query = query;
        if (this.$route.params) {
            loc.params = this.$route.params
            this.$router.push(loc);
        }
      }
    },
    enterShow() {
        if (this.$route.path !== '/home') {
            this.bool = !this.bool
        }
          
    },
    leaveShow() {
        if (this.$route.path !== '/home') {
            this.bool = !this.bool
        }
    }
    
  },
};
</script>

<style scoped lang="less">
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &:hover {
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>