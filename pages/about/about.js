// pages/about/about.js
Page({


  /**
   * 页面的初始数据
   */
  data: {
    counter: 0,
    isShow:true
  },
  handleChangeShow(){
    this.setData({
      isShow: !this.data.isShow
    })

  },
  //组件内部发出事件
  handlezengjia(event){
    console.log('sss',event)
    this.setData({
      counter: this.data.counter + 1
    })
  },
  //通知页面内部的点击事件
  tabcontrolclick(event){
    console.log(event)
  },
  //直接选中组件修改数据/调用方法
  handleIncrementCpn(){
    //最终目的：修改my-sel中的counter
    //1.获取组件对象
    const my_sel = this.selectComponent('.sel-class')
    // console.log(my_sel)

    //2.通过setData修改组件中的数据（不合理）
    // my_sel.setData({
    //   counter: my_sel.data.counter + 1
    // })

    //2.1 .通过方法对数据进行修改   推荐用这种方法修改
    my_sel.incrementCounter(20)
  }



})