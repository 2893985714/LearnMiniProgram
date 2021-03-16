// pages/home/home.js
Page({
  /**
   * 页面的初始数据
   */
 data: {
  //     name:'吴少华',
  //     age:'18',
  //     studen:[
  //       {id:1, name:'dsaf', age:15},
  //       {id:2, name:'xiaohua', age:25},
  //       {id:3, name:'hahah', age:20},
  //       {id:4, name:'nihao', age:18}
  //     ],
  //     counter:0
  // },
  // jia(){
    //1.错误做法：界面不会刷新的
    // this.data.counter += 1
    // console.log(this.data.counter)

    //2.this.setData()
  //   this.setData({
  //     counter: this.data.counter + 1
  //   })
  // },
  // jian(){
  //   this.setData({
  //     counter: this.data.counter - 1
  //   })
  title:['衣服','裤子','鞋子']
   },
  handleBunClick(){
console.log('11')
  },
  handlTouchstart(){
    console.log('触摸开始手势')
  },
  handleTouchmove(){
    console.log('触摸移动手势')
  },
  handleTouchend(){
    console.log('触摸结束手势')
  },
  handleTap(){
    console.log('轻点手势')
  },
  handleLongpress(){
    console.log('长按手势')
  },


  //事件的传递参数
  handleItemClick(event){
    //title - index
    //获取当前的index
    const dataset = event.currentTarget.dataset;
    
    const title = dataset.item;
    const index = dataset.index;
    console.log(title,index)
  },

//-------事件冒泡和事件捕获
  handleCatureView1(){
    console.log('handleCatureView1')
  },
  handleBindView1(){
    console.log('handleBindView1')
  },

  handleCatureView2(){
    console.log('handleCatureView2')
  },
  handleBindView2(){
    console.log('handleBindView2')
  },
  handleCatureView3(){
    console.log('handleCatureView3')
  },
  handleBindView3(){
    console.log('handleBindView3')
  }
})


